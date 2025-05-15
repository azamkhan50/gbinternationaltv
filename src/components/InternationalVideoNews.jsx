import React, { useEffect, useState } from "react";

const InternatioanlVideoNews = () => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);

  const API_KEY = "AIzaSyDwJjjLTgWAj3Wh5DbBcj1xxhMj4zPxZYk";
  const SEARCH_QUERY = " World politics"; // or use channelId=YOUR_CHANNEL_ID
  const MAX_RESULTS = 12;

  useEffect(() => {

    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${MAX_RESULTS}&q=${encodeURIComponent(
            SEARCH_QUERY
          )}&type=video&key=${API_KEY}`
        );
        const data = await response.json();
        console.log(data);
        

        if (data.error) {
          console.error("API Error:", data.error);
          setError(data.error.message);
        } else {
          setVideos(data.items);
        }
      } catch (err) {
        console.error("Fetch Error:", err);
        setError("Failed to fetch YouTube videos.");
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">All International News</h1>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <div key={video.id.videoId} className="bg-white shadow rounded overflow-hidden">
            <a
              href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={video.snippet.thumbnails.high.url}
                alt={video.snippet.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-1 text-gray-800 line-clamp-2">
                  {video.snippet.title}
                </h2>
                <p className="text-sm text-gray-500 line-clamp-2">
                  {video.snippet.description}
                </p>
                <p className="text-sm text-gray-500">
                {new Date(video.snippet.publishedAt).toLocaleString()}
              </p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InternatioanlVideoNews;
