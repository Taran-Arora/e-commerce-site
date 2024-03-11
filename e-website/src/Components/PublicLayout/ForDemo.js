import React, { useEffect, useState } from 'react'

const ForDemo = () => {
    const [data,setData]=useState([]);

    const getData = async()=>{
        const response = await fetch("http://example.com/movies.json");
        console.log('response',response);
    }
   useEffect(()=>{
    // getData()
    async function logMovies() {
        const response = await fetch("http://example.com/movies.json");
        const movies = await response.json();
        console.log(movies);
      }
      logMovies()
   },[])

    
  return (
    <div>
        <table>

        </table>
    </div>
  )
}

export default ForDemo