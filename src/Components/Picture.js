import bilde1 from './Media/bilde1.jpg'
import bilde2 from './Media/bilde2.jpg'
import bilde3 from './Media/bilde3.jpg'
import bilde4 from './Media/bilde4.jpg'
import bilde5 from './Media/bilde5.jpg'
import bilde6 from './Media/bilde6.jpg'
import bilde7 from './Media/bilde7.jpg'
import bilde8 from './Media/bilde8.jpg'
import bilde9 from './Media/bilde9.jpg'


export default function Picture() {
  return (
    <>
      <h2 className='overskrift'>Bilder</h2>
      <p className="skrift">Her er bilder jeg har tatt på mine turer. Alle bilder som blir lagt ut er uredigert. Tatt med mobil Huawei P30 Pro.</p>
      <div id='gallery'>
        <img src={bilde1} alt="Naturbilde" />
        <img src={bilde2} alt="Naturbilde" />
        <img src={bilde3} alt="Naturbilde" />
        <img src={bilde4} alt="Naturbilde" />
        <img src={bilde5} alt="Naturbilde" />
        <img src={bilde6} alt="Naturbilde" />
        <img src={bilde7} alt="Naturbilde" />
        <img src={bilde8} alt="Naturbilde" />
        <img src={bilde9} alt="Naturbilde" />
        


        {/* <a className='cac' href={bilde1} >
          <img src={bilde1} alt="Naturbilde" />
        </a>
        <a className='cac' href={bilde2} >
          <img src={bilde2} alt="Naturbilde" />
        </a>
        <a className='cac' href={bilde3} >
          <img src={bilde3} alt="Naturbilde" />
        </a>
        <a className='cac' href={bilde4} >
          <img src={bilde4} alt="Naturbilde" />
        </a>
        <a href={bilde5} >
          <img src={bilde5} alt="Naturbilde" />
        </a>
        <a href={bilde6} >
          <img src={bilde6} alt="Naturbilde" />
        </a> */}
      </div>
    </>
  )
}
