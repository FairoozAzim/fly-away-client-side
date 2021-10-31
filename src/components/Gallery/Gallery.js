import React from 'react';
import gallery1 from "../../images/gallery1.jpg";
import gallery2 from '../../images/gallery2.jpg'
import gallery3 from '../../images/gallery3.jpg'
import gallery4 from '../../images/gallery4.jpg'
import gallery5 from '../../images/gallery5.jpg'
import gallery6 from '../../images/gallery6.jpg'
import './Gallery.css';

const Gallery = () => {
    return (
        <div className="container">
            <h1 className="header mb-4">Memories of some of our Clients</h1>
            <div className="row g-3">
             <div className="col grid-image">
                <img src={gallery1} alt=""></img>
             </div>
             <div className="col grid-image">
                <img src={gallery2} alt=""></img>
             </div>
             <div className="col grid-image">
                <img src={gallery3} alt=""></img>
             </div>
             <div className="col grid-image">
                <img src={gallery4} alt=""></img>
             </div>
             <div className="col grid-image">
                <img src={gallery5} alt=""></img>
             </div>
             <div className="col grid-image">
                <img src={gallery6} alt=""></img>
             </div>
            </div>
        </div>
    );
};

export default Gallery;