import React from 'react';
import "./Footer.css"

const Footer = () => {
    const today =new Date();
    const year =today.getFullYear()
    return (
        <footer className='text-center bg-dark p-2 mt-4'>
            <p><small className='text-white '>copyright © {year}</small></p>
            <p><small className='text-warning m-2'>Design & Develop by @mnaofficialbd </small></p>
        </footer>
    );
};

export default Footer;