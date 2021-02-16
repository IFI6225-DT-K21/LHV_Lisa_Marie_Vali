import React, { useState, useEffect } from 'react';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
function Navbar() {
  
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
    <nav className='navbar'>
      <div className='contain-nav'>
        <div className='logo'>
          <img className='logo-icon' src="pics/lhv-logo.svg" alt="logo"/>
        </div>
        <div className='options1'>
    
          <li className="current"><a href="/">PANK</a></li>
          <li><a href="/">FINANTSPORTAAL</a></li>
          <li><a href="/">INVESTOR</a></li>
          
          
        </div>
        <div className='options2'>
          <li><a href="/">AVA KONTO</a><br/></li>
          <li className="current"><a href="/">SISENE</a>  <br/></li>
          <li><a href="/">ET</a><br/></li>
          <li><a href="/">RU</a><br/></li>
        </div>

      </div>
      
    </nav>
    <div className="log-in">
      <div className="log-in-options">
        <li>ID-kaart</li>
        <li>Mobiil-ID</li>
        <li>Smart-ID</li>
        <li>Pin-kalkulaator</li>
        <li>Salasõna</li>
      </div>
      <div className="input">  
        <input type="text" name="" id="username" placeholder="Kasutajanimi"/>
      </div>
      <div className="button">
        <button>Sisene</button>
      </div>
    </div>
    <div className="options3">
      <div className="cont">
        <ul>
          <li>IGAPÄEVAPANGANDUS</li>
          <li>RAHA KASVATAMINE</li>
          <li>LAEN JA LIISING</li>
          <li>PENSION</li>
          <li>VAJAD ABI?</li>
        </ul>
      </div>
    </div>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/pics/woman.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/pics/peace.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/pics/winter.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


      
    </>
  );
}

export default Navbar;