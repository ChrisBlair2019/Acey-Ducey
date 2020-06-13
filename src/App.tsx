import React, { useEffect, useState } from 'react';
import twoclubs from './JPEG/2C.jpg'
import twodiamonds from './JPEG/2D.jpg'
import twohearts from './JPEG/2H.jpg'
import twospades from './JPEG/2S.jpg'

import threeclubs from './JPEG/3C.jpg'
import threediamonds from './JPEG/3D.jpg'
import threehearts from './JPEG/3H.jpg'
import threespades from './JPEG/3S.jpg'

import fourclubs from './JPEG/4C.jpg'
import fourdiamonds from './JPEG/4D.jpg'
import fourhearts from './JPEG/4H.jpg'
import fourspades from './JPEG/4S.jpg'

import fiveclubs from './JPEG/5C.jpg'
import fivediamonds from './JPEG/5D.jpg'
import fivehearts from './JPEG/5H.jpg'
import fivespades from './JPEG/5S.jpg'

import sixclubs from './JPEG/6C.jpg'
import sixdiamonds from './JPEG/6D.jpg'
import sixhearts from './JPEG/6H.jpg'
import sixspades from './JPEG/6S.jpg'

import sevenclubs from './JPEG/7C.jpg'
import sevendiamonds from './JPEG/7D.jpg'
import sevenhearts from './JPEG/7H.jpg'
import sevenspades from './JPEG/7S.jpg'

import eightclubs from './JPEG/8C.jpg'
import eightdiamonds from './JPEG/8D.jpg'
import eighthearts from './JPEG/8H.jpg'
import eightspades from './JPEG/8S.jpg'

import nineclubs from './JPEG/9C.jpg'
import ninediamonds from './JPEG/9D.jpg'
import ninehearts from './JPEG/9H.jpg'
import ninespades from './JPEG/9S.jpg'

import tenclubs from './JPEG/10C.jpg'
import tendiamonds from './JPEG/10D.jpg'
import tenhearts from './JPEG/10H.jpg'
import tenspades from './JPEG/10S.jpg'

import jackclubs from './JPEG/JC.jpg'
import jackdiamonds from './JPEG/JD.jpg'
import jackhearts from './JPEG/JH.jpg'
import jackspades from './JPEG/JS.jpg'

import queenclubs from './JPEG/QC.jpg'
import queendiamonds from './JPEG/QD.jpg'
import queenhearts from './JPEG/QH.jpg'
import queenspades from './JPEG/QS.jpg'

import kingclubs from './JPEG/KC.jpg'
import kingdiamonds from './JPEG/KD.jpg'
import kinghearts from './JPEG/KH.jpg'
import kingspades from './JPEG/KS.jpg'

import aceclubs from './JPEG/AC.jpg'
import acediamonds from './JPEG/AD.jpg'
import acehearts from './JPEG/AH.jpg'
import acespades from './JPEG/AS.jpg'



import './App.css';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


var cards = [twoclubs, twoclubs, twodiamonds, twohearts, twospades, threeclubs, threediamonds, threehearts, threespades, fourclubs, fourdiamonds, fourhearts, fourspades, fiveclubs, fivediamonds, fivehearts, fivespades, sixclubs, sixdiamonds, sixhearts, sixspades, sevenclubs, sevendiamonds, sevenhearts, sevenspades, eightclubs, eightdiamonds, eighthearts, eightspades, nineclubs, ninediamonds, ninehearts, ninespades, tenclubs, tendiamonds, tenhearts, tenspades, jackclubs, jackdiamonds, jackhearts, jackspades, queenclubs, queendiamonds, queenhearts, queenspades, kingclubs, kingdiamonds, kinghearts, kingspades, aceclubs, acediamonds, acehearts, acespades]


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);


var getNewCardOne = false

var getNewCardTwo = false

var getNewCardThree = false

function App() {
 
  const classes = useStyles();

  const [getNewCardOne, setgetNewCardOne] = useState(false);

  const [getNewCardTwo, setgetNewCardTwo] = useState(false);

  const [getNewCardThree, setgetNewCardThree] = useState(false);

  const [cardOne, setCardOne] = useState(0);
  const [cardTwo, setCardTwo] = useState(0);
  const [cardThree, setCardThree] = useState(0);


  const pickCard = () => {

    var min = Math.ceil(1);
    var max = Math.floor(53);
    return Math.floor(Math.random() * (max - min)) + min; 
}

  return (
    <div className={classes.root}>

      <h1>Scuffed Acey-Ducey</h1>
      <Grid container spacing={3} >
        <Grid item xs>
        {getNewCardOne && <img src={cards[cardOne]}></img> }
        <Button onClick={() => {setgetNewCardOne(true)
          setCardOne(pickCard())
        }
          } variant="contained" color="primary">
          Get Card
          </Button>
        </Grid>
        <Grid item xs>
        {getNewCardTwo && <img src={cards[cardTwo]}></img> }
        <Button onClick={() => {
          setgetNewCardTwo(true)
          setCardTwo(pickCard())
        }
          } variant="contained" color="primary">
          Get Card
          </Button>
        </Grid>
        <Grid item xs>
        {getNewCardThree && <img src={cards[cardThree]}></img> }
        <Button onClick={() => {
          setgetNewCardThree(true)
          setCardThree(pickCard())
        }
          } variant="contained" color="primary">
          Get Card
          </Button>
        </Grid>
      </Grid>

      <Button onClick={() => {
        setgetNewCardOne(false)
        setgetNewCardTwo(false)
        setgetNewCardThree(false)
        setCardOne(0)
        setCardTwo(0)
        setCardThree(0)
      }} variant="contained" color="primary">
          RESET
      </Button>
    </div>
  );
}

export default App;
