import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Index from "./routes/Index";
import Trabajos from './routes/Trabajos';
import Contacto from './routes/Contacto';
import Php from './routes/Php';
import Html from './routes/Html';
import Matlab from './routes/Matlab';
import ContactoDinamico from './routes/ContactoDinamico';
import backgroundImage from './assets/bg6.jpeg';
import Image from './assets/hand.png';

const App = () => {
  return (
    <div className=''>
      <header className="bg-gray-100 shadow-md py-4">
        <div className="container-fluid mx-auto flex justify-between items-center px-6">
          <div className="text-2xl font-bold text-gray-800">
            <NavLink to="/">
              <img src={Image} alt="Logo" className="h-10" /> {/* Ajusta la clase para el tamaño */}
            </NavLink>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800">Portafolio de Evidencias</h1> {/* Ajusta el tamaño del texto */}
          <nav className="space-x-6">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive ? "text-blue-500" : "text-gray-600 hover:text-gray-800"
              }
            >
              Inicio
            </NavLink>
            <NavLink 
              to="/trabajos" 
              className={({ isActive }) => 
                isActive ? "text-blue-500" : "text-gray-600 hover:text-gray-800"
              }
            >
              Trabajos
            </NavLink>
            <NavLink 
              to="/contacto" 
              className={({ isActive }) => 
                isActive ? "text-blue-500" : "text-gray-600 hover:text-gray-800"
              }
            >
              Contacto
            </NavLink>
          </nav>
        </div>
      </header>
      <main 
        className="container mx-auto  px-4 min-h-screen"
        style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/trabajos' element={<Trabajos />} />
          <Route path='/trabajos/php' element={<Php />} />
          <Route path='/trabajos/html' element={<Html />} />
          <Route path='/trabajos/matlab' element={<Matlab />} />
          //<Route path='/contacto' element={<Contacto/>} />
          <Route path='/contacto/:nombre/:apellido' element={<ContactoDinamico />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
