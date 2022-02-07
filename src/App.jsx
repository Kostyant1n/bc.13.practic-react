import { Component } from "react";
import MainPage from "./components/MainPage/MainPage";
import TransactionListPage from "./components/TransactionListPage/TransactionListPage";
//import TransactionForm from "./components/TransactionForm/TransactionForm";

class App extends Component {
  state = {
    activePage: "main", //main || incomes || costs
    transactions: [],
    // costs: [],
    // incomes: [],
  };

  changePage = (activePage) =>
    this.setState({
      activePage,
    });

  // changePage = (activePage) => this.setState({ activePage });

  addTransaction = (newTrans) => {
    this.setState(({ transactions }) => ({
      transaction: [...transactions, newTrans],
    }));
  };

  componentDidMount() {
    const transactions = JSON.parse(localStorage.getItem("transactions")) || [];
    this.setState({ transactions });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.transaction !== this.state.transaction) {
      localStorage.setItem(
        "transactions",
        JSON.stringify(this.state.transaction)
      );
    }
  }

  render() {
    return (
      <div>
        {this.state.activePage === "main" && (
          <MainPage
            changePage={this.changePage}
            addTransaction={this.addTransaction}
          />
        )}
        {this.state.activePage === "incomes" && (
          <TransactionListPage
            changePage={this.changePage}
            transType={"incomes"}
            transactions={this.state.transactions}
          />
        )}
        {this.state.activePage === "costs" && (
          <TransactionListPage
            changePage={this.changePage}
            transType={"incomes"}
            transactions={this.state.transactions}
          />
        )}
        {/* <TransactionForm /> */}
      </div>
    );
  }
}

export default App;
