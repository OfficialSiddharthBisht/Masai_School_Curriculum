import React from "react";

export default function ProductListing({
  allProductsData,
  handlePage,
  page,
  lastPage,
  deleteProduct,
  handleSort,
  handleFilter
}) {
//   console.log(allProductsData);
//   console.log(handlePage);
//   console.log(page);
//   console.log(lastPage);
  return (
    <div>
        <br />
        <br />
        <div>
            <button onClick={handleSort}>SORT</button>
            <button onClick={handleFilter}>FILTER</button>
        </div>
        <div id="grid">
            {
            allProductsData.map(item => {
                return (
                    <div key={item.id}>
                        <img src={item.image} alt="image" />
                        <h4>{item.title}</h4>
                        <p>Category : {item.category}</p>
                        <p>Price : {item.price}</p>
                        <p>Gender : {item.gender}</p>
                        <button onClick={()=>{deleteProduct(item.id)}}>delete</button>
                    </div>
                )
            })
            }
            <br />
        </div>
      <div>
        <button onClick={() => handlePage(-1)} disabled={page === 1}>
          previous
        </button>
        <button onClick={() => handlePage(1)} disabled={page >= lastPage}>
          next
        </button>
      </div>
      <br />
    </div>
  );
}
