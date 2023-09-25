import axios from "axios";
import { useState } from "react";
import { useNavigate, useSubmit } from "react-router-dom";

const URI= 'http://54.205.117.250:8000/blogs/'

const CompCreateBlog = () => {
   const [title, setTitle ]= useState ('')
   const [content, setContent ]= useState ('')
   const navigate= useNavigate()
   
   const  store = async (e) => {
    e.preventDefault()
     await axios.post(URI, {title: title, content:content})
   navigate('/')
    }
   return  (
        <div>
         <h3>crear</h3>
         <form onSubmit={store}>
         <div className="mb-3">
           <label className="form-label">Title </label>
         <input 
         value ={title}
         onChange={(e)=>setTitle(e.target.value)}
         type="text"
         className= 'form-control'
         />
         </div>
         <div className="mb-3">
          <label className="form-label">Contenido</label>
         <textarea 
         value ={content}
         onChange={(e)=>setContent(e.target.value)}
         type="text"
         className= 'form-control'
         />
         </div>
         <button type='submit' className="btn btn-primary">store</button>
         </form>
        </div>
    )
}

export default CompCreateBlog
