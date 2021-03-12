import { useEffect, useState } from "react";

function Table(props) {
  // console.log(props.states, "props");
  const [array, setArray] = useState([]);
  useEffect(() => {
    setArray(props.states);
    // console.log("array declared");
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  // useEffect(() => {
  //   // setArray(props.states);
  //   console.log(array, "array changed")
  //   // console.log("props edited");
  // }, [props.states]); // eslint-disable-line react-hooks/exhaustive-deps
  // console.log(array, "array")

  const [tableColumns] = useState([
    ["States Affected", "state"],
    ["Confirmed Cases", "confirmedCases"],
    ["Active Cases", "casesOnAdmission"],
    ["Discharged", "discharged"],
    ["Deaths", "death"],
  ]);

  let sortorder = {}
  tableColumns.forEach(function (key) {
    sortorder[key[1]] = -1;
    // setSortOrder(initState => ({}))
  });

  const [sortOrders, setSortOrder] = useState(sortorder);


  // console.log(sortOrders, "sortOrders");

  const handleSort = (params) => {
    // console.log(sortOrders, "sortorders in sort");
    sortOrders[params] = sortOrders[params] * -1;
    setSortOrder({...sortOrders, params: sortOrders[params] * -1})
    // console.log(sortOrders, "sortorders in sort2");

    // console.log(params, "params");
    array.sort(function (a, b) {
      let nameA;
      let nameB;
      if (sortOrders[params] === 1) {
        nameA = a[params];
        nameB = b[params];
      } else {
        nameA = b[params];
        nameB = a[params];
      }
      // console.log(namea, nameb, "names a and b")
      if (params === "state") {
        nameA = nameA.toUpperCase(); // ignore upper and lowercase
        nameB = nameB.toUpperCase(); // ignore upper and lowercase
      }
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
    // console.log(props.states, "after sort")
  };

  return (
    <div className="table-responsive">
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            {tableColumns.map((column) => (
              <th key={column[1]} className="cursor-pointer" onClick={() => handleSort(column[1])}>
                {column[0]} <span className={`arrow ${sortOrders[column[1]] === -1 ? "dsc" : "asc"}`}></span>
              </th>
            ))}
            {/* <th scope="col" onClick={() => handleSort("state")}>
              States Affected <span className="arrow dsc"></span>
            </th>
            <th scope="col" onClick={() => handleSort("confirmedCases")}>
              Confirmed Cases
            </th>
            <th scope="col" onClick={() => handleSort("casesOnAdmission")}>
              Active Cases
            </th>
            <th scope="col" onClick={() => handleSort("discharged")}>
              Discharged
            </th>
            <th scope="col" onClick={() => handleSort("death")}>
              Deaths
            </th> */}
          </tr>
        </thead>
        <tbody>
          {props.states ? (
            array.map((state) => (
              <tr key={state._id}>
                <td>{state.state}</td>
                <td>{state.confirmedCases}</td>
                <td>{state.casesOnAdmission}</td>
                <td>{state.discharged}</td>
                <td>{state.death}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colspan="5" class="text-center table-active">
                No states with Covid data
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
