const TransactionForm = () => {
  return (
    <>
      <select name="transType" id="">
        <option value="incomes">Доходы</option>
        <option value="costs">Расходы</option>
      </select>

      <form action="">
        <label>
          Day
          <input type="date" />
        </label>

        <label>
          Time
          <input type="time" />
        </label>

        <label>
          Category
          <input type="button" value="Eat" />
        </label>

        <label>
          Summ
          <input placeholder="Enter the price" type="text" />
        </label>

        <label>
          Currency
          <input type="button" value="UAH" />
        </label>

        <label>
          <input placeholder="comment" type="comment" />
        </label>
      </form>
    </>
  );
};

export default TransactionForm;
