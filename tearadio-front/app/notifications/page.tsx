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
  // API'den gelen postları depolamak için ayrı bir durum kullanın
  const [apiPosts, setApiPosts] = useState<Post[]>([]);
  const apiUrl = 'https://bulldog-backend.vercel.app/posts';

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get<Post[]>(apiUrl);
        setApiPosts(response.data); // API'den alınan postları apiPosts durumunda saklayın
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, [apiUrl]);

  // Tüm postları (varsayılanlar ve API'den gelenler) tek bir listede birleştirin
  const allPosts = [...defaultPosts, ...apiPosts];

  const handleClear = async (id: string) => {
    try {
      await axios.delete(`${apiUrl}/${id}`);
      // Sadece API'den gelen postları filtreleyin, varsayılan postlar sabit kalsın
      setApiPosts(apiPosts.filter((post) => post.id !== id));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const handleClearAll = async () => {
    try {
      // Sadece API'den gelen postları silmeye çalışın
      await Promise.all(apiPosts.map((post) => axios.delete(`${apiUrl}/${post.id}`)));
      setApiPosts([]); // API postlarını temizleyin
    } catch (error) {
      console.error("Error clearing all posts:", error);
    }
  };


  return (
    <div className="bg-white">
      <Navbar />
      <div className="flex flex-col items-center px-4 py-2 mt-20">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id} className="flex bg-white shadow-lg rounded-lg mx-4 md:mx-auto my-4 max-w-4xl w-full">
              <div className="flex items-start px-4 py-6">
                <img className="w-12 h-12 rounded-full object-cover mr-4 shadow" src={post.avatar} alt="avatar" />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-900 -mt-1">{post.author}</h2>
                  </div>
                  <p className="mt-3 text-gray-700 text-sm">
                    {post.content}
                  </p>
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
