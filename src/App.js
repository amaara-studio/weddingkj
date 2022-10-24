import { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import loading from './assets/loading200.gif';
import img1 from './assets/kj-1.jpg';
import img2 from './assets/asistencia.jpg';
import img3 from './assets/galeria1.jpg';
import img4 from './assets/galeria2.jpg';
import img5 from './assets/galeria3.jpg';
import img6 from './assets/quote.jpg';
import img7 from './assets/cuenta1.png';
import img8 from './assets/cuenta2.png';
import img9 from './assets/cuenta3.png';
import img10 from './assets/hoja1.png';
import img11 from './assets/info1.png';
import img12 from './assets/info2.png';
import img13 from './assets/hoja2.png';
import img14 from './assets/hoja3.png';
import img15 from './assets/hoja4.png';
import img16 from './assets/intro.jpg';
import songmp3 from './assets/m_btl.mp3';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './App.css';

const getCountdown = () => {
  const hour = 3600;
  const day = hour *  24;
  const month = day * 30;
  const wedd = 1670099400;
  const now = Math.floor(Date.now() / 1000);
  let totalLeft = wedd - now;
  const monthLeft = Math.floor(totalLeft / month);
  totalLeft = totalLeft - (monthLeft * month);
  const dayLeft = Math.floor(totalLeft / day);
  totalLeft = totalLeft - (dayLeft * day);
  const hourLeft = Math.floor(totalLeft / hour);
  return [monthLeft, dayLeft, hourLeft];
};

function App() {
  const [initialLoad, setInitialLoad] = useState(false);
  const [enter, setEnter] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [timeLeft, setTimeLeft] = useState([0, 0, 0]);
  const [playing, setPlaying] = useState(false);
  let content;

  useEffect(() => {
    //get countdown
    setTimeLeft(getCountdown());
    //preload images
    const imageList = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16];
    imageList.forEach((image) => {
      new Image().src = image;
    });

    setTimeout(() => {
      setInitialLoad(true);
    }, 2000);
  }, []); // eslint-disable-line

  const playAudio = () => {
    const song = document.getElementById('song'); 
    song.play(); 
    setPlaying(true);
  };

  const pauseAudio = () => {
    const song = document.getElementById('song'); 
    song.pause(); 
    setPlaying(false);
  };

  const toggleAudio = () => {
    if(playing) {
      pauseAudio();
    } else {
      playAudio();
    }
  };

  const enterInvite = () => {
    setEnter(true);
    playAudio();
    setTimeout(() => {
      setFadeIn(true);
    }, 200);
  };

  if(!initialLoad) {
    content = (
      <div className="App-loading">
        <img src={loading} alt="Loading..." style={{width: '30%', display: 'block', margin: '90px auto 0 auto'}} />
      </div>
    );
  }

  if(initialLoad && !enter) {
    content = (
      <div className="App-loading" style={{position: 'relative'}}>
        <img src={img16} alt=" " style={{width: '100%', display: 'block'}} />
        <button className="enter-button" onClick={enterInvite} style={{display: 'block', position: 'absolute', top: '35%', left: '50%'}}>Entrar</button>
      </div>
    );
  }

  if(initialLoad && enter) {
    content = (
      <div className={`App ${fadeIn ? 'fadeIn' : ''}`}>
        <div className="intro-img">
          <img src={img1} alt="Kathia y Juan José" style={{width: '100%', display: 'block'}} />
        </div>
        <div className="cuenta">
          <img src={img7} alt=" " style={{width: '100%', display: 'block'}} />
          <img src={img8} alt="Kathia y Juan José" style={{width: '100%', display: 'block'}} />
          <p style={{fontFamily: 'PetitFormalScript', fontSize: '17px', color: '#706F6F', width: '90%', margin: '20px auto'}}>“Nos encantaría<br />que nos acompañes<br />en este día tan especial,<br />en donde celebraremos<br />el amor que nos tenemos”</p>
          <img src={img10} alt=" " style={{width: '8%', display: 'block', marginLeft: '70%'}} />
          <div className="counter" style={{display: 'flex', justifyContent: 'center', color: '#706F6F', paddingBottom: 24}}>
            <div className="months">
              <div style={{fontFamily: 'MontserratExtraLight', paddingBottom: '10px', fontSize: '36px'}}>{("0" + timeLeft[0]).slice(-2)}</div>
              <div style={{fontFamily: 'MontserratExtraLight', fontSize: 12, letterSpacing: '2px'}}>MESES</div>
            </div>
            <div className="days" style={{padding: '0 22px'}}>
              <div style={{fontFamily: 'MontserratExtraLight', paddingBottom: '10px', fontSize: '36px'}}>{("0" + timeLeft[1]).slice(-2)}</div>
              <div style={{fontFamily: 'MontserratExtraLight', fontSize: 12, letterSpacing: '2px'}}>DÍAS</div>
            </div>
            <div className="hours">
              <div style={{fontFamily: 'MontserratExtraLight', paddingBottom: '10px', fontSize: '36px'}}>{("0" + timeLeft[2]).slice(-2)}</div>
              <div style={{fontFamily: 'MontserratExtraLight', fontSize: 12, letterSpacing: '2px'}}>HORAS</div>
            </div>
          </div>
          <img src={img9} alt=" " style={{width: '100%', display: 'block'}} />
        </div>
        <div className="quote">
          <img src={img6} alt="Kathia y Juan José" style={{width: '100%', display: 'block'}} />
        </div>
        <div className="info" style={{position: 'relative'}}>
          <img src={img13} alt=" " style={{width: '7%', display: 'block', position: 'absolute', left: '12%', top: '1%'}} />
          <img src={img14} alt=" " style={{width: '9%', display: 'block', position: 'absolute', left: '11%', bottom: '37%'}} />
          <img src={img15} alt=" " style={{width: '8%', display: 'block', position: 'absolute', right: '2%', top: '19%'}} />

          <img src={img11} alt="Nuestra boda" style={{width: '42%', display: 'block', margin: '50px auto 0 auto'}} />
          <h2 style={{fontFamily: 'Playfair', color: '#706F6F', paddingTop: 26, fontSize: 16, fontWeight: 400}}>CEREMONIA</h2>
          <div className="dat-time" style={{display: 'flex', justifyContent: 'center', color: '#706F6F', fontFamily: 'Playfair', paddingTop: 6}}>
            <div>
              <div style={{fontSize: '36px', lineHeight: '26px'}}>03</div>
            </div>
            <div className="days" style={{padding: '0 16px', margin: '0 13px', border: '1px solid #706F6F', borderTop: 'none', borderBottom: 'none'}}>
              <div style={{fontSize: '36px', lineHeight: '36px'}}>Diciembre</div>
            </div>
            <div>
              <div style={{fontSize: '36px', lineHeight: '26px'}}>22</div>
            </div>
          </div>
          <p style={{fontFamily: 'Playfair', fontSize: '14px', lineHeight: '16px'}}>2:30pm</p>
          <p style={{fontFamily: 'MontserratExtraLight', fontSize: 12, marginBottom: 0, lineHeight: '4px'}}>Iglesia de los Ángeles de Grecia</p>
          <a 
            style={{fontFamily: 'MontserratExtraLight', fontSize: '10px'}}
            href="https://maps.app.goo.gl/8XtrQ5LUtFnemFxY6?g_st=iw"
            target="_blank"
            rel="noreferrer"
          >
            Ver ubicación aquí
          </a>
          <h2 style={{fontFamily: 'Playfair', color: '#706F6F', paddingTop: 26, fontSize: 16, fontWeight: 400}}>RECEPCIÓN</h2>
          <p style={{fontFamily: 'Playfair', fontSize: '14px', lineHeight: '16px'}}>4:30pm</p>
          <p style={{fontFamily: 'MontserratExtraLight', fontSize: 12, paddingTop: 18, marginBottom: 0, lineHeight: '4px'}}>Sala de eventos</p>
          <p style={{fontFamily: 'MontserratExtraLight', fontSize: 12, marginBottom: 0, lineHeight: '4px'}}>La Divina Providencia</p>
          <a 
            style={{fontFamily: 'MontserratExtraLight', fontSize: '10px'}}
            href="https://maps.app.goo.gl/BBDoTYpv5iXuAG6h6?g_st=iw"
            target="_blank"
            rel="noreferrer"
          >
            Ver ubicación aquí
          </a>
          <h2 style={{fontFamily: 'Playfair', color: '#706F6F', paddingTop: 26, fontSize: 16, fontWeight: 400}}>CÓDIGO DE VESTIMENTA</h2>
          <p style={{fontFamily: 'MontserratExtraLight', fontSize: 12, paddingTop: 4, marginBottom: 0, lineHeight: '8px'}}>Vestimenta formal</p>
          <h2 style={{fontFamily: 'Playfair', color: '#706F6F', paddingTop: 36, fontSize: 16, fontWeight: 400}}>OBSEQUIOS</h2>
          <p style={{fontFamily: 'MontserratExtraLight', fontSize: 12, marginBottom: 0, lineHeight: '20px', paddingBottom: 8}}>
            Nuestro mayor regalo será<br />
            su compañía, en este día tan especial.<br />
            Pero si desean hacernos un obsequio,<br />
            aceptamos las muestras de cariño en efectivo.<br />
            Pueden colocar su presente en un sobre<br />
            y depositarlo en un buzón el día de la boda.<br />
          </p>
          <img src={img12} alt=" " style={{width: '100%', display: 'block'}} />
        </div>
        <div className="galeria" style={{marginBottom: 20}}>
          <Carousel
            autoPlay
            infiniteLoop
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            interval={3500}
          >
            <div>
                <img src={img3} alt=" " />
            </div>
            <div>
                <img src={img4} alt=" " />
            </div>
            <div>
                <img src={img5} alt=" " />
            </div>
          </Carousel>
        </div>
        <div className="asistencia">
          <img src={img2} alt="Asistencia" style={{width: '100%', display: 'block'}} />
        </div>
      </div>
    );
  }

  return (
    <div>
      <audio autoPlay id="song">
        <source src={songmp3} type="audio/mpeg" />
      </audio>
      {content}
    </div>
  );
}

export default App;
