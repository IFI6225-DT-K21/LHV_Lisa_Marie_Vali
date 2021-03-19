import React, { useState } from 'react';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
// import { Dropdown } from 'semantic-ui-react'
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import { AiFillPlayCircle } from "react-icons/ai"
import { GoPlus } from "react-icons/go"


import { AiOutlineInstagram } from "react-icons/ai"
import { FiFacebook } from "react-icons/fi"
import { AiOutlineYoutube } from "react-icons/ai"
import { RiSoundcloudLine } from "react-icons/ri"



function Navbar() {
  
  const [navbarOpen, setNavbarOpen] = useState(false)

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  }
  
  return (
    <body>
    <nav className='navbar'>
      <div className='contain-nav'>
        <div className='logo'>
          <img className='logo-icon' src="pics/lhv-logo.svg" alt="logo"/>
        </div>
        <div className='options1'>
    
          <li className="current">PANK</li>
          <li>FINANTSPORTAAL</li>
          <li>INVESTOR</li>
          
        </div>
        <div className='options2'>
          <li>AVA KONTO<br/></li>
          <li className="current">SISENE<br/></li>
          <li>EN<br/></li>
          <li>RU<br/></li>
        </div>
      </div>
      <div>
         <button className='navButton'>Sisene</button>
      </div>
     
      {/* <div role="listbox" aria-expanded="false" class="ui fluid selection dropdown" tabindex="0">
        <div aria-atomic="true" aria-live="polite" role="alert" class="divider default text">Select Friend</div>
        <i aria-hidden="true" class="dropdown icon"></i>
        <div class="menu transition">
          <div style="pointer-events:all" role="option" aria-checked="false" aria-selected="true" class="selected item"><span class="text">ET</span></div>
          <div style="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item"><span class="text">EN</span></div>
          <div style="pointer-events:all" role="option" aria-checked="false" aria-selected="false" class="item"><span class="text">RU</span></div>
        </div>
      </div> */}

    </nav>
    <div className="log-in">
      <div className="log-in-options">
        <li>ID-kaart</li>
        <li className="highlight">Mobiil-ID</li>
        <li>Smart-ID</li>
        <li>PIN-kalkulaator</li>
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

      <button onClick={handleToggle}>
        {navbarOpen ? (
          <MdClose style={{ width: "25px", height: "25px" }} />
        ) : (
          <FiMenu style={{ width: "25px", height: "25px" }} />
        )}
      </button>      
        <ul className={`menuNav ${navbarOpen ? " showMenu" : "hideMenu"}`}>
          <li className='showMenulist'>Igapäevapangandus <GoPlus className='plusicon'/></li>
          <li className='showMenulist'>Raha kasvatamine<GoPlus className='plusicon'/></li>
          <li className='showMenulist'>Laen ja liising<GoPlus className='plusicon'/></li>
          <li className='showMenulist'>Pension<GoPlus className='plusicon'/></li>
          <li className="menuNav1">Vajad abi?</li>

          <div className='menuNav2'>
            <li className='showMenulist'>Tule kliendiks <GoPlus className='plusicon'/></li>
            <li className='showMenulist'>Kasulikku <GoPlus className='plusicon'/></li>
            <li className='showMenulist'>LHV <GoPlus className='plusicon'/></li>
            <li className='showMenulist'>Kontakt <GoPlus className='plusicon'/></li>
          </div>
        </ul>
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
          alt="Third slide"/>

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className="text-columns">
      <div className="text-columns12">
        <p className="heading">LHV töötajad pühade ajal</p>
        <p>Seoses Eesti Vabariigi aastapäevaga on ka LHV tööaegades mõningasi muudatusi, 
          millega palume klientidel rahaasjade planeerimisel arvestada.</p>
        <p className="lisa">Loe lisa <HiOutlineArrowNarrowRight/></p>
      </div>
      <div className="text-columns12">
        <p className="heading">LHV langetas indeksfondide valitsemistasu poole võrra</p>
        <p>Alates tänasest langetas LHV passiivselt juhitud pensionifondide valitsemistasud 
          0,39% pealt 0,20% peale. Selle sammuga muutis LHV oma indeksfondid Eesti soodsaima valitsemistasumääraga pensionifondideks.</p>
        <p className="lisa">Loe lisa <HiOutlineArrowNarrowRight/></p>
      </div>
      <div className="text-columns3">
      <p className="heading">Kuula LHV Podcasti</p>
          <li className='podcastlist'><AiFillPlayCircle className="icons"/>  Hetkeolukord Balti ja USA turgudel</li>
          <li className='podcastlist'><AiFillPlayCircle className="icons"/> Urmo Kübar ja Karin Maasel heate...</li>
          <li className='podcastlist'><AiFillPlayCircle className="icons"/> Gamestop ja pöörane nädal turgudel</li>
          <li className='podcastlist'><AiFillPlayCircle className="icons"/> Mis toimub USA ja Balti turgudel?</li>
          <li className='podcastlist'><AiFillPlayCircle className="icons"/> Kristo Aab ja Ülo Kaasik majandu...</li>
          <li className='podcastlist'><AiFillPlayCircle className="icons"/> Mihkel Mardna tervishoiust</li>
          <li className='podcastlist'><AiFillPlayCircle className="icons"/> Almondi Esco Imepilt AS-i aktsia...</li>
          <li className='podcastlist'><AiFillPlayCircle className="icons"/> Martti Siimanniga restoraniärist</li>
          <li className='podcastlist'><AiFillPlayCircle className="icons"/> Nelli Janson ja Robin Särg innu...</li>
          <p className="lisa">Kuula kõiki <HiOutlineArrowNarrowRight/></p>
      </div>
    </div>

    <footer className="footer">
      <div className="footermenu">
        <div className="footcol1">
          <li className="foothighlight">TULE KLIENDIKS</li>
          <li>Eraklient</li>
          <li>Äriklient</li>
          <li>Noortepank</li>
          <li>Lapsekonto</li>
          <li>Au-klient</li>
          <li>Privaatpangandus</li>
          <li>Ava konto <HiOutlineArrowNarrowRight/></li>
        </div>
        <div className="footcol1">
          <li className="foothighlight">KASULIKKUS</li>
          <li>Hinnakiri ja tingimused</li>
          <li>Ettepanekud ja kaebused</li>
          <li>Turvalisus</li>
          <li>Teata pettusest</li>
          <li>KKK</li>
        </div>
        <div className="footcol1">
          <li className="foothighlight">LHV</li>
          <li>Ettevõttest</li>
          <li>Tööpakkumised</li>
          <li>Uudised</li>
          <li>Investor</li>
          <li>Finantsportaal</li>
          <li>Roheline LHV</li>
          <li>Hea tegu</li>
          <li>Blogi</li>
        </div>
        <div className="footcol1">
        <li></li>
          <li className="foothighlight">KONTAKT</li>
          <li>Kontaktid</li>
          <li>Kontorid</li>
          <li>Broneeri kohtumisaeg</li>
          <li>Sularahaautomaadid</li>
        </div>
      </div>

      <div className="socialicons">
        <div className="soc1">
          <AiOutlineInstagram className="socicons"/>
          <FiFacebook className="socicons"/>
          <AiOutlineYoutube className="socicons"/>
          <RiSoundcloudLine className="socicons"/>
        </div>
        <div className="soc2">
          <img className="iconpic" src="pics/app-store-et.svg" alt=""/>
          <img className="iconpic" src="pics/google-play-et.svg" alt=""/>
          <img className="iconpic" src="pics/huawei-et.svg" alt=""/>
        </div>
  
      </div>
      <div className="bottomtext">
        <p>AS LHV Group, Tartu mnt 2, 10145, Tallinn. Oled finantsteenuseid pakkuvate 
          ettevõtete AS LHV Pank, AS LHV Finance ja AS LHV Varahaldus veebilehel. 
          Ettevõtetel AS LHV Pank, AS LHV Finance ja AS LHV Varahaldus on õigus salvestada 
          kõiki neile sidevahendite teel antud korraldusi ja muud suhtlust ning kasutada 
          vastavaid salvestisi antud korralduste või muude toimingute tõendamiseks. 
          Enne finantsteenuse lepingu sõlmimist tutvu <u>teenuse tingimustega</u> või küsi lisainfot. 
          Veebilehte ja sellel sisalduvat informatsiooni kasutades nõustud eeltoodud tingimuste 
          ja veebilehe <u>kasutustingimustega</u>. <u>Noteeringud on viivitusega</u>.</p>
      </div>
    </footer>
  </body>
  );
}

export default Navbar;
