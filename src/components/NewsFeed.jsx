import React, { useEffect, useState } from "react";

const NewsFeed = () => {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = "a352400afadf362f7009ecab7e0941d3";
  const API_URL = `https://gnews.io/api/v4/top-headlines?country=pk&category=general&apikey=${API_KEY}`;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();

        if (data.errors || !data.articles) {
          setError("Network issue. Failed to fetch news articles. Please check your internet or try again later.");
        } else {
          setArticles(data.articles);
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Error fetching news data");
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Top Headlines - Pakistan</h1>

      {error && <p className="text-red-500">{error}</p>}

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer overflow-hidden"
            onClick={() => setSelectedArticle(article)}
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-1 text-gray-800 line-clamp-2">
                {article.title}
              </h2>
              <p className="text-sm text-gray-500">
                {new Date(article.publishedAt).toLocaleString()} • {article.source.name}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white max-w-2xl w-full p-6 rounded-lg relative">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-2 right-3 text-gray-500 hover:text-red-600 text-xl font-bold"
            >
              &times;
            </button>

            <img
              src={selectedArticle.image}
              alt={selectedArticle.title}
              className="w-full h-64 object-cover mb-4 rounded"
            />

            <h2 className="text-2xl font-bold mb-2">{selectedArticle.title}</h2>
            <p className="text-sm text-gray-500 mb-4">
              {new Date(selectedArticle.publishedAt).toLocaleString()} •{" "}
              {selectedArticle.source.name}
            </p>
            <p className="text-gray-700 mb-4">{selectedArticle.description}</p>

            <a
              href={selectedArticle.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-medium"
            >
              Read full article &rarr;
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsFeed;
