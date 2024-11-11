import './singlePost.css'

export default function SinglePost() {
  return (
    <div className='singlePost'>
      <div className="singlePostWrapper">
        <img
        className='singlePostImg'
        src="https://images.unsplash.com/photo-1484603738253-e5b73679e8cb?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
         alt=""
          />
          <h1 className='singlePostTitle'>Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
          <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
          <i className="singlePostIcon fa-regular fa-trash-can"></i>
          </div>
          </h1>
          <div className="singlePostInfo">
            <span className='singlePostAuthor'>
                Author:<b>Zohaob Younas</b>
                </span>
            <span className='singlePostDate'>1 hour ago</span>
          </div>
          <p className='singlePostDesc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, consectetur officiis! Perferendis dolores nihil numquam corporis accusantium magni voluptatum hic quas qui! Qui, sunt. Delectus quaerat provident sint consectetur doloremque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, consectetur officiis! Perferendis dolores nihil numquam corporis accusantium magni voluptatum hic quas qui! Qui, sunt. Delectus quaerat provident sint consectetur doloremqueLorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, consectetur officiis! Perferendis dolores nihil numquam corporis accusantium magni voluptatum hic quas qui! Qui, sunt. Delectus quaerat provident sint consectetur doloremqueLorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, consectetur officiis! Perferendis dolores nihil numquam corporis accusantium magni voluptatum hic quas qui! Qui, sunt. Delectus quaerat provident sint consectetur doloremqueLorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, consectetur officiis! Perferendis dolores nihil numquam corporis accusantium magni voluptatum hic quas qui! Qui, sunt. Delectus quaerat provident sint consectetur doloremqueLorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, consectetur officiis! Perferendis dolores nihil numquam corporis accusantium magni voluptatum hic quas qui! Qui, sunt. Delectus quaerat provident sint consectetur doloremqueLorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, consectetur officiis! Perferendis dolores nihil numquam corporis accusantium magni voluptatum hic quas qui! Qui, sunt. Delectus quaerat provident sint consectetur doloremque</p>
      </div>
    </div>
  )
}
