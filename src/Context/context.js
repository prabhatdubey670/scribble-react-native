import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const url =
  'https://newsapi.org/v2/everything?q=general&from=2023-05-26&sortBy=popularity&apiKey=12735be93933463abd09d7f98cc28111';

export const NewsContext = createContext();

export default function Context({ children }) {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [bookmark, setBookmark] = useState([]);

  // auth using jwt token
  const login = () => {
    setUserToken('asbfeu1234p');
    setIsLoading(false);
  };
  const logout = () => {
    setUserToken(null);
    setIsLoading(false);
  };

  // fetch news from newsapi
  const fetchNews = async () => {
    try {
      const { data } = await axios.get(url);
      setNews(data);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <NewsContext.Provider value={{ news, login, logout, isLoading, userToken }}>
      {children}
    </NewsContext.Provider>
  );
}
