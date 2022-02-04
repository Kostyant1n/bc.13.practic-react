function MainBtns({ changePage }) {
  return (
    <>
      <button
        onClick={() => {
          changePage("incomes");
        }}
        type="button"
      >
        Incomes
      </button>
      <button
        onClick={() => {
          changePage("costs");
        }}
        type="button"
      >
        Expends
      </button>
    </>
  );
}

export default MainBtns;
