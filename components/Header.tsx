import Link from "next/link";
import React, { useState } from "react";
import { Typography, TextField, Button } from "@mui/material";
import { useRouter } from "next/router";

export const Header = () => {
  const [uname,setUname]=useState("");
  const router = useRouter();
  function route(path){
    if(path==="search"){
      router.push({
      pathname:"./search",
      query:{
          "search":uname,
      }
    })
    setUname("")
    } else router.push(path);
  }
  
  return (
    <div className="flex flex-row z-10 fixed items-center bg-gradient-to-r from-cyan-600 via-purple-500 to-pink-500 w-full">
      <div className="flex mx-5 mt-2 mb-4">
        <Button 
        variant="text" 
        sx={{
          color:"#FF2",
          height:"48px",
          fontFamily:"Comic Sans MS",
          fontSize:"30px"}} 
        onClick={()=>route('/')}
        >
        Punks
        </Button>
        <Button
        variant="text"
        sx={{
          color:"black",
          height:"48px",
          fontFamily:"Comic Sans MS",
          fontSize:"20px"
        }}
        onClick={()=>route('/history')}
        >
        History
        </Button>
      </div>
      <div className="flex grow flex-row-reverse">
        <Button
        variant="text"
        sx={{
          color:"white",
          height:"48px",
          alignItems:"flex-end",
          fontFamily:"Comic Sans MS"
        }}
        onClick={()=>route("search")}
        >
        Search
        </Button>
        <TextField 
        value={uname} 
        variant="filled"
        size="small"
        onKeyDown={(e)=>{if(e.key==="Enter")route("search")}}
        sx={{maxWidth:"400px"}} 
        placeholder={"Search..."} 
        className="bg-gradient-to-r from-purple-400 via-pink-600 to-pink-500" 
        onChange={(e)=>setUname(e.currentTarget.value)}
        inputProps={{padding:"20px 20px"}}
        />
      </div>
    </div>
  );
};