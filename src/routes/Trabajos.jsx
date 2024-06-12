import React from 'react';
import LogoPhp from '../assets/php.png';
import LogoHtml from '../assets/html.png';
import LogoMatlab from '../assets/matlab.png';
import { NavLink } from 'react-router-dom';

const Trabajos = () => {
  return (
    <>
      <div className="container-fluid flex md:flex-row items-center justify-center min-h-screen p-4">
      <div className="md:w-1/2 flex flex-col justify-center items-center mb-4 md:mb-0">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 p-4 bg-gray-200 bg-opacity-75 rounded-lg ">PHP</h1>
          <NavLink to="/trabajos/php">
            <img src={LogoPhp} alt="Sample" className="w-72 h-72 md:w-96 md:h-96 p-4 bg-gray-200 bg-opacity-75 rounded-lg shadow-lg" />
          </NavLink>
      </div>
      <div className="md:w-1/2 flex flex-col justify-center items-center mb-4 md:mb-0">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 p-4 bg-gray-200 bg-opacity-75 rounded-lg ">HTML</h1>
        <NavLink to="/trabajos/html">
            <img src={LogoHtml} alt="Sample" className="w-72 h-72 md:w-96 md:h-96 p-4 bg-gray-200 bg-opacity-75 rounded-lg shadow-lg" />
        </NavLink>
      </div>
      <div className="md:w-1/2 flex flex-col justify-center items-center mb-4 md:mb-0">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 p-4 bg-gray-200 bg-opacity-75 rounded-lg ">MATLAB</h1>
        <NavLink to="/trabajos/matlab">  
           <img src={LogoMatlab} alt="Sample" className="w-72 h-72 md:w-96 md:h-96 p-4 bg-gray-200 bg-opacity-75 rounded-lg shadow-lg" />
        </NavLink>
      </div>
    </div>
    </>
  );
};

export default Trabajos;
