import React from 'react'
import Navbar from '../component/Navbar'
import Cart from '../component/Cart'
import Footer from '../component/Footer'

import { useState, useEffect } from 'react'

// import { NavLink } from 'react-router-dom'


const Home = () => {
    const [search, setsearch] = useState("");
    const [foodCat, setfoodCat] = useState([]);
    const [foodItem, setfoodItem] = useState([]);

    const loadData = async () => {
        let response = await fetch("http://localhost:5000/api/displaydata", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            }
        });
        response = await response.json();
        // console.log(response[0], response[1]);
        setfoodItem(response[0]);
        setfoodCat(response[1]);


    }
    useEffect(() => {
        loadData();
    }, []);

    return (
        <>
            <Navbar />
            <div id="carouselExampleCaptions" className="carousel slide" >
                <div className="carousel-inner" >
                    <div className="carousel-item active" id="martin" style={{ objectFit: "contain !important" }}>
                        <img src="https://insanelygoodrecipes.com/wp-content/uploads/2020/02/Burger-and-Fries.jpg" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
                        <div className="carousel-caption d-none d-md-block" style={{ zIndex: "10" }}>
                            <div className="d-flex justify-content-center">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => setsearch(e.target.value)} />
                                {/* <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button> */}
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item" id="martin" style={{ objectFit: "contain !important" }}>
                        <img src="https://thumbs.dreamstime.com/b/grilled-chicken-26823726.jpg" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
                        <div className="carousel-caption d-none d-md-block" style={{ zIndex: "10" }}>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                    <div className="carousel-item" id="martin" style={{ objectFit: "contain !important" }}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-3WOWFIDeEMsEk2ARmMLoEkmsaFB-a_tyrA&usqp=CAU" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
                        <div className="carousel-caption d-none d-md-block" style={{ zIndex: "10" }}>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* --------------------carousle updated---------------------------- */}

            <div className="container">
                {
                    foodCat !== []
                        ? foodCat.map((data) => {
                            return (
                                <div className='row mb-3'>
                                    <div key={data._id} className='fs-3 m-3'>{data.CategoryName}</div>
                                    <hr />
                                    {foodItem !== [] ? foodItem.filter((item) => (item.CategoryName === data.CategoryName && (item.name.toLowerCase().includes(search.toLocaleLowerCase())))).map(filterItem => {
                                        return (
                                            <div key={filterItem._id} className='col-12 col-md-6 col-lg-3 ms-5'>
                                                <Cart foodItem = {filterItem}
                                                 options={filterItem.options[0]}
                                                />
                                            </div>
                                        )
                                    }) : <div>No DATA FOUND</div>}
                                </div>
                            )
                        }) : ""
                }
            </div>
            <Footer />
        </>
    )
}

export default Home