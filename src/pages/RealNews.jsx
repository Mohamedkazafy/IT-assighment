import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const RealNews = () => {
  const [realNews, setRealNews] = useState([]);

  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2024-11-10&sortBy=publishedAt&apiKey=571525ce44dc4d97a55ca8baaa7757a4')
      .then(response => response.json())
      .then(data => {
        if (data.articles && Array.isArray(data.articles)) {
          setRealNews(data.articles);
        } else {
          console.error('Unexpected data format:', data);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container mt-5">
      <h1>Real News</h1>
      <div className="row">
        {realNews.length > 0 ? (
          realNews.map((article, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100">
                {article.urlToImage && (
                  <img
                    src={article.urlToImage}
                    alt={article.title}
                    className="card-img-top"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text">
                    {article.description || 'No description available.'}
                  </p>
                </div>
                <div className="card-footer">
                  <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Loading news...</p>
        )}
      </div>
    </div>
  );
};

export default RealNews;
