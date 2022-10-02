import React from "react"
import "./static/style.css"
import Robo from "./static/img/robo2.png"
import Cel from "./static/img/cel3.png"
import RobotGraphic from "./static/img/robot-graphic.jpg"
import BotIcon from "./static/img/bot-icon.png"

export default class SiteApp extends React.Component{
  constructor(){
    super()
    this.example = "aa"
  }
  render(){
    return(
      <>
      <aside className="sideBar">
        <nav className="menu">
          <ul>
            <li><a href="/" className="inicio">Início</a></li>
            <li><a href="/" className="artigos">Artigos</a></li>
            <li><a href="/" className="sobre">Sobre nós</a></li>
            <li><a href="/" className="contatos">Contatos</a></li>
            <li><a href="/" className="junte">Junte-se a nós</a></li>
          </ul>
        </nav>
      </aside>
      <header className="cabecalho">
        <div className="div-container">
        <figure>
        <img src={BotIcon} className="botIcon"/>
        </figure>
        </div>
      </header>
      <main className="principal">
        <section>
        <div className="title">
        <h1>Está preparado para a revolução tecnológica?</h1>
        </div>
        <div className="div-lado">
          <div className="container">
            <img src={Robo} className="robot" alt="Robô imagem"/>
            <img src={Cel} className="celular" alt="Celular"/>
          </div>
            <div className="text-div">
                <img src={RobotGraphic} alt="" className="robot-top"/>
            </div>
          </div>
        </section>
      </main>
      </>
    )
  }
}