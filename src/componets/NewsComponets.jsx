import React from "react";
/* import React, { useEffect, useState } from "react";
import axios from "axios"; */
const NewsComponets = () => {
  return;
  /*  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiKey = import.meta.env.VITE_API_KEY;
  console.log("API Key:", apiKey);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
        );
        setData(res.data.articles);
        console.log(res.data);
      } catch (err) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [apiKey]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>; */ {
    /*   <h1 className="text-center text-2xl font-bold mt-5">NEWS APP</h1>

      <ul>
        {data.map((article) => (
          <li key={article.title} className="border-b p-4 cursor-pointer">
            <img src={article.urlToImage} className="h-40" />
            <h2 className="font-bold">{article.title}</h2>
            <p>{article.description}</p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Read more
            </a>
          </li>
        ))}
      </ul> */
  }
};

export default NewsComponets;
