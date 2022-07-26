import React from "react";

export default function EmployeeForm({ addEmployeeToDB }) {
  const [formData, setFromData] = React.useState({
    name: "",
    age: "",
    address: "",
    salary: "",
    department: "",
    isMarried: false,
  });

  const handleChange = (e) => {
    let { name, value, checked, type } = e.target;

    value = type === "checkbox" ? checked : value;

    setFromData({ ...formData, [name]: value });
  };

  const handleSubmit = (e, formData) => {
    e.preventDefault();
    // console.log(formData);
    addEmployeeToDB(formData);
    setFromData({
      name: "",
      age: "",
      address: "",
      salary: "",
      department: "",
      isMarried: false,
    });
  };

  const { name, age, address, salary, department, isMarried } = formData;

  return (
    <div>
      <h3>Employee Details</h3>
      <form onSubmit={(e) => handleSubmit(e, formData)} id="employeeForm">
        <label>
          Name
          <input
            value={name}
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="Enter Your Full Name"
          />
        </label>
        <label>
          Age
          <input
            value={age}
            onChange={handleChange}
            name="age"
            type="number"
            placeholder="Enter Your Age"
          />
        </label>
        <label>
          Address
          <input
            value={address}
            onChange={handleChange}
            name="address"
            type="text"
            placeholder="Enter Your Address"
          />
        </label>
        <label>
          Salary{" "}
          <input
            value={salary}
            onChange={handleChange}
            name="salary"
            type="number"
            placeholder="Enter Your Salary"
          />
        </label>
        <select value={department} onChange={handleChange} name="department">
          <option value="">Department</option>
          <option value="Education">Education</option>
          <option value="Technical">Technical</option>
          <option value="Placement">Placement</option>
        </select>
        <p>
          Married{" "}
          <input
            checked={isMarried}
            onChange={handleChange}
            name="isMarried"
            type="checkbox"
          />
        </p>
        <input id="submitBtn" type="submit" />
      </form>
    </div>
  );
}
