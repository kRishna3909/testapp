import React from "react";
import Tablebody from "./Tablebody";
import Tablehead from "./Tablehead";
import { useState } from "react";
import './mystyles.css'


function Sortdata(){
    var tData=[ 
        {
            name:'Krishna',
            email:'aKrishna@gmail.com',
            contact:'199778845136'
        },
        {
            name:'Abhi', 
            email:'abhi@gmail.com',
         contact:'899778845136'
        },
        {   name:'Goldy',
            email:'goldy@gmail.com',
            contact:'699778845136'
        },
        {   name:'Vikas',
            email:'vikas@gmail.com',
            contact:'299778845136'
        },
        {   name:'Mark',
            email:'mark@gmail.com',
            contact:'799778845136'
        },
        {   name:'Henry',
            email:'henry@gmail.com',
            contact:'399778845136'
        },
        {   name:'Tom',
            email:'tom@gmail.com',
            contact:'499778845136'
        },
        ]
    const [tabledata ,setTabledata]=useState(tData)
    const columns = [
            { label: "Name", accessor: "name" },
            { label: "Email", accessor: "email" },
            { label: "Contact", accessor: "contact" },
           
           ];
   /* const handleclick=(e)=>{
        const td=tData.sort((a,b)=>( a.name<b.name?-1:1))
        for(var i=0;i<td.length;i++){
            console.log(td[i].name)
        }
     
    }*/
     const handleSort=(accessor, ordertype)=>{
            
          //   console.log(accessor, ordertype)
        if(accessor){
            if(ordertype==='asc'){
                    const sortData=tData.sort((a,b)=>{
             
                    return(a[accessor]<b[accessor]?-1:1)
                 })
                
                setTabledata(sortData)
                ordertype='desc'
            }
            else if(ordertype==='desc'){
                const sortData=tData.sort((a,b)=>{
         
                return(a[accessor]<b[accessor]?1:-1)
            })
              
            setTabledata(sortData)
            ordertype='asc'
        } 
        }
       // console.log(tabledata)
    } 
    /*const handleDirection=(dir,accessor)=>{
        console.log(dir,accessor)
        
            if(dir==='up'){
                const sortDat= tabledata.sort((a,b)=>{
                     return(a[accessor]<b[accessor]?-1:1) 
                 })
                 //setTabledata(sortData)
                 console.log(sortDat)
             }
             else if(dir==='down')
                   { const sortDat= tabledata.sort((a,b)=>{
                         return(a[accessor]<b[accessor]?1:-11)
                     })
                     console.log(sortDat) 
                     setTabledata(sortDat)
                   }    
         
       
    }*/
    
    return( 
        <div className="maindiv">

            <table className="table">
                <Tablehead  columns={columns} handleSort={handleSort} />
                <Tablebody  columns={columns} tabledata={tabledata}/>
            </table>
              <button className="btn"  >Add</button>
            {/*<table>
                <thead>
                    <tr>
                        <th onClick={handleclick}>Name</th>
                        <th>Email</th>
                        <th>Contact No</th>
                    </tr>
                </thead>
                <tbody>
                    
                    
                    {
                        tData.map((tdata)=>{
                            return(
                            <tr id={tdata.name}>
                            <td>{tdata.name}</td>
                            <td>{tdata.email}</td>
                            <td>{tdata.contact}</td>
                            </tr>
                        )})
                    }
                    <button>Add</button>
                    
                </tbody>
            </table>*/}
            
        </div>
    )
}
export default Sortdata