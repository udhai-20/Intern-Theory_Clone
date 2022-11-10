import './footer.css'

function Footer(props) {
  return(<div><div class="footer">
  <div class="footer_upper">
    <div class="links">
      <div>
        <p>
          <a
            class="material-icons jss290 fab fa-facebook-square"
            aria-hidden="true"
            href="https://www.facebook.com/interntheory"
            target="_blank"
            style={{color: 'rgb(255, 255, 255)'}}
          ></a>
        </p>
      </div>
      <div>
        <p>
          <a
            class="material-icons jss290 fab fa-linkedin"
            aria-hidden="true"
            href="https://www.linkedin.com/company/interntheory"
            target="_blank"
            style={{color: 'rgb(255, 255, 255)'}}
          ></a>
        </p>
      </div>
      <div>
        <p>
          <a
            class="material-icons fab fa-twitter-square"
            aria-hidden="true"
            href="https://twitter.com/InternTheory"
            target="_blank"
            style={{color: 'rgb(255, 255, 255)'}}
          ></a>
        </p>
      </div>
      <div>
        <a
          class="material-icons jss290 fab fa-instagram jss282"
          aria-hidden="true"
          href="https://www.instagram.com/interntheory"
          target="_blank"
          style={{color: 'rgb(255, 255, 255)'}}
        ></a>
      </div>
    </div>
    <div class="search">
      <div class="by_place">
        <div>BY PLACE</div>
        <div class="hr_line"></div>
        <div><p>Internship In Mumbai</p></div>
        <div><p>Internship In Delhi</p></div>
        <div><p>Internship In Banglore</p></div>
        <div><p>Internship In Pune</p></div>
        <div><p>Internship In Hydrabad</p></div>
      </div>
      <div class="by_profile">
        <div>BY PROFILE</div>
        <div class="hr_line"></div>
        <div>
          <p>Marketing Internships</p>
        </div>
        <div>
          <p>Business Developement Internships</p>
        </div>
        <div>
          <p>Content Writing Internships</p>
        </div>
        <div>
          <p>Graphic Designing Internships</p>
        </div>
        <div>
          <p>HR Internships</p>
        </div>
        <div>
          <p>Engineering Internships</p>
        </div>
      </div>

      <div class="by_type">
        <div>BY TYPE</div>
        <div class="hr_line"></div>
        <div>
          <p>Full Time Internships</p>
        </div>
        <div>
          <p>Part Time Internships</p>
        </div>
        <div>
          <p>Work From Home Internships</p>
        </div>
      </div>
    </div>
  </div>
  <div class="footer_lower">
    <div class="footer_lower_links">
      <div>FIND INTERNSHIPS</div>
      <div>POST INTERNSHIP</div>
      <div>COURSES</div>
      <div>TERMS AND CONDITIONS</div>
      <div>PRIVACY POLICY</div>
      <div>CONTACT US</div>
      <div>ABOUT US</div>
      <div>SITEMAP</div>
    </div>
    <div class="hr_line"></div>
  </div>
  <div class="copyright">
    <p>© 2015 - 2021 INTERNTHEORY. ALL RIGHTS RESERVED.</p>
  </div>
</div></div>)
};

export default Footer;
