import React from 'react';
import {BiSwim} from 'react-icons/bi';
import {SiYourtraveldottv} from 'react-icons/si';
import {FaHotel} from 'react-icons/fa';
import {MdFastfood} from 'react-icons/md';
import './Features.css'

const Features = () => {
    return (
        <div>
            <h1 className="header mb-5 mt-5">Our <span>Services Includes</span></h1>
            <div className="container d-flex flex-column flex-lg-row justify-content-between">
                <div>
                    <h2>Travel <br/> Management</h2>
                    <h1 className="logo"><span> <SiYourtraveldottv></SiYourtraveldottv></span></h1>
                </div>
                <div>
                    <h2>Hotel <br/> Booking</h2>
                    <h1 className="logo"><span> <FaHotel></FaHotel></span></h1>
                </div>
                <div>
                    <h2>Breakfast and <br/> Dinner</h2>
                    <h1 className="logo"><span> <MdFastfood></MdFastfood></span></h1>
                </div>
                <div>
                    <h2>Fun <br/> Activities</h2>
                    <h1 className="logo"><span>  <BiSwim></BiSwim></span></h1>
                </div>

            </div>

        </div>
    );
};

export default Features;