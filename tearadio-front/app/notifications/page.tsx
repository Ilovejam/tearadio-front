'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';

const Notifications = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const response = await axios.get('http://localhost:3000/posts');
    setPosts(response.data);
  };

  const handleClear = async (id) => {
    await axios.delete(`http://localhost:3000/posts/${id}`);
    fetchPosts();
  };

  const handleClearAll = async () => {
    await Promise.all(posts.map(post => axios.delete(`http://localhost:3000/posts/${post.id}`)));
    fetchPosts();  // Re-fetch posts after all deletions
  };

  return (
    <div className="bg-white">
      <Navbar />
      <div className="flex flex-col items-center px-4 py-2 mt-20">
        {posts.map((post, index) => (
          <div key={index} className="flex bg-white shadow-lg rounded-lg mx-4 md:mx-auto my-4 max-w-4xl w-full">
            <div className="flex items-start px-4 py-6">
              <img className="w-12 h-12 rounded-full object-cover mr-4 shadow" src={post.avatar} alt="avatar" />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900 -mt-1">{post.author}</h2>
                </div>
                <p className="mt-3 text-gray-700 text-sm">
                  {post.content}
                </p>
                
              </div>
            </div>
          </div>
        ))}
        {posts.length > 0 && (
          <button 
            onClick={handleClearAll}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-8 rounded my-4"
          >
            Clear All
          </button>
        )}
      </div>
    </div>
  );
};


export default Notifications;
