import React from 'react';
import img1 from '../../../assets/images/banner/img1.jpg'
import img2 from '../../../assets/images/banner/privatecar.jfif'
import img3 from '../../../assets/images/banner/bus3.jfif'
import img4 from '../../../assets/images/banner/img4.jpg'
import img5 from '../../../assets/images/banner/bus2.jfif'
import img6 from '../../../assets/images/banner/truck1.jfif'
const Banner = () => {
  return (
  <div className="carousel w-full h-[600px] my-7">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full rounded-xl" />
        <div className="absolute rounded-xl h-full flex items-center left-0 top-0 bg-gradient-to-r from-black to-white-500">
          <div className='text-white pl-12  i space-y-7 lg:w-1/2 md:w-1/2'>
            <h2 className='lg:text-6xl md:text-6xl text-4xl  font-bold'>Here Your Best Quality Car Toys </h2>
            <p className='text-2xl'>There are many variations car toys of available ,but the majority have suffered alteration in some form </p>
            <div className=''>
              <button className="btn btn-outline btn-primary mr-5">Discover Toys</button>
              <button className="btn btn-outline btn-error">Latest Toy Car</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide6" className="btn btn-circle mr-5">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full" />
        <div className="absolute rounded-xl h-full flex items-center left-0 top-0 bg-gradient-to-r from-black to-white-500">
          <div className='text-white pl-12  i space-y-7 lg:w-1/2 md:w-1/2'>
            <h2 className='lg:text-6xl md:text-6xl text-4xl  font-bold'>Here Your Best Quality Car Toys </h2>
            <p className='text-2xl'>There are many variations car toys of available ,but the majority have suffered alteration in some form </p>
            <div className=''>
              <button className="btn btn-outline btn-primary mr-5">Discover More</button>
              <button className="btn btn-outline btn-error">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle mr-5">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full" />
        <div className="absolute rounded-xl h-full flex items-center left-0 top-0 bg-gradient-to-r from-black to-white-500">
          <div className='text-white pl-12  i space-y-7 lg:w-1/2 md:w-1/2'>
            <h2 className='lg:text-6xl md:text-6xl text-4xl  font-bold'>Here Your Best Quality Car Toys  </h2>
            <p className='text-2xl'>There are many variations car toys of available ,but the majority have suffered alteration in some form </p>
            <div className=''>
              <button className="btn btn-outline btn-primary mr-5">Discover More</button>
              <button className="btn btn-outline btn-error">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle mr-5">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full" />
        <div className="absolute rounded-xl h-full flex items-center left-0 top-0 bg-gradient-to-r from-black to-white-500">
          <div className='text-white pl-12  i space-y-7 lg:w-1/2 md:w-1/2'>
            <h2 className='lg:text-6xl md:text-6xl text-4xl  font-bold'>Here Your Best Quality Car Toys  </h2>
            <p className='text-2xl'>There are many variations car toys of available ,but the majority have suffered alteration in some form </p>
            <div className=''>
              <button className="btn btn-outline btn-primary mr-5">Discover More</button>
              <button className="btn btn-outline btn-error">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle mr-5">❮</a>
          <a href="#slide5" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img src={img5} className="w-full" />
        <div className="absolute rounded-xl h-full flex items-center left-0 top-0 bg-gradient-to-r from-black to-white-500">
          <div className='text-white pl-12  i space-y-7 lg:w-1/2 md:w-1/2'>
            <h2 className='lg:text-6xl md:text-6xl text-4xl  font-bold'>Here Your Best Quality Car Toys  </h2>
            <p className='text-2xl'>There are many variations car toys of available ,but the majority have suffered alteration in some form </p>
            <div className=''>
              <button className="btn btn-outline btn-primary mr-5">Discover More</button>
              <button className="btn btn-outline btn-error">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle mr-5">❮</a>
          <a href="#slide6" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="6" className="carousel-item relative w-full">
        <img src={img6} className="w-full" />
        <div className="absolute rounded-xl h-full flex items-center left-0 top-0 bg-gradient-to-r from-black to-white-500">
          <div className='text-white pl-12  i space-y-7 lg:w-1/2 md:w-1/2'>
            <h2 className='lg:text-6xl md:text-6xl text-4xl  font-bold'>Here Your Best Quality Car Toys  </h2>
            <p className='text-2xl'>There are many variations car toys of available ,but the majority have suffered alteration in some form </p>
            <div className=''>
              <button className="btn btn-outline btn-primary mr-5">Discover More</button>
              <button className="btn btn-outline btn-error">Latest Project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide5" className="btn btn-circle mr-5">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
};

export default Banner;