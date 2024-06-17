import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types'; // Import PropTypes
import leftArrow from '../assets/left-arrow.png'; // Adjust the path as necessary
import '../styles/BackComponent.css'; // Adjust the path as necessary


function BackComponent({ to = "/" }) {
    return (
        <>
           <NavLink to={to} className="back-component">
            <img src= {leftArrow} alt="back" width='25' height='25'/>
            <span>Back</span>
            </NavLink>

        </>
     
        
    );
}

BackComponent.propTypes = {
    to: PropTypes.string // 'to' is expected to be a string
};

export default BackComponent;