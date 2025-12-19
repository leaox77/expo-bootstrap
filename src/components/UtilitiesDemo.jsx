import React from 'react';

const UtilitiesDemo = () => {
  return (
    <section id="utilidades" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">
          <i className="bi bi-tools me-2 text-primary"></i>
          Utilidades de Bootstrap
        </h2>
        
        <div className="row mb-5">
          <div className="col-lg-6">
            <h4 className="mb-3">Espaciado (Spacing)</h4>
            <div className="border p-4 rounded">
              <div className="bg-primary p-3 mb-2 text-white">.p-3 (padding 1rem)</div>
              <div className="bg-secondary p-4 mb-2 text-white">.p-4 (padding 1.5rem)</div>
              <div className="bg-success p-5 mb-2 text-white">.p-5 (padding 3rem)</div>
              
              <div className="d-flex mt-4">
                <div className="bg-warning me-3 p-3">.me-3 (margin-right 1rem)</div>
                <div className="bg-info p-3">Sin margen derecho</div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6 mt-4 mt-lg-0">
            <h4 className="mb-3">Colores y Fondos</h4>
            <div className="border p-4 rounded">
              <div className="d-flex flex-wrap gap-2 mb-3">
                <span className="badge bg-primary p-2">.bg-primary</span>
                <span className="badge bg-secondary p-2">.bg-secondary</span>
                <span className="badge bg-success p-2">.bg-success</span>
                <span className="badge bg-danger p-2">.bg-danger</span>
                <span className="badge bg-warning p-2">.bg-warning</span>
                <span className="badge bg-info p-2">.bg-info</span>
              </div>
              
              <div className="d-flex flex-wrap gap-2 mb-3">
                <span className="badge text-primary border border-primary p-2">.text-primary</span>
                <span className="badge text-success border border-success p-2">.text-success</span>
                <span className="badge text-danger border border-danger p-2">.text-danger</span>
              </div>
              
              <h5 className="mt-4">Fondos con opacidad</h5>
              <div className="d-flex flex-wrap gap-2">
                <div className="bg-primary bg-opacity-10 p-2 rounded">.bg-opacity-10</div>
                <div className="bg-success bg-opacity-25 p-2 rounded">.bg-opacity-25</div>
                <div className="bg-danger bg-opacity-50 p-2 rounded">.bg-opacity-50</div>
                <div className="bg-warning bg-opacity-75 p-2 rounded">.bg-opacity-75</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-lg-6">
            <h4 className="mb-3">Flexbox</h4>
            <div className="border p-4 rounded">
              <div className="d-flex justify-content-between mb-3 bg-light p-2">
                <div className="p-2 bg-primary text-white">.d-flex .justify-content-between</div>
                <div className="p-2 bg-primary text-white">Item 2</div>
                <div className="p-2 bg-primary text-white">Item 3</div>
              </div>
              
              <div className="d-flex flex-column bg-light p-2">
                <div className="p-2 bg-success text-white mb-2">.d-flex .flex-column</div>
                <div className="p-2 bg-success text-white mb-2">Item 2</div>
                <div className="p-2 bg-success text-white">Item 3</div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6 mt-4 mt-lg-0">
            <h4 className="mb-3">Bordes y Sombras</h4>
            <div className="border p-4 rounded">
              <div className="d-flex flex-wrap gap-3 mb-3">
                <div className="border p-3">.border</div>
                <div className="border border-primary p-3">.border-primary</div>
                <div className="border border-success border-3 p-3">.border-3</div>
              </div>
              
              <div className="d-flex flex-wrap gap-3">
                <div className="shadow-sm p-3">.shadow-sm</div>
                <div className="shadow p-3">.shadow</div>
                <div className="shadow-lg p-3">.shadow-lg</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UtilitiesDemo;