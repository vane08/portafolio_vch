import React from 'react';
import Whatsapp from '../assets/whatsapp.png';
import Instagram from '../assets/instagram.png';
import Facebook from '../assets/facebook.png';
import Git from '../assets/github.png';

const Contacto = () => {
  const cards = [
    {
      titulo: 'Whatsapp',
      imagen: Whatsapp,
      url: 'https://wa.me/525525257940',
    },
    {
      titulo: 'Instagram',
      imagen: Instagram,
      url: 'https://www.instagram.com/08_vch?utm_source=qr&igsh=MWlhd253NGRibXQ2bg==', 
    },
    {
      titulo: 'Facebook',
      imagen: Facebook,
      url: 'https://www.facebook.com/profile.php?id=100085922498240&mibextid=ZbWKwL',
    },
    {
      titulo: 'GitHub',
      imagen: Git,
      url: 'https://github.com/vane08',
    },
  ];

  return (
    <div className="container-fluid p-4 rounded-lg">
      <div className="flex justify-center items-center mb-6">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 p-4 bg-gray-200 bg-opacity-75 rounded-lg">
          Contactame
        </h1>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap justify-center space-y-8 md:space-y-0 md:space-x-8">
        {cards.map((card, index) => (
          <div key={index} className="flex flex-col items-center p-4 bg-white bg-opacity-75 rounded-lg shadow-lg max-w-xs">
            <a href={card.url} target="_blank" rel="noopener noreferrer">
              <img src={card.imagen} alt={card.titulo} className="w-32 h-32 md:w-40 md:h-40 p-2 bg-gray-200 bg-opacity-75 rounded-lg shadow-lg" />
            </a>
            <h2 className="text-2xl font-bold text-gray-800 mt-4">{card.titulo}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contacto;
