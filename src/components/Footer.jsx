




import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div style={{backgroundColor:'orangered'}} className=' text-white py-5'>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="mb-4"><i className="fab fa-pagelines me-2"></i>FlavoursRush</h5>
            <p className="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas ea soluta quo amet labore sed at illo? Rem pariatur sunt amet, reprehenderit ipsa nemo.</p>
            <span>Code licensed MIT, docs CC BY 3.0.</span><br />
            <span>Currently v5.3.2</span>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6 mb-4">
            <h5 className="mb-4">Links</h5>
            <ul className="list-unstyled mb-0">
              <li><Link to={'/'} className="text-white text-decoration-none">Home</Link></li>
              <li><Link to={'/cart'} className="text-white text-decoration-none">Cart</Link></li>
              <li><Link to={'/view'} className="text-white text-decoration-none">View</Link></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 mb-4">
            <h5 className="mb-4">Guides</h5>
            <ul className="list-unstyled mb-0">
              <li><a href="https://react.dev/" target='_blank' className="text-white text-decoration-none">React JS</a></li>
              <li><a href="https://reactrouter.com/en/main" target='_blank' className="text-white text-decoration-none">React Routing</a></li>
              <li><a href="https://react-bootstsrap.github.io/" target='_blank' className="text-white text-decoration-none">React Bootstrap</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-12 mb-4">
            <h5 className="mb-4">Contact Us</h5>
            <div className="mb-3">
              <input type='text' className='form-control me-1' placeholder='E-mail Id Please' />
            </div>
            <button className='btn btn-info'><i className="fas fa-arrow-right"></i></button>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-between">
              <div className="social-icons">
                <a href="https://react.dev/" target='_blank' className="text-white me-3"><i className="fab fa-twitter"></i></a>
                <a href="https://react.dev/" target='_blank' className="text-white me-3"><i className="fab fa-instagram"></i></a>
                <a href="https://react.dev/" target='_blank' className="text-white me-3"><i className="fab fa-facebook"></i></a>
                <a href="https://react.dev/" target='_blank' className="text-white me-3"><i className="fab fa-linkedin"></i></a>
                <a href="https://react.dev/" target='_blank' className="text-white me-3"><i className="fab fa-github"></i></a>
                <a href="https://react.dev/" target='_blank' className="text-white"><i className="fas fa-phone"></i></a>
              </div>
              <p className="mb-0">Copyright & copy; 2024 Media Player. Built with React.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
