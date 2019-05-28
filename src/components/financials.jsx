import React, { Component } from "react";
import Chart from "react-apexcharts";

export default class Financials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {},
        yaxis: {
          labels: {
            formatter: function(value) {
              return "$" + value.toLocaleString();
            },
            style: {
              fontSize: "16px"
            }
          }
        },
        xaxis: {
          categories: [{}],
          labels: {
            datetimeFormatter: {
              year: "yyyy",
              month: "MMM 'yy",
              day: "dd MMM",
              hour: "HH:mm"
            },
            style: {
              fontSize: "16px"
            }
          }
        },
        title: {
          text: "Gross Profit",
          align: "center",
          style: {
            fontSize: "30px"
          }
        }
      },
      series: [
        {
          name: "Gross Profit",
          data: [0, 0]
        }
      ]
    };
  }
  componentDidMount() {
    this.getData();
  }
  onProfileChange(profile) {
    this.getData();
  }
  validateData(data) {
    return data ? "$" + data.toLocaleString() : "N/A";
  }
  getData() {
    fetch(
      "https://api.iextrading.com/1.0/stock/" +
        this.props.companyId +
        "/financials"
    )
      .then(response => {
        return response.json();
      })
      .then(indata => {
        const grossProfit = [];
        const dates = [];

        for (let i = 0; i < indata.financials.length; i++) {
          grossProfit.unshift(indata.financials[i].grossProfit);
          dates.unshift(indata.financials[i].reportDate);
        }

        this.setState({
          series: [
            {
              data: grossProfit
            }
          ],
          options: {
            xaxis: {
              categories: dates
            }
          }
        });
      });
  }

  render() {
    return (
      <React.Fragment>
        <h2>Financials</h2>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="line"
          height="500"
          width="100%"
        />
        {/* <div className="d-flex flex-wrap">{this.widget()}</div> */}
      </React.Fragment>
    );
  }
}
