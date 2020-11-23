import React,{useState} from 'react'
import{Link,useHistory} from "react-router-dom"
import M from 'materialize-css'


const LogIn = () => {

    const[password,setPassword] = useState("")
    const[email,setEmail] = useState("")
    const history = useHistory()
    const PostData = () =>{
        // if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$.test(email)){
        //     M.toast({html:"invalid email",classes:"#388e3c green darken-2"})
        // return
        //  }
        fetch("/login",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
            
                password,
                email

            })

        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.error){
                M.toast({html: data.error,classes:"#c62828 red darken-3"})
        

            }
            else{
                M.toast({html:"signedin sucess",classes:"#388e3c green darken-2"})
                history.push('/')
            }
        }).catch(err=>{
            console.log(err)
        })
    }
    return ( 
        <div className="mycard">
            <div className="card auth-card input-field">
                <h2>Instagram</h2>
                <input
                type="text"
                placeholder="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}/>
                <input
                type="text"
                placeholder="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}/>
                <button className="btn waves-effect waves-light #90caf9 blue darken-1" 
                onClick={()=>PostData()}>Login
  </button>
  <h5>
      <Link to="/signup">Dont have an account?</Link>
  </h5>
        
      </div>
        </div>
     );
}
 
export default LogIn;