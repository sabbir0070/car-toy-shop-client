import React, { useEffect } from 'react';
import img1 from '../../../assets/images/allToyImage/banner.jfif'
import img2 from '../../../assets/images/allToyImage/banner1.jfif'
import img3 from '../../../assets/images/allToyImage/beautyPolice.jfif'
import img4 from '../../../assets/images/allToyImage/miniBus.jfif'
import img5 from '../../../assets/images/allToyImage/MiniPolicecar.jfif'
import img6 from '../../../assets/images/allToyImage/miniTrack.jpg'
import img7 from '../../../assets/images/banner/img1.jpg'
import img8 from '../../../assets/images/banner/img2.jpg'
import img9 from '../../../assets/images/banner/img3.jfif'
import img10 from '../../../assets/images/banner/img4.jpg'
import img11 from '../../../assets/images/banner/img5.jpg'
import img12 from '../../../assets/images/banner/img6.jpg'
import 'aos/dist/aos.css';
import Aos from 'aos';

const Gallery = () => {
    useEffect(() => {
        Aos.init({
            duration: 3000, // Animation duration
            once: false, // Only animate once
        });
    }, []);

    return (
        <div className=''>
            <h2 className='text-center text-lime-600 text-3xl font-bold pb-6'>Available toy car sell product images</h2>
            <div className='grid  grid-cols-3 md:grid-cols-6 pb-4  lg:grid-cols-6 gap-4 gap-x-2 mx-auto bg-base-200 hover:bg-base-300 '>
                <div
                    data-aos="zoom-in-left"
                    data-aos-easing="ease-in-out"
                    data-aos-anchor-placement="top-center"
                    className='lg:w-40 h-32 p-2 mt-3 mx-auto hover:bg-opacity-90'>
                    <img src={img1} className={`w-full h-full rounded-lg`} alt="No image" />
                </div>
                <div
                    data-aos="zoom-in-up"
                    data-aos-easing="ease-in-out"
                    data-aos-anchor-placement="top-center"
                    className='lg:w-40 h-32 p-2 mt-3 mx-auto hover:bg-opacity-90'>
                    <img src={img2} className='w-full h-full rounded-lg' alt="No image" />
                </div>
                <div
                    data-aos="zoom-in-down"
                    data-aos-easing="ease-in-out"
                    data-aos-anchor-placement="top-center"
                    className='lg:w-40 h-32 p-2 mt-3 mx-auto hover:bg-opacity-90'>
                    <img src={img3}
                        data-aos="zoom-in-up"

                        data-aos-easing="ease-in-out"
                        data-aos-anchor-placement="top-center"
                        className='w-full h-full rounded-lg' alt="No image" />
                </div>
                <div
                    data-aos="zoom-in-up"
                    data-aos-easing="ease-in-out"
                    data-aos-anchor-placement="top-center"
                    className='lg:w-40 h-32 p-2 mt-3 mx-auto hover:bg-opacity-90'>
                    <img src={img4} className='w-full h-full rounded-lg' alt="No image" />
                </div>
                <div
                    data-aos="zoom-in-up"
                    data-aos-easing="ease-in-out"
                    data-aos-anchor-placement="top-center"
                    className='lg:w-40 h-32 p-2 mt-3 mx-auto hover:bg-opacity-90'>
                    <img src={img5} className='w-full h-full rounded-lg' alt="No image" />
                </div>
                <div
                    data-aos="zoom-in-down"
                    data-aos-easing="ease-in-out"
                    data-aos-anchor-placement="top-center"
                    className='lg:w-40 h-32 p-2 mt-3 mx-auto hover:bg-opacity-90'>
                    <img src={img6} className='w-full h-full rounded-lg' alt="No image" />
                </div>
                <div
                    data-aos="zoom-in-left"
                    data-aos-easing="ease-in-out"
                    data-aos-anchor-placement="top-center"
                    className='lg:w-40 h-32 p-2 mt-3 mx-auto hover:bg-opacity-90'>
                    <img src={img7} className='w-full h-full rounded-lg' alt="No image" />
                </div>
                <div
                    data-aos="zoom-in-right"
                    data-aos-easing="ease-in-out"
                    data-aos-anchor-placement="top-center"
                    className='lg:w-40 h-32 p-2 mt-3 mx-auto hover:bg-opacity-90'>
                    <img src={img8} className='w-full h-full rounded-lg' alt="No image" />
                </div>
                <div
                    data-aos="zoom-in-out"
                    data-aos-easing="ease-in-out"
                    data-aos-anchor-placement="top-center"
                    className='lg:w-40 h-32 p-2 mt-3 mx-auto hover:bg-opacity-90'>
                    <img src={img9} className='w-full h-full rounded-lg' alt="No image" />
                </div>
                <div
                    data-aos="zoom-in-out-right"
                    data-aos-easing="ease-in-out"
                    data-aos-anchor-placement="top-center"
                    className='lg:w-40 h-32 p-2 mt-3 mx-auto hover:bg-opacity-90'>
                    <img src={img10} className='w-full h-full rounded-lg' alt="No image" />
                </div>
                <div
                    data-aos="zoom-in-down"
                    data-aos-easing="ease-in-out"
                    data-aos-anchor-placement="top-center"
                    className='lg:w-40 h-32 p-2 mt-3 mx-auto hover:bg-opacity-90'>
                    <img src={img11} className='w-full h-full rounded-lg' alt="No image" />
                </div>
                <div
                    data-aos="zoom-in-top"
                    data-aos-easing="ease-in-out"
                    data-aos-anchor-placement="top-center"
                    className='lg:w-40 h-32 p-2 mt-3 mx-auto hover:bg-opacity-90'>
                    <img src={img12} className='w-full h-full rounded-lg' alt="No image" />
                </div>
            </div>
        </div>
    );
};

export default Gallery;