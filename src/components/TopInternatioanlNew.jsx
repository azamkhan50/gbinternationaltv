import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const ToInternatioalNews = () => {
  const KEY_API = "7e2739f6497646aaa776f260eb447f59";
  const scrollRef = useRef(null);
  const cardWidth = 320; // estimated card width including margin/gap
  const visibleCards = 2;

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  const getTrendingNews = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=international&sortBy=publishedAt&pageSize=10&apiKey=${KEY_API}`
      );
      const jsonData = await response.json();
      setArticles(jsonData.articles || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTrendingNews();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!scrollRef.current) return;

      const container = scrollRef.current;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;

      if (container.scrollLeft + cardWidth * visibleCards >= maxScrollLeft) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: cardWidth * visibleCards, behavior: "smooth" });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-left text-blue-600">International News</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar"
        >
          {articles.map((news, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[90vw] sm:w-[45vw] md:w-[600px] bg-gray-200 shadow-lg rounded-2xl overflow-hidden"
            >
              <img
                src={news.urlToImage}
                alt={news.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{news.source.name}</h2>
                <p className="text-sm text-gray-700 mt-1">{news.title}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {new Date(news.publishedAt).toLocaleString()}
                </p>
                <a
                  href={news.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md"
                >
                  More Details
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ToInternatioalNews;
