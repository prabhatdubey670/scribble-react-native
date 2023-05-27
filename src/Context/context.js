import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const NewsContext = createContext();
const url =
  'https://newsapi.org/v2/everything?q=Apple&from=2023-05-26&sortBy=popularity&apiKey=12735be93933463abd09d7f98cc28111';

export default function Context({ children }) {
  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    try {
      const { data } = await axios.get(url);
      setNews(data);
      //   console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <NewsContext.Provider value={{ news }}>{children}</NewsContext.Provider>
  );
}
