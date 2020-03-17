import React, { Component } from "react";
import classes from './App.module.css';
import $ from 'jquery';
import 'font-awesome/css/font-awesome.min.css';
import { BrowserRouter, Link } from 'react-router-dom';
import imgs from './portfolio.png';

class App extends Component {
  constructor(props) {
    super(props);
  }


  render() {

    return (
      <React.Fragment>
        {/* Information Profile */}
        <div className={classes.profile}>
          <div className={classes.section}>
            <div className={classes.row}>
              <div className={classes.profile_section}>
                <h5>Hello, I am</h5>
                <h1>Prem Varma</h1>
                <p>Fullstack Developer | AI ML Expert | App Developer</p>
                <div className={classes.social_links}>
                  <BrowserRouter >
                    <Link to="/" className={classes.links_icon}>
                      <i className="fa fa-facebook-f"></i>
                    </Link>
                    <Link to="/" className={classes.links_icon}>
                      <i className="fa fa-twitter"></i>
                    </Link>
                    <Link tp="/" className={classes.links_icon}>
                      <i className="fa fa-google-plus"></i>
                    </Link>
                    <Link to="/" className={classes.links_icon}>
                      <i className="fa fa-linkedin"></i>
                    </Link>
                  </BrowserRouter >
                </div>
                <div className={classes.btnDiv}>
                  <BrowserRouter>
                    <Link to="/" className={classes.btn}>View My Portfilio<i style={{ marginLeft: "10px" }} className="fa fa-arrow-right"></i></Link>
                  </BrowserRouter>
                </div>
              </div>
              <div className={classes.profile_section_img}>
                <img className={classes.profile_image_section} src={imgs} />
              </div>
            </div>
          </div>
        </div>

        {/* About Me */}
        <section className={classes.about_me}>
          <div className={classes.section}>
            <h2 className={classes.about_me_title}>About Me</h2>
            <div className={classes.row}>
              <div className={classes.about_me_description}>
                <div className={classes.description_style}>
                  <p>
                    I Am Prem . I like to solve challenging problem but still one drawback , its depend on my mood. I like coding and to create algorithms. Apart from IT i like to sing and to go out and enjoy some natural places. I am BSC graduate in computer science. I always look for opportunity to learn something new.
                </p>
                  <BrowserRouter>
                    <Link to="/" className={classes.btn}><i className="fas fa-arrow-alt-circle-down"></i>Download My Cv</Link>
                  </BrowserRouter>
                </div>
              </div>


              <div className={classes.about_me_progress}>
                <div className={classes.skills}>
                  <div className={classes.prog_item}>
                    <p>App Development</p>
                    <div className={classes.skill_progress}>
                      <span data-value="95%" style={{ width: "95%" }}></span>
                    </div>
                  </div>
                </div>

                <div className={classes.skills}>
                  <div className={classes.prog_item}>
                    <p>Full Stack Development</p>
                    <div className={classes.skill_progress}>
                      <span data-value="85%" style={{ width: "85%" }}></span>
                    </div>
                  </div>
                </div>

                <div className={classes.skills}>
                  <div className={classes.prog_item}>
                    <p>Artificial Inteliggence</p>
                    <div className={classes.skill_progress}>
                      <span data-value="45%" style={{ width: "45%" }}></span>
                    </div>
                  </div>
                </div>

                <div className={classes.skills}>
                  <div className={classes.prog_item}>
                    <p>Machine Learning</p>
                    <div className={classes.skill_progress}>
                      <span data-value="75%" style={{ width: "75%" }}></span>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </section>
      </React.Fragment >
    );
  }
}

export default App;