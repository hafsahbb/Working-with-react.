import React from "react";

const MenuCategories = () => {
  const menu = [
    { category: "Fruits", items: ["Apple", "Banana", "Orange"] },
    { category: "Vegetables", items: ["Carrot", "Spinach"] }
  ];

  return (
    <div>
      {menu.map((cat, index) => (
        <div key={index}>
          <h3>{cat.category}</h3>
          <ul>
            {cat.items.map(item => <li key={item}>{item}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MenuCategories;
