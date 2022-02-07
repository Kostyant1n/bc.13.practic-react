import { nanoid } from "nanoid";
import { Component } from "react";
import CategoryList from "../CategoryList/CategoryList";

class TransactionForm extends Component {
  state = {
    date: "2022-02-03",
    time: "",
    category: "eat",
    sum: "",
    currency: "UAH",
    comment: "",
    categoriesList: [
      { id: 1, title: "Eat" },
      { id: 2, title: "Drink" },
    ],
    transType: "costs",
  };

  handleChange = (e) => {
    console.log(e);
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  addCategory = (newCategory) => {
    this.setState((prevState) => ({
      categoriesList: [...prevState.categoriesList, newCategory],
    }));
  };

  handleSubmitTrans = (e) => {
    e.preventDefault();
    const { categoriesList, ...dataForm } = this.state;

    dataForm.id = nanoid();
    this.props.addTransaction(dataForm);
    this.reset();
  };

  reset = () => {
    const resetedState = Object.keys(this.state).reduce((acc, el) => {
      if (el === "categoriesList") return acc;

      if ((el = "category")) {
        acc[el] = "Eat";
        return acc;
      }

      if ((el = "date")) {
        acc[el] = "2022-02-03";
        return acc;
      }
      acc[el] = "";
      return acc;
    }, {});

    this.setState(resetedState);
  };

  setCategory = (newCategory) => {
    this.setState({ category: newCategory });
    this.props.toggleCategoryList();
  };

  render() {
    const { date, time, category, sum, currency, comment, categoriesList } =
      this.state;

    const { isOpenCategoties, toggleCategoryList } = this.props;

    return (
      <>
        {!isOpenCategoties ? (
          <>
            <select
              name="transType"
              value={this.state.transType}
              onChange={this.handleChange}
            >
              <option value="incomes">Доходы</option>
              <option value="costs">Расходы</option>
            </select>

            <form action="" onSubmit={this.handleSubmitTrans}>
              <label>
                Day
                <input
                  type="date"
                  name="date"
                  value={date}
                  onChange={this.handleChange}
                />
              </label>

              <label>
                Time
                <input
                  type="time"
                  name="time"
                  value={time}
                  onChange={this.handleChange}
                />
              </label>

              <label>
                Category
                <input
                  type="button"
                  name="category"
                  value={category}
                  onClick={toggleCategoryList}
                />
              </label>

              <label>
                Summ
                <input
                  placeholder="Enter the price"
                  type="text"
                  name="sum"
                  value={sum}
                  onChange={this.handleChange}
                />
              </label>

              <label>
                Currency
                <input
                  type="button"
                  name="currency"
                  value={currency}
                  onClick={null}
                />
              </label>

              <label>
                <input
                  placeholder="comment"
                  type="comment"
                  name="comment"
                  value={comment}
                  onChange={this.handleChange}
                />
              </label>
              <button type="submit">Submit</button>
            </form>
          </>
        ) : (
          <CategoryList
            categoriesList={categoriesList}
            addCategory={this.addCategory}
            toggleCategoryList={toggleCategoryList}
            setCategory={this.setCategory}
          />
        )}
      </>
    );
  }
}

export default TransactionForm;

// ------
