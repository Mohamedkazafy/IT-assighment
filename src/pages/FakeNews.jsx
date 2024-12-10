import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const FakeNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/news`) // Update with your actual API URL
      .then(response => response.json())
      .then(data => {
        if (data.data && Array.isArray(data.data)) {
          setNews(data.data);
        } else {
          console.error('Unexpected data format:', data);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">News List</h1>
      <div className="row">
        {news.length > 0 ? (
          news.map((item) => (
            <div key={item.id} className="col-md-4 mb-4">
              <div className="card h-100">
                <img
                  src={`http://127.0.0.1:8000${item.image}`}
                  className="card-img-top"
                  alt={item.title}
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.content.substring(0, 100)}...</p>
                </div>
                <div className="card-footer">
                  <Link to={`/news/${item.id}`} className="btn btn-primary">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No news available. Please check back later.</p>
        )}
      </div>
    </div>
  );
};

export default FakeNews;
