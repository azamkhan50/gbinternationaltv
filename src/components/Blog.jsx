import React, { useEffect, useState } from "react";

const BlogInfo = () => {
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null);

  const API_KEY = "AIzaSyDwJjjLTgWAj3Wh5DbBcj1xxhMj4zPxZYk"; // ✅ Replace with your valid API key
  const BLOG_ID = "1747224822986"; // ✅ Replace with your actual blog ID

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}?key=${API_KEY}`
        );
        const data = await response.json();

        console.log("Blogger API Response:", data);

        if (data.error) {
          setError(data.error.message || "Error fetching blog");
        } else {
          setBlog(data);
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Failed to fetch blog data");
      }
    };

    fetchBlog();
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Blog Info</h1>

      {error && <p className="text-red-500">{error}</p>}

      {blog ? (
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-2">{blog.name}</h2>
          <p className="text-gray-600 mb-4">{blog.description}</p>

          <div className="text-sm text-gray-500 space-y-1">
            <p><strong>Blog ID:</strong> {blog.id}</p>
            <p><strong>Published:</strong> {new Date(blog.published).toLocaleString()}</p>
            <p><strong>Updated:</strong> {new Date(blog.updated).toLocaleString()}</p>
            <p><strong>Locale:</strong> {blog.locale?.language}-{blog.locale?.country}</p>
            <p><strong>Posts Link:</strong>{" "}
              <a
                href={blog.posts?.selfLink}
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Posts
              </a>
            </p>
          </div>
        </div>
      ) : (
        !error && <p className="text-gray-500">Loading blog info...</p>
      )}
    </div>
  );
};

export default BlogInfo;
