"use client";

import React from "react";
import { useEffect, useState } from "react";
// import ItemModel from "../../model/itemModel"
function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetching Item data
    async function fetchItems() {
      const response = await fetch("http://localhost:3000/json/item.json");
      const data = await response.json();
      //const itemsData = data.map((item) => ItemModel.fromJson(item));
      setItems(data);
      console.log(data);
    }
    fetchItems();
  }, []);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Items</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
       
        {items.map((item) => (
          <div key={item.MenuItemID} className="mb-4 bg-white shadow-md rounded-lg overflow-hidden">
            <img src={item.ImageURL} alt={item.Title.en} className="w-full object-cover rounded-md"></img>
            <div className="p-4">
            <h3 className="text-sm font-semibold text-black">{item.Title.en}</h3>
            <p className="text-xs">{item.Description.en}</p>
           
            <br />
            <div className="flex justify-between">
            {item.MetaData.IsDealProduct==true?<p className="text-xs bg-red-600 w-max p-1 text-white">Promotion Now</p>: <p className="text-xs bg-green-600 w-max p-1 text-white">Available Now</p>}
            <p className="text-xs bg-red-600 w-max  text-white rounded-sm p-1">$ {item.PriceInfo.Price.DeliveryPrice
            }</p>
            </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemList;
