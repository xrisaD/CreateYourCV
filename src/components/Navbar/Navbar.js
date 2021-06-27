import "./Navbar.css";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import PersonalInfo from "../../PersonalInfo";
import logo from '../../images/logo_dark.png';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { Navbar, Nav } from "react-bootstrap";

const mapping = {
    "about_me" : "About Me",
    "resume" : "Resume",
    "projects": "Projects",
    "contact_me": "Contact Me",
    "skills": "Skills"
}

const addLis = () =>  {
    const arrayOfLis = [];
    var arrayLength = PersonalInfo.components.length;
    for (var i = 0; i < arrayLength; i++) {
        arrayOfLis.push(
        <li className="nav-item">
            <Nav.Link
                className="nav-link"
                >
                <Link to={PersonalInfo.components[i] } > 
                    { mapping[PersonalInfo.components[i]] } 
                </Link>
            </Nav.Link>
        </li>);
    }
    return arrayOfLis;
}



class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.scrollToTop = this.scrollToTop.bind(this);
      }
    
      componentDidMount() {
    
        Events.scrollEvent.register('begin', function () {
          console.log("begin", arguments);
        });
    
        Events.scrollEvent.register('end', function () {
          console.log("end", arguments);
        });
    
      }
      scrollToTop() {
        scroll.scrollToTop();
      }
      scrollTo() {
        scroller.scrollTo('scroll-to-element', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart'
        })
      }
      scrollToWithContainer() {
    
        let goToContainer = new Promise((resolve, reject) => {
    
          Events.scrollEvent.register('end', () => {
            resolve();
            Events.scrollEvent.remove('end');
          });
    
          scroller.scrollTo('scroll-container', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
          });
    
        });
    
        goToContainer.then(() =>
          scroller.scrollTo('scroll-container-second-element', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            containerId: 'scroll-container'
          }));
      }
      componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
      }
      render() {
        return (
            <Navbar bg="light" expand="lg" fixed="top">
                <Navbar.Brand href="#"> <img src={logo} alt=""/></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                    className="mr-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll>
                    {addLis()}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export { NavBar }