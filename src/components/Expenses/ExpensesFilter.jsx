import "./ExpensesFilter.css";

function ExpensesFilter({selected, onChangeFilter}) {
  const changeHandler = (event) => {
    onChangeFilter(event.target.value)
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter-control">
        <label>Filtrar por año</label>
        <select selected={selected} onChange={changeHandler}>
          <option value="all">Todos</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
      </div>
    </div>
  );
}

export default ExpensesFilter;