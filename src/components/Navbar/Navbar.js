import "./Navbar.css";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../../images/logo.png';
import { Link, Events, animateScroll as scroll, scroller } from 'react-scroll';
import { Navbar, Nav } from "react-bootstrap";

const mapping = {
    "about_me": "About Me",
    "timeline" : "Timeline",
    "projects": "Projects",
    "contact_me": "Contact Me",
    "skills": "Skills",
    "languages": "Languages"
}

const addComponents = (components) =>  {
    const arrayOfLis = [];
    var arrayLength = components.length;
    for (var i = 0; i < arrayLength; i++) {
        arrayOfLis.push(
        <li className="nav-item" key={i}>
            <Link className="nav-link" to={components[i] } spy={true}> 
                { mapping[components[i]] } 
            </Link>
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
          duration: 300,
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
                    {addComponents(this.props.data)}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export { NavBar }