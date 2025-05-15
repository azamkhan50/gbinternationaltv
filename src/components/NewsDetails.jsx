// src/components/NewsDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const NewsDetails = () => {
  const { id } = useParams();
  const [newsItem, setNewsItem] = useState(null);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: `https://api.apitube.io/v1/news/everything`,
      params: {
        per_page: '50',
        api_key: 'api_live_3QInbv3yUYzzg6063jRZRpFMtUEROo2gNlVj1qWWIbYCe41V',
      },
    };

    axios
      .request(options)
      .then((response) => {
        const item = response.data?.data.find((n) => n.id === id);
        setNewsItem(item);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  if (!newsItem) return <div className="text-center mt-20 text-gray-500">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto mt-24 p-4">
      <h1 className="text-2xl font-bold text-blue-700 mb-4">{newsItem.title}</h1>
      <img src={newsItem.image_url} alt={newsItem.title} className="w-full h-64 object-cover rounded-lg mb-4" />
      <p className="text-gray-700">{newsItem.description}</p>
    </div>
  );
};

export default NewsDetails;
