import React from 'react';

// Componente para mostrar cards con imágenes y props
const ImageCard = ({ title, description, imageUrl, tags }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <div className="card-img-top" style={{ 
          height: '200px', 
          backgroundColor: '#e9ecef',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#6c757d'
        }}>
          {imageUrl ? (
            <img src={imageUrl} alt={title} className="img-fluid h-100 w-100 object-fit-cover" />
          ) : (
            <div className="text-center">
              <i className="bi bi-image fs-1"></i>
              <p className="mt-2">Imagen de ejemplo</p>
            </div>
          )}
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          
          <div className="mb-3">
            {tags && tags.map((tag, index) => (
              <span key={index} className="badge bg-secondary me-1 mb-1">{tag}</span>
            ))}
          </div>
          
          <button className="btn btn-outline-primary btn-sm">
            <i className="bi bi-arrow-right me-1"></i>
            Ver más
          </button>
        </div>
        <div className="card-footer text-muted text-center">
          <small>Card con props en React</small>
        </div>
      </div>
    </div>
  );
};

// Componente contenedor
const CardsSection = () => {
  const cardsData = [
    {
      id: 1,
      title: "Componente Card",
      description: "Las cards son contenedores de contenido flexibles y extensibles. Incluyen opciones para encabezados, pies de página, contenido, colores de fondo y potentes opciones de visualización.",
      tags: ["Card", "Componente", "Contenedor"]
    },
    {
      id: 2,
      title: "Navbar Responsivo",
      description: "Barra de navegación responsive que se colapsa en dispositivos móviles. Incluye soporte para branding, navegación y más.",
      tags: ["Navbar", "Responsive", "Navegación"]
    },
    {
      id: 3,
      title: "Formularios",
      description: "Estilos de formularios personalizados, validación y agrupación de elementos. Compatible con todos los elementos de formulario HTML5.",
      tags: ["Formularios", "Input", "Validación"]
    }
  ];

  return (
    <section id="cards" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">
          <i className="bi bi-card-image me-2 text-primary"></i>
          Cards con Props en React
        </h2>
        <p className="text-center mb-5">
          Ejemplo de cómo pasar datos a componentes mediante props en React.
        </p>
        
        <div className="row">
          {cardsData.map(card => (
            <ImageCard
              key={card.id}
              title={card.title}
              description={card.description}
              tags={card.tags}
            />
          ))}
        </div>
        
        
      </div>
    </section>
  );
};

export default CardsSection;