import React from 'react';
import LogoHtml from '../assets/html.png';
import LogoSobel from '../assets/sobel.png';
import LogoTabu from '../assets/rutas.jpeg';
import LogoRegresar from '../assets/regresar.png';
import { NavLink } from 'react-router-dom';

const Html = () => {
  const lenguajes = [
    {
      titulo: 'Proyectos Realizados',
      descripcion: 'Ver proyectos...',
      imagen: LogoHtml,
      proyectos: [
        {
          titulo: 'Colvoluciones con Sobel',
          descripcion: 'Materia: Graficación',
          imagen: LogoSobel,
          url: 'https://github.com/vane08/Colvoluciones_con_Sobel',
        },
        {
          titulo: 'API Templado Simulado',
          descripcion: 'Materia: Programación Logica Funcional',
          imagen: LogoTabu,
          url: 'https://github.com/vane08/API_Templado_Simulado',
        },
        {
          titulo: 'API Hill Climbing Iter EXAMEN',
          descripcion: 'Materia: Programación Logica Funcional',
          imagen: LogoTabu,
          url: 'https://github.com/vane08/API_Hill_Climbing_Iter_EXAMEN',
        }
      ],
    },
  ];

  return (
    <div className="container-fluid p-4 rounded-lg">
      <div className="flex justify-center items-center mb-6">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 p-4 bg-gray-200 bg-opacity-75 rounded-lg">
          HTML
        </h1>
      </div>
      <div className="flex justify-start w-full mb-6">
      <NavLink to="/trabajos" className="flex items-center p-2 bg-gray-200 bg-opacity-75 rounded-lg shadow-lg">
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


export default Html