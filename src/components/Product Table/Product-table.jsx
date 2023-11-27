/* eslint-disable react/prop-types */
import "./Product-table.css";
import { ImCross } from "react-icons/im";
export default function ProductTable(props) {
  const product = props.product;
  const products = props.products;
  const setProducts = props.setProducts;

  return (
    <>
      <tr key={product.id}>
        <td>{product.productId}</td>
        <td>{product.productName}</td>
        <td>{product.productDescription}</td>
        <td>{product.productColor}</td>
        <td>{product.productQuantity}</td>
        <td>${product.productPrice}</td>
        <td
          className="del"
          onClick={() => {
            setProducts(
              products.filter(
                (singleProduct) => singleProduct.id !== product.id
              )
            );
          }}
        >
          <ImCross />
        </td>
      </tr>
    </>
  );
}
