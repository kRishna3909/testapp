import  React, { useState }  from "react";
import { Button} from "react-bootstrap";
import Select from 'react-select';
import Loginfrom from "./formik/Loginform";


const colourOptions = [
    { value: "ocean", label: "Ocean", color: "#00B8D9", isFixed: true },
    { value: "blue", label: "Blue", color: "#0052CC", disabled: true },
    { value: "purple", label: "Purple", color: "#5243AA" },
    { value: "red", label: "Red", color: "#FF5630", isFixed: true },
    { value: "orange", label: "Orange", color: "#FF8B00" },
    { value: "yellow", label: "Yellow", color: "#FFC400" },
    { value: "green", label: "Green", color: "#36B37E" },
    { value: "forest", label: "Forest", color: "#00875A" },
    { value: "slate", label: "Slate", color: "#253858" },
    { value: "silver", label: "Silver", color: "#666666" }
  ];

  const colourOptiontwo = [
    { value: "ocean", label: "Ocean", color: "#00B8D9", isFixed: true },
    { value: "blue", label: "Blue", color: "#0052CC", disabled: true },
    { value: "purple", label: "Purple", color: "#5243AA" },
    { value: "red", label: "Red", color: "#FF5630", isFixed: true },
    { value: "orange", label: "Orange", color: "#FF8B00" },
    { value: "yellow", label: "Yellow", color: "#FFC400" },
    { value: "green", label: "Green", color: "#36B37E" },
    { value: "forest", label: "Forest", color: "#00875A" },
    { value: "slate", label: "Slate", color: "#253858" },
    { value: "silver", label: "Silver", color: "#666666" }
  ];
  const colourOptionthree = [
    { value: "ocean", label: "Ocean", color: "#00B8D9", isFixed: true },
    { value: "blue", label: "Blue", color: "#0052CC", disabled: true },
    { value: "purple", label: "Purple", color: "#5243AA" },
    { value: "red", label: "Red", color: "#FF5630", isFixed: true },
    { value: "orange", label: "Orange", color: "#FF8B00" },
    { value: "yellow", label: "Yellow", color: "#FFC400" },
    { value: "green", label: "Green", color: "#36B37E" },
    { value: "forest", label: "Forest", color: "#00875A" },
    { value: "slate", label: "Slate", color: "#253858" },
    { value: "silver", label: "Silver", color: "#666666" }
  ];
  const colourOptionfour = [
    { value: "ocean", label: "Ocean", color: "#00B8D9", isFixed: true },
    { value: "blue", label: "Blue", color: "#0052CC", disabled: true },
    { value: "purple", label: "Purple", color: "#5243AA" },
    { value: "red", label: "Red", color: "#FF5630", isFixed: true },
    { value: "orange", label: "Orange", color: "#FF8B00" },
    { value: "yellow", label: "Yellow", color: "#FFC400" },
    { value: "green", label: "Green", color: "#36B37E" },
    { value: "forest", label: "Forest", color: "#00875A" },
    { value: "slate", label: "Slate", color: "#253858" },
    { value: "silver", label: "Silver", color: "#666666" }
  ];



function MultiselectTwo(){
    const[sel ,setSel]=useState([ ])
    const[selTwo ,setSeltwo]=useState([])
    const[selThree ,setSelthree]=useState([])
    const[selFour ,setSelfour]=useState([])
    const[filters,setFilters]=useState([])
    const handleClick=()=>{
            
           setSel([ ])
            setSeltwo([ ])
            setSelthree([ ])
            setSelfour([ ])

    } 
    console.log(sel)
    
    return(<>
        <h1>Multiple Select</h1>
        <div className="d-lg-flex col-lg row w-75 mx-auto"  >
        <Select className="form-control pt-2 mr-3 col-lg"  isMulti   value={sel} onChange={(e)=>{setSel(e)}} options={colourOptions} name=''></Select>
        <Select  isMulti  value={selTwo} onChange={(e)=>{setSeltwo(e)}} options={colourOptiontwo}></Select>
        <Select  isMulti  value={selThree} onChange={(e)=>{setSelthree(e)}} options={colourOptionthree}></Select>
        <Select  isMulti  value={selFour} onChange={(e)=>{setSelfour(e)}} options={colourOptionfour}></Select>
                <Button  onClick={handleClick}>Clear</Button>
        </div>

        <div>
            
            
        </div>
        
        
    </>)
}

export default  MultiselectTwo