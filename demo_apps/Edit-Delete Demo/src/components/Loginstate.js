import React, { useState } from "react";

export function Loginstate() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
   
    <div>
         <nav>

  <button class="btn btn-primary" onClick={handleClick}>
         { active ? "Logout" : "Login"}
      </button>
      { active && <img class="rounded-circle" width = "40" height = "40" src = "https://imgd.aeplcdn.com/0x0/n/cw/ec/47137/purosangue-suv-exterior-right-front-three-quarter-13.jpeg?isig=0" alt="nothing" /> }

</nav>
      
    </div>
  );
}

export default Loginstate;