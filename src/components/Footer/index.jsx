import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-center text-white">
      <div className="container p-4 pb-0">
        <section className="mb-4">
          <a href="#!" className="btn btn-outline-light m-1" role="button">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#!" className="btn btn-outline-light m-1" role="button">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#!" className="btn btn-outline-light m-1" role="button">
            <i className="fab fa-google"></i>
          </a>
          <a href="#!" className="btn btn-outline-light m-1" role="button">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#!" className="btn btn-outline-light m-1" role="button">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#!" className="btn btn-outline-light m-1" role="button">
            <i className="fab fa-github"></i>
          </a>
        </section>
      </div>

      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © {new Date().getFullYear()} Seu Nome ou Nome da Empresa. Todos os direitos reservados.
      </div>
    </footer>
  );
}

export default Footer;
