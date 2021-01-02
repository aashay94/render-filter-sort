import React from "react";

function TransactionTable(props) {
  //filter function
  const filter = (e) => {
    props.callbackFilter(e.target.value);
  }
  //sort function
  const sort = () => {
    props.callback(props.txns);
  };
  //data rendering in table
  let rows = props.txns.map((item) => (
    <tr>
      <td>{item.date}</td>
      <td>{item.description}</td>
      <td>{item.type === 1 ? "Debit" : "Credit"}</td>
      <td>{item.amount}</td>
      <td>{item.balance}</td>
    </tr>
  )
  );

  return (
    <div className="layout-column align-items-center mt-50">
      <section className="layout-row align-items-center justify-content-center">
        <label className="mr-10">Transaction Date</label>
        <input id="date" type="date" defaultValue="2019-11-27" onChange={filter} />
        <button className="small">Filter</button>
      </section>

      <div className="card mt-50">
        <table className="table">
          <thead>
            <tr className="table">
              <th className="table-header">Date</th>
              <th className="table-header">Description</th>
              <th className="table-header">Type</th>
              <th className="table-header">
                <span id="amount" onClick={sort}>Amount ($)</span>
              </th>
              <th className="table-header">Available Balance</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TransactionTable;
