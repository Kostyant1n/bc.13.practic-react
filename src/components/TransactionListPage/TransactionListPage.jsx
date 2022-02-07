import TransactionList from "../TransactionList/TransactionList";

const TrasactionListPage = ({ changePage, transType, transactions }) => {
  return (
    <>
      <h1>TrasactionListPage</h1>
      <TransactionList transactions={transactions} />
      <button
        onClick={() => {
          changePage("main");
        }}
        type="button"
      >
        Back
      </button>
    </>
  );
};

export default TrasactionListPage;
