import { Outlet } from "react-router-dom";
import Card from "./Card";
import Filter from "./Filter";
import { products } from "./ProductList";
import { useEffect, useState } from "react";
const Shop = () => {
  const [utensilFilter, setUtensilFilter] = useState(false);
  const [dishwareFilter, setDishwareFilter] = useState(false);
  const [napkinFilter, setNapkinFilter] = useState(false);
  useEffect(()=>
    {
        console.log(utensilFilter, dishwareFilter, napkinFilter)
    });
  return (
    <div className="shopContent">
      <div className="filter">
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
        {products.map((product) => {
          if (!utensilFilter && !dishwareFilter && !napkinFilter) {
            return (
              <Card
                src={`./Images/${product.title}.png`}
                title={product.title}
                price={product.price}
              />
            );
          } else if (utensilFilter && product.type === "Utensil") {
            return (
              <Card
                src={`./Images/${product.title}.png`}
                title={product.title}
                price={product.price}
              />
            );
          } else if (dishwareFilter && product.type === "Dishware") {
            return (
              <Card
                src={`./Images/${product.title}.png`}
                title={product.title}
                price={product.price}
              />
            );
          } else if (napkinFilter && product.type === "Napkin") {
            return (
              <Card
                src={`./Images/${product.title}.png`}
                title={product.title}
                price={product.price}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Shop;
