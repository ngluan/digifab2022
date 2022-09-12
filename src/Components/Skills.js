import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";

export default function Skills() {
  return (
    <>
      <h2 className="overskrift">Kompetanse</h2>
      <p className="skrift">Under utdanningsløpet har jeg lært forskjellige programmeringsspråk og verktøy. Jeg har gjennom min skolegang dannet gode grunnleggende kunnskaper i de forskjellige språkene, og ser frem imot å bygge på kunnskapen videre i utdanningsløpet. </p>
      <p className="skrift">Kursene som jeg har hatt på skolen er: Webutvikling (HTML, CSS, SEO og UU), Programmering 1 (Python), Programmering 2 (Java), Databasesystemer (MySQL) og Utvikling av interaktive nettsider (Javascript, React og Sanity)</p>
      <div id='skills'>
        <FaHtml5 color='rgba(57, 211, 203, 0.678)' className="iconsize"/>
        <FaCss3 color='rgba(57, 211, 203, 0.678)' className="iconsize"/>
        <FaReact color='rgba(57, 211, 203, 0.678)'className="iconsize"/>
        <FaJs color='rgba(57, 211, 203, 0.678)' className="iconsize"/>
        <FaJava color='rgba(57, 211, 203, 0.678)' className="iconsize"/>
        <FaPython color='rgba(57, 211, 203, 0.678)' className="iconsize" />
      </div>
    </>
  );
}
