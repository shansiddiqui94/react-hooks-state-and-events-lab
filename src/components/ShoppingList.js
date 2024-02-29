import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All")

function handleChange(e){ //passing an event to our handle change
  setSelectedCategory(e.target.value)
}
const filterdItems = items.filter( // Filter by category and match true and false to the value of what your trying to filter
  (item)=> selectedCategory === "All" ? true : item.category === selectedCategory
)
console.log(filterdItems)
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleChange} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filterdItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
