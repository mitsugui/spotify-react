import React from "react";
import "./Playlist.css";

import img1 from "../assets/playlist/1.jpeg";
import img2 from "../assets/playlist/2.png";
import img3 from "../assets/playlist/3.jpeg";
import img4 from "../assets/playlist/4.jpeg";
import img5 from "../assets/playlist/5.jpeg";
import img6 from "../assets/playlist/6.jpeg";
import img7 from "../assets/playlist/7.jpeg";
import img8 from "../assets/playlist/8.jpeg";
import img9 from "../assets/playlist/9.jpeg";
import img10 from "../assets/playlist/10.jpeg";
import img11 from "../assets/playlist/11.jpeg";
import img12 from "../assets/playlist/12.jpeg";
import img13 from "../assets/playlist/13.jpeg";
import img14 from "../assets/playlist/14.jpeg";
import img15 from "../assets/playlist/15.jpeg";

const Playlist = () => {
    return (
        <div className="playlist-container">
            <div id="result-playlists">
                <h1 className="playlist-container__greeting">Boa tarde</h1>
                <h2 className="playlist-container__title">Navegar por todas as seções</h2>

                <div className="offer__scroll-container">
                    <section className="offer__list-item">
                        <a href="http://localhost3001" className="card card1">
                            <span className="card__title">Boas festas</span>
                            <img src={img1} alt="" />
                        </a>

                        <a href="http://localhost3001" className="card card2">
                            <span className="card__title">Feitos para você</span>
                            <img src={img2} alt="" />
                        </a>

                        <a href="http://localhost3001" className="card card3">
                            <span className="card__title">Lançamentos</span>
                            <img src={img3} alt="" />
                        </a>

                        <a href="http://localhost3001" className="card card4">
                            <span className="card__title">Creators</span>
                            <img src={img4} alt="" />
                        </a>

                        <a href="http://localhost3001" className="card card5">
                            <span className="card__title">Para treinar</span>
                            <img src={img5} alt="" />
                        </a>

                        <a href="http://localhost3001" className="card card6">
                            <span className="card__title">Padcasts</span>
                            <img src={img6} alt="" />
                        </a>

                        <a href="http://localhost3001" className="card card7">
                            <span className="card__title">Sertanejo</span>
                            <img src={img7} alt="" />
                        </a>

                        <a href="http://localhost3001" className="card card8">
                            <span className="card__title">Samba e pagode</span>
                            <img src={img8} alt="" />
                        </a>

                        <a href="http://localhost3001" className="card card9">
                            <span className="card__title">Funk</span>
                            <img src={img9} alt="" />
                        </a>

                        <a href="http://localhost3001" className="card card10">
                            <span className="card__title">MPB</span>
                            <img src={img10} alt="" />
                        </a>

                        <a href="http://localhost3001" className="card card11">
                            <span className="card__title">Rock</span>
                            <img src={img11} alt="" />
                        </a>

                        <a href="http://localhost3001" className="card card12">
                            <span className="card__title">Hip Hop</span>
                            <img src={img12} alt="" />
                        </a>

                        <a href="http://localhost3001" className="card card13">
                            <span className="card__title">Indie</span>
                            <img src={img13} alt="" />
                        </a>

                        <a href="http://localhost3001" className="card card14">
                            <span className="card__title">Relax</span>
                            <img src={img14} alt="" />
                        </a>

                        <a href="http://localhost3001" className="card card15">
                            <span className="card__title">Música Latina</span>
                            <img src={img15} alt="" />
                        </a>
                    </section>
                </div>
            </div>
            
            <div id="result-artist" className="hidden">
                <div className="grid-container">
                    <div className="artist-card" id="">
                        <div className="card-img">
                            <img id="artist-img" className="artist-img" alt="" />
                            <div className="play">
                                <span className="fa fa-solid fa-play"></span>
                            </div>
                        </div>
                        <div className="card-text">
                            <a title="Foo Fighters" className="vst" href="http://localhost3001" />
                            <span className="artist-name" id="artist-name"></span>
                            <span className="artist-category" id="artist-genre">Artista</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Playlist;