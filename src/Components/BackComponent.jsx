import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types'; // Import PropTypes
import leftArrow from '../assets/left-arrow.png'; // Adjust the path as necessary

function BackComponent({ to = "/" }) {
    return (
        <NavLink to={to} className="back-component">
            <img src= {leftArrow} alt="back" width="50" height="50"/>
            <span>Back</span> {/* Assuming you want a text label; adjust as needed */}
        </NavLink>
    );
}

BackComponent.propTypes = {
    to: PropTypes.string // 'to' is expected to be a string
};

export default BackComponent;