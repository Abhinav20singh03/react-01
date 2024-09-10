import React from "react";
function Card({ name, description, imageURL }) {
  return (
    <div className="w-[300px] rounded-md border">
      <img src={imageURL} alt={name} className="h-[200px] w-full rounded-md object-cover" />
      <div className="p-4">
        <h1 className="text-lg font-semibold">{name}</h1>
        <p className="mt-3 text-sm text-gray-600">{description}</p>
        <button className="mt-4 rounded-sm bg-black px-2.5 py-1 text-white shadow-sm">
          Learn More
        </button>
      </div>
    </div>
  );
}
export default Card