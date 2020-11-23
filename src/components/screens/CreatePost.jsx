import React,{useState} from 'react'

const CreatePost = () => {
  const [image,setImage] = useState("")
  const [title,setTitle] = useState("")
  const[body,setBody] = useState("")
  const [url,setUrl] = useState("")

  const postDetails = () => {
    const data = new FormData()
    data.append("file",image)
    data.append("upload_preset","insta-clone")
    data.append("cloud_name","dolla")
    
    fetch("	https://api.cloudinary.com/v1_1/dolla/image/upload",{
      method:"post",
    body:data
  
    })
    .then(res => res.json())
    .then(data=>{
      setUrl(data.url)
        })
    .catch(err=>{
      console.log(err)
    })
    
  }
    
    return ( 
      
        <div className="card input-filed"
        
        style={{
          margin:"30px auto",
        maxWidth:"500px",
        padding:"20px",
        textAlign:"center"}}>
            <input 
            type="text" 
            placeholder="title"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            />
            <input 
            type="text" 
            placeholder="body"
            value={body}
            onChange={(e)=>setBody(e.target.valuef)} />

            <div className="file-field input-field">
      <div className="btn #90caf9 blue darken-1">
        <span>Upload Image</span>
        <input type="file" onChange={(e)=>setImage(e.target.files[0])}/>
      </div>
      <div className="file-path-wrapper">
        <input className="file-path validate" type="text"/>
      </div>
      <button className="btn waves-effect waves-light #90caf9 blue darken-1"
      onClick={()=>postDetails()}>Submit post
  </button>
    </div>


        </div>
     );
}
 
export default CreatePost;