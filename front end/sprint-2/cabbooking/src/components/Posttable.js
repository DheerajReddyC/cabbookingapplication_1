import React from 'react'

function Posttable({posts,updateposts,deleteposts}) {
    return (
        <div>

           <table class="table">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Action 1</th>
      <th scope="col">Action 2</th>
    </tr>
  </thead>
  <tbody>

        {posts.slice(0,10).map(post => 
             <tr key={post.id}>
             <td>{post.title}</td>
             <td><button onClick={() => updateposts(post)} className="btn btn-warning">Update</button></td>
             <td><button onClick={() => deleteposts(post)} className="btn btn-danger">Delete</button></td>
           </tr>
        )}




   
  </tbody>
</table>
        </div>
    )
}

export default Posttable
