import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav class="pa3 pa4-ns">
        <Link
          class="link dim grey b f1 f-headline-ns tc db mb3 mb4-ns"
          to="/"
          title="Home"
        >
          Arts Gallery
        </Link>
        <Link class="link dim gray f6 f5-ns dib mr3" to="/" title="Home">
          Home
        </Link>
        <Link class="link dim gray f6 f5-ns dib mr3" to="/form" title="ADD Painting">
          ADD Painting
        </Link>
  {/*} <button class="button3" href="#">
          <span> Add New Painting </span>
  </button>*/}
      </nav>
    </div>
  );
};

export default Navbar;
