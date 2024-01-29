import React from "react";
import "./Sidebar.css";

import imgLogoSpotify from "../assets/icons/logo-spotify.png";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <nav className="sidebar__navigation">
                <div className="logo">
                    <a href="http://localhost3001">
                        <img src={imgLogoSpotify} alt="Logo do Spotify"/>
                    </a>
                </div>
                <div>
                    <ul>
                        <li>
                            <a href="http://localhost3001">
                                <span className="fa fa-home"></span>
                                <span>Início</span>
                            </a>
                        </li>
                        <li>
                            <a href="http://localhost3001">
                                <span className="fa fa-search"></span>
                                <span>Buscar</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="library">
                <div className="library__content">
                    <button className="library__button">
                        <span className="fa fas fa-book"></span>
                        <span>Sua biblioteca</span>
                    </button>
                    <span className="fa fa-plus"></span>
                </div>

                <section className="section-playlist">
                    <div className="section-playlist__content">
                        <span className="text title">Crie sua primeira playlist</span>
                        <span className="text subtitle">É fácil, vamos te ajudar.</span>
                        <button className="section-playlist__button">
                            <span>Criar playlist</span>
                        </button>
                    </div>
                </section>

                <div className="cookies">
                    <a href="http://localhost3001">Cookies</a>
                </div>

                <div className="languages">
                    <button className="languages__button">
                        <span className="fa fa-globe"></span>
                        <span className="text">Português do Brasil</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;