import React from 'react';

const NavbarComponent = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <i className="bi bi-bootstrap-fill me-2 fs-3"></i>
          <span className="fw-bold">Exposición Bootstrap</span>
        </a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#inicio">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#sistema-grid">Sistema Grid</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#componentes">Componentes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#acordeon">Acordeón</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#carrusel">Carrusel</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#formularios">Formularios</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#utilidades">Utilidades</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#cards">Cards</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;