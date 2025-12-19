import React from 'react';

const AccordionDemo = () => {
  return (
    <section id="acordeon" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">
          <i className="bi bi-menu-button-wide me-2 text-primary"></i>
          Componente Acordeón
        </h2>
        
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="accordion" id="accordionExample">
              
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button 
                    className="accordion-button" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#collapseOne" 
                    aria-expanded="true" 
                    aria-controls="collapseOne"
                  >
                    <i className="bi bi-question-circle me-2"></i>
                    ¿Qué es Bootstrap?
                  </button>
                </h2>
                <div 
                  id="collapseOne" 
                  className="accordion-collapse collapse show" 
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong>Bootstrap</strong> es un framework de CSS de código abierto para desarrollar sitios web y aplicaciones web. Contiene plantillas de diseño basadas en HTML y CSS para tipografía, formularios, botones, navegación y otros componentes de la interfaz, así como extensiones de JavaScript opcionales.
                  </div>
                </div>
              </div>
              
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button 
                    className="accordion-button collapsed" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#collapseTwo" 
                    aria-expanded="false" 
                    aria-controls="collapseTwo"
                  >
                    <i className="bi bi-grid-3x3-gap me-2"></i>
                    Sistema Grid de Bootstrap
                  </button>
                </h2>
                <div 
                  id="collapseTwo" 
                  className="accordion-collapse collapse" 
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    El <strong>sistema grid</strong> de Bootstrap utiliza una serie de contenedores, filas y columnas para diseñar y alinear contenido. Está construido con flexbox y es totalmente responsivo. El sistema grid se basa en un diseño de 12 columnas con seis breakpoints predeterminados.
                  </div>
                </div>
              </div>
              
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button 
                    className="accordion-button collapsed" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#collapseThree" 
                    aria-expanded="false" 
                    aria-controls="collapseThree"
                  >
                    <i className="bi bi-palette me-2"></i>
                    Personalización de Bootstrap
                  </button>
                </h2>
                <div 
                  id="collapseThree" 
                  className="accordion-collapse collapse" 
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Bootstrap puede ser personalizado de varias formas:
                    <ul className="mt-2">
                      <li>Usando las variables CSS personalizadas</li>
                      <li>Utilizando Sass para modificar los archivos fuente</li>
                      <li>Usando temas oficiales de Bootstrap</li>
                      <li>Creando tus propias clases CSS para sobrescribir los estilos</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button 
                    className="accordion-button collapsed" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#collapseFour" 
                    aria-expanded="false" 
                    aria-controls="collapseFour"
                  >
                    <i className="bi bi-phone me-2"></i>
                    Diseño Responsivo
                  </button>
                </h2>
                <div 
                  id="collapseFour" 
                  className="accordion-collapse collapse" 
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Bootstrap es <strong>mobile-first</strong>, lo que significa que el diseño está optimizado para dispositivos móviles y luego se escala para pantallas más grandes. Utiliza media queries para adaptar la interfaz a diferentes tamaños de pantalla:
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <ul>
                          <li><code>.col-sm-*</code>: ≥576px</li>
                          <li><code>.col-md-*</code>: ≥768px</li>
                          <li><code>.col-lg-*</code>: ≥992px</li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul>
                          <li><code>.col-xl-*</code>: ≥1200px</li>
                          <li><code>.col-xxl-*</code>: ≥1400px</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
            
            <div className="mt-4 p-3 bg-light rounded">
              <h5>Notas para la exposición:</h5>
              <p className="mb-0">
                El componente <strong>acordeón</strong> permite mostrar/ocultar contenido de manera organizada. 
                Utiliza JavaScript de Bootstrap para las animaciones de colapso/expansión. 
                Cada ítem del acordeón tiene un <code>data-bs-target</code> que vincula al contenido correspondiente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccordionDemo;