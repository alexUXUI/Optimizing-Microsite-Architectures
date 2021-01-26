import React from "react";
import PropTypes from "prop-types";

const ButtonStyles = {
  fontFamily: "Nunito Sans",
  fontWeight: 700,
  border: 0,
  borderRadius: "3em",
  cursor: "pointer",
  display: "inline-block",
  lineHeight: 1,
};

const PrimaryStyles = {
  color: "white",
  backgroundColor: "#1ea7fd",
};

const SecondaryStles = {
  color: "#333",
  backgroundColor: "transparent",
  boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset",
};

const Small = {
  fontSize: "12px",
  padding: "10px 16px",
};

const Large = {
  fontSize: "16px",
  padding: "12px 24px",
};

export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";

  const primaryStyles = primary ? PrimaryStyles : {};
  const secondaryStyles = !primary ? SecondaryStles : {};

  const btnSize = size === "large" ? Large : Small;

  const styles = {
    ...ButtonStyles,
    ...primaryStyles,
    ...secondaryStyles,
    ...btnSize,
  };
  return (
    <button
      style={{ ...styles }}
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      )}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};
