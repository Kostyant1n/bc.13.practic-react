import TransactionList from "../TransactionList/TransactionList";

const TrasactionListPage = ({ changePage }) => {
  return (
    <>
      <h1>TrasactionListPage</h1>
      <TransactionList />
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
