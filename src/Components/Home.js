import profilbilde from './Media/profilbilde.jpg'

export default function Home() {
  return (
    <section id='frontpage'>
      <article id='kort'>
        <div id='profilbilde'>
        <h1 id='navn'><span id="fornavn">Luan</span> <span id="mellomnavn">Ngoc</span> <span id="etternavn">Nguyen</span></h1>
        <img id="frontbilde" src={profilbilde} alt="naturbilde" />
        </div>
        <div id='informasjon'>
          <p>Mitt navn er <span className='skriftfarge'>Luan</span> og studerer bachelor innen Informasjonssytemer på Høgskolen i Østfold i Halden.</p>
          <p> <span className='skriftfarge'>Velkommen</span> til min nettside</p>
        </div>
      </article>
    </section>
  );
}
