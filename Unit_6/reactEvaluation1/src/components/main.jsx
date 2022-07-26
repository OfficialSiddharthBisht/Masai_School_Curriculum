import React from "react";
import ProductForm from "./form";
import ProductListing from "./listing";

export default function Main() {
  const [allProductsData, setAllProductsData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [lastPage, setLastPage] = React.useState();

  const addProductToDB = async (data) => {
    try {
      await fetch(`http://localhost:3001/allData`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      getProductsData(`http://localhost:3001/allData?_page=${page}&_limit=5`);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  const getProductsData = async (url) => {
    try {
      setLoading(true);
      let response = await fetch(
        `${url}`
      );
      let result = await response.json();
      setAllProductsData(result);

      let last = response.headers.get("X-Total-Count");
      setLastPage(Math.ceil(last / 5));
    } catch (error) {
      console.log(error);
      setError(true);
    }
    setLoading(false);
  };

  const deleteProduct = async (id) => {
    try {
        await fetch(`http://localhost:3001/allData/${id}`,{
            method : "DELETE"
        });
        getProductsData(`http://localhost:3001/allData?_page=${page}&_limit=5`);
    } catch (error) {
        console.log(error)
    }
  }

  const handleSort = () => {
    getProductsData(`http://localhost:3001/allData?_sort=price&_page=${page}&_limit=5`)
  }

  const handleFilter = () => {
    //http://localhost:3001/allData?gender=male&_page=${page}&_limit=5
    getProductsData(`http://localhost:3001/allData?gender=male&_page=${page}&_limit=5`)
  }

  const handlePage = (value) => {
    setPage(page + value);
    // console.log(page);
  };

  React.useEffect(() => {
    getProductsData(`http://localhost:3001/allData?_page=${page}&_limit=5`);
  }, [page]);

  return (
    <>
      <ProductForm addProductToDB={addProductToDB} />
      {loading ? (
        <h1>Loading</h1>
      ) : error ? (
        <h1>Something went wrong</h1>
      ) : (
        <ProductListing
          allProductsData={allProductsData}
          handlePage={handlePage}
          page={page}
          lastPage={lastPage}
          deleteProduct={deleteProduct}
          handleSort={handleSort}
          handleFilter={handleFilter}
        />
      )}
    </>
  );
}
