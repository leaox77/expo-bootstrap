import React, { useState } from 'react';

const FormDemo = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    tema: '',
    mensaje: '',
    aceptoTerminos: false
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    setSubmitted(true);
    
    // Resetear después de 3 segundos
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        tema: '',
        mensaje: '',
        aceptoTerminos: false
      });
    }, 3000);
  };

  return (
    <section id="formularios" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">
          <i className="bi bi-input-cursor-text me-2 text-primary"></i>
          Formularios Bootstrap
        </h2>
        
        <div className="row">
          <div className="col-lg-8 mx-auto">
            {submitted && (
              <div className="alert alert-success alert-dismissible fade show" role="alert">
                <i className="bi bi-check-circle-fill me-2"></i>
                <strong>¡Formulario enviado exitosamente!</strong> Los datos se han procesado correctamente.
                <button type="button" className="btn-close" onClick={() => setSubmitted(false)}></button>
              </div>
            )}
            
            <div className="card shadow">
              <div className="card-header bg-primary text-white">
                <h4 className="mb-0">
                  <i className="bi bi-envelope me-2"></i>
                  Formulario de Contacto
                </h4>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  
                  {/* Nombre */}
                  <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">
                      <i className="bi bi-person me-1"></i>
                      Nombre Completo
                    </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="nombre" 
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                    />
                    <div className="form-text">Ingresa tu nombre completo.</div>
                  </div>
                  
                  {/* Email y Teléfono en una fila */}
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label">
                        <i className="bi bi-envelope me-1"></i>
                        Correo Electrónico
                      </label>
                      <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <div className="form-text">ejemplo@correo.com</div>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="telefono" className="form-label">
                        <i className="bi bi-phone me-1"></i>
                        Teléfono
                      </label>
                      <input 
                        type="tel" 
                        className="form-control" 
                        id="telefono" 
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  {/* Select para tema */}
                  <div className="mb-3">
                    <label htmlFor="tema" className="form-label">
                      <i className="bi bi-tag me-1"></i>
                      Tema de Consulta
                    </label>
                    <select 
                      className="form-select" 
                      id="tema" 
                      name="tema"
                      value={formData.tema}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Selecciona un tema</option>
                      <option value="soporte">Soporte Técnico</option>
                      <option value="ventas">Consultas de Ventas</option>
                      <option value="facturacion">Facturación</option>
                      <option value="otros">Otros</option>
                    </select>
                  </div>
                  
                  {/* Área de texto para mensaje */}
                  <div className="mb-3">
                    <label htmlFor="mensaje" className="form-label">
                      <i className="bi bi-chat-left-text me-1"></i>
                      Mensaje
                    </label>
                    <textarea 
                      className="form-control" 
                      id="mensaje" 
                      name="mensaje"
                      rows="4"
                      value={formData.mensaje}
                      onChange={handleChange}
                      required
                    ></textarea>
                    <div className="form-text">Describe tu consulta en detalle.</div>
                  </div>
                  
                  {/* Checkbox */}
                  <div className="mb-3 form-check">
                    <input 
                      type="checkbox" 
                      className="form-check-input" 
                      id="aceptoTerminos" 
                      name="aceptoTerminos"
                      checked={formData.aceptoTerminos}
                      onChange={handleChange}
                      required
                    />
                    <label className="form-check-label" htmlFor="aceptoTerminos">
                      Acepto los términos y condiciones
                    </label>
                  </div>
                  
                  {/* Radio buttons */}
                  <div className="mb-4">
                    <label className="form-label d-block">
                      <i className="bi bi-clock me-1"></i>
                      Preferencia de contacto
                    </label>
                    <div className="form-check form-check-inline">
                      <input 
                        className="form-check-input" 
                        type="radio" 
                        name="preferenciaContacto" 
                        id="preferenciaEmail" 
                        value="email"
                        defaultChecked
                      />
                      <label className="form-check-label" htmlFor="preferenciaEmail">
                        Email
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input 
                        className="form-check-input" 
                        type="radio" 
                        name="preferenciaContacto" 
                        id="preferenciaTelefono" 
                        value="telefono"
                      />
                      <label className="form-check-label" htmlFor="preferenciaTelefono">
                        Teléfono
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input 
                        className="form-check-input" 
                        type="radio" 
                        name="preferenciaContacto" 
                        id="preferenciaAmbos" 
                        value="ambos"
                      />
                      <label className="form-check-label" htmlFor="preferenciaAmbos">
                        Ambos
                      </label>
                    </div>
                  </div>
                  
                  {/* Botones de envío */}
                  <div className="d-flex justify-content-between">
                    <button type="submit" className="btn btn-primary">
                      <i className="bi bi-send me-2"></i>
                      Enviar Mensaje
                    </button>
                    <button type="reset" className="btn btn-outline-secondary">
                      <i className="bi bi-arrow-clockwise me-2"></i>
                      Limpiar Formulario
                    </button>
                  </div>
                </form>
              </div>
            </div>
            
            {/* Ejemplos de formularios */}
            <div className="row mt-5">
              <div className="col-md-6 mb-4">
                <div className="card h-100">
                  <div className="card-header bg-light">
                    <h5 className="mb-0">Formulario de Inicio de Sesión</h5>
                  </div>
                  <div className="card-body">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="usuario" className="form-label">Usuario</label>
                        <input type="text" className="form-control" id="usuario" placeholder="Ingresa tu usuario" />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="contrasena" className="form-label">Contraseña</label>
                        <input type="password" className="form-control" id="contrasena" placeholder="Ingresa tu contraseña" />
                      </div>
                      <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="recordarme" />
                        <label className="form-check-label" htmlFor="recordarme">Recordarme</label>
                      </div>
                      <button type="submit" className="btn btn-primary w-100">Iniciar Sesión</button>
                    </form>
                  </div>
                </div>
              </div>
              
              <div className="col-md-6 mb-4">
                <div className="card h-100">
                  <div className="card-header bg-light">
                    <h5 className="mb-0">Validación de Formularios</h5>
                  </div>
                  <div className="card-body">
                    <div className="mb-3">
                      <label htmlFor="inputValido" className="form-label">Campo válido</label>
                      <input 
                        type="text" 
                        className="form-control is-valid" 
                        id="inputValido" 
                        defaultValue="Valor correcto"
                      />
                      <div className="valid-feedback">¡Este campo es válido!</div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="inputInvalido" className="form-label">Campo inválido</label>
                      <input 
                        type="text" 
                        className="form-control is-invalid" 
                        id="inputInvalido" 
                        defaultValue="Valor incorrecto"
                      />
                      <div className="invalid-feedback">Por favor, ingresa un valor válido.</div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="inputDeshabilitado" className="form-label">Campo deshabilitado</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="inputDeshabilitado" 
                        disabled 
                        defaultValue="No editable"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-4 p-3 bg-light rounded">
              <h5>Características de Formularios Bootstrap:</h5>
              <ul>
                <li><strong>Controles de formulario:</strong> Inputs, selects, textareas, checkboxes, radio buttons</li>
                <li><strong>Layouts:</strong> Formularios en línea, horizontales y en grilla</li>
                <li><strong>Validación:</strong> Estados de validación (válido/inválido) con retroalimentación</li>
                <li><strong>Accesibilidad:</strong> Etiquetas adecuadas y estados de focus</li>
                <li><strong>Personalización:</strong> Tamaños, colores y estilos personalizables</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormDemo;