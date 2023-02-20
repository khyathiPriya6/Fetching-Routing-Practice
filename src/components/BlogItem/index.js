import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogDetails

  return (
    <Link to={`/blogs/${id}`} className="blog-item-link">
      <div className="blog-item-container">
        <div className="blog-item-img-container">
          <img src={imageUrl} className="blog-item-img" alt={`item${id}`} />
        </div>
        <div className="blog-item-details-container">
          <p className="blog-item-details-topic">{topic}</p>
          <h1 className="blog-item-details-title">{title}</h1>
          <div className="blog-item-profile-container">
            <img
              src={avatarUrl}
              className="blog-item-profile-img"
              alt={`avatar${id}`}
            />
            <p className="blog-item-details-author">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
