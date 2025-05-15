
import React from 'react';
import { Link } from 'react-router-dom';

const ProvinceCard = ({ province }) => {
  return (
    <div className="w-full sm:w-[300px] bg-gray-200 shadow-lg rounded-2xl overflow-hidden">
      <img src={province.img} alt={province.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{province.name}</h2>
        <p className="text-sm text-gray-700 mt-1">{province.city}</p>
        <Link
          to={`/weather/${province.city}`}
          className="mt-4 inline-block text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md"
        >
          View Weather
        </Link>
      </div>
    </div>
  );
};

export default ProvinceCard;
