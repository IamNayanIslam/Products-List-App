import { useState, useEffect } from "react";
import ProductTable from "../Product Table/Product-table";
import "./Product-list.css";
import { v4 as uuidv4 } from "uuid";
import getDataFromLocalStorage from "./GetData";

export default function ProductList() {
  const [products, setProducts] = useState(getDataFromLocalStorage("products"));
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productColor, setProductColor] = useState("Black");
  const [productQuantity, setProductQuantity] = useState(0);
  const [productPrice, setProductPrice] = useState(0);
  const id = uuidv4();

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const productObj = {
      productId,
      productName,
      productDescription,
      productColor,
      productQuantity,
      productPrice,
      id,
      delete: false,
    };

    for (const product of products) {
      if (productObj.productId === product.productId)
        return alert("ID already exists please chose a different ID!");
    }

    setProducts([...products, productObj]);

    if (products) {
      setProductName("");
      setProductId("");
      setProductDescription("");
      setProductQuantity("");
      setProductPrice("");
    }
  };

  return (
    <>
      <div className="app-wrap">
        <div className="productListApp">
          <form action="" className="product-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="productId">Product Id:</label>{" "}
              <input
                type="text"
                name="productId"
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="productName">Product Name:</label>{" "}
              <input
                type="text"
                name="productName"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="productDescription">Product Description:</label>{" "}
              <input
                type="text"
                name="productDescription"
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="productQuantity">Product Quantity:</label>{" "}
              <input
                type="number"
                name="productQuantity"
                value={productQuantity}
                onChange={(e) => setProductQuantity(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="productPrice">Product Price:</label>{" "}
              <input
                type="number"
                name="productPrice"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="colors">Select Color</label>
              <select
                name="colors"
                id="colors"
                value={productColor}
                onChange={(e) => setProductColor(e.target.value)}
              >
                <option value="black">Black</option>
                <option value="white">White</option>
                <option value="gray">Gray</option>
              </select>
            </div>

            <button type="submit">List Product</button>
          </form>
        </div>
        {products.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Product Name</th>
                <th>Description</th>
                <th>Color</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {products.map(
                (product) => (
                  productName,
                  (
                    <ProductTable
                      key={product.id}
                      products={products}
                      product={product}
                      setProducts={setProducts}
                      /* productId={products.productId}
                      productName={products.productName}
                      productDescription={products.productDescription}
                      productColor={products.productColor}
                      productQuantity={products.productQuantity}
                      productPrice={products.productPrice}
                      delete={products.delete} */
                    />
                  )
                )
              )}
            </tbody>
          </table>
        ) : (
          <div className="emptyList">
            <p>Product List is Empty!</p>
          </div>
        )}
      </div>
    </>
  );
}
