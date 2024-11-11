import './post.css'

export default function Post() {
  return (
    <div className='post'>
    <img
    className='posting'
    src="https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
     alt=""
      />
      <div className="postInfo">
        <div className="postcats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor, sit amet </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDes">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sequi quas non voluptatum quia nesciunt culpa soluta eveniet, iure numquam et! Deserunt ad doloremque delectus sapiente quasi voluptas quibusdam corporis!</p>
    </div>
  )
}
