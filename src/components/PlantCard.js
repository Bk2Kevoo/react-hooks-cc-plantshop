import React, { useState } from "react";

function PlantCard({ plant }) {

  const { name, price, image } = plant
  const [toggle, setToggle] = useState(true)


  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {toggle ? (
        <button className="primary" onClick={handleToggle}>
          In Stock</button>
      ) : (
        <button onClick={handleToggle}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
