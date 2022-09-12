import {
  FaFacebook,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';

export default function About() {
  return (
    <div className="container">
      <section id="sosialmlogo">
        <ul id="socialm" >
          <li className='socialmicon'>
            <a href="https://www.facebook.com/luannn" >
              <FaFacebook color='white' className="iconsize"/>
            </a>
          </li>
          <li className='socialmicon'>
            <a href="https://www.linkedin.com/in/nguyenngocluan/" >
              <FaLinkedinIn color='white' className="iconsize"/>
            </a>
          </li>
          <li className='socialmicon'>
            <a href="https://www.instagram.com/ngluan/" >
              <FaInstagram color='white' className="iconsize"/>
            </a>
          </li>
          <li className='socialmicon'>
            <a href="https://www.youtube.com/watch?v=SIApEQX8gLY" >
              <FaYoutube color='white' className="iconsize"/>
            </a>
          </li>
        </ul>
      </section>
      <section id="ommeg">
        <h2><span id="aboutfornavn">Luan</span> <span id="aboutmellomnavn">Ngoc</span> <span id="aboutetternavn">Nguyen</span></h2>
        <p className="skrift">
          Jeg er 32 år gammel og er i fra Sandnes. Jeg har lang erfaring med salg og service og har vært innom store butikk kjeder som Ikea, Lefdal (nå Elkjøp), H&M og Kiwi. Jeg er utdannet barnehagelærer og har jobbet som pedagogisk leder i noen år. IT har alltid interessert meg siden jeg var liten. 
        </p>
        <p className="skrift">
          Høsten 2021 bestemte jeg meg for å ta en utdannelse innen IT. Nå er jeg på 2.år på Informasjonssytemer med fordypning i Software Engineering og Business Intelligence på Høgskolen i Østfold i Halden. IT verden er stor og det er mange muligheter å velge mellom. Jeg er opptatt på å utvikle meg og tilegne meg nye kunnskaper. 
        </p>
        <p className="skrift">
          På fritiden så er jeg veldig glad å drive med aktiviteter som f.eks. klatring, volleyball, fotball og bordtennis. Under korona epidemien så fikk jeg stor sans for friluftsliv og syntes dette var veldig befriende ettersom det ikke lenger var mulig å drive med andre aktiviteter ute.
        </p>
      </section>
    </div>);
}
