import axios from "axios";
import { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/login";
      return;
    }

    axios.get("https://ecommerce-backend-ow09.onrender.com/products/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => setProducts(res.data))
    .catch((err) => console.log(err));

  }, []);

  // ADD PRODUCT FUNCTION
  const addProduct = async () => {
    const token = localStorage.getItem("token");

    try {
      await axios.post(
        "http://127.0.0.1:8000/products/",
        {
          name: name,
          price: price,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Product Added ✅");

      window.location.reload();

    } catch (err) {
      console.error(err);
    }
  };

  const deleteProduct = async (id) => {
  const token = localStorage.getItem("token");

  try {
    await axios.delete("http://127.0.0.1:8000/products/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        id: id,
      },
    });

    alert("Product Deleted ❌");

    window.location.reload();

  } catch (err) {
    console.error(err);
  }
};

  return (
  <div className="container mt-4">
    <h1 className="text-center mb-4">🛒 My Products</h1>

    {/* ADD PRODUCT */}
    <div className="card p-3 mb-4">
      <h4>Add Product</h4>

      <input
        className="form-control mb-2"
        type="text"
        placeholder="Product Name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="form-control mb-2"
        type="number"
        placeholder="Price"
        onChange={(e) => setPrice(e.target.value)}
      />

      <button className="btn btn-success" onClick={addProduct}>
        Add Product
      </button>
    </div>

    {/* PRODUCT LIST */}
    <div className="row">
      {products.map((item) => (
        <div className="col-md-4" key={item.id}>
          <div className="card p-3 mb-3 shadow">
            <h5>{item.name}</h5>
            <p>Price: ₹{item.price}</p>

            <button
              className="btn btn-danger"
              onClick={() => deleteProduct(item.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>

    {/* LOGOUT */}
    <div className="text-center mt-4">
      <button
        className="btn btn-dark"
        onClick={() => {
          localStorage.removeItem("token");
          window.location.href = "/login";
        }}
      >
        Logout
      </button>
    </div>
  </div>
);
}

export default Products;