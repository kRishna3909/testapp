import React, { useState } from "react";
import { Button, Container, Form, Table } from "react-bootstrap";


function About(){
    const [amount ,setAmount]=useState()
    const [amttype ,setAmttype]=useState()
    const [remarks,setRemarks]=useState()
    const [transaction,setTransaction]=useState([])
    const [toggleEdit, setToggleEdit] = useState(false)
    const [itemId, setItemId] = useState(null)
    const uniqueId = new Date().getTime().toString(12)

    const handleClick=(e)=>{
        
        e.preventDefault()
        if (!amount) {

            alert(`fill data`)
            //console.log(transaction) 
            }
        else if (amount && toggleEdit) {
            alert(`edit is on`)
            setTransaction(transaction.map((trans) => {
                console.log(trans.id)
                if (trans.id === itemId) 

                {
                    console.log(trans)
                    return { ...trans, amount, amttype,remarks }
                }
                return trans
            })
            )
                setAmount(' ')
                setAmttype('')
                setRemarks(' ')
                setToggleEdit(false)            
            }

        else {
            setTransaction([...transaction, { amount, amttype ,remarks, id:uniqueId}])
            setAmount('')
            setAmttype('')
            setRemarks(' ')
        }
            //setTransaction([...transaction,{amount,amttype,remarks}])
            //setAmount(' ')
            //setAmttype(' ')
            //setRemarks(' ')           

            
    }
    const handleEdit=(id)=>{
       // console.log(id)
        let newTrans=transaction.find((trans)=>{
            return trans.id===id
        })
        //console.log(newTrans)
        setAmount(newTrans.amount)
        setAmttype(newTrans.amttype)
        setRemarks(newTrans.remarks)
        setItemId(id)
        setToggleEdit(true)
    }
    const handleRemove=(id)=>{
       // console.log(id)
        

        let newAry=transaction.filter((trans)=>{
                return (trans.id != id)
        })
        setTransaction(newAry)
        
    }

    return(
            <Container className='bg-info'>
            <Form className="border-info bg-info  p-1 mx-auto d-flex flex-row justify-content-evenly align-items-center">
                <Form.Group className='d-flex flex-row justify-content-evenly align-items-center'>
                    <Form.Label className="mx-2 fs-5">Amount</Form.Label>
                    <Form.Control type="number" placeholder="Enter your Amount"  value={amount} onChange={(e)=>{setAmount(e.target.value)}} />
                </Form.Group>
                <Form.Group className='d-flex flex-row justify-content-evenly align-items-center '>
                    <Form.Label className="mx-2 fs-5">Type</Form.Label>
                    <Form.Select value={amttype}  onChange={(e)=>{setAmttype(e.target.value)}}>
                        <option value='income'>Income</option>
                        <option value='expense'>Expense</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className='d-flex  flex-row justify-content-evenly align-items-center'>
                    <Form.Label className="mx-3 fs-5">Remarks</Form.Label>
                    <Form.Control type="text" placeholder="Enter your Remarks" value={remarks} onChange={(e)=>{setRemarks(e.target.value)}} />
                </Form.Group>
                <Button className='outline-danger h-25 py-1 my-2'   onClick={handleClick}>Submit</Button>
                
            </Form>

            <Table bordered className="bg-light text-"> 
                <thead>
                    <tr>
                        <th>Amount</th>
                        <th>Type</th>
                        <th>Remarks</th>
                    </tr>
                </thead>
                <tbody>
                    {transaction.map((trans)=>{
                       // console.log(trans.amount,i)
                        return (
                            <tr key={trans.id} className='fs-5'>
                                <td>{trans.amount}</td>
                                <td>{trans.amttype}</td>
                                <td>{trans.remarks}</td>
                                <td><Button  className='outline-danger h-25 py-1 m-2' onClick={()=>{handleEdit(trans.id)}}>Edit</Button>
                                    <Button  className='outline-danger h-25 py-1 m-2' onClick={()=>{handleRemove(trans.id)}}>Remove</Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
            </Container>
    )
}

export default About