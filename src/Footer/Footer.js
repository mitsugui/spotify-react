import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="disclaimer-premium">
            <div className="text">
                <p className="disclaimer-premium__title">Testar o Premium de graça</p>
                <p className="disclaimer-premium__subtitle">Inscreva-se para curtir música ilimitada e podcasts só com alguns anúncios. Não precisa de cartão de crédito.</p>
            </div>
            <button type="button">
                <span>Inscreva-se grátis</span>
            </button>
        </footer>
    );
};

export default Footer;