import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Card } from "react-bootstrap";

function Api(){
    const [userData ,setUserdata]= useState()

    useEffect(()=>{

        axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{
           console.log(res.data,typeof res.data)
          // const tmp=res.data
          // console.log(typeof tmp)
         setUserdata(res.data)
        }).catch((er)=>{
            console.log(er)
        }) 
    //console.log(userData)
    },[])
   // console.log(typeof userData)
    return(
        <div className="about">
            <h1>Api</h1>
                
            
            
            
             {
                userData.map((e)=>{
                    console.log(e.body)
                    return (
                        <Card className='w-50 mx-auto my-2 border-info '>
                            <Card.Header className='w-100 bg-dark text-light fs-3'>{e.id}</Card.Header>
                            <Card.Title className="w-75 h-25 mx-auto  my-2 text-uppercase fs-5">{e.title}</Card.Title>
                            <Card.Body className='w-100 bg-info text-light'>{e.body}</Card.Body>
                        </Card>
                    
                    )
                })
            }
            
            <Card className=" text-dark p-2 border border-info rounded-2 w-50 h-auto mx-auto gap-3 text wrap shadow-sm" >
                hi
            </Card>

        </div>

    )
}

export default Api