import Card from "./Card";
import Filter from "./Filter";
import { products } from "./ProductList";
import {  useState } from "react";
const Shop = () => {
  const [utensilFilter, setUtensilFilter] = useState(false);
  const [dishwareFilter, setDishwareFilter] = useState(false);
  const [napkinFilter, setNapkinFilter] = useState(false);
  return (
    <div className="shopContent">
      <div className="filter">
      <h1 id="shopHeading" test-id="shop">Shop</h1>
      <Filter
          label="Utensils"
          setChecked={setUtensilFilter}
        />
        <Filter
          label="Dishware"
          setChecked={setDishwareFilter}
        />
        <Filter
          label="Napkins"
          setChecked={setNapkinFilter}
        />
      </div>
      <div className="products">
        {products.map((product, index) => {
          if (!utensilFilter && !dishwareFilter && !napkinFilter) {
            return (
              <Card
                src={`./Images/${product.title}.png`}
                title={product.title}
                price={product.price}
                key={index}
              />
            );
          } else if (utensilFilter && product.type === "Utensil") {
            return (
              <Card
                src={`./Images/${product.title}.png`}
                title={product.title}
                price={product.price}
                key={index}
              />
            );
          } else if (dishwareFilter && product.type === "Dishware") {
            return (
              <Card
                src={`./Images/${product.title}.png`}
                title={product.title}
                price={product.price}
                key={index}
              />
            );
          } else if (napkinFilter && product.type === "Napkin") {
            return (
              <Card
                src={`./Images/${product.title}.png`}
                title={product.title}
                price={product.price}
                key={index}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Shop;
