import React from 'react';

const FooterComponent = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark text-white py-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h5 className="mb-3">
              <i className="bi bi-bootstrap-fill me-2 text-primary"></i>
              Exposición Bootstrap + React
            </h5>
            <p className="text-white-50">
              Demostración completa de los elementos más importantes de Bootstrap 5 
              integrados en una aplicación React. Ideal para presentaciones y exposiciones.
            </p>
            <div className="d-flex gap-3">
              <a href="https://getbootstrap.com" className="text-white-50" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-bootstrap fs-5"></i>
              </a>
              <a href="https://react.dev" className="text-white-50" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-react fs-5"></i>
              </a>
              <a href="https://github.com" className="text-white-50" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-github fs-5"></i>
              </a>
              <a href="https://vitejs.dev" className="text-white-50" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-lightning-charge fs-5"></i>
              </a>
            </div>
          </div>
          
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h5 className="mb-3">Temas cubiertos</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#sistema-grid" className="text-white-50 text-decoration-none">
                  <i className="bi bi-grid-3x3-gap me-1"></i>
                  Sistema Grid
                </a>
              </li>
              <li className="mb-2">
                <a href="#componentes" className="text-white-50 text-decoration-none">
                  <i className="bi bi-puzzle me-1"></i>
                  Componentes UI
                </a>
              </li>
              <li className="mb-2">
                <a href="#acordeon" className="text-white-50 text-decoration-none">
                  <i className="bi bi-menu-button-wide me-1"></i>
                  Acordeón
                </a>
              </li>
              <li className="mb-2">
                <a href="#carrusel" className="text-white-50 text-decoration-none">
                  <i className="bi bi-images me-1"></i>
                  Carrusel
                </a>
              </li>
              <li className="mb-2">
                <a href="#formularios" className="text-white-50 text-decoration-none">
                  <i className="bi bi-input-cursor-text me-1"></i>
                  Formularios
                </a>
              </li>
              <li className="mb-2">
                <a href="#utilidades" className="text-white-50 text-decoration-none">
                  <i className="bi bi-tools me-1"></i>
                  Utilidades CSS
                </a>
              </li>
              <li>
                <a href="#cards" className="text-white-50 text-decoration-none">
                  <i className="bi bi-card-image me-1"></i>
                  Cards con Props
                </a>
              </li>
            </ul>
          </div>
          
          <div className="col-lg-4">
            <h5 className="mb-3">Recursos Importantes</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a 
                  href="https://getbootstrap.com/docs/5.3/getting-started/introduction/" 
                  className="text-white-50 text-decoration-none" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-box-arrow-up-right me-1"></i>
                  Documentación Oficial Bootstrap
                </a>
              </li>
              <li className="mb-2">
                <a 
                  href="https://react.dev/learn" 
                  className="text-white-50 text-decoration-none" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-box-arrow-up-right me-1"></i>
                  Aprender React
                </a>
              </li>
              <li className="mb-2">
                <a 
                  href="https://vitejs.dev/guide/" 
                  className="text-white-50 text-decoration-none" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-box-arrow-up-right me-1"></i>
                  Guía de Vite
                </a>
              </li>
              <li className="mb-2">
                <a 
                  href="https://icons.getbootstrap.com/" 
                  className="text-white-50 text-decoration-none" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-box-arrow-up-right me-1"></i>
                  Bootstrap Icons
                </a>
              </li>
              <li>
                <a 
                  href="https://unsplash.com/" 
                  className="text-white-50 text-decoration-none" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-box-arrow-up-right me-1"></i>
                  Imágenes de Unsplash
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="my-4 border-secondary" />
        
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <div className="d-flex align-items-center">
              <div className="bg-primary rounded-circle p-2 me-3">
                <i className="bi bi-laptop text-white fs-5"></i>
              </div>
              <div>
                <p className="mb-0 fw-bold">Exposición Bootstrap</p>
                <small className="text-white-50">Para examen oral - Presentación técnica</small>
              </div>
            </div>
          </div>
          
          <div className="col-md-6">
            <div className="d-flex flex-wrap justify-content-center justify-content-md-end gap-3">
              <div className="text-center">
                <div className="bg-secondary rounded-circle p-2 d-inline-flex mb-1">
                  <i className="bi bi-filetype-js text-white fs-5"></i>
                </div>
                <p className="small mb-0 text-white-50">JavaScript</p>
              </div>
              
              <div className="text-center">
                <div className="bg-secondary rounded-circle p-2 d-inline-flex mb-1">
                  <i className="bi bi-filetype-css text-white fs-5"></i>
                </div>
                <p className="small mb-0 text-white-50">CSS</p>
              </div>
              
              <div className="text-center">
                <div className="bg-secondary rounded-circle p-2 d-inline-flex mb-1">
                  <i className="bi bi-filetype-html text-white fs-5"></i>
                </div>
                <p className="small mb-0 text-white-50">HTML5</p>
              </div>
              
              <div className="text-center">
                <div className="bg-secondary rounded-circle p-2 d-inline-flex mb-1">
                  <i className="bi bi-lightning-charge text-white fs-5"></i>
                </div>
                <p className="small mb-0 text-white-50">Vite</p>
              </div>
            </div>
          </div>
        </div>
        
        <hr className="my-4 border-secondary" />
        
        <div className="row">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0 text-white-50">
              &copy; {currentYear} Exposición Bootstrap. Creado para fines educativos.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p className="mb-0">
              <span className="text-white-50">Hecho con </span>
              <i className="bi bi-heart-fill text-danger mx-1"></i>
              <span className="text-white-50"> usando </span>
              <span className="text-primary fw-bold">React</span>
              <span className="text-white-50"> + </span>
              <span className="text-primary fw-bold">Bootstrap 5</span>
            </p>
          </div>
        </div>
        
        <div className="row mt-3">
          <div className="col-12 text-center">
            <div className="alert alert-dark alert-sm d-inline-flex align-items-center mb-0" role="alert">
              <i className="bi bi-info-circle me-2"></i>
              <small>
                Esta aplicación demuestra tanto el uso de Bootstrap via CDN (index.html) como via importación en React (App.jsx)
              </small>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;