// import React, { useState, useEffect } from 'react'
// import { useCart , useDispatch} from './ContextReducer';


const Cart = (props) => {

    let options = props.options;
    let priceOptions = Object.keys(options);
    // let foodItems = props.foodItems;
    const handleAddtocart = () =>{

    }

    return (
        <>
            <div className="card m-4 " style={{ "width": "18rem" }}>
                <img src={props.imgSrc} className="card-img-top"  style={{height:"200px" , objectFit:"fill"}} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.foodname}</h5>
                    <div className='container w-100'>
                        <select className='m-2 h-100 bg-success rounded ps-3 pe-3'>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })}
                        </select>

                        <select className='m-2 h-100 bg-success rounded ps-3 pe-3'>
                            {priceOptions.map((choice)=>{ 
                                return <option key={choice} value={choice}>{choice}</option>
                            }                          
                          )}
                        </select>

                        <div className='d-inline fs-5 ps-2'>
                            price
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