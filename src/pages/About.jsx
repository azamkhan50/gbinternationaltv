import React from 'react';

const About = () => {
  return (
    <div className="px-4 py-10 max-w-6xl mx-auto text-gray-800 m-20">
      <h1 className="text-3xl sm:text-4xl font-bold text-left text-blue-600 mb-6">
        About GB International TV
      </h1>

      <p className="text-base sm:text-lg leading-relaxed mb-6 text-center">
        At <strong>GB International TV</strong>, we are committed to empowering our audience with accurate, timely, and impactful journalism. 
        Guided by the motto <em>"Every Moment, Every Story,"</em> our mission is to deliver news that truly matters—when it matters—with integrity, depth, and credibility.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-indigo-700">What We Cover</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-base list-disc list-inside mb-8">
        <li>Politics</li>
        <li>Business & Finance</li>
        <li>Money & Stock Markets</li>
        <li>Fashion & Entertainment</li>
        <li>Weather Updates</li>
        <li>Local and International Affairs</li>
      </ul>

      <p className="text-base sm:text-lg leading-relaxed mb-6">
        Our official website, <a href="https://gbInternational.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">gbInternational.com</a>, 
        serves as your go-to platform for real-time news updates, multimedia reports, and interactive features. 
        We constantly refresh our content to ensure you receive the latest developments with precision and relevance.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4 text-indigo-700">Local Voice, Global Reach</h2>
      <p className="text-base sm:text-lg leading-relaxed mb-6">
        Proudly rooted in <strong>Skardu</strong>, <strong>GB International TV</strong> highlights national and international news while shining a spotlight on 
        <strong> local stories, traditions, and culture</strong>. From community events and cultural programs to locally produced dramas and regional insights, 
        we ensure that the voice of Skardu and Gilgit-Baltistan is heard far and wide.
      </p>

      <p className="text-base sm:text-lg leading-relaxed text-center font-medium text-gray-700 mt-10">
        Whether you’re seeking in-depth reporting, insightful analysis, or a window into the vibrant culture of Gilgit-Baltistan, 
        <strong> GB International TV is your trusted source.</strong>
      </p>
    </div>
  );
};

export default About;
