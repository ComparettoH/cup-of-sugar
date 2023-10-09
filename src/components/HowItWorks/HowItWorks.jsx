import React from "react";
import { useHistory } from "react-router-dom";


// material ui imports
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// custom icon imports
import CupIcon from '../../assets/cupOfSugarIcon.png'
import CircleArrow from '../../assets/cupOfSugarCircleArrow.png'
import SquiggleArrow from '../../assets/cupOfSugarSquiggleArrow.png'
import SquiggleArrow2 from '../../assets/cupOfSugarSquiggleArrowDL.png'
// css to align page format
import './HowItWorks.css'


// This is a static page to show how the app works
function HowItWorks() {

    const history = useHistory();

    // takes the user to the user form after registration
    const handleGetStarted = () => {
        history.push('/userform')
    };

    return (
        <>

        <Button variant="outlined" onClick={() => handleGetStarted()}>Get Started</Button>

            <Box className="how-it-works">
                <img className="cup-of-sugar" src={CupIcon} height={100} width={100} />
                <header>
                    <Typography variant="h3" align="center">How it Works</Typography>
                </header>
                <br></br>
                <section>
                    {/* Squiggle Arrow Pic */}
                    <img className="cup-of-sugar" src={SquiggleArrow} height={100} width={100} />
                    <Typography variant="h5" align="center">Offer</Typography>
                    <Typography variant="h6" align="center">Offer food that you have too much of to your neighbors</Typography>
                    {/* Squiggle Arrow Pic */}
                    <img className="cup-of-sugar" src={SquiggleArrow2} height={100} width={100} />
                    <Typography variant="h5" align="center">Request</Typography>
                    <Typography variant="h6" align="center">Request ingredients that you need</Typography>
                    {/* Circle Arrow Pic */}
                    <img className="cup-of-sugar" src={CircleArrow} height={100} width={100} />
                    <Typography variant="h5" align="center">Activity</Typography>
                    <Typography variant="h6" align="center">See how your community is helping each other out!</Typography>
                </section>
                <footer>
                    <Button onClick={() => handleGetStarted()}>Get Started</Button>
                </footer>
            </Box>

        </>
    )
};

export default HowItWorks;