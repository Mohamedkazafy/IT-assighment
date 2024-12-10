import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const NewsDetail = () => {
  const { id } = useParams(); // Get the `id` from the URL
  const navigate = useNavigate(); // To navigate back or to a 404 page
  const [newsItem, setNewsItem] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/news/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('News not found');
        }
        return response.json();
      })
      .then(data => setNewsItem(data.data))
      .catch(error => setError(error.message));
  }, [id]);

  if (error) {
    return (
      <div className="container mt-5">
        <h1>Error</h1>
        <p>{error}</p>
        <button onClick={() => navigate('/')} className="btn btn-primary">
          Back to News List
        </button>
      </div>
    );
  }

  if (!newsItem) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mt-5">
      <h1>{newsItem.title}</h1>
      <img
        src={`http://127.0.0.1:8000${newsItem.image}`}
        alt={newsItem.title}
        style={{ width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'cover' }}
      />
      <p className="mt-3"><strong>Source:</strong> {newsItem.source}</p>
      <p><strong>Author:</strong> {newsItem.author}</p>
      <p>{newsItem.content}</p>
      <button onClick={() => navigate('/')} className="btn btn-secondary mt-3">
        Back to News List
      </button>
    </div>
  );
};

export default NewsDetail;
