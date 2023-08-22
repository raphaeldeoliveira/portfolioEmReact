import React from "react"
import Header from "./componentes/Header"
import MainContent from "./componentes/MainContent"
import ProjectsPanel from "./componentes/ProjectsPanel"
import ProjectContent from "./componentes/ProjectContent"
import Footer from "./componentes/Footer"

import "./styles.scss"
//import idiomaBr from "./componentes/idiomaBR"
//import idiomaEn from "./componentes/idiomaEN"

function App() {

  //const [idiomaToogle, setIdiomaToogle] = React.useState(false)
  //const [idioma, setIdioma] = React.useState([])

  function mudarIdioma() {

  }
  
  function scrollToButton(destino) {
    const elemento = document.getElementById(destino)
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth' })
    }
  }

  function scrollToProject(destino) {
    const elemento = document.getElementById(destino)
      if (elemento) {
        elemento.scrollIntoView({ behavior: 'smooth' })
      }
    setTimeout(() => {
      document.getElementById("section-projects").scrollIntoView({ behavior: 'smooth' })
    }, 1200);
  }
  
  return (
    <div className="App">
      <Header
        mudarIdioma={mudarIdioma}
        //botao1={idioma[0].text1}
        //botao2={idioma[1].text2}
        scrollTo={scrollToButton}
    />
      <MainContent

      />
      <ProjectsPanel
        scrollTo={scrollToProject}
      />
      <ProjectContent />

      <Footer />

    </div>
  );
}

export default App;
