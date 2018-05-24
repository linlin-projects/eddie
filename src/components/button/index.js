import PropTypes from "prop-types";
import React from "react";

const Button = ({ type, children, ...props }) => (
    <button type={type} {...props}>
        {children}
    </button>
);

Button.propTypes = {
    type: PropTypes.oneOf(["submit", "button", "reset"]),
    children: PropTypes.node.isRequired
};

Button.defaultProps = {
    type: "submit"
};

export default Button;
