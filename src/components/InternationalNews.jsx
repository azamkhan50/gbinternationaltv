import React, { useEffect, useState } from 'react';

const InternationalNews = () => {
  const KEY_API = "7e2739f6497646aaa776f260eb447f59";
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("pakistan");
  const [loading, setLoading] = useState(false);

  const getData = async (query) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${query}&apiKey=${KEY_API}`
      );
      const jsonData = await response.json();
      console.log(jsonData);
      
      setArticles(jsonData.articles || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData(searchTerm);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    getData(searchTerm);
  };
 const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">International News</h1>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="mb-6 flex gap-4">
        <input
          type="text"
          className="border border-gray-300 p-2 rounded w-full"
          placeholder="Search for news..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {/* First Row with 4 Articles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {articles.slice(0, 4).map((article, index) => (
              <div key={index} className="p-4 border rounded shadow">
                <h2 className="text-lg font-semibold">{article.title}</h2>
                {article.urlToImage && (
                  <img
                    src={article.urlToImage}
                    alt="News"
                    className="w-full h-40 object-cover mt-2 rounded"
                  />
                )}
                <p className="text-sm text-gray-700 mt-2">{article.description}</p>
                 <p className="text-xs text-gray-500 mt-1">
                  {formatDate(article.publishedAt)}
                </p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 mt-2 inline-block"
                >
                  Read more
                </a>
              </div>
            ))}
          </div>

          {/* Rest of the Articles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {articles.slice(4).map((article, index) => (
              <div key={index} className="p-4 border rounded shadow">
                <h2 className="text-lg font-semibold">{article.title}</h2>
                {article.urlToImage && (
                  <img
                    src={article.urlToImage}
                    alt="News"
                    className="w-full h-40 object-cover mt-2 rounded"
                  />
                )}
                <p className="text-sm text-gray-700 mt-2">{article.description}</p>
                 <p className="text-xs text-gray-500 mt-1">
                  {formatDate(article.publishedAt)}
                </p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 mt-2 inline-block"
                >
                  Read more
                </a>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default InternationalNews;
