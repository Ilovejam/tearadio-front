'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';

type Post = {
  id: string;
  author: string;
  avatar: string;
  content: string;
};

const defaultPosts: Post[] = [
  {
    id: "1",
    author: "John Doe",
    avatar: "https://via.placeholder.com/150",
    content: "This is the first post",
  },
  {
    id: "2",
    author: "Jane Doe",
    avatar: "https://via.placeholder.com/150",
    content: "This is the second post",
  },
];

const Notifications = () => {
  const [apiPosts, setApiPosts] = useState<Post[]>([]);
  const apiUrl = 'https://bulldog-backend.vercel.app/posts';

  useEffect(() => {
  const fetchPosts = async () => {
    try {
      const response = await axios.get<Post[]>(apiUrl);
      setApiPosts(response.data); 
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  fetchPosts(); 

  const intervalId = setInterval(fetchPosts, 10000); 
  console.log(response.data)
  return () => clearInterval(intervalId); 
}, [apiUrl]);


  const allPosts = [...defaultPosts, ...apiPosts];

  const handleClear = async (id: string) => {
    try {
      await axios.delete(`${apiUrl}/${id}`);
      setApiPosts(currentApiPosts => currentApiPosts.filter((post) => post.id !== id));
    } catch (error) {
      console.error("Error deleting post:", error);
      alert('Failed to delete the post'); // Hata yönetimi
    }
  };

  const handleClearAll = async () => {
    try {
      const apiDeletePromises = apiPosts.map((post) => axios.delete(`${apiUrl}/${post.id}`));
      await Promise.all(apiDeletePromises);
      setApiPosts([]); // API postlarını sıfırla
    } catch (error) {
      console.error("Error clearing all posts:", error);
      alert('Failed to clear all posts'); // Hata yönetimi
    }
  };

  return (
    <div className="bg-white">
      <Navbar />
      <div className="flex flex-col items-center px-4 py-2 mt-20">
        {allPosts.length > 0 ? (
          allPosts.map((post) => (
            <div key={post.id} className="flex bg-white shadow-lg rounded-lg mx-4 md:mx-auto my-4 max-w-4xl w-full">
              <div className="flex items-start px-4 py-6">
                <img className="w-12 h-12 rounded-full object-cover mr-4 shadow" src={post.avatar} alt="avatar" />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-gray-900 -mt-1">{post.author}</h2>
                  <p className="mt-3 text-gray-700 text-sm">{post.content}</p>
                  <button 
                    onClick={() => handleClear(post.id)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded my-1"
                  >
                    Clear
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-700 mt-4">No notifications</p>
        )}
        {allPosts.length > 0 && (
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
