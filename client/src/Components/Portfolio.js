import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return (
          <div key={projects.title} className="columns portfolio-item" style={{'width':'490px'}}>
            <div className="item-wrap" style={{'width':'100%'}}>
              <a href={projects.url} title={projects.title}>
                <img alt={projects.title} src={projectImage} />
                <div>
                  <div className="portfolio-item-meta">
                    <h4>{projects.title}</h4>
                    <p>{projects.category}</p>
                    <br/>
                    <h4>Built using:</h4>
                      <div className="technology-wrapper">
                        {projects.technologies.map((technology, idx)=>{
                          var techIcon = 'images/portfolio/'+ technology +".png";
                          return(
                            <img key={idx}src={techIcon} alt={technology} class="tech"/>
                          )
                        })}
                      </div>
                  </div>
                </div>


              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>)
      })
    }

    return (
      <section id="portfolio">

      <div className="row">

          <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>
          </div>
      </div>
    </section>
    );
  }
}

export default Portfolio;
