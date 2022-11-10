import React from "react";

function Navbar(props) {
  return <div><nav>
  <div class="side_menu" id="side_bar">
    <div class="menu_btn" id="menu_btn_2">
      <img class="menu_image" src="images/menu.png" />
    </div>
    <div class="logo_btn">
      <img class="logo" src="images/logo.png" />
    </div>
    <div class="side_menu_list">
      <div class="visible_2 when_login">
        <div class="side_menu_svg_cont">
          <img
            class="side_menu_svg_2 profile_img"
            src="https://assets.interntheory.com/creative/default-images/girlProfile.jpg"
          />
        </div>
        <div class="side_menu_content_2">
          <h1 id="full_name"></h1>
          <p id="mobile_no"></p>
        </div>
      </div>
      <div class="visible after_login" onclick="home()">
        <div class="side_menu_svg_cont">
          <svg
            class="side_menu_svg"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
            role="presentation"
          >
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
            <path fill="none" d="M0 0h24v24H0z"></path>
          </svg>
        </div>
        <div class="side_menu_content">
          <p>Home</p>
        </div>
      </div>
      <div class="visible when_login" onclick="dash_board()">
        <div class="side_menu_svg_cont">
          <svg
            class="side_menu_svg"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
            role="presentation"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"
            ></path>
          </svg>
        </div>
        <div class="side_menu_content">
          <p>Dashboard</p>
        </div>
      </div>
      <div class="visible"
      //  style="display: none"
       >
        <div class="side_menu_svg_cont">
          <svg
            class="side_menu_svg"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
            role="presentation"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
            ></path>
            <path fill="none" d="M0 0h24v24H0z"></path>
          </svg>
        </div>
        <div class="side_menu_content">
          <p>Profile</p>
        </div>
      </div>
      <div class="visible" onclick="intern_ship()">
        <div class="side_menu_svg_cont">
          <svg
            class="side_menu_svg"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
            role="presentation"
          >
            <path
              d="M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z"
            ></path>
            <path fill="none" d="M0 0h24v24H0z"></path>
          </svg>
        </div>
        <div class="side_menu_content">
          <p>Internships</p>
        </div>
      </div>
      <div class="visible" onclick="jobs()">
        <div class="side_menu_svg_cont">
          <svg
            class="side_menu_svg"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
            role="presentation"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"
            ></path>
          </svg>
        </div>
        <div class="side_menu_content">
          <p>Jobs</p>
        </div>
      </div>
      <div class="visible" 
      // style="display: none"
      >
        <div class="side_menu_svg_cont">
          <svg
            class="side_menu_svg"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
            role="presentation"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z"
            ></path>
          </svg>
        </div>
        <div class="side_menu_content" style="display: none">
          <p>Post Internship</p>
        </div>
      </div>
      <div class="visible" onclick="disappear(1)">
        <div class="side_menu_svg_cont">
          <svg
            class="side_menu_svg"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
            role="presentation"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"
            ></path>
          </svg>
        </div>
        <div class="side_menu_content">
          <p>Courses</p>
          <svg
            class="drop_down"
            id="drop_down_1"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
            role="presentation"
          >
            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
            <path fill="none" d="M0 0h24v24H0z"></path>
          </svg>
          <svg
            class="drop_up"
            id="drop_up_1"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
            role="presentation"
          >
            <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
            <path fill="none" d="M0 0h24v24H0z"></path>
          </svg>
        </div>
      </div>
      <div id="div_1_1" class="hidden visible">
        <div class="side_menu_svg_cont"></div>
        <div class="side_menu_content" onclick="online_courses()">
          <p>Online Courses</p>
        </div>
      </div>
      <div id="div_1_2" class="hidden visible" 
      // style="display: none"
      >
        <div class="side_menu_svg_cont"></div>
        <div class="side_menu_content" onclick="online_courses()">
          <p>Classroom Training</p>
        </div>
      </div>
      <div class="visible when_login" onclick="transcations()">
        <div class="side_menu_svg_cont">
          <svg
            class="side_menu_svg"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
            role="presentation"
          >
            <path
              d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"
            ></path>
            <path fill="none" d="M0 0h24v24H0z"></path>
          </svg>
        </div>
        <div class="side_menu_content">
          <p>Transactions</p>
        </div>
      </div>
      <div class="visible" onclick="contact_us()">
        <div class="side_menu_svg_cont">
          <svg
            class="side_menu_svg"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
            role="presentation"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"
            ></path>
          </svg>
        </div>
        <div class="side_menu_content">
          <p>Contact Us</p>
        </div>
      </div>
      <div 
      // style="display: none"
       class="visible">
        <div class="side_menu_svg_cont">
          <svg
            class="side_menu_svg"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
            role="presentation"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"
            ></path>
          </svg>
        </div>
        <div class="side_menu_content">
          <p>Start Your Business Today</p>
        </div>
      </div>
      <div class="line_break"></div>
      <div class="visible after_login" onclick="disappear(2)">
        <div class="side_menu_svg_cont">
          <svg
            class="side_menu_svg"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
            role="presentation"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M3 18h12v-2H3v2zM3 6v2h18V6H3zm0 7h18v-2H3v2z"></path>
          </svg>
        </div>
        <div class="side_menu_content">
          <p>Register</p>
          <svg
            class="drop_down"
            id="drop_down_2"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
            role="presentation"
          >
            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
            <path fill="none" d="M0 0h24v24H0z"></path>
          </svg>
          <svg
            class="drop_up"
            id="drop_up_2"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
            role="presentation"
          >
            <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
            <path fill="none" d="M0 0h24v24H0z"></path>
          </svg>
        </div>
      </div>
      <div id="div_2_1" class="hidden visible" onclick="register()">
        <div class="side_menu_svg_cont"></div>
        <div class="side_menu_content">
          <p>Company</p>
        </div>
      </div>
      <div id="div_2_2" class="hidden visible" onclick="register()">
        <div class="side_menu_svg_cont"></div>
        <div class="side_menu_content">
          <p>Student</p>
        </div>
      </div>
      <div class="visible after_login" onclick="disappear(3)">
        <div class="side_menu_svg_cont">
          <svg
            class="side_menu_svg"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
            role="presentation"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              d="M14 6v15H3v-2h2V3h9v1h5v15h2v2h-4V6h-3zm-4 5v2h2v-2h-2z"
            ></path>
          </svg>
        </div>
        <div class="side_menu_content">
          <p>Login</p>
          <svg
            class="drop_down"
            id="drop_down_3"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
            role="presentation"
          >
            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
            <path fill="none" d="M0 0h24v24H0z"></path>
          </svg>
          <svg
            class="drop_up"
            id="drop_up_3"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
            role="presentation"
          >
            <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
            <path fill="none" d="M0 0h24v24H0z"></path>
          </svg>
        </div>
      </div>
      <div
        id="div_3_1"
        class="hidden visible"
        // style="display: none"
        onclick="logIn()"
      >
        <div class="side_menu_svg_cont"></div>
        <div class="side_menu_content">
          <p>Company</p>
        </div>
      </div>
      <div id="div_3_2" class="hidden visible" onclick="logIn()">
        <div class="side_menu_svg_cont"></div>
        <div class="side_menu_content">
          <p>Student</p>
        </div>
      </div>
      <div class="visible" style="display: none">
        <div class="side_menu_svg_cont">
          <svg
            class="side_menu_svg"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
            role="presentation"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"
            ></path>
          </svg>
        </div>
        <div class="side_menu_content">
          <p>Change Password</p>
        </div>
      </div>
      <div class="visible when_login" onclick="logout()">
        <div class="side_menu_svg_cont">
          <svg
            class="side_menu_svg"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
            role="presentation"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
            ></path>
          </svg>
        </div>
        <div class="side_menu_content">
          <p>Logout</p>
        </div>
      </div>
    </div>
  </div>
  <div class="menu_btn" id="menu_btn">
    <img class="menu_image" src="images/menu.png" />
  </div>
  <div class="logo_btn" id="logo_btn">
    <img class="logo" src="images/logo.png" />
  </div>
  <div class="sign_btn after_login">
    <button onclick="logIn()">SIGN IN</button>
  </div>

  <div class="cart_btn when_login new_right">
    <img
      class="cart_image profile_img"
      src="https://assets.interntheory.com/creative/default-images/girlProfile.jpg"
    />
  </div>
  <div class="cart_btn" onclick="cart()">
    <div>
      <img class="cart_image" src="images/shopping_cart.svg" />
    </div>
    <div class="total" id="total">0</div>
  </div>
  <div class="cart_btn when_login new_left">
    <svg
      class="cart_image"
      focusable="false"
      viewBox="0 0 24 24"
      aria-hidden="true"
      role="presentation"
    >
      <path
        d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"
      ></path>
    </svg>
  </div>
</nav>
</div>;
}

export default Navbar;
