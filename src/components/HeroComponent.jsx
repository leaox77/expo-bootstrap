import React from 'react';

const HeroComponent = () => {
  return (
    <section id="inicio" className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="display-4 fw-bold mb-4">
              Bootstrap 5 en <span className="text-primary">React</span>
            </h1>
            <p className="lead mb-4">
              Bootstrap es el framework de CSS más popular para desarrollar sitios web responsivos y móviles. 
              Combina HTML, CSS y JavaScript para crear interfaces modernas.
            </p>
            <div className="d-flex flex-wrap gap-3">
              
            </div>
          </div>
          <div className="col-lg-6 mt-4 mt-lg-0">
            <div className="bg-white p-4 rounded shadow">
              <h3 className="h5 mb-3">Características principales</h3>
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex align-items-center">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Sistema de grid responsivo
                </li>
                <li className="list-group-item d-flex align-items-center">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Componentes predefinidos
                </li>
                <li className="list-group-item d-flex align-items-center">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Utilidades CSS poderosas
                </li>
                <li className="list-group-item d-flex align-items-center">
                  <i className="bi bi-check-circle-fill text-success me-2"></i>
                  Compatibilidad entre navegadores
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;