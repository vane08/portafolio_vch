import React from 'react';
import yoVImage from '../assets/cv2.jpg';

const Index = () => {
  return (
    <div className="container-fluid flex md:flex-row items-center justify-center min-h-screen">
      <div className="md:w-1/2 flex flex-col justify-center items-center mb-4 md:mb-0">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 p-4 bg-gray-200 bg-opacity-75 rounded-lg ">Vanessa Cruz Huitrón</h1>
        <img src={yoVImage} alt="Sample" className="w-72 h-72 md:w-96 md:h-96 p-4 bg-gray-200 bg-opacity-75 rounded-lg shadow-lg" />
      </div>
      <div className="md:w-1/2 flex flex-col justify-center items-center md:items-start p-4 bg-gray-200 bg-opacity-75 rounded-lg">
      <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4 p-4 bg-gray-200 bg-opacity-75 rounded-lg "> About me🙋:</h1>
        <p className="text-lg text-gray-700">
          ¡Hello World ! 👋 Mi nombre es Vanessa Cruz Huitrón, soy una entusiasta estudiante del mundo de la tecnología, actualmente con 21 años me encuentro cursando mi último semestre de la carrera de Ingeniería en Sistemas Computacionales en el Tecnológico de Estudios Superiores de Jilotepec (TESJI).

          Soy una persona apasionada por el orden y la responsabilidad, valores que considero fundamentales para obtener resultados sobresalientes en cualquier tarea que emprenda. Además, valoro enormemente la importancia del trabajo en equipo, ya que creo firmemente que la colaboración y la comunicación efectiva son pilares fundamentales para alcanzar metas ambiciosas y superar desafíos.

          Me he enfocado principalmente en bases de datos, desarrollo móvil y redes de comunicación, aunque acabo de entrar a un nuevo lenguaje “Python” donde me estoy adentrando y aprendiendo las maravillosas posibilidades y cosas que puedes hacer con dicho lenguaje ✨
        </p>
      </div>
    </div>
  );
};

export default Index;
