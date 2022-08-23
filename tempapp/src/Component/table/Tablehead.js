import React from "react";
import { useState } from "react";
import './mystyles.css'
import up from './up-arrow.png'
import down from './down-arrow.png'

export default function Tablehead({columns ,handleSort}){
    const[sortField ,setSortfield]=useState(' ')
     const [order, setOrder]=useState('asc')
    
    const handleSorting=(accessor)=>{
       // console.log('SO',sortField)
        //console.log('AC',accessor)
        
        const ordertype=
                            sortField===accessor && order=== 'asc' ?'desc':'asc';
          console.log(ordertype)
        
        setSortfield(accessor)
        setOrder(ordertype)
        handleSort(accessor,ordertype)
        
    }

    return(
        <thead className='head'>
             <tr className="head-row">
                 {columns.map(({label ,accessor})=>{
                    return(
                        <th key={accessor} onClick={()=>{handleSorting(accessor)}}>
                            <span className="dFlex"><span className="arrow up"></span>
                            {label}
                        <span className="arrow down"></span></span>
                            
                        {/*<span className="dFlex"><span onClick={()=>{handleDirection('up',accessor)}}><img src={up}/></span>
                        <span onClick={()=>{handleDirection('down',accessor)}}><img  src={down}/></span></span>*/}</th>
                    )
                })}
             </tr>
             
        </thead>
    )
}