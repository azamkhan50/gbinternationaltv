


// src/components/TrendingNews.jsx
import { useEffect, useRef } from "react";
import { trandingNew } from "../assets/assets";
import { Link } from "react-router-dom";

const TrendingNews = () => {
  const scrollRef = useRef(null);
  const cardWidth = 320; // estimated card width including margin/gap
  const visibleCards = 2;

  useEffect(() => {
    const interval = setInterval(() => {
      if (!scrollRef.current) return;

      const container = scrollRef.current;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;

      if (container.scrollLeft + cardWidth * visibleCards >= maxScrollLeft) {
        // Scroll to start
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        // Scroll forward
        container.scrollBy({ left: cardWidth * visibleCards, behavior: "smooth" });
      }
    }, 4000); // every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-left text-blue-600">Trending News</h1>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar"
      >
        {trandingNew.map((news) => (
          <div
            key={news.id}
            className="flex-shrink-0 w-[90vw] sm:w-[45vw] md:w-[600px] bg-gray-200 shadow-lg rounded-2xl overflow-hidden"
          >
            <img
              src={news.img}
              alt={news.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{news.name}</h2>
              <p className="text-sm text-gray-700 mt-1">{news.title}</p>
              <Link
                to={`/news/${news.id}`}
                className="mt-4 inline-block text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md"
              >
                More Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingNews;

