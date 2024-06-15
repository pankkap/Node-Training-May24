import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Notes() {
  const [posts, setposts] = useState();
  const [post, setpost] = useState()
  const [showEditForm, setshowEditForm] = useState(false)
  const [showCreateForm, setshowCreateForm] = useState(false)
  const [updatedPost, setupdatedPost] = useState({
    title:"",
    body:""
  })
  const [newPost, setnewPost] = useState({
    title:"",
    body:""
  })

  // this useEffect works like componentDidMount with []
  // this useEffect works like componentDidUpdate without []
  useEffect(() => {
    // we use get method to recieve the data from an API
    axios
      .get("http://localhost:4000/api/notes")
    //   .then((res)=>console.log(res.data.notes))
      .then((res) => setposts(res.data.notes))
      .catch((err) => console.log(err));
  },[]);
  console.log("After useEffect-Posts will be updated with data");
  console.log(posts);

  const editPostDetails = (postInfo)=>{
    // console.log(postInfo)
    setpost(postInfo)
    setshowCreateForm(false)
    setshowEditForm(true)

  }

  const updatePostFunction =()=>{
     // console.log(updatedPost)
    axios
    .put(`http://localhost:4000/api/notes/${post._id}`, updatedPost)
    .then((res)=>{
        alert("Post Updated Successfully")
        setshowEditForm(false)
        // window.location.reload();
    })
    .catch(err=>console.log(err))

  }

  const deletePost = (postInfo)=>{
    axios
    .delete(`http://localhost:4000/api/notes/${postInfo._id}`)
    .then((res)=>{
        alert("Post Deleted Successfully")
        // window.location.reload();
    })
    .catch(err=>console.log(err))

  }

  function createNewPost(){
    setshowCreateForm(true)
  }

function createPostFunction(){
    axios
    .post(`http://localhost:4000/api/notes`, newPost)
    .then((res)=>{
        alert("New Post Created")
        setshowCreateForm(false)
        // window.location.reload();
    })
    .catch(err=>console.log(err))
}
  return (
    <div>
      <h1 className="bg-primary text-white text-center p-2">Lists of Notes</h1>
      <div className="row text-center">
            <div className="offset-md-4 col-md-4">
            <button className="btn btn-primary" onClick={createNewPost}>Create New Post</button>
            </div>    
        </div>
    

    {/* Code to Create new Post */}
        {
            showCreateForm?(
                <form>
                <label htmlFor="" className="text-primary">Title</label>
                <input type="text" 
                   className="form-control" 
                   defaultValue={newPost.title}
                   name= "title"
                   onChange={(e)=>setnewPost({...newPost, title:e.target.value})}
                 />
                 
                <label htmlFor=""  className="text-primary">Body</label>
                <input type="text" 
                   className="form-control" 
                   name= "body"
                   defaultValue={newPost.body}
                   onChange={(e)=>setnewPost({...newPost, body:e.target.value})}
                 />
                 <button type="button" className="btn btn-primary" onClick={createPostFunction}>Create Post</button>
               </form>
            ):null
        }


{/* Code to Show All Post */}

      {showEditForm?(
        <form>
        <label htmlFor=""  className="text-primary">ID</label>
        <input type="text" 
           className="form-control" 
           defaultValue={post.id}
           readOnly
         />
        <label htmlFor="" className="text-primary">Title</label>
        <input type="text" 
           className="form-control" 
           defaultValue={post.title}
           onChange={(e)=>setupdatedPost({...updatedPost, title:e.target.value})}
         />
         
        <label htmlFor=""  className="text-primary">Body</label>
        <input type="text" 
           className="form-control" 
           defaultValue={post.body}
           onChange={(e)=>setupdatedPost({...updatedPost, body:e.target.value})}
         />
         <button type="button" className="btn btn-primary" onClick={updatePostFunction}>Update Post</button>
       </form>
      ):<div className="row">
      <div className="col-md-12">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">Body</th>
              <th scope="col" colSpan={2} >Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts ? (
              posts.map((post, index) => (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                  <td>
                      <button className="btn btn-success btn-sm" onClick={()=>editPostDetails(post)}>Edit</button>
                  </td>
                  <td>
                      <button className="btn btn-danger btn-sm" onClick={()=>deletePost(post)}>Delete</button>
                  </td>
                </tr>
                
              ))
            ) : (
              <tr>
                <td><div className="spinner-border text-danger" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div></td>
                <td>Loading...</td>
              </tr>                    
            )}
          </tbody>
        </table>
          
      </div>
    </div>
    }     

    </div>
  );
}
