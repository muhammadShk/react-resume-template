import React, { Component, useState } from 'react';
import axios from 'axios'


// back-end validations added and converted class based to function based component. Utilized useState hook to control user input. 
const onSubmitStyle = {'padding-left':'30px', 'padding-top':'20px', 'color':'#008F11'}
const onSubmitErrStyle = {'padding-left':'30px', 'padding-top':'20px', 'color':'red'}

const errorMsgOnInputStyle = {'text-align':'center', 'color':'red'}


const Contact = (props) => {
   const [submitted, setSpamControl] = useState(false);
   const initialState = {
      contactName:'',
      contactEmail:'',
      contactSubject:'',
      contactMessage:''
   }
   const [inquiry, setInquiry] = useState(initialState)
   const [errors, setErrors] = useState({})

   // form submission is limited to only once. If user refresh the page then they can submit another form. 
   const onSubmitHandler = (e) => {
      e.preventDefault();
      if(!submitted){
         axios.post("http://localhost:8000/api/inquiry", inquiry)
         .then(response=>{
            setInquiry(initialState)
            setSpamControl(true)
            setErrors({})
            console.log(response.data)
         })
         .catch(err => {
            console.log(err);
            if(err.response){
               setErrors(err.response.data.errors);
            }else{
               setErrors({
                  serverDown: true
               })
            }
         })
      }
   }

      const onChangeHandler = (e) =>{
         e.preventDefault();
         setInquiry({
            ...inquiry,
            [e.target.name]:e.target.value
         })
   }

   if(props.data){
      var name = props.data.name;
      var street = props.data.address.street;
      var city = props.data.address.city;
      var state = props.data.address.state;
      var zip = props.data.address.zip;
      var phone= props.data.phone;
      var email = props.data.email;
      var message = props.data.contactmessage;
   }

   return(
      <section id="contact">
         <div className="row show-on-scroll">
            <div className="row section-head">
               <div className="two columns header-col">
                  <h1><span>Get In Touch.</span></h1>
               </div>
               <div className="ten columns">
                     <p className="lead">{message}</p>
               </div>
            </div>

            <div className="row">
               <div className="eight columns">
                  <form onSubmit={onSubmitHandler}>
                     <fieldset>
                        <div>
                           <label htmlFor="contactName">Name <span className="required">*</span></label>
                           <input type="text" value={inquiry.contactName} size="35" id="contactName" name="contactName" onChange={onChangeHandler}/>
                           {errors.hasOwnProperty('contactName')&&<p style={errorMsgOnInputStyle}>{errors.contactName.properties.message}</p>}
                        </div>
                        <div>
                           <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                           <input type="text" value={inquiry.contactEmail} size="35" id="contactEmail" name="contactEmail" onChange={onChangeHandler}/>
                           {errors.hasOwnProperty('contactEmail')&&<p style={errorMsgOnInputStyle}>{errors.contactEmail.properties.message}</p>}
                        </div>
                        <div>
                           <label htmlFor="contactSubject">Subject</label>
                           <input type="text" value={inquiry.contactSubject} size="35" id="contactSubject" name="contactSubject" onChange={onChangeHandler}/>
                        </div>
                        <div>
                           <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                           <textarea value={inquiry.contactMessage} cols="50" rows="15" id="contactMessage" name="contactMessage" onChange={onChangeHandler}/>
                           {errors.hasOwnProperty('contactMessage')&& <p style={errorMsgOnInputStyle}>{errors.contactMessage.properties.message}</p>}
                        </div>
                        <div style={{'display':'flex', 'align-items':'center'}}>
                           <button className="submit">Submit</button> 
                           {/* {submitted? <p style={onSubmitStyle}>Thank you! I'll get back to you shortly</p>:<p/>} */}
                           {errors.serverDown? <p style={onSubmitErrStyle}>Server down, please contact me through phone or email </p>:<p/>}
                        </div>
                     </fieldset>
                  </form>
               </div>

               <aside className="four columns footer-widgets">
                  <div className="widget widget_contact">

                     <h4>Address and Phone</h4>
                     <p className="address">
                        {name}<br />
                        {street} <br />
                        {city}, {state} {zip}<br />
                        <span>{phone}</span>
                     </p>
                  </div>

                  {/* <div className="widget widget_tweets">
                     <h4 className="widget-title">Latest Tweets</h4>
                     <ul id="twitter">
                        <li>
                           <span>
                           is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                           Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum
                           <a href="#">http://t.co/CGIrdxIlI3</a>
                           </span>
                           <b><a href="#">2 Days Ago</a></b>
                        </li>
                        <li>
                           <span>
                           Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                           eaque ipsa quae ab illo inventore veritatis et quasi
                           <a href="#">http://t.co/CGIrdxIlI3</a>
                           </span>
                           <b><a href="#">3 Days Ago</a></b>
                        </li>
                     </ul>
                  </div> */}
               </aside>
            </div>
         </div>
      </section>
   )
}
export default Contact;
