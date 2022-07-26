import React from "react";

export default function ProductForm({addProductToDB}) {
  const [formData, setFormData] = React.useState({
    title: "",
    gender: "",
    price: "",
    category: "",
    image: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e, formData) => {
    e.preventDefault();
    // console.log(formData);
    addProductToDB(formData);
    setFormData({
        title: "",
        gender: "",
        price: "",
        category: "",
        image: "",
      })

  };

  const { title, gender, price, category, image } = formData;
  return (
    <div>
      <h3>Product Details</h3>
      <form onSubmit={(e) => handleSubmit(e, formData)}>
        <input
          name="title"
          value={title}
          onChange={handleChange}
          type="text"
          placeholder="Enter Title"
        />
        <br />
        <input
          name="category"
          value={category}
          onChange={handleChange}
          type="text"
          placeholder="Enter Category"
        />
        <br />
        <input
          name="price"
          value={price}
          onChange={handleChange}
          type="number"
          placeholder="Enter Price"
        />
        <br />
        <input
          name="image"
          value={image}
          onChange={handleChange}
          type="url"
          placeholder="Enter Image URL"
        />
        <br />
        <select value={gender} onChange={handleChange} name="gender">
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <br />
        <input type="submit" value="Add Product" />
      </form>
    </div>
  );
}
