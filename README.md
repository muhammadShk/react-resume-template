# MERN Stack Resume Web App Template      
![ReactJS Resume Website Template](resume.gif?raw=true "ReactJS Resume Website Template")
### <a href="https://subaiyal.sh/">LIVE DEMO</a> 

## Description
This is a React + Node + express + mongoDB based personal resume website template. This may be abit of an over kill but I do plan on customizing the dashboard later on but for now I have given it a terminal style dashboard and login. Authentication is handled using JSONWeb tokens. This was originaly just a React based app by <a href="https://github.com/tbakerx/react-resume-template">Tim Baker</a>. Most of the componenets have been converted to functions and added some styling and animations to this project. Scroll based animations are also added in client/public/js/init.js which use jquery. This app is fully responsive and you can turn this into your own resume by modifying client/public/resumeData.json. More details on how to setup and turn it into your resume can be found below.

## Make it Your Own!
### 1. What to install 
1. Node.js install on your system <a href="https://nodejs.org/en/download/">HERE</a>
2. Nodemon to run server.js  <a href="https://nodemon.io/">HERE</a> 
3. Open terminal navigate to client folder of this project and run npm install. This will install all the dependencies.
4. Do the same thing as above but this time npm install from server directory in the project. 
5. Install MongoDB locally <a href="https://docs.mongodb.com/manual/installation/">HERE</a>

### 2. Build a Create-React-App
Spin up a react app by navigating to a directory of your choice and run the command `npx create-react-app` from your terminal. Go <a href="https://reactjs.org/docs/installation.html">HERE</a> to get started.
Once that is done `cd yourappname` and run `npm start` to test it out.
Hit ctrl+c in the terminal when you want to stop the server that the above command starts.
MAKE SURE YOU INSTALL ALL DEPENDENCIES.

### 3. Adding your Information and making it your own. [ client/public/resumeData.json ]
This resumeData.json file is then fed to react components where it is displayed. 
1. Navigate to client/src/Components/Header.js component and change the typing animation from line 38-63 <a href="https://github.com/tameemsafi/typewriterjs#readme">TypeWriter library created by Tamim Safi. Click here to find the repo.</a> 
2. You can also change display text that proceeeds the typing animation by editing the client/src/HeroSection.js file. 
3. Replace images and fonts; public/images/header-background.jpg, public/images/testimonials-bg.jpg and public/favicon.ico.<em>NAMES NEED TO REMAIN SAME</em>
4. Change your portfolio images at -----> public/images/portfolio folder.
5. If you want to go for overkill setup back end to manage leads. 

### ------------------------------------------BACK-END API-----------------------------------------------------------  
### 4. Setup server using Express.js [ server/server.js ]
Next, download this resume template repo and copy the server folder to your project as it is. Once that is done, navigate to the server directory from your terminal and install all dependencies by running the command `npm install`.Test out the server by running the command `nodemon server.js`. If everything goes well you will see the following:
    This is a secret
    Listening at port 8000
    Established a connection

### 5. Setup MongoDB using mongoose [ server/config/mongoose.config ]
Navigate to mongoose.config file. This where you can connect to mongoDB server locally, once you have mongoDB installed. 
    mongoose.connect("mongodb://localhost/resumeee",{
        useNewUrlParser: true,
        useUnifiedTopology:true,
        useFindAndModify:true,
        useCreateIndex:true
    }) 

### 6. Authentication using JSON Web Tokens [ server/config/mongoose.config ]
You can restrict API routes using Json web tokens by signing a token with your secret key. Create this secret key and store it in a folder called '.env' in the root directory of your project. In this .env file declare your secret key like this :
   <em>SECRET_KEY="This is a secret"</em>  
now when you run nodemon server.js you will see the secret key logging out.

### 7. Authenticating routes [ server/config/jwt.config.js ]
module.exports.authenticate = function(req, res, next){
    try{
        jwt.verify(req.cookies.token, process.env.SECRET_KEY);
        next();
    }catch(e){
        res
        .status(401)
        .json({message:'Unauthorized'});

    }
}

This function takes care of authentication by verifying if the cookie that is passed to the server has our secret key in it. 
<em>Make sure to pass the token from the front end. like this ---> 
    useEffect(()=>{
        axios.get('http://localhost:8000/api/inquiry', { withCredentials:true })
        .then((response) => setinquiries(response.data))
        .catch(() => navigate('/'));
        }, []) 
</em>

The authenticate function is imported into server/routes/[routes folder] and passed in as an argument to app.get(), app.post(), app.put() or app.delete(). Like this -->

    module.exports = function(app){
        app.get("/api/messages", authenticate, messageController.list);
        app.post("/api/message", messageController.create);
        app.get("/api/message/:id", messageController.detail);
        app.put("/api/message/:id", messageController.update);
        app.delete("/api/message/:id", messageController.delete);
    }


## Credits
##### Udemy Course
<a href="https://www.udemy.com/projects-in-reactjs-the-complete-react-learning-course/learn/v4/overview">Projects in ReactJS: The Complete React Learning Course by Eduonix</a>

#### HTML Design Template
<a href="https://www.styleshout.com/free-templates/ceevee/">Ceevee Template by Styleshout</a>

##### Header Typing Animation Credit
<a href="https://github.com/tameemsafi/typewriterjs#readme">Tamim Safi</a>

##### Matrix Canvas Animation Credit
<a href="https://codesandbox.io/s/matrix-sb0xw?from-embed=&file=/index.html:201-299">Slawo-ch</a>

##### Testimonial photo credit
<a href="https://unsplash.com/@samuelzeller?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge">Samuel Zeller</a>

