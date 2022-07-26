import React from "react";

export const Registration = () => {
  const [status, setStatus] = React.useState("");
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
    username: "",
    mobile: "",
    description: ""
  });

  const { name, email, password, username, mobile, description } = formData;

  const register = async (formData) => {
    try {
      let res = await fetch(
        `https://masai-api-mocker.herokuapp.com/auth/register`,
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: { "Content-Type": "application/json" }
        }
      );
      let result = await res.json();
      // console.log(result);
      setStatus(result.message);
      setFormData({
        name: "",
        email: "",
        password: "",
        username: "",
        mobile: "",
        description: ""
      });
    } catch (error) {
      console.log(error);
    }
  };
  const handlInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    register(formData);
  };
  return (
    <div>
      {status ? <h3>{status}</h3> : null}
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "400px",
          textAlign: "left",
          margin: "auto",
          gap: "3px",
          border: "1px solid gray",
          padding: "10px"
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input name="name" type="text" value={name} onChange={handlInput} />
        <br />
        <label htmlFor="email">Email</label>
        <input name="email" type="text" value={email} onChange={handlInput} />
        <br />
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          value={password}
          onChange={handlInput}
        />
        <br />
        <label htmlFor="username">Username</label>
        <input
          name="username"
          type="text"
          value={username}
          onChange={handlInput}
        />
        <br />
        <label htmlFor="mobile">Mobile</label>
        <input name="mobile" type="text" value={mobile} onChange={handlInput} />
        <br />
        <label htmlFor="description">Description</label>
        <input
          name="description"
          type="text"
          value={description}
          onChange={handlInput}
        />
        <br />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

// https://masai-api-mocker.herokuapp.com/auth/register
