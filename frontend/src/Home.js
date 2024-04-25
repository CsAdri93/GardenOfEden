import './App.css';
import { Carousel } from "./Carousel";


function Home() {
    return (
      <div className="img-up" id="home">
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
          <Carousel></Carousel>
        </div>

        <hr />
        <div>
          <h4 className="text-center mb-auto">Kik gondoskodnak arról, hogy az egészség garantált legyen?</h4>
          <a title="rolunk" href="/aboutus">
          <img className='center' src="img/egeszseg.png" alt="rolunk" />
          </a>
          <p className="text-center mb-auto"><i className="bi bi-arrow-up-circle-fill" style={{ fontSize: "40px" }}></i></p>
          <p className="text-center">(Ez egy link <span className='bi bi-emoji-smile-upside-down'/>)</p>
        </div>
        <hr />
        <div className="text-center">
          <h4 className="mb-4">Miért válassz minket?</h4>
              <p>Mindig friss árukészlet</p>
              <p>Ellenőrzött termékek</p>
              <p>Gyors kiszállítás</p>
        </div>
        <hr />
        <div>
          <h4 className="text-center mb-4">Házhoz visszük neked!</h4>
          <p className="text-center">A megrendelt gyümölcsöket akár házhoz is visszük neked. <br/>
            Erről bővebb információt <a href='/orderdelivery'>itt</a> találhatsz.
          </p>
        </div>
        <hr />
        <div>
          <h4 className="text-center mb-auto">Hol vagyunk helyileg?</h4>
                <br></br>
                <iframe className='center' title="myFrame" decoding="async" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2664.249255215737!2d20.777774115056214!3d48.10542726137953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47409fe48c01588b%3A0xdc6303e601794631!2sMiskolc%20SZC%20Kand%C3%B3%20K%C3%A1lm%C3%A1n%20IT%20School!5e0!3m2!1sen!2shu!4v1648740734869!5m2!1sen!2shu" width="1000" height="400" style={{ border: "0" }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            
        </div>

      </div>
    );
  }
  
  export default Home;