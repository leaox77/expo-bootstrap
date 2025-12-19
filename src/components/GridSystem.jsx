import React from 'react';

const GridSystem = () => {
  return (
    <section id="sistema-grid" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">
          <i className="bi bi-grid-3x3-gap me-2 text-primary"></i>
          Sistema de Grid Responsivo
        </h2>
        
        <p className="text-center mb-5">
          Bootstrap utiliza un sistema de grid de 12 columnas que se adapta a diferentes dispositivos.
        </p>
        
        <div className="row mb-4">
          <div className="col-md-4">
            <div className="card h-100 border-primary">
              <div className="card-body text-center">
                <i className="bi bi-phone fs-1 text-primary mb-3"></i>
                <h5 className="card-title">Mobile First</h5>
                <p className="card-text">
                  Diseño pensado primero para dispositivos móviles, que luego se escala a pantallas más grandes.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="card h-100 border-primary">
              <div className="card-body text-center">
                <i className="bi bi-laptop fs-1 text-primary mb-3"></i>
                <h5 className="card-title">Responsive</h5>
                <p className="card-text">
                  Se adapta automáticamente al tamaño de pantalla usando breakpoints predefinidos.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="card h-100 border-primary">
              <div className="card-body text-center">
                <i className="bi bi-grid fs-1 text-primary mb-3"></i>
                <h5 className="card-title">12 Columnas</h5>
                <p className="card-text">
                  Sistema flexible basado en 12 columnas que se pueden combinar de diferentes formas.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <h4 className="mt-5 mb-3">Ejemplo de Grid</h4>
        <div className="row mb-3">
          <div className="col-12 bg-primary text-white p-3 text-center rounded">
            .col-12 (100% ancho en todos los dispositivos)
          </div>
        </div>
        
        <div className="row mb-3">
          <div className="col-md-6 bg-info bg-opacity-25 p-3 text-center rounded">
            .col-md-6 (50% ancho en tablets y mayores)
          </div>
          <div className="col-md-6 bg-warning bg-opacity-25 p-3 text-center rounded">
            .col-md-6 (50% ancho en tablets y mayores)
          </div>
        </div>
        
        <div className="row mb-3">
          <div className="col-lg-4 col-md-6 bg-success bg-opacity-25 p-3 text-center rounded">
            .col-lg-4 .col-md-6
          </div>
          <div className="col-lg-4 col-md-6 bg-danger bg-opacity-25 p-3 text-center rounded">
            .col-lg-4 .col-md-6
          </div>
          <div className="col-lg-4 col-md-12 bg-secondary bg-opacity-25 p-3 text-center rounded">
            .col-lg-4 .col-md-12
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridSystem;