import React, { useState } from 'react';
import { Menu, X, Mail, Phone, MapPin, Github, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import './App.css';

const SinglePageApp = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      console.log('Formulario enviado:', formData);
      alert('¡Gracias por contactarnos! Te responderemos pronto.');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Por favor, completa todos los campos.');
    }
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-content">
            {/* Logo */}
            <div className="logo-container">
              <img 
                src="/logodavante.png" 
                alt="Logo MiApp" 
                className="logo-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="logo-fallback" style={{display: 'none'}}>
                <div className="logo-icon">M</div>
              </div>
              <div className="logo-text">Dimensionado fotovoltaico</div>
            </div>
            
            {/* Desktop Menu */}
            <div className="desktop-menu">
              <button onClick={() => scrollToSection('hero')} className="nav-link">
                Inicio
              </button>
              <button onClick={() => scrollToSection('terms')} className="nav-link">
                Términos
              </button>
              <button onClick={() => scrollToSection('privacy')} className="nav-link">
                Privacidad
              </button>
              <button onClick={() => scrollToSection('developers')} className="nav-link">
                Desarrolladores
              </button>
              <button onClick={() => scrollToSection('contact')} className="nav-link">
                Contacto
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="mobile-menu-button">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="hamburger"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-content">
              <button onClick={() => scrollToSection('hero')} className="mobile-nav-link">
                Inicio
              </button>
              <button onClick={() => scrollToSection('terms')} className="mobile-nav-link">
                Términos
              </button>
              <button onClick={() => scrollToSection('privacy')} className="mobile-nav-link">
                Privacidad
              </button>
              <button onClick={() => scrollToSection('developers')} className="mobile-nav-link">
                Desarrolladores
              </button>
              <button onClick={() => scrollToSection('contact')} className="mobile-nav-link">
                Contacto
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-container">
          <div className="hero-grid">
            {/* Hero Content */}
            <div className="hero-content">
              <h1 className="hero-title">
                Bienvenido a <span className="hero-title-accent">Dimensionador fotovoltaico</span>
              </h1>
              <p className="hero-subtitle">
                La solución perfecta para encajar ayudarte a la instalación fotovoltaica.
              </p>
              
              {/* Mobile App Links */}
              <div className="app-links-container">
                <a href="#" className="app-link">
                  <img 
                    src="/app-store-badge.png" 
                    alt="Descargar en App Store" 
                    className="app-badge"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="app-link-fallback" style={{display: 'none'}}>
                    <div className="app-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                      </svg>
                    </div>
                    <div className="app-link-text">
                      <div className="app-link-small">Descargar en</div>
                      <div className="app-link-big">App Store</div>
                    </div>
                  </div>
                </a>
                <a href="#" className="app-link">
                  <img 
                    src="/google-play-badge.png" 
                    alt="Disponible en Google Play" 
                    className="app-badge"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="app-link-fallback" style={{display: 'none'}}>
                    <div className="app-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                      </svg>
                    </div>
                    <div className="app-link-text">
                      <div className="app-link-small">Disponible en</div>
                      <div className="app-link-big">Google Play</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form">
              <h3 className="form-title">¡Contáctanos!</h3>
              <div className="form-container">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="tu@email.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="form-textarea"
                    placeholder="Cuéntanos en qué podemos ayudarte..."
                  ></textarea>
                </div>
                <button
                  onClick={handleSubmit}
                  className="form-button"
                >
                  Enviar Mensaje
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Section */}
      <section id="terms" className="terms-section">
        <div className="section-container">
          <h2 className="section-title">Términos de Uso</h2>
          <div className="terms-content">
            <h3 className="terms-subtitle">1. Aceptación de Términos</h3>
            <p className="terms-paragraph">
              Al acceder y utilizar este sitio web, usted acepta estar sujeto a estos términos de servicio, 
              todas las leyes y regulaciones aplicables, y acepta que es responsable del cumplimiento de 
              las leyes locales aplicables.
            </p>

            <h3 className="terms-subtitle">2. Uso de la Licencia</h3>
            <p className="terms-paragraph">
              Se otorga permiso para descargar temporalmente una copia de los materiales en el sitio web 
              solo para visualización transitoria personal y no comercial. Esta es la concesión de una licencia, 
              no una transferencia de título.
            </p>

            <h3 className="terms-subtitle">3. Privacidad</h3>
            <p className="terms-paragraph">
              Su privacidad es importante para nosotros. Nuestra Política de Privacidad explica cómo 
              recopilamos, usamos y protegemos su información cuando utiliza nuestro servicio.
            </p>

            <h3 className="terms-subtitle">4. Limitaciones</h3>
            <p className="terms-paragraph">
              En ningún caso la empresa o sus proveedores serán responsables de cualquier daño 
              (incluyendo, sin limitación, daños por pérdida de datos o beneficios, o debido a la 
              interrupción del negocio) que surjan del uso o la incapacidad de usar los materiales.
            </p>

            <h3 className="terms-subtitle">5. Modificaciones</h3>
            <p className="terms-paragraph">
              Podemos revisar estos términos de servicio en cualquier momento sin previo aviso. 
              Al usar este sitio web, usted acepta estar sujeto a la versión actual de estos términos de servicio.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Section */}
      <section id="privacy" className="privacy-section">
        <div className="privacy-container">
          <div className="privacy-header">
            <h2 className="privacy-title">Política de Privacidad</h2>
            <div className="privacy-divider"></div>
            <p className="privacy-subtitle">
              Tu privacidad es nuestra prioridad. Conoce cómo protegemos y utilizamos tu información.
            </p>
          </div>

          <div className="privacy-banner">
            <div className="privacy-banner-icon">
              <Mail size={16} />
            </div>
            <div>
              <p className="privacy-banner-title">Última actualización: 28 de mayo de 2025</p>
              <p className="privacy-banner-text">
                En Davante, valoramos y respetamos tu privacidad. Esta política describe cómo recopilamos, usamos y protegemos tu información personal.
              </p>
            </div>
          </div>

          <div className="privacy-cards-grid">
            {/* Card 1 - Información que Recopilamos */}
            <div className="privacy-card">
              <div className="privacy-card-header info-card">
                <div className="privacy-card-icon">
                  <Mail size={24} />
                </div>
                <h3 className="privacy-card-title">Información que Recopilamos</h3>
              </div>
              <div className="privacy-card-content">
                <p className="privacy-card-text">Recopilamos información que nos proporcionas directamente:</p>
                <div className="privacy-list">
                  <div className="privacy-list-item">
                    <div className="privacy-list-dot info-dot"></div>
                    <span>Nombre completo y email</span>
                  </div>
                  <div className="privacy-list-item">
                    <div className="privacy-list-dot info-dot"></div>
                    <span>Información de contacto adicional</span>
                  </div>
                  <div className="privacy-list-item">
                    <div className="privacy-list-dot info-dot"></div>
                    <span>Mensajes y comunicaciones</span>
                  </div>
                  <div className="privacy-list-item">
                    <div className="privacy-list-dot info-dot"></div>
                    <span>Datos de uso de apps móviles</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - Cómo Utilizamos la Información */}
            <div className="privacy-card">
              <div className="privacy-card-header usage-card">
                <div className="privacy-card-icon">
                  <Phone size={24} />
                </div>
                <h3 className="privacy-card-title">Cómo Utilizamos tu Información</h3>
              </div>
              <div className="privacy-card-content">
                <p className="privacy-card-text">Utilizamos la información para:</p>
                <div className="privacy-list">
                  <div className="privacy-list-item">
                    <div className="privacy-list-dot usage-dot"></div>
                    <span>Proporcionar y mejorar servicios</span>
                  </div>
                  <div className="privacy-list-item">
                    <div className="privacy-list-dot usage-dot"></div>
                    <span>Responder consultas y soporte</span>
                  </div>
                  <div className="privacy-list-item">
                    <div className="privacy-list-dot usage-dot"></div>
                    <span>Comunicaciones importantes</span>
                  </div>
                  <div className="privacy-list-item">
                    <div className="privacy-list-dot usage-dot"></div>
                    <span>Personalizar experiencia</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - Seguridad */}
            <div className="privacy-card">
              <div className="privacy-card-header security-card">
                <div className="privacy-card-icon">
                  <MapPin size={24} />
                </div>
                <h3 className="privacy-card-title">Seguridad de Datos</h3>
              </div>
              <div className="privacy-card-content">
                <div className="security-badges">
                  <div className="security-badge">
                    <div className="security-badge-icon security-icon">
                      <Mail size={16} />
                    </div>
                    <span className="security-badge-text">SSL/TLS</span>
                  </div>
                  <div className="security-badge">
                    <div className="security-badge-icon security-icon">
                      <Phone size={16} />
                    </div>
                    <span className="security-badge-text">Encriptación</span>
                  </div>
                </div>
                <p className="privacy-card-text">
                  Implementamos medidas de seguridad técnicas y organizativas para proteger tu información contra acceso no autorizado.
                </p>
              </div>
            </div>

            {/* Card 4 - Contacto */}
            <div className="privacy-card">
              <div className="privacy-card-header contact-card">
                <div className="privacy-card-icon">
                  <Mail size={24} />
                </div>
                <h3 className="privacy-card-title">¿Preguntas?</h3>
              </div>
              <div className="privacy-card-content">
                <p className="privacy-card-text">Si tienes preguntas sobre esta política:</p>
                <div className="contact-links">
                  <a href="mailto:info@davante.es" className="contact-link">
                    <Mail size={20} className="contact-link-icon" />
                    <span>info@davante.es</span>
                  </a>
                  <button 
                    onClick={() => scrollToSection('hero')}
                    className="contact-button"
                  >
                    <Phone size={20} className="contact-link-icon" />
                    <span>Formulario de contacto</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Developers Section */}
      <section id="developers" className="developers-section">
        <div className="developers-container">
          <h2 className="developers-title">Nuestro Equipo de Desarrollo</h2>
          <p className="developers-subtitle">
            Conoce a los talentosos desarrolladores que hicieron posible esta aplicación
          </p>
          
          <div className="developers-grid">
            {[
              // Frontend & Project Management
              { name: 'Fredy Alexander Ramos Palacios', role: 'Frontend / Project Manager', initials: 'FR', className: 'dev-gradient-1' },
              { name: 'Antonio Rubén Moreno Riera', role: 'Frontend Developer', initials: 'AR', className: 'dev-gradient-2' },
              { name: 'Lara Caballero Fernández', role: 'Frontend Developer', initials: 'LC', className: 'dev-gradient-3' },
              { name: 'Cristina Sánchez Beneroso', role: 'Frontend Developer', initials: 'CS', className: 'dev-gradient-4' },
              { name: 'Javier Dorado', role: 'Frontend Developer', initials: 'JD', className: 'dev-gradient-5' },
              // Backend Development
              { name: 'Nikita Perelygin Perelygin', role: 'Backend Developer', initials: 'NP', className: 'dev-gradient-6' },
              { name: 'Aleix Mohedano Leal', role: 'Backend Developer', initials: 'AM', className: 'dev-gradient-1' },
              { name: 'Laura Toro Montes', role: 'Backend Developer', initials: 'LT', className: 'dev-gradient-2' },
              { name: 'Eduardo José Moreno Segura', role: 'Backend Developer', initials: 'EM', className: 'dev-gradient-3' },
              { name: 'Mikhail Vezelev', role: 'Backend Developer', initials: 'MV', className: 'dev-gradient-4' },
              { name: 'Ángel Atienza Molina', role: 'Backend Developer', initials: 'AA', className: 'dev-gradient-5' },
              // Web Development
              { name: 'Jesús David Navas', role: 'Web Developer', initials: 'JN', className: 'dev-gradient-6' },
              { name: 'Álvaro Gallardo', role: 'Web Developer', initials: 'AG', className: 'dev-gradient-1' }
            ].map((dev, index) => (
              <div key={index} className="developer-card">
                <div className="developer-card-content">
                  <div className={`developer-avatar ${dev.className}`}>
                    {dev.initials}
                  </div>
                  <h3 className="developer-name">{dev.name}</h3>
                  <p className="developer-role">{dev.role}</p>
                  <div className="developer-social">
                    <a href="#" className="social-link"><Github size={20} /></a>
                    <a href="#" className="social-link"><Linkedin size={20} /></a>
                    <a href="#" className="social-link"><Twitter size={20} /></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <h2 className="contact-title">¿Tienes alguna pregunta?</h2>
          <p className="contact-subtitle">
            No dudes en contactarnos. Estamos aquí para ayudarte.
          </p>
          <div className="contact-info">
            <div className="contact-info-item">
              <Mail size={24} className="contact-info-icon" />
              <span>info@davante.es</span>
            </div>
            <div className="contact-info-item">
              <Phone size={24} className="contact-info-icon" />
              <span>900 100 370</span>
            </div>
            <div className="contact-info-item">
              <Phone size={24} className="contact-info-icon" />
              <span>675 817 013</span>
            </div>
            <div className="contact-info-item">
              <MapPin size={24} className="contact-info-icon" />
              <span>De lunes a viernes de 9:30 a 18h</span>
            </div>
          </div>
          <button 
            onClick={() => scrollToSection('hero')}
            className="contact-cta-button"
          >
            Volver al formulario
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-left">
              <div className="footer-logo-container">
                <img 
                  src="/logodavante.png" 
                  alt="Logo MiApp" 
                  className="footer-logo"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="footer-logo-fallback" style={{display: 'none'}}>
                  <div className="footer-logo-icon">M</div>
                </div>
                <div className="footer-logo-text">Dimensionado fotovoltaico</div>
              </div>
              <p className="footer-tagline">Innovación y calidad en cada detalle</p>
            </div>

            <div className="footer-social">
              <a href="#" className="footer-social-link"><Facebook size={24} /></a>
              <a href="#" className="footer-social-link"><Twitter size={24} /></a>
              <a href="#" className="footer-social-link"><Linkedin size={24} /></a>
              <a href="#" className="footer-social-link"><Instagram size={24} /></a>
              <a href="#" className="footer-social-link"><Github size={24} /></a>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p className="footer-copyright">
              © 2025 Davante. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SinglePageApp;