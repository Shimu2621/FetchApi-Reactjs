import React, { useEffect, useState } from 'react'
import "../styles/FetchApi.css"

const FetchApi = () => {

    const [state, setState] = useState([])

  useEffect(() => {
    fetch("https://api.ts4u.us/api/course/get?type=program")
    .then((Response) => Response.json())
    .then((data) => setState(data.courses))
  }, [])

  return (
    <div className='courseSection'>
        <h1 className='courseSection-heading'>TS4U Provide a Variety of <br></br>
        Software Development Courses </h1>

       <div className='courseSection-list'>
       {
            state.map((item, index) => <div key={index} className='courseSection-list-item'>
                <img src={item.image} alt={item.title} loading='lazy' />
                <h2>{item.title}</h2> <br></br>
                <h3><span>Instructor Name: </span> {item.instructor.name}</h3>
                <p>{item.shortDetail}</p>
            </div>)
        }
       </div>

    </div>
  )
}

export default FetchApi