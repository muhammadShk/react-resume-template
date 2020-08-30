import React, { Component } from 'react';
import TrackVisibility from 'react-on-screen'
import handleViewport from 'react-in-viewport';


const About = (props) => {
   if(props.data){
      var name = props.data.name;
      var profilepic= "images/"+props.data.image;
      var bio = props.data.bio;
      var street = props.data.address.street;
      var city = props.data.address.city;
      var state = props.data.address.state;
      var zip = props.data.address.zip;
      var phone= props.data.phone;
      var email = props.data.email;
      var resumeDownload = props.data.resumedownload;
   }

const [width, setWidth] = React.useState(window.innerWidth);
const breakpoint = 1020;

React.useEffect(() => {
const handleWindowResize = () => setWidth(window.innerWidth)
window.addEventListener("resize", handleWindowResize);

// Return a function from the effect that removes the event listener
return () => window.removeEventListener("resize", handleWindowResize);
}, []);
return (
         <section id="about" >
            <div className="row show-on-scroll">
               <div className={width < breakpoint ? "six columns":"three columns"}>
                  <img className="profile-pic"  src={profilepic} alt="Subaiyal Profile Pic" />
               </div>
               <div className="nine columns main-col">
                  <h2>About Me</h2>

                  <p>{bio}</p>
                  <div className="row">
                     <div className="columns contact-details">
                        <h2>Contact Details</h2>
                        <p className="address">
                              <span>{name}</span><br />
                              <span>{street}<br />
                                    {city} {state}, {zip}
                           </span><br />
                              <span>{phone}</span><br />
                              <span>{email}</span>
                        </p>
                     </div>
                     <div className="columns download">
                        <p>
                           <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
   );
}

export default About;
