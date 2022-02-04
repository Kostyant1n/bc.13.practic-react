import { Component } from "react";
import MainPage from "./components/MainPage/MainPage";
import TransactionListPage from "./components/TransactionListPage/TransactionListPage";
//import TransactionForm from "./components/TransactionForm/TransactionForm";

class App extends Component {
  state = {
    activePage: "main", //main || incomes || costs
    transaction: [],
  };

  changePage = (activePage) =>
    this.setState({
      activePage,
    });

  changePage = (activePage) => this.setState({ activePage });

  addTransaction = (newTrans) => {
    this.setState(({ transaction }) => ({
      transaction: [...transaction, newTrans],
    }));
  };

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
          />
        )}
        {this.state.activePage === "costs" && (
          <TransactionListPage
            changePage={this.changePage}
            transType={"incomes"}
          />
        )}
        {/* <TransactionForm /> */}
      </div>
    );
  }
}

export default App;
