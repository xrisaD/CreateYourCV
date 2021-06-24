import "./Projects.css";
import React, { Component } from 'react';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ScrollMenu from 'react-horizontal-scrolling-menu';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { makeStyles } from '@material-ui/core/styles';
import PersonalInfo from "../../PersonalInfo";
import Popup from 'reactjs-popup';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
}));

export const Projects = () => {
    return (
        <App />
    );
}

const openItem = (item) => {
    console.log(item)
    //const classes = useStyles();
    return <div >
            {/* <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                        <img className={classes.img} alt="complex" src="/static/images/grid/complex.jpg" />
                        </ButtonBase>
                    </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs zeroMinWidth>
                        <Typography gutterBottom variant="subtitle1">
                        {value.title}
                        </Typography>
                        <Typography noWrap variant="body2" gutterBottom>
                        {value.description}
                        </Typography>
                        { addSources(value.sources)}
                    </Grid>
                    </Grid>
                </Grid>
                </Grid>
            </Paper> */}
        </div>
}

  
const addSources = (sources) => {
    if (sources!=null){
        return Object.entries(sources).map(([key, value]) => {
            return <Typography variant="body2">
             <a href={value}> {key} </a>
            </Typography>
        })
    }

}

const MenuItem = ({value, selected}) => {
    return <div
      className={`menu-item ${selected ? 'active' : ''}`}>
        sjsjjsjs
    </div>;
};

const Menu = (items, selected) =>
    Object.entries(items).map(([key, value]) => {
        return <MenuItem value={value} key={key} selected={selected} />;
    }
);
  
  
const Arrow = ({ text, className }) => {
    return (
        <div className={className}>{text}</div>
    );
};

  
const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

const selected = 'item1';
  
class App extends Component {
    constructor(props) {
        super(props);
        // call it again if items count changes
        this.info =  PersonalInfo.projects
        this.menuItems = Menu(this.info, selected);
    }

    state = {
        selected
    };

    onSelect = key => {
        this.setState({ selected: key });
     
    }


    render() {
        const { selected } = this.state;
        // Create menu from items
        const menu = this.menuItems;

        return (
            <div className="App">
                <div>
                   {openItem(selected)} 
                </div>
                <ScrollMenu
                data={menu}
                arrowLeft={ArrowLeft}
                arrowRight={ArrowRight}
                selected={selected}
                onSelect={this.onSelect}
                />
            </div>
        );
    }
}
