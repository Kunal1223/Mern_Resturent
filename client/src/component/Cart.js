import React, { useState, useEffect, useRef } from 'react'
import { useCart , useDispatch} from './ContextReducer';


const Cart = (props) => {
    let data = useCart();
    // console.log(data);
    let dispatch = useDispatch();
    const priceRef = useRef();
    let options = props.options;
    let priceOptions = Object.keys(options);
    const [qty , setqty] = useState(1)
    const [size , setsize] = useState("")
    // let foodItems = props.foodItem;
    const handleAddtocart = async() =>{
        await dispatch({type:"ADD" , name: props.foodItem.name , id: props.foodItem.id , price: finalPrice, qty : qty , size : size});
        console.log(data);
    }
    let finalPrice = qty*parseInt(options[size]);
    useEffect(()=>{
        setsize(priceRef.current.value)
    },[]);

    return (
        <>
            <div className="card m-4 " style={{ "width": "18rem" }}>
                <img src={props.foodItem.img} className="card-img-top"  style={{height:"200px" , objectFit:"fill"}} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.foodItem.name}</h5>
                    <div className='container w-100'>
                        <select className='m-2 h-100 bg-success rounded ps-3 pe-3' onChange={e => setqty(e.target.value)} >
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })}
                        </select>

                        <select className='m-2 h-100 bg-success rounded ps-3 pe-3' onChange={e => setsize(e.target.value)} ref={priceRef}>
                            {priceOptions.map((choice)=>{ 
                                return <option key={choice} value={choice}>{choice}</option>
                            }                          
                          )}
                        </select>

                        <div className='d-inline fs-5 ps-2'>
                        ₹{finalPrice}/-
                        </div>
                    </div>
                    <hr/>
                    <button className={`btn btn-success justify-center me-2`} onClick={handleAddtocart}>Add to cart</button>
                </div>
            </div>
        </>
    )
}

export default Cart