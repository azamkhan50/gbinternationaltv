// src/components/NewsDetails.jsx
import { useParams, Link } from "react-router-dom";
import { trandingNew } from "../assets/assets";

const TrendingDetails = () => {
  const { id } = useParams();
  const news = trandingNew.find((item) => item.id === parseInt(id));

  if (!news) return <p className="text-center mt-10 text-red-500">News not found.</p>;

  return (
    <div className="max-w-3xl mx-auto p-4 m-30">
      <img src={news.imag} alt={news.title} className="w-full h-64 object-cover rounded-xl mb-4" />
      <h1 className="text-2xl font-bold mb-2">{news.name}</h1>
      <h2 className="text-xl font-semibold mb-2">{news.title}</h2>
      <p className="text-gray-700">{news.desp}</p>
      <Link
        to="/"
        className="inline-block mt-6 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
      >
        Back to News
      </Link>
    </div>
  );
};

export default TrendingDetails;
