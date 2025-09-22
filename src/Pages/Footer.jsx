import React from 'react'
import { MdRestaurantMenu } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
const footerStyle = {
    backgroundColor: "#1E9C9C", 
    color: "#fff", 
  };

  return (
    <>
      <footer class="footer-section" style={footerStyle}>
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-md-4 text-md-start mb-4 mb-md-0">
              <p class="mb-0 " style={{ fontSize: '16px', color: '#bcdcdcff', fontWeight: 'bold', marginTop: '70px' }}>
                © 2025 <strong>Foodak<MdRestaurantMenu /></strong> All Rights Reserved.
              </p>
            </div>
            <div class="col-md-8 text-center text-md-end mt-5">
              <div class="social-icons" style={{ textDecoration: 'none', fontSize: '30px', marginRight: '10px' }} >
                <Link to="https://www.facebook.com/" target='blank' style={{ marginRight: '10px', color: '#002323ff' }}>
                  <FaFacebook />
                </Link>

                <Link to="https://www.instagram.com/"  target='blank' style={{ marginRight: '10px', color: '#002323ff' }}>
                  <FaInstagramSquare />
                </Link>

                <Link to="https://x.com/" target='blank' style={{ marginRight: '10px', color: '#002323ff' }}>
                  <FaXTwitter />
                </Link>

                <Link to="https://www.tiktok.com/en/" target='blank' style={{ marginRight: '10px', color: '#002323ff' }}>
                  <FaTiktok />
                </Link>

              </div>
            </div>
          </div>
        </div>


        <div class="back-to-top" style={{
          position: 'fixed',
          bottom: '20px',
          cursor: 'pointer',
          fontSize: '30px',
          color: '#002323ff',
          right: '20px',  
        }}
         onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}>
          <FaArrowAltCircleUp />
        </div>
      </footer>
    </>
  )
}

export default Footer