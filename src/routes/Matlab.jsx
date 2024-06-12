import React from 'react';
import LogoMatlab from '../assets/matlab.png'; 
import LogoMate from '../assets/mate.jpeg';
import LogoIntegral from '../assets/Integral.jpeg';
import LogoAmorfa from '../assets/amorfa.jpeg';
import LogoDefinida from '../assets/definida.jpeg';
import LogoMedio from '../assets/medio.png';
import LogoFundamental from '../assets/fundamental.jpg';
import LogoSuma from '../assets/suma.jpg';
import LogoPrimitiva from '../assets/primitiva.jpeg';
import LogoSuperior from '../assets/superior.png';
import LogoRegresar from '../assets/regresar.png';
import { NavLink } from 'react-router-dom';

const Matlab = () => {
  const lenguajes = [
    {
      titulo: 'Proyectos Realizados',
      descripcion: 'Ver proyectos...',
      imagen: LogoMatlab,
      proyectos: [
        {
          titulo: 'Modelos Matemáticos',
          descripcion: 'Materia: Cálculo Integral ',
          imagen: LogoMate,
          url: 'https://github.com/vane08/Modelos_Matematicos',
        },
        {
          titulo: 'Ejercicios Cálculo Integral',
          descripcion: 'Materia: Cálculo Integral ',
          imagen: LogoIntegral,
          url: 'https://github.com/vane08/Calculo-Integral',
        },
        {
          titulo: 'Figuras Amorfas',
          descripcion: 'Materia: Cálculo Integral ',
          imagen: LogoAmorfa,
          url: 'https://github.com/vane08/Figuras_Amorfas',
        },
        {
          titulo: 'Calculo de integrales definidas',
          descripcion: 'Materia: Cálculo Integral ',
          imagen: LogoDefinida,
          url: 'https://github.com/vane08/Calculo_de_integrales_definidas',
        },
        {
          titulo: 'Teorema del valor intermedio',
          descripcion: 'Materia: Cálculo Integral ',
          imagen: LogoMedio,
          url: 'https://github.com/vane08/Teorema_del_valor_intermedio',
        },
        {
          titulo: 'Teorema Fundamental del Cálculo',
          descripcion: 'Materia: Cálculo Integral ',
          imagen: LogoFundamental,
          url: 'https://github.com/vane08/Teorema_Fundamental_del_Calculo',
        },
        {
          titulo: 'Sumas de Riemann',
          descripcion: 'Materia: Cálculo Integral ',
          imagen: LogoSuma,
          url: 'https://github.com/vane08/Sumas_de_Riemann',
        },
        {
          titulo: 'Función Primitiva',
          descripcion: 'Materia: Cálculo Integral ',
          imagen: LogoPrimitiva,
          url: 'https://github.com/vane08/Funcion_Primitiva',
        },
        {
          titulo: 'Sumas superiores e inferiores',
          descripcion: 'Materia: Cálculo Integral ',
          imagen: LogoSuperior,
          url: 'https://github.com/vane08/Sumas-superiores-e-inferiores',
        }
      ],
    },
  ];

  return (
    <div className="container-fluid p-4 rounded-lg">
      <div className="flex justify-center items-center mb-6">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 p-4 bg-gray-200 bg-opacity-75 rounded-lg">
          MATLAB
        </h1>
      </div>
      <div className="flex justify-start w-full mb-6">
      <NavLink
          to="/trabajos"
          className="flex items-center p-2 bg-gray-200 bg-opacity-75 rounded-lg shadow-lg">
          <img src={LogoRegresar} alt="Back Icon" className="w-10 h-10" />
          {/* <span className="ml-2 text-lg text-gray-800">Regresar</span> */}
        </NavLink>
      </div>
      <div className="flex flex-col items-center space-y-8">
        {lenguajes.map((lenguaje, index) => (
          <div key={index} className="w-full flex flex-col items-center p-4 bg-white bg-opacity-75 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{lenguaje.titulo}</h2>
            {lenguaje.proyectos && (
              <div className="w-full overflow-x-auto">
                <div className="flex flex-row space-x-4">
                  {lenguaje.proyectos.map((proyecto, projIndex) => (
                    <a
                      key={projIndex}
                      href={proyecto.url || '#'}
                      target={proyecto.url ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className="flex flex-col items-center p-4 bg-white bg-opacity-75 rounded-lg shadow-lg min-w-[200px]"
                    >
                      <img src={proyecto.imagen} alt={proyecto.titulo} className="w-32 h-32 md:w-40 md:h-40 p-2 bg-gray-200 bg-opacity-75 rounded-lg shadow-lg" />
                      <h3 className="text-xl font-bold text-gray-800 mt-2">{proyecto.titulo}</h3>
                      <p className="text-md text-gray-700">{proyecto.descripcion}</p>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Matlab