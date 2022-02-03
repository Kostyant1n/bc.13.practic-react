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
    categoriesList: [],
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
    console.log(this.state);
  };

  render() {
    const { date, time, category, sum, currency, comment, categoriesList } =
      this.state;

    return (
      <>
        <select name="transType" id="">
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
              onClick={null}
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
        <CategoryList
          categoriesList={categoriesList}
          addCategory={this.addCategory}
        />
      </>
    );
  }
}

export default TransactionForm;

// ------
