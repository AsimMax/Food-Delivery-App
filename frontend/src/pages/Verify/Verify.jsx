import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import './Verify.css'
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Verify = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const success = searchParams.get('success');
    const orderId = searchParams.get('orderId');
    const {url}=useContext(StoreContext);
    const navigate=useNavigate();
    const verifyPayment=async()=>{
        const reponse =await axios.post(url+"/api/order/verify",{success,orderId});
        if(reponse.data.success){
            navigate("/myorders");
        }
        else{
            navigate("/");
        }
    }
    useEffect(()=>{
        verifyPayment();
    },[])
  return (
    <div className='verify'>
    <div className="spinner">

    </div>  
    </div>
  )
}

export default Verify
