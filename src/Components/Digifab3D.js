import fusion from './Media/fusion.png'
import fusion2 from './Media/fusion2.png'
import prusa from './Media/prusa.png'
import prusa2 from './Media/prusa2.png'
import modell from './Media/modell.jpg'
import modell2 from './Media/modell2.jpg'
import modell3 from './Media/modell3.jpg'
import modell4 from './Media/modell4.jpg'


export default function Digifab3D() {
  return (
    <>
      <h2 className="overskrift">Digifab 3D printing</h2>
      <p className="skrift">I denne opppgave skulle jeg designe 3D objekt i Fusion 360. Det tok litt tid før jeg fant ut hva jeg ville designe eller lage. Jeg bestemte til slutt å lage noe som jeg har bruk for og det ble et mobil stativ.</p>
      <p className="skrift">Her 3D objektet som jeg har modellert i Fusion 360.</p>
      <div>
        <img className="models" src={fusion} alt="Bilde av 3D objekt" />
        <img className="models" src={fusion2} alt="Bilde av 3D objekt" />
      </div>
      <p className="skrift">Når jeg legger 3D objektet i Prusa slicer.</p>
      <img className="models" src={prusa} alt="Bilde av 3D objekt" />
      <img className="models" src={prusa2} alt="Bilde av 3D objekt" />
      <p className="skrift">Printe prosessen og resultatet!</p>
      <img className="models" src={modell} alt="Bilde av 3D objekt" />
      <img className="models" src={modell2} alt="Bilde av 3D objekt" />
      <img className="models" src={modell3} alt="Bilde av 3D objekt" />
      <img className="models" src={modell4} alt="Bilde av 3D objekt" />
    </>
  );
}
