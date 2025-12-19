import React, { useState } from 'react';

const ComponentsDemo = () => {
  const [activeTab, setActiveTab] = useState('buttons');
  
  const buttons = [
    { type: 'primary', text: 'Primario', icon: 'bi-star' },
    { type: 'secondary', text: 'Secundario', icon: 'bi-gear' },
    { type: 'success', text: 'Éxito', icon: 'bi-check-circle' },
    { type: 'danger', text: 'Peligro', icon: 'bi-exclamation-triangle' },
    { type: 'warning', text: 'Advertencia', icon: 'bi-exclamation-circle' },
    { type: 'info', text: 'Información', icon: 'bi-info-circle' },
  ];

  const alerts = [
    { type: 'primary', message: 'Esta es una alerta primaria.' },
    { type: 'success', message: '¡Operación completada con éxito!' },
    { type: 'warning', message: 'Advertencia: esto requiere su atención.' },
    { type: 'danger', message: 'Error: algo salió mal.' },
  ];

  const badges = [
    { type: 'primary', text: 'Nuevo' },
    { type: 'secondary', text: 'Beta' },
    { type: 'success', text: 'Activo' },
    { type: 'danger', text: 'Eliminado' },
    { type: 'warning', text: 'Pendiente' },
  ];

  return (
    <section id="componentes" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">
          <i className="bi bi-puzzle me-2 text-primary"></i>
          Componentes de Bootstrap
        </h2>
        
        {/* Tabs de navegación */}
        <ul className="nav nav-tabs justify-content-center mb-4" id="componentTabs" role="tablist">
          <li className="nav-item" role="presentation">
            <button 
              className={`nav-link ${activeTab === 'buttons' ? 'active' : ''}`} 
              onClick={() => setActiveTab('buttons')}
            >
              <i className="bi bi-toggle-on me-1"></i> Botones
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button 
              className={`nav-link ${activeTab === 'alerts' ? 'active' : ''}`} 
              onClick={() => setActiveTab('alerts')}
            >
              <i className="bi bi-exclamation-triangle me-1"></i> Alertas
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button 
              className={`nav-link ${activeTab === 'badges' ? 'active' : ''}`} 
              onClick={() => setActiveTab('badges')}
            >
              <i className="bi bi-bookmark me-1"></i> Badges
            </button>
          </li>
        </ul>
        
        {/* Contenido de las tabs */}
        <div className="tab-content p-4 bg-white rounded shadow">
          {/* Botones */}
          <div className={`tab-pane fade ${activeTab === 'buttons' ? 'show active' : ''}`}>
            <h4 className="mb-4">Botones</h4>
            <div className="row mb-4">
              {buttons.map((btn, index) => (
                <div className="col-md-4 mb-3" key={index}>
                  <button className={`btn btn-${btn.type} w-100`}>
                    <i className={`${btn.icon} me-2`}></i>
                    {btn.text}
                  </button>
                </div>
              ))}
            </div>
            
            <div className="row">
              <div className="col-md-6 mb-3">
                <h5>Botones Outline</h5>
                <button className="btn btn-outline-primary me-2">Primario</button>
                <button className="btn btn-outline-success me-2">Éxito</button>
                <button className="btn btn-outline-danger">Peligro</button>
              </div>
              <div className="col-md-6 mb-3">
                <h5>Tamaños de botones</h5>
                <button className="btn btn-primary btn-sm me-2">Pequeño</button>
                <button className="btn btn-primary me-2">Normal</button>
                <button className="btn btn-primary btn-lg">Grande</button>
              </div>
            </div>
          </div>
          
          {/* Alertas */}
          <div className={`tab-pane fade ${activeTab === 'alerts' ? 'show active' : ''}`}>
            <h4 className="mb-4">Alertas</h4>
            {alerts.map((alert, index) => (
              <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert" key={index}>
                <i className={`bi bi-${alert.type === 'success' ? 'check-circle' : alert.type === 'warning' ? 'exclamation-triangle' : alert.type === 'danger' ? 'exclamation-octagon' : 'info-circle'} me-2`}></i>
                {alert.message}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>
            ))}
          </div>
          
          {/* Badges */}
          <div className={`tab-pane fade ${activeTab === 'badges' ? 'show active' : ''}`}>
            <h4 className="mb-4">Badges</h4>
            <p className="mb-4">
              Los badges se utilizan para mostrar pequeñas cantidades de información.
            </p>
            
            <div className="mb-4">
              <h5>Badges simples</h5>
              {badges.map((badge, index) => (
                <span className={`badge bg-${badge.type} me-2 fs-6 p-2`} key={index}>
                  {badge.text}
                </span>
              ))}
            </div>
            
            <div>
              <h5>Badges en botones</h5>
              <button type="button" className="btn btn-primary me-3">
                Notificaciones <span className="badge bg-danger">5</span>
              </button>
              <button type="button" className="btn btn-outline-secondary">
                Mensajes <span className="badge bg-info">12</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComponentsDemo;