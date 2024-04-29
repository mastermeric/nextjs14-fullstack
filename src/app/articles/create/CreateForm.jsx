"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"


export default function CreateForm() {

  // user redirect vs icin
  const router = useRouter()  

  // state management ...
  const [Priority, setPriority] = useState("LOW")
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();

    // loading flag isaretle..
    setIsLoading(true);

    const gidenData = {title, body, Priority}

    const res = await fetch("Api_URL",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(gidenData)
    });

    if(res.status === 201) {
      router.refresh(); //  Bu onemli.. Yoksa Client tarafta data guncellenmez. tell the app re-fetch the data in background (this is Browser side )
      router.push("/Articles");
    }
  }

  return (
    <>
      <div>CreateForm</div>
      {/* <form className="w-1/2"> */}
      <form onSubmit={handleSubmit} style={{width:"50%"}} >

        <label>
          <span>Title:</span>
          <input
            required
            type="text"
            onChange={(e) => setTitle(e.target.value) }
            value={title}
          ></input>
        </label>


        <label>
          <span>Body:</span>
          <textarea
            required
            onChange={(e) => setBody(e.target.value) }
            value={body}
          ></textarea>
        </label>

        <label>
          <span>Priotrty :</span>
          <select 
          onChange={(e)=>{setPriority(e.target.value)}}
          value={"aaaa"}
          >
            <option value={"LOW"}>Low Priority</option>
            <option value={"MEDIUM"}>Medium Priority</option>
            <option value={"HIGH"}>High Priority</option>
          </select>
        </label>

        <button 
        className="btn-primary"
        disabled={isLoading}
        >
          {isLoading && <span>Adding...</span>}
          {!isLoading && <span>Add Title</span>}
        </button>
      </form>
    </>

  )
}
