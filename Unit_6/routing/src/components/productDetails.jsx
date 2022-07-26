import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 20px auto;
  border-color: #fe8019;
`;

const Div = styled.div`
padding:20px;

& h4, & h3{
    margin:10px;
}

`;

const ProductDetails = () => {
    const { productId } = useParams();
    const [productDetails, setProductDetails] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    const getData = async () => {
        try {
            setLoading(true);
            let response = await fetch(`http://localhost:3000/products/${productId}`);
            let result = await response.json();
            // setLoading(false);
            return result;
        } catch (error) {
            console.log(error);
        }
    }

    React.useEffect(() => {
        getData().then((res) => {
            setProductDetails(res);
            setLoading(false);
            // console.log(res);
        })
    }, []);

    return (
        loading ? (<ClipLoader loading={loading} css={override} size={100} />) : (
            <Div>
            <h4>ID : {productDetails.id}</h4>
            <h4>Price : $ {productDetails.price}</h4>
            <h3>{productDetails.name}</h3>
        </Div>
        )
    )
}

export default ProductDetails;