import  React, { useState }  from "react";
import { Button, Form} from "react-bootstrap";
import Select from 'react-select';
import Loginfrom from "./formik/Loginform";

import { Link } from "react-router-dom";

const color=['Ocean','blue','purple','red','orange','yellow']
const colourOptions=[]
color.forEach((el)=>{
  colourOptions.push({label:el,value:el})
})
// const colourOptions = [
//     { value: "ocean", label: "Ocean", color: "#00B8D9", isFixed: false,id:'1' },
//     { value: "blue", label: "Blue", color: "#0052CC", disabled: false,id:'2' },
//     { value: "purple", label: "Purple", color: "#5243AA" ,id:'3'},
//     { value: "red", label: "Red", color: "#FF5630", isFixed: true,id:'4' },
//     { value: "orange", label: "Orange", color: "#FF8B00" ,id:'5'},
//     { value: "yellow", label: "Yellow", color: "#FFC400" ,id:'6'},
//     { value: "green", label: "Green", color: "#36B37E" ,id:'7'},
//     { value: "forest", label: "Forest", color: "#00875A",id:'8' },
//     { value: "slate", label: "Slate", color: "#253858" ,id:'9'},
//     { value: "silver", label: "Silver", color: "#666666" ,id:'10'}
//   ];
// const tempOptions=[
//   'orange','blue','kfjeh'
// ]
// var tempOpt=[]
// tempOptions.forEach((el)=>{
//   tempOpt.push({label:el,value:el})
// })
// console.log(tempOpt,colourOptions)

  



function Multiselect(){
    const[sel ,setSel]=useState([ ])
    const[selId ,setSelId]=useState()
    //console.log(sel)

    //tempValue
    // const[temp ,setTemp]=useState([])
    // const[tempId ,setTempId]=useState()
   
    
    const handleSubmit=()=>{
        setSelId(sel)
        setSel([ ])
        console.log('Submit',selId,'SEl',sel)


      //  setTempId(tempOpt)
      //  setTemp([ ])
      //  console.log('TempId',tempId,'SEl',temp)
        
      }

   const handleEdit=()=>{
        setSel(selId)
        //console.log('Edit')
       // setTemp(tempId)
      }
    const handleClear=()=>{
        setSel([ ])

       // setTemp([ ])
      }

      const enableButton=()=>{
        var name=document.getElementById('name').value;
        
         console.log('name ' ,name)
         if(name){
           document.getElementById('search').removeAttribute('disabled')
          if(document.getElementById('search').disabled == false ){
            console.log('False')
            document.getElementById('download').setAttribute('alt', 'altnews')
          }

         }
        
      }
   


    return(<>
        <h1>Multiple Select</h1>
        <div className="d-lg-flex col-lg row w-75 mx-auto"  >
        <Select isMulti   value={sel} onChange={(e,i)=>{setSel(e) 
                                                        
        /*console.log(i.option.id)*/}
          } options={colourOptions} name=''></Select>

          <h3>Temp Example</h3>
          {/* <Select isMulti value={temp} onChange={(e,i)=>{setTemp(e)} } options={tempOpt}>
            
          </Select> */}
       
        <Button  onClick={handleSubmit}>Submit</Button>
        <Button  onClick={handleEdit}>Edit</Button>
        <Button  onClick={handleClear}>Clear</Button>
       
        </div>

        <div>
            <Form className="bg-light">
                  <div>
                    <span>
                      <input 
                        type='text'
                        id='name'
                        onChange={(e)=>{console.log('input value',e.target.value)
                         enableButton()
                      }}
                        
                      ></input>
                    </span>
                    <button id='search'
                          disabled
                          
                        >Search</button>

                    <a to="#" onClick={(e)=>{alert(`Input Clicked`)}} disabled>
                    <img
                        
                        className="img-fluid px-1 isDisabled"
                        alt="Icon Unavailable"
                        id="download"
                      />
                      </a>

                  </div>

            </Form>
            
        </div>
        
        
    </>)
}

export default  Multiselect