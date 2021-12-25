import React from "react";
import PropTypes from "prop-types";
function ProfileComponent({
  fullName = "Amin ele",
  bio = "FrontEnd",
  profession = "FrontEnd",
  children,
  handleName,
}) {
  return (
    <div>
      <h1
        onClick={() => {
          handleName(fullName);
        }}>
        {fullName}
      </h1>
      <span>{bio}</span>
      <p>{profession}</p>
      {children}
    </div>
  );
}
ProfileComponent.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
  children: PropTypes.element,
  handleName: PropTypes.func,
};
export default ProfileComponent;
