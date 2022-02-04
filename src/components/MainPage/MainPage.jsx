import { Component } from "react/cjs/react.production.min";
import MaimBtns from "../MainBtns/MainBtns";
import TransactionForm from "../TransactionForm/TransactionForm";

class MainPage extends Component {
  state = {
    isOpenCategoties: false,
  };
  toggleCategoryList = () => {
    this.setState((prevState) => ({
      isOpenCategoties: !prevState.isOpenCategoties,
    }));
  };
  render() {
    const { changePage, addTransaction } = this.props;
    const { isOpenCategoties } = this.state;

    return (
      <>
        <TransactionForm
          isOpenCategoties={isOpenCategoties}
          toggleCategoryList={this.toggleCategoryList}
          addTransaction={addTransaction}
        />
        {!isOpenCategoties && <MaimBtns changePage={changePage} />}
      </>
    );
  }
}

export default MainPage;
