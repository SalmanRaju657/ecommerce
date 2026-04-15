import React from "react";

function Cart({ cart, increaseQty, decreaseQty, removeItem, total }) {
  return (
    <div style={{ padding: "20px" }}>
      <h1>🛒 Cart Page</h1>

      {cart.length === 0 && <p>Your cart is empty</p>}

      {cart.map(item => (
        <div key={item.id} style={{
          borderBottom: "1px solid #ddd",
          padding: "10px 0"
        }}>
          <h3>{item.name}</h3>
          <p>₹ {item.price}</p>

          <button onClick={() => decreaseQty(item.id)}>-</button>
          <span style={{ margin: "0 10px" }}>{item.qty}</span>
          <button onClick={() => increaseQty(item.id)}>+</button>

          <button
            onClick={() => removeItem(item.id)}
            style={{ marginLeft: "10px", color: "red" }}
          >
            Remove
          </button>
        </div>
      ))}

      <h2>Total: ₹ {total}</h2>
    </div>
  );
}

export default Cart;