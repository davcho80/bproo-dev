// 

import { Link } from "react-router-dom";
import { useState } from "react";

const BlogList = ({ blogs, title }) => {
  const [refresh, setRefresh] = useState(false);

  function DeleteBlog(id) {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: 'DELETE'
    }).then(() => {
      console.log(id);
      setRefresh(true);
    });
  }

  if (refresh) {
    // Rafraîchir la composante
    return null;
  }

  return (
    <div className="bloglist">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog" key={blog.id}>
          <Link to={`/blogs/${blog.id}`} className="blog-titre">
            {blog.title}
          </Link>
          <small className="blog-publication-date">
            Publier le: {blog.date}
          </small>
          <p className="blog-author">Publier par: {blog.author}</p>
          <button onClick={() => DeleteBlog(blog.id)}>Supprimer</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
