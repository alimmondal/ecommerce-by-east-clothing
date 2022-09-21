import React from "react";
// import {
//   FiFacebook,
//   AiOutlineHeart,
//   AiOutlineInstagram,
//   IoLogoYoutube,
// } from "react-icons/all";
import { Input, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footerCmp">
      <footer>
        <div className="footerCategorie">
          <h1>Categories</h1>
          <ul>
            <li>
              <Link to="/shop/?cg=Women">Women</Link>
            </li>
            <li>
              <Link to="/shop/?cg=Men">Men</Link>
            </li>
            <li>
              <Link to="/shop/?cg=Shoes">Shoes</Link>
            </li>
            <li>
              <Link to="/shop/?cg=Watches">Watches</Link>
            </li>
          </ul>
        </div>

        <div className="fooHelp">
          <h1>Help</h1>
          <ul>
            <li>Tracke Order</li>
            <li>Returns</li>
            <li>Shipping</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div className="footerGetInTouch">
          <h1>Get in touch</h1>
          <ul>
            <p>
              Any questions? Let us know in store at BP 473 Complexe
              universitaire Al Qods, Oujda 60000 or call us on (+212) 65964665
            </p>
            <li className="footerIcons">
              {/* <FiFacebook size="25" /> */}
              <i class="fab fa-facebook-f"></i>
            </li>
            <li className="footerIcons">
              {/* <AiOutlineInstagram size="25" /> */}
              <i class="fab fa-youtube" size="25"></i>
            </li>
            <li className="footerIcons">
              {/* <IoLogoYoutube size="25" /> */}
              <i class="fab fa-instagram" size="25"></i>
            </li>
          </ul>
        </div>

        <div className="footerNews">
          <h1>Newsletter</h1>
          <ul>
            <li>
              <Stack spacing={3}>
                <Input
                  variant="flushed"
                  placeholder="email@example.com"
                  size="10"
                  width="200px"
                />
              </Stack>
            </li>
            <li>
              <button className="footerBtn">Subscribe</button>
            </li>
          </ul>
        </div>

        {/* <div className="creditsIcons">
          <ul>
            <li>
              <img
                src="https://i.imgur.com/AHCoUZO.png"
                className="img1"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://i.imgur.com/JZRipBg.png"
                className="img2"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://i.imgur.com/l8OAGyo.png"
                className="img3"
                alt=""
              />
            </li>
            <li>
              <img
                src="https://i.imgur.com/IDHC2iv.png"
                className="img4"
                alt=""
              />
            </li>
          </ul>
        </div> */}

        <div className="paragraphFooter">
          <p>
            Copyright ©2021 All rights reserved | This template is made with ♡
            by Developers of ITROOM
          </p>
          <Link to="">Md Alim</Link>
          <Link to="">Mst Beauty</Link>
          <Link to="">Abdullah Hujaifa</Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
