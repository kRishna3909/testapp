import React from "react";
import './mystyles.css'

export default function Tablebody({columns ,tabledata}){
    return(
        <tbody className='bod'>
            {tabledata.map((data) => {
            //console.log(data)
    return (
     <tr key={data.id}>
      {columns.map(({ accessor }) => {
        //console.log(accessor)
        //console.log(data[accessor])
       const tData = data[accessor] ? data[accessor] : "——";
       //console.log('td',tData)
       return <td key={accessor}>{tData}</td>;
      })}
     </tr>
    );
   })}
        </tbody>
    )
}