import React, { Component } from 'react';
import Typewriter from 'typewriter-effect';
// library used for the typewriter effect is written by Tameem Safi
//  https://github.com/tameemsafi/typewriterjs#readme


class Header extends Component {
   render() {

      if(this.props.data){
         var name = this.props.data.name;
         var occupation= this.props.data.occupation;
         var description= this.props.data.description;
         var city= this.props.data.address.city;
         var networks= this.props.data.social.map(function(network){
         return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
         })
      }

      return (
         <>
            <header id="home" className="hero-section">
               <nav id="nav-wrap">
                  <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                  <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
                  <ul id="nav" className="nav">
                     <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                     <li><a className="smoothscroll" href="#about">About</a></li>
                     <li><a className="smoothscroll" href="#resume">Resume</a></li>
                     <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                     <li><a className="smoothscroll" href="#testimonials">Inspirations</a></li>
                     <li><a className="smoothscroll" href="#contact">Contact</a></li>
                  </ul>
               </nav>
               <div className="row banner typeWriter-section">
                  <div className="banner-text">
                     <h1>
                     <Typewriter
                        onInit={(typewriter) => {
                           typewriter
                              .pauseFor(1500)
                              .typeString('Hi')
                              .pauseFor(2500)
                              // .deleteAll()
                              // .typeString('Looking for full stack web developer ?')
                              // .pauseFor(1500)
                              // .deleteAll()
                              // .typeString('Want to bring your vision to the web ?')
                              // .pauseFor(1500)
                              // .deleteAll()
                              // .typeString('Great !')
                              // .pauseFor(1500)
                              .deleteAll()
                              .typeString('You can call me Jane Doe')
                              .pauseFor(1500)
                              .deleteAll()
                              .typeString('Welcome to my world')
                              .pauseFor(1500)
                              .deleteAll()
                              .typeString('scroll down')
                              .start();
                        }}
                        />
                     </h1>
                  </div>
               </div>
            </header>
         </>
      );
   }
   }

export default Header;
