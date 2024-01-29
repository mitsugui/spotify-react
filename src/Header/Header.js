import React from "react";
import "./Header.css";
import imgSmallRightArrow from "../assets/icons/small-right.png";
import imgSmallLeftArrow from "../assets/icons/small-left.png";
import imgSearch from "../assets/icons/search.png";

const Header = () => {
    return (
        <nav className="header__navigation">
            <div className="navigation">
                <button className="arrow-left">
                    <img src={imgSmallLeftArrow} alt="Seta esquerda"/>
                </button>
                <button className="arrow-right">
                    <img src={imgSmallRightArrow} alt="Seta direita"/>
                </button>
            </div>

            <div className="header__search">
                <img src={imgSearch} alt=""/>
                <input id="search-input" type="text" maxLength="800px" placeholder="O que você quer ouvir?" />
            </div>

            <div className="header__login">
                <button className="subscribe">Inscreva-se</button>
                <button className="login">Entrar</button>
            </div>
        </nav>
    );
};

export default Header;