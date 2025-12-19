import React from 'react';

const CarouselDemo = () => {
  const images = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      title: "Componentes Bootstrap",
      description: "Bootstrap ofrece una amplia variedad de componentes listos para usar.",
      alt: "Componentes de Bootstrap"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "Diseño Responsivo",
      description: "Crea sitios web que se adaptan a cualquier dispositivo.",
      alt: "Diseño responsivo"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      title: "Utilidades CSS",
      description: "Clases utilitarias para espaciado, colores, flexbox y más.",
      alt: "Utilidades CSS"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "React + Bootstrap",
      description: "Combina la potencia de React con los componentes de Bootstrap.",
      alt: "React con Bootstrap"
    }
  ];

  return (
    <section id="carrusel" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">
          <i className="bi bi-images me-2 text-primary"></i>
          Carrusel de Imágenes
        </h2>
        
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
              
              {/* Indicadores */}
              <div className="carousel-indicators">
                {images.map((_, index) => (
                  <button 
                    key={index}
                    type="button" 
                    data-bs-target="#carouselExampleCaptions" 
                    data-bs-slide-to={index}
                    className={index === 0 ? "active" : ""}
                    aria-current={index === 0 ? "true" : "false"}
                    aria-label={`Slide ${index + 1}`}
                  ></button>
                ))}
              </div>
              
              {/* Contenido del carrusel */}
              <div className="carousel-inner rounded shadow">
                {images.map((image, index) => (
                  <div key={image.id} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                    <img 
                      src={image.url} 
                      className="d-block w-100" 
                      alt={image.alt}
                      style={{ height: "500px", objectFit: "cover" }}
                    />
                    <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 p-4 rounded">
                      <h5>{image.title}</h5>
                      <p>{image.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Controles */}
              <button 
                className="carousel-control-prev" 
                type="button" 
                data-bs-target="#carouselExampleCaptions" 
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Anterior</span>
              </button>
              <button 
                className="carousel-control-next" 
                type="button" 
                data-bs-target="#carouselExampleCaptions" 
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Siguiente</span>
              </button>
            </div>
            
            <div className="row mt-4">
              {images.map(image => (
                <div key={image.id} className="col-6 col-md-3 mb-3">
                  <div className="card h-100">
                    <img 
                      src={image.url} 
                      className="card-img-top" 
                      alt={image.alt}
                      style={{ height: "150px", objectFit: "cover" }}
                    />
                    <div className="card-body p-2">
                      <p className="card-text small">{image.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4 p-3 bg-white rounded shadow-sm">
              <h5>Características del Carrusel:</h5>
              <div className="row">
                <div className="col-md-6">
                  <ul>
                    <li>Navegación automática o manual</li>
                    <li>Indicadores de posición</li>
                    <li>Controles de anterior/siguiente</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul>
                    <li>Transiciones suaves (fade o slide)</li>
                    <li>Texto descriptivo en cada slide</li>
                    <li>Totalmente responsivo</li>
                  </ul>
                </div>
              </div>
              <p className="mb-0">
                <strong>Nota:</strong> El carrusel requiere JavaScript de Bootstrap para funcionar correctamente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselDemo;