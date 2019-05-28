import React, { Component } from "react";

export default class Financials extends Component {
  state = {};

  componentDidMount() {
    this.getData();
  }
  onProfileChange(profile) {
    this.getData();
  }

  getData() {
    console.log("getting data");
    fetch(
      "https://api.iextrading.com/1.0/stock/" +
        this.props.companyId +
        "/financials"
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ data });
      });
  }
  widget = () => {
    //No data available return null else render widget
    if (!this.state.data) return null;
    return this.state.data.financials.map(item => (
      <div key={item.reportDate} className="text-left widget m-1">
        <h3>
          <strong>Report Date</strong>
        </h3>
        <h4>{item.reportDate}</h4>
        <br />
        <p>
          <strong>Gross Profit</strong>
        </p>
        <p>${item.grossProfit.toLocaleString()}</p>
        <p>
          <strong>Cost Of Revenue</strong>
        </p>
        <p>${item.costOfRevenue.toLocaleString()}</p>
        <p>
          <strong>Operating Revenue</strong>
        </p>
        <p>${item.operatingRevenue.toLocaleString()}</p>
        <p>
          <strong>Total Revenue</strong>
        </p>
        <p>${item.totalRevenue.toLocaleString()}</p>
        <p>
          <strong>Operating Income</strong>
        </p>
        <p>${item.operatingIncome.toLocaleString()}</p>
        <p>
          <strong>Net Income</strong>
        </p>
        <p>${item.netIncome.toLocaleString()}</p>
        <p>
          <strong>Research and Development</strong>
        </p>
        <p>${item.researchAndDevelopment.toLocaleString()}</p>
        <p>
          <strong>Operating Expense</strong>
        </p>
        <p>${item.operatingExpense.toLocaleString()}</p>
        <p>
          <strong>Current Assets</strong>
        </p>
        <p>${item.currentAssets.toLocaleString()}</p>
        <p>
          <strong>Total Assets</strong>
        </p>
        <p>${item.totalAssets.toLocaleString()}</p>
        <p>
          <strong>Total Liabilities</strong>
        </p>
        <p>${item.totalLiabilities.toLocaleString()}</p>
        <p>
          <strong>Current Cash</strong>
        </p>
        <p>${item.currentCash.toLocaleString()}</p>
        <p>
          <strong>Total Debt</strong>
        </p>
        <p>
          ${item.totalDebt ? item.totalDebt.toLocaleString() : "unavailable"}
        </p>
        <p>
          <strong>Shareholder Equity</strong>
        </p>
        <p>${item.shareholderEquity.toLocaleString()}</p>
        <p>
          <strong>Cash Change</strong>
        </p>
        <p>${item.cashChange.toLocaleString()}</p>
        <p>
          <strong>Cash Flow</strong>
        </p>
        <p>${item.cashFlow.toLocaleString()}</p>
      </div>
    ));
  };

  render() {
    return (
      <React.Fragment>
        <h2>Financials</h2>
        <div className="d-flex flex-wrap">{this.widget()}</div>
      </React.Fragment>
    );
  }
}
