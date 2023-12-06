import styled from 'styled-components'

// Estilos Header - 187

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.25rem 3.125rem;
    background-color: #121212;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

    span {
        font-size: 2rem;
        font-weight: bold;
        user-select: none;
    }

    .sobrenome {
        margin-left: 10px;
        color: green;
    }

    @media (max-width: 760px) {
        padding: 1rem 1.3rem;

        .sobrenome {
            margin-left: 0px;
        }

        .nome-e-sobrenome {
            padding-top: 8px;
        }
    }

    @media (max-width: 360px) {
        padding: 1rem 0.7rem;
        
        span {
            font-size: 1.8rem;
        }
    }

`

export const DivSeccaoDireitaHeader = styled.div`
    display: flex;
    flex-direction: row;
    & > * {
        margin: 0px 15px;
    }

    @media (max-width: 760px) {
        & > * {
            margin: 0px 8px;
        }
    }

    @media (max-width: 360px) {
        & > * {
            margin: 0px 5px;
        }
    }
`

export const ToggleLanguage = styled.div`
  
  margin-top: 12px;
  
  display: flex;

  span {
    font-size: 1rem;
  }

  .toogle {
    width: 2.875rem;
    height: 1.5rem;
    border-radius: 14px;
  }

  .bolinha {
    width: 1.5rem;
    height: 1.5rem;
    background-color: white;
    border-radius: 50%;
    cursor: pointer;
  }

  .en-toogle {
    padding-top: 5px;
    padding-right: 8px;
    color: none;
    user-select: none;
  }

  .br-toogle {
    padding-top: 5px;
    padding-left: 8px;
    user-select: none;
  }

  @media (max-width: 760px) {
    span {
     font-size: 0.9rem;
    }

    .toogle {
      width: 2.5875rem;
      height: 1.35rem;
      border-radius: 12.6px;
    } 

    .bolinha {
      width: 1.35rem;
      height: 1.35rem;
      border-radius: 50%;
    }

    .en-toogle {
      padding-top: 4px;
      padding-right: 8px;
    }

    .br-toogle {
      padding-top: 4px;
      padding-left: 8px;
    }
  }

  @media (max-width: 360px) {
    span {
     font-size: 0.8rem;
    }

    .toogle {
      width: 2.3rem;
      height: 1.2rem;
      border-radius: 11.2px;
    } 

    .bolinha {
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 50%;
    }

    .en-toogle {
      padding-top: 4px;
      padding-right: 6.4px;
    }

    .br-toogle {
      padding-top: 4px;
      padding-left: 6.4;
    }
  }
  
`;

export const StyledButton = styled.button`
    user-select: none;
    background-color: #121212;
    color: white;
    border: none;
    text-align: center;
    padding: 12px;
    border-radius: 10px;
    box-shadow: 5px 5px rgb(210, 210, 210);
    font-size: 1rem;
    cursor: pointer;

    &:hover {
      background-color: white;
      color: black;
    }

    @media (max-width: 760px) {
      padding: 10.8px;
      border-radius: 9px;
      box-shadow: 4.5px 4.5px rgb(210, 210, 210);
      font-size: 0.9rem;
    }

    @media (max-width: 360px) {
        padding: 9.6;
        border-radius: 8px;
        box-shadow: 4px 4px rgb(210, 210, 210);
        font-size: 0.8rem;
    }

`

// Styles MainContent - 387

export const StyledPhotoProfile = styled.div`

  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  div {
    width: 400px;
    //width: 100%;
    height: 400px;
    position: relative;
    margin: auto;
  }

  div > .imagem-rotatoria {
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.4s ease-in-out;
    display: flex;
    justify-content: space-around;
    
    img {
      user-select: none;
      width: 400px;
      //width: 70%;
      margin-top: 45px;
      border: 10px solid white;
      border-radius: 50%;
      position: absolute;
      backface-visibility: hidden;
    }

    .coroa {
      transform: rotateY(180deg);
    }

    &.active-rotate {
      transform: rotateY(180deg) translateX(-20px);
    }

  }

  span {
    user-select: none;
    margin-bottom: 35px;
    font-weight: bold;
    text-align: center;
    display: block;
    font-size: 2.3rem;
    margin-top: 85px;
    margin-left: 20px;
  }
  
  @media (max-width: 1150px) {
    width: 45%;

    img {
      width: 300px !important;
      margin-top: 45px;
      border: 10px solid white;
    }

    span {
      margin-top: 20px;
      font-size: 1.725rem;
    }
    
  }

  @media (max-width: 780px) {
    width: 100%;

    img {
      width: 70% !important;
    }

    span {
      margin-top: 12px;
      font-size: 8vw;
    }

  }

`

export const StyledResume = styled.div`

  width: 80%;
  height: 307px;
  padding: 0px 20px;
  margin-top: 60px;
  margin-bottom: 40px;

  h1 {
    font-size: 4.5rem;
    text-shadow: 10px 10px black;
    user-select: none;
  }

  .sobrenome {
    color: green;
    margin-left: 80px;
  }

  p {
    margin-top: 15px;
    font-size: 20px;
    line-height: 28px;
    user-select: none;
  }

  @media (max-width: 1150px) {
    
    h1 {
      font-size: 3.375rem;
      text-shadow: 7.5px 7.5 black;
    }
    
    .sobrenome {
      margin-left: 60px;
    }
    
    p {
      margin-top: 11.25px;
      font-size: 15px;
      line-height: 21px;
    }

  }

  @media (max-width: 780px) {
    
    margin-top: 15px;

    h1 {
      font-size: 12vw;
      text-shadow: 2vw 2vw black;
    }

    p {
      margin-top: 11.25px;
      font-size: 3vw;
      line-height: 4.8vw;
    }


  }

  .sublinhado-react, .sublinhado-java, .sublinhado-spring {
    padding: 5px;
    border-radius: 5px;
    font-weight: bold;
  }

  @media (max-width: 480px) {
    .sublinhado-react, .sublinhado-java, .sublinhado-spring {
      padding: 3px;
    }
  }

  .sublinhado-react {
    background-color: #2e2e2e; /* Cor de fundo do React */
    color: #61DAFB; /* Cor do texto do React */
  }

  .sublinhado-java {
    background-color: #F2F2F2;
    color: #F20505;
  }

  .sublinhado-spring {
    background-color: #6FB440;
    color: white;
  }

`

export const StyledCurriculum = styled.div`

  overflow: auto;
  height: 307px;
  //height: 53vh;
  margin-top: 60px;
  width: 70%;
  padding: 20px;
  background-color: #252525;
  border-radius: 10px;
  line-height: 1.3;

  .title-cv {
    text-align: center;
    font-weight: normal;
  }

  .two-text {
    display: flex;
    justify-content: space-between;
  }

  h2 {
    margin-top: 15px;
  }

  .left-text {
    //float: left;
    text-align: left;
    font-weight: bold;
    display: inline-block;
  }

  .italic {
    font-style: italic;
  }

  .right-text {
    //float: right;
    text-align: right;
    display: inline-block;
  }

  hr {
    margin-top: 1px;
    margin-bottom: 3px;
  }

  &::-webkit-scrollbar-thumb {
    padding-top: 10px;
    border-top-left-radius: 0px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 10px;
    padding-bottom: 10px;
  }

  @media (max-width: 700px) {
    height: 300px;
    margin-top: 0px;
  }

  @media (max-width: 600px) {
    font-size: 2.7vw;
  }

  @media (max-width: 450px) {
    margin-top: -25px;
  }

`

export const StyledMainContent = styled.div`
  display: flex;
  font-size: 16px;

  .conteudoCentral {
    width: 50%;
    //margin: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  @media (max-width: 1150px) {
    .conteudoCentral {
      width: 55%;
    }
  }

  @media (max-width: 780px) {
    flex-direction: column;

    .conteudoCentral {
      width: 100%;
      //margin-bottom: 40px;
      margin-bottom: 6vw;
    }
  }
`

export const StyledResumeButton = styled(StyledButton)`
  
  transition: margin 500ms ease;
  font-size: 1.3rem;
  font-weight: bold;
  display: block;
  margin-top: 20px;
  background-color: #0c0c0c;

  @media (max-width: 1150px) {
    font-size: 0.975rem;
    margin-top: 15px;
  }

  @media (max-width: 780px) {
    font-size: 3vw;
  }

  @media (max-width: 500px) {
    font-size: 4vw;
  }

`

// Estilos dos cards - 559

export const StyledCard = styled.div`
  background-color: #252525;
  cursor: pointer;
  border-radius: 15px;
  margin-top: 1.5vw;
  margin-bottom: 1.5vw;
  display: flex;
  user-select: none;

  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }

  h4 {
    font-size: 1.5vw;
    font-weight: bold;
    padding: 1.5vw 20px;
  }

  p {
    font-size: 1.2vw;
    padding: 0px 20px;
  }

  .seccao-textos {
    width: 25vw;
  }

  @media (max-width: 940px) {
    margin-bottom: 1vw;
  }

  @media (max-width: 860px) {
    margin-bottom: 0.5vw;
  }

  @media (max-width: 780px) {
    width: auto;
    
    .seccao-textos {
      width: 47.17vw;
    }
    
    h4 {
      font-size: 2.83vw;
      font-weight: bold;
      padding: 2.83vw 2.5vw;
    }

    p {
      font-size: 2.26vw;
      padding: 0px 2.5vw;
    }
    
  }
 
`

export const StyledGrid = styled.div`

  width: 93vw;
  margin-top: 2vw;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 0.75vw;
  justify-items: center;
  align-items: center;
  margin: auto;

  @media (max-width: 780px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
    gap: 3vw;
  }

`

export const StyledCardLeetCode = styled(StyledCard).attrs({ as: 'a' })`
  background-color: white;
  color: black;
  text-decoration: none;

  img {
    width: 14.84vw;
    height: 14.84vw;
    margin: 20px;
  }

  @media (max-width: 780px) {
    img {
      width: 28vw;
      height: 28vw;
      margin: 3vw;
    }
  }

`

export const StyledCarrousel = styled.div`

  width: 14.84vw;
  height: 14.84vw;
  margin: 20px;
  border-radius: 15px;

  display: flex;
  position: relative;
  align-items: center;

  span {
    font-size: 2.5vw;
    height: 14.84vw;
    width: 3vw;
    text-align: center;
    position: absolute;
    line-height: 14.84vw;
  }

  span:hover {
    background-color: hsla(120, 100%, 25%, 0.712);
    transition: background-color 200ms ease;
  }

  img {
    width: 100%;
    border-radius: 15px;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    transition: opacity 1s ease-in-out;
  }

  .flecha-esquerda {
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
  }

  .flecha-direita {
    right: 0vw;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }

  .imagem-ativa {
    opacity: 1;
  }

  @media (max-width: 780px) {
    width: 28vw;
    height: 28vw;
    margin: 3vw;

    span {
      font-size: 4.7vw;
      height: 28vw;
      width: 5.66vw;
      line-height: 28vw;
    }

  }

`
// Estilos painel de projetos (ProjectContent)

export const StyledPanel = styled.div`
  
  //padding: 30px 50px;
  padding: 2vw 3.75vw;
  transition: all 0.3s ease-in-out;
  user-select: none;

  #correct-position-behavior {
        margin-bottom: 16px;
    }

  .carrousel-de-paineis {
    overflow: hidden;
    position: relative;
    //height: 500px;
    //height: 85.51vh;
    height: 38vw;
  }

  .carousel-panel {
    //width: 2400px; /* Largura total do carrossel (300px x 3 imagens) */
    display: flex;
    flex-direction: column;
    transition: transform 0.8s ease-in-out;
  }

  @keyframes transicaoTitulo {
    0% {
      opacity: 1;
    }

    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .transicaoTitulo {
    animation: transicaoTitulo 1s ease;
  }

  h2 {
    font-size: 3.4vw;
    cursor: pointer;
    display: inline-block;
  }

  h2:hover {
    text-decoration: underline;
  }

  .trianguloCima, .trianguloBaixo {
    // para tirar os estilos padrões do <button>
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;

    color: white;
    font-size: 1.5vw;
    padding: 0px 10px;
  }

  .trianguloCima:hover, .trianguloBaixo:hover {
    color: green;
  }

  .trianguloCima {
    //margin-bottom: 5px;
    margin-bottom: 0.3vw;
  }

  .botoes-triangulo {
    display: flex;
    flex-direction: column;
    float: left;
    margin-right: 12px;
  }

  .header-project-content {
    height: 4.8vw;
    padding-top: 0px;
    padding-left: 70px;
  }

  .flex {
    display: flex;
  }

  @media (max-width: 780px) {
    .trianguloCima, .trianguloBaixo {
      font-size: 2.1vw;
      padding: 0px 5px;
    }
    
    .header-project-content {
      height: 7.7vw;
      padding-left: 4.5vw;
    }

    .botoes-triangulo {
      margin-right: 6px;
    }
    
    h2 {
      font-size: 5vw;
    }

    .carrousel-de-paineis {
      height: 94vw;
    }
  }

`

export const StyledMenu = styled.div`

  width: 27.5%;
  /*border-radius: 15px;
  //background-image: linear-gradient(45deg, #accfdb, #1e9dcc);
  margin: 20px 15px;
  width: 27.5%;
  color: black;
  font-size: 1.25vw;
  height: 29vw;*/
  //margin: 20px 15px;
  margin: 1.5vw 1.125vw;

  .main {
    border-radius: 15px;
    //margin: 20px 15px;
    //width: 27.5%;
    color: black;
    font-size: 1.25vw;
    height: 29vw;
    //display: none;
  }

  .switch-menu-text {
    padding: 10px;
    margin: auto;
    text-align: center;
    background-color: #252525;
    color: white;
    border: 1px solid white;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    cursor: pointer;
  }

  .switch-menu-text:hover {
    background-color: #0c0c0c;
  }

  p {
    //padding: 20px;
    padding: 2vw;
  }

  .bg-gradiente-blue {
    background-image: linear-gradient(45deg, #accfdb, #1e9dcc);
  }

  .bg-gradiente-orange {
    background-image: linear-gradient(45deg, #e9c0ac, #E57A44);
  }

  .bg-gradiente-pink {
    background-image: linear-gradient(45deg, #db9dd3, #aa3c9b);
  }

  // card

  .options {
    width: 25vw;
    background-color: #252525;
    border: 1px solid white;
    border-radius: 10px;
    font-size: 1.2vw;
    margin-top: 15px;
    display: none;
  }

  .options > div {
    cursor: pointer;
  }

  .card-option {
    text-align: center;
    padding: 20px 0px;
  }

  .option-top {
    border-bottom: 1px solid white;
  }

  .option-middle {
    border-bottom: 1px solid white;
  }

  .option-top:hover {
    background-color: green;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .option-middle:hover {
    background-color: green;
  }

  .option-bottom:hover {
    background-color: green;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  @media (max-width: 780px) {
    margin: auto;
    width: 88%;
    //margin-top: 20px;
    //margin-bottom: 20px;
    margin-top: 2.6vw;
    margin-bottom: 2.6vw;

    .main {
      font-size: 2vw;
    }

    .options {
      width: 51vw;
      margin:  auto;
      font-size: 2vw;
    } 

    .card-option {
      padding: 3.35vw 0px;
    }

    .margin-mobile {
      margin-bottom: 10.6vw;
    }

    .margin-mobile2 {
      margin-bottom: 1.5vw;
    }

  }

  /*@media (max-width: 550px) {
    margin-bottom: 2.35vw;
  }*/

`

export const StyledCarrouselImages = styled.div`

  margin: auto;
  width: 51.6vw;
  //height: 32vw;
  height: 29vw;
  //margin: 20px 20px;
  margin: 1.5vw;
  border-radius: 15px;
  display: flex;

  overflow: hidden;
  position: relative;

  .carosel-images {
    width: 2400px; /* Largura total do carrossel (300px x 3 imagens) */
    display: flex;
    transition: transform 0.8s ease-in-out;
  }

  img {
    width: 60vw;
    border-radius: 15px;
  }

  @media (max-width: 780px) {
    margin: auto;
    width: 81vw;
    height: 45.5vw;
  }

  img {
    width: 81vw;
  }

`

export const DotsTable = styled.div`

  display: flex;
  //margin: auto;

  .dot {
    width: 0.85vw;
    height: 0.85vw;

    //width: 10px;
    //height: 10px;

    border-radius: 50%;
    background-color: #252525;
    border: 1px solid white;
    margin: 0px 5px;
  }

  .dot-active {
    background-color: green !important;
  }

  @media (max-width: 780px) {
    .dot {
      width: 1.7vw;
      height: 1.7vw;
    }
  }

  /*@media (max-width: 550px) {
    .dot {
      width: 2.2vw;
      height: 2.2vw;
    }
  }*/

`

// Estilos do footer

export const StyledFooter = styled.footer`

  background-color: #121212;
  padding: 20px;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .barra {
    //width: 25vw;
    width: 340px;
    height: 3px;
    background-image: linear-gradient(90deg, white, green);
  }

  .nome-footer {
    color: white;
    //font-size: 2.2vw;
    font-size: 30px;
    margin-left: 5px;
    user-select: none;
  }

  .sobrenome-footer {
    color: green;
    margin-left: 15px;
    //font-size: 2.2vw;
    font-size: 30px;
  }

  .flex {
    display: flex;

    .social-midia-button-green {
      background-color: green;
      border-radius: 10px;
    }
  }

  .button-email {
    background-color: transparent;
    border: none;
    cursor: pointer;
    width: 70px;
    height: 70px;
    padding: 0;
    position: relative;
  }

  .dialog-box {
    display: none;
    padding: 10px;
    border-radius: 5px;
    font-weight: bold;
    color: white;
    background-color: #333;
    //font-size: 1.3vw;
    font-size: 18px;
    text-align: center;
    z-index: 0;
    position: absolute;
    top: 14px;
    left: -6px;
  }
  
  .image-logo-mail {
    width: 70px;
    height: 70px;
    border-radius: 10px;
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
  }

  .image-logo-mail:hover {
    background-color: #333;
  }

  @media (max-width: 750px) {
    .barra {
      display: none;
    }

    .nome-footer {
      display: none;
    }

    .sobrenome-footer {
      display: none;
    }

    justify-content: center;
  }

  @media (max-width: 380px) {
    .botton-email {
      width: 60px;
      height: 60px;
    }
    
    .image-logo-mail {
      width: 60px;
      height: 60px;
    }
  }

`

export const ButtonSocialMidia = styled.a`

  //padding: 5px;
  width: 70px;
  height: 70px;
  margin-left: 15px;
  display: block;
  text-decoration: none;
  border-radius: 10px;

  &:hover {
    background-color: #333;
  }

  img {
    width: 70px;
    height: 70px;
  }

  @media (max-width: 380px) {
    width: 60px;
    height: 60px;

    img {
      width: 60px;
      height: 60px;
    }
  }

`

export const StyledCarrouselPanel = styled.div`

  //background-color: purple;
  //height: 500px;
  //margin-bottom: 25px;
  margin-bottom: 1.875vw;
  //width: 1300px;
  //width: 85%;
  //margin: auto;

  .project-content-p {
    font-size: 1.2vw;
    width: 87%;
    margin: auto;
  }

  .flex {
    display: flex;
    justify-content: center;
  }

  .dots {
    font-size: 1.6vw;
    //font-size: 20px;
    font-weight: bolder;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    //margin: auto;
  }

  .right-change-image, .left-change-image {
    cursor: pointer;
  }

  .right-change-image:hover, .left-change-image:hover {
    color: green;
    transition: color 200ms ease;
  }

  .left-change-image {
    margin-right: 3px;
  }

  .right-change-image {
    margin-left: 6px;
  }

  @media (max-width: 780px) {
    .flex {
      flex-direction: column;
      //justify-content: center;
    }

    .project-content-p {
      font-size: 2vw;
    }

    .dots {
      font-size: 2.7vw;
      //margin-top: 20px;
      margin-top: 2vw;
      margin-bottom: 1.2vw;
    }

  }

  /*@media (max-width: 550px) {
    .dots {
      font-size: 3.7vw;
      //margin-top: 15px;
      margin-top: 1.5vw;
    }
  }*/

`