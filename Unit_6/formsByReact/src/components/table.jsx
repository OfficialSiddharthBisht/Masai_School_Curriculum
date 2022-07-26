import React from "react";

export default function MakeTable({
  allEmployeeData,
  handlePage,
  page,
  lastPage,
}) {
  // console.log(allEmployeeData);
  return (
    <div id="tableDiv">
      <h2 style={{ marginTop: "30px" }}>All Employee Details</h2>
      <table id="employeeTable">
        <thead>
          <tr>
            <th className="thAndTd">Id</th>
            <th className="thAndTd">Name</th>
            <th className="thAndTd">Age</th>
            <th className="thAndTd">Department</th>
            <th className="thAndTd">Married</th>
            <th className="thAndTd">Salary</th>
            <th className="thAndTd">Address</th>
          </tr>
        </thead>
        <tbody>
          {allEmployeeData.map((item) => {
            return (
              <tr key={item.id}>
                <td className="thAndTd">{item.id}</td>
                <td className="thAndTd">{item.name}</td>
                <td className="thAndTd">{item.age}</td>
                <td className="thAndTd">{item.department}</td>
                <td className="thAndTd">{item.isMarried ? "Yes" : "No"}</td>
                <td className="thAndTd">{item.salary}</td>
                <td className="thAndTd">{item.address}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={() => handlePage(-1)} disabled={page === 1}>
        PREV
      </button>
      <button onClick={() => handlePage(1)} disabled={page === lastPage}>
        NEXT
      </button>
    </div>
  );
}
