import React from "react"
import idiomaBr from "./componentes/idiomaBR"
import idiomaEn from "./componentes/idiomaEN"
import Header from "./componentes/Header"
import MainContent from "./componentes/MainContent"
import ProjectsPanel from "./componentes/ProjectsPanel"
import ProjectContent from "./componentes/ProjectContent"
import Footer from "./componentes/Footer"

import "./styles.scss"

/*import Icons from "./testes/Icons"*/

function App() {

  const [activeBr, setActiveBr] = React.useState(false)
  const [translateY, setTranslateY] = React.useState(0)
  const [projectLink, setProjectLink] = React.useState("https://github.com/raphaeldeoliveira/FIFABOT")
  const [title, setTitle] = React.useState("FIFA Bot Project")
  const [transicaoTitulo, setTransicaoTitulo] = React.useState(false)
  const [currentProject, setCurrentProject] = React.useState(0)
  const [mobile, setMobile] = React.useState(false)

  const resizer = () => {
    setMobile(window.innerWidth <= 780 ? true : false)
  }

  React.useEffect(() => {
    //window.innerWidth <= 780 ? setMobile(true) : setMobile(false)
    resizer()
  }, [window.innerWidth]);

  React.useEffect(() => {
    resizer()
    window.addEventListener("resize", resizer)

    // função de limpeza
    return function() {
      window.removeEventListener("resize", resizer)
    }
  }, [])

  function mudarIdioma() {
    setActiveBr((prevState) => !prevState)
  }
  
  function scrollToButton(destino) {
    const elemento = document.getElementById(destino)
    if (elemento) {
        elemento.scrollIntoView({ behavior: 'smooth' })
        if (destino === "socialMedias") {
          const emailclass = document.getElementsByClassName('button-email')
          const email = emailclass[0];
          const demaisMidias = document.getElementsByClassName('social-midia-button')
          const linkedin = demaisMidias[0];
          const zap = demaisMidias[1];
          const github = demaisMidias[2];
          setTimeout(() => {
              email.classList.add('social-midia-button-green');
              linkedin.classList.add('social-midia-button-green');
              zap.classList.add('social-midia-button-green');
              github.classList.add('social-midia-button-green');
              setTimeout(() => {
                email.classList.remove('social-midia-button-green');
                linkedin.classList.remove('social-midia-button-green');
                zap.classList.remove('social-midia-button-green');
                github.classList.remove('social-midia-button-green');
              }, 200)
              setTimeout(() => {
                email.classList.add('social-midia-button-green');
                linkedin.classList.add('social-midia-button-green');
                zap.classList.add('social-midia-button-green');
                github.classList.add('social-midia-button-green');
              }, 400)
              setTimeout(() => {
                email.classList.remove('social-midia-button-green');
                linkedin.classList.remove('social-midia-button-green');
                zap.classList.remove('social-midia-button-green');
                github.classList.remove('social-midia-button-green');
              }, 600)
          }, 1000)
        }
    }
  }

  function scrollToProject(currentId) {
    
    document.getElementById("correct-position-behavior").scrollIntoView({ behavior: 'smooth' })

    setTimeout(() => {
      if (currentId == 0) {
        setTranslateY(0)
        setTimeout(() => {
          setTitle((activeBr ? idiomaBr.titleProject1 : idiomaEn.titleProject1))
          setProjectLink("https://github.com/raphaeldeoliveira/FIFABOT")
        }, 500)
      } else if (currentId == 1) {
        //setTranslateY(-38.27)
        setTranslateY(mobile ? -193.5 : -38.27)
        setTimeout(() => {
          setTitle((activeBr ? idiomaBr.titleProject2 : idiomaEn.titleProject2))
          setProjectLink("https://github.com/raphaeldeoliveira/PlataformaEnsino")
        }, 500)
      } else {
        //setTranslateY(-76.54)
        setTranslateY(mobile ? -387 : -76.54)
        setTimeout(() => {
          setTitle((activeBr ? idiomaBr.titleProject3 : idiomaEn.titleProject3))
          setProjectLink("https://github.com/raphaeldeoliveira/LojaRoupaApp")
        }, 500)
      }
      if (currentId !== currentProject) {
        setTimeout(() => {
          setTransicaoTitulo((prevTransicao) => !prevTransicao)
        }, 1000)
        setTransicaoTitulo((prevTransicao) => !prevTransicao)
      }
      setCurrentProject(currentId)
    }, 400);
  }
  
  return (
    <div className="App">
      <Header
        mudarIdioma={mudarIdioma}
        scrollTo={scrollToButton}

        button1text={(activeBr ? idiomaBr.button1text : idiomaEn.button1text)}
        button2text={(activeBr ? idiomaBr.button2text : idiomaEn.button2text)}
      />
      <MainContent
        mobile={mobile}
        textBelowImage={(activeBr ? idiomaBr.textBelowImage : idiomaEn.textBelowImage)}
        mainParagraph1={(activeBr ? idiomaBr.mainParagraph1 : idiomaEn.mainParagraph1)}
        mainParagraph2={(activeBr ? idiomaBr.mainParagraph2 : idiomaEn.mainParagraph2)}
        mainParagraph3={(activeBr ? idiomaBr.mainParagraph3 : idiomaEn.mainParagraph3)}
        mainParagraph4={(activeBr ? idiomaBr.mainParagraph4 : idiomaEn.mainParagraph4)}
        buttonText1={(activeBr ? idiomaBr.buttonText1 : idiomaEn.buttonText1)}
        buttonText2={(activeBr ? idiomaBr.buttonText2 : idiomaEn.buttonText2)}

        cvCabecalho={(activeBr ? idiomaBr.cvCabecalho : idiomaEn.cvCabecalho)}
        cvTitle1={(activeBr ? idiomaBr.cvTitle1 : idiomaEn.cvTitle1)}
        cvSubtitle12={(activeBr ? idiomaBr.cvSubtitle12 : idiomaEn.cvSubtitle12)}
        cvComplement12={(activeBr ? idiomaBr.cvComplement12 : idiomaEn.cvComplement12)}
        cvParagraph1={(activeBr ? idiomaBr.cvParagraph1 : idiomaEn.cvParagraph1)}
        cvTitle2={(activeBr ? idiomaBr.cvTitle2 : idiomaEn.cvTitle2)}
        cvSubtitle2={(activeBr ? idiomaBr.cvSubtitle2 : idiomaEn.cvSubtitle2)}
        cvSubtitle21={(activeBr ? idiomaBr.cvSubtitle21 : idiomaEn.cvSubtitle21)}
        cvSubtitle22={(activeBr ? idiomaBr.cvSubtitle22 : idiomaEn.cvSubtitle22)}
        cvComplement22={(activeBr ? idiomaBr.cvComplement22 : idiomaEn.cvComplement22)}
        cvParagraph2={(activeBr ? idiomaBr.cvParagraph2 : idiomaEn.cvParagraph2)}
        cvTitle3={(activeBr ? idiomaBr.cvTitle3 : idiomaEn.cvTitle3)}
        cvArticle31title={(activeBr ? idiomaBr.cvArticle31title : idiomaEn.cvArticle31title)}
        cvArticle31text={(activeBr ? idiomaBr.cvArticle31text : idiomaEn.cvArticle31text)}
        cvArticle32title={(activeBr ? idiomaBr.cvArticle32title : idiomaEn.cvArticle32title)}
        cvArticle32text={(activeBr ? idiomaBr.cvArticle32text : idiomaEn.cvArticle32text)}
      />
      <ProjectsPanel
        scrollTo={scrollToProject}
        setTranslateY={setTranslateY}
        mobile={mobile}
        titleProject1={(activeBr ? idiomaBr.titleProject1 : idiomaEn.titleProject1)}
        cardParagrap1={(activeBr ? idiomaBr.cardParagrap1 : idiomaEn.cardParagrap1)}
        titleProject2={(activeBr ? idiomaBr.titleProject2 : idiomaEn.titleProject2)}
        cardParagrap2={(activeBr ? idiomaBr.cardParagrap2 : idiomaEn.cardParagrap2)}
        titleProject3={(activeBr ? idiomaBr.titleProject3 : idiomaEn.titleProject3)}
        cardParagrap3={(activeBr ? idiomaBr.cardParagrap3 : idiomaEn.cardParagrap3)}
        titleProject4={(activeBr ? idiomaBr.titleProject4 : idiomaEn.titleProject4)}
        cardParagrap4={(activeBr ? idiomaBr.cardParagrap4 : idiomaEn.cardParagrap4)}
        currentProject={currentProject}
      />
      <ProjectContent 
        titleProject1={(activeBr ? idiomaBr.titleProject1 : idiomaEn.titleProject1)}
        titleProject2={(activeBr ? idiomaBr.titleProject2 : idiomaEn.titleProject2)}
        titleProject3={(activeBr ? idiomaBr.titleProject3 : idiomaEn.titleProject3)}

        contentParagraph1={(activeBr ? idiomaBr.contentParagraph1 : idiomaEn.contentParagraph1)}
        contentParagraph2={(activeBr ? idiomaBr.contentParagraph2 : idiomaEn.contentParagraph2)}
        contentParagraph3={(activeBr ? idiomaBr.contentParagraph3 : idiomaEn.contentParagraph3)}

        titleOptionMenu1={(activeBr ? idiomaBr.titleOptionMenu1 : idiomaEn.titleOptionMenu1)}
        titleOptionMenu2={(activeBr ? idiomaBr.titleOptionMenu2 : idiomaEn.titleOptionMenu2)}
        titleOptionMenu3={(activeBr ? idiomaBr.titleOptionMenu3 : idiomaEn.titleOptionMenu3)}

        menuText11={(activeBr ? idiomaBr.menuText11 : idiomaEn.menuText11)}
        menuText12={(activeBr ? idiomaBr.menuText12 : idiomaEn.menuText12)}
        menuText13={(activeBr ? idiomaBr.menuText13 : idiomaEn.menuText13)}

        menuText21={(activeBr ? idiomaBr.menuText21 : idiomaEn.menuText21)}
        menuText22={(activeBr ? idiomaBr.menuText22 : idiomaEn.menuText22)}
        menuText23={(activeBr ? idiomaBr.menuText23 : idiomaEn.menuText23)}

        menuText31={(activeBr ? idiomaBr.menuText31 : idiomaEn.menuText31)}
        menuText32={(activeBr ? idiomaBr.menuText32 : idiomaEn.menuText32)}
        menuText33={(activeBr ? idiomaBr.menuText33 : idiomaEn.menuText33)}
        translateY={translateY}
        setTranslateY={setTranslateY}
        title={title}
        setTitle={setTitle}
        projectLink={projectLink}
        setProjectLink={setProjectLink}
        transicaoTitulo={transicaoTitulo}
        setTransicaoTitulo={setTransicaoTitulo}
        currentProject={currentProject}
        setCurrentProject={setCurrentProject}
        mobile={mobile}
      />

      <Footer 
        messageClickMailButton={(activeBr ? idiomaBr.messageClickMailButton : idiomaEn.messageClickMailButton)}
      />
    </div>

    /*<Icons />*/
  );
}

export default App;
