import React from 'react';
import "./Footer.css"
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import {FaMapMarkerAlt} from 'react-icons/fa'
import {AiFillPhone} from 'react-icons/ai';
import {AiFillMail} from 'react-icons/ai';
import icon from '../../../images/icon.png'


const Footer = () => {
 
    return (
        <div className="f-footer d-flex flex-column flex-lg-row justify-content-between text-white">
            <div className='d-flex flex-column flex-lg-row justify-content-around container'>
             <div>
                 <h4><img src={icon} alt="" className="icon"></img>Fly Away</h4>
                 <p className='text-muted'>Making your dream vacation come true.</p> 
                 <h6><FaMapMarkerAlt/> 28, Nasirabad, Chittagong</h6>
                 <h6><AiFillMail/> support@fly-away.com</h6>
                 <h6><AiFillPhone/> (+031)12345567 </h6>

             </div>
             <div>
                 <h4>Newsletter</h4>
                 <input type='email' className='newsletter d-inline' placeholder='Your Email'></input> 
                 <button className='button d-inline p-1'>Subscribe</button>
                 <small className='d-block'>Get the latest news and updates</small>
                 <div className="me-5 links">
                    <a className="me-3" href="/"><FaFacebook></FaFacebook></a>
                    <a className="me-3" href="/"><FaTwitter/></a>
                    <a className="me-3" href="/"><FaLinkedin></FaLinkedin></a>
            </div>
             </div>

            </div>
            
            
        </div>
    );
};

export default Footer;