import React, { useState, useEffect } from 'react';
import './App.css'; // Custom CSS file
import Logo from './logo.svg'; // Logo SVG
import axios from 'axios'; // Import Axios

const App = () => {
  const [blogs, setBlogs] = useState([]);  // State to store blog posts
  const [loading, setLoading] = useState(true);  // Loading state to show the loader
  const [error, setError] = useState(null);  // Error state to display errors

  // Fetch blog posts from the backend API
  useEffect(() => {
    axios.get('http://localhost:5000/api/posts') // Backend URL
      .then((response) => {
        setBlogs(response.data);  // Set the blog posts data from the response
        setLoading(false);  // Stop loading once data is fetched
      })
      .catch((err) => {
        setError('Failed to load posts');  // Error handling
        setLoading(false);
      });
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <div className="App">
      {/* Header Section */}
      <header className="App-header">
        <img src={Logo} alt="Blog Logo" className="App-logo" />
        <h1>Welcome to BlogPlatform</h1>
        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#blogs">Blogs</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Main Content Section */}
      <main className="App-main">
        <section id="blogs">
          <h2>Latest Blog Posts</h2>
          <div className="blog-list">
            {loading && <p>Loading...</p>}  {/* Show loading text while fetching */}
            {error && <p>{error}</p>}  {/* Show error message */}
            {!loading && !error && blogs.length === 0 && <p>No blogs found.</p>}  {/* Show no blogs found */}
            {!loading && !error && blogs.map((blog) => (
              <div key={blog.id} className="blog-card">
                <h3>{blog.title}</h3>
                <p>{blog.content}</p>
                <button className="read-more">Read More</button>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="App-footer">
        <p>&copy; {new Date().getFullYear()} BlogPlatform. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;