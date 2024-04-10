// import "./css/Button.css";
// import React, { useEffect, useState } from "react";

// function Button2({
//   children,
//   Vpadding,
//   Hpadding,
//   FontSize,
//   Width,
//   Type,
//   Name,
// }) {
//   const verticalPadding = Vpadding ? Vpadding : 2;
//   const horizonPadding = Hpadding ? Hpadding : 15;
//   const fontSize = FontSize ? FontSize : 20;
//   const width = Width ? Width : "";
//   const [Click, setClick] = useState();

//   if (Type === "" && Name === "") {
//     return (
//       <button
//         className={Click === "true" ? "Button2 isSelect" : "Button2"}
//         onClick={(e) => setClick("true")}
//         style={{
//           padding: verticalPadding + "vw " + horizonPadding + "vw",
//           fontSize: fontSize + "px",
//           width: width + "vw",
//         }}
//       >
//         {children}
//       </button>
//     );
//   }

//   if (Type === "radio") {
//     return <input type="radio" name={Name} id={`$children`} />;
//   }
// }

// export default Button2;

import "./css/Button.css";
import React from "react";

function Button2({ children, onClick }) {
  return (
    <button className="Button2" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button2;
