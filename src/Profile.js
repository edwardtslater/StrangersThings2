import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Profile = ({lstoken}) => {
  if(lsToken !== null) {

    return (
      <>
      {/* Logged on will need
      change nav bar 
        messages to/from
        edit
         */}
          <h1>Profile logged on</h1>

      </>
  )

  } else {
    
    return(
      <>
      {/* logged out change nav bar  */}
      </>

    )

 
};
};

export default Profile;