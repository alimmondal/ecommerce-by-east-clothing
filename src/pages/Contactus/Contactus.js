import React, { useState } from "react";
import { Helmet } from "react-helmet";
import contactImg from "./cover.jpg";

import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
// import { BsEnvelope, GiPositionMarker, HiOutlinePhone } from "react-icons/io";
import "./Contactus.css";
const Contactus = () => {
  const [email, setemail] = useState("");
  const [body, setbody] = useState("");

  const handlesubmit = () => {
    window.open(
      `mailto:abdessamadbouthjoul@gmail.com?subject=Sample&body=${body}`
    );
  };
  return (
    <div className="contactUs">
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <div className="headerContact">
        <img
          src={contactImg}
          className="imageContact"
          objectFit="cover"
          alt=""
        />
        {/* <Image
          className="imageContact"
          src="../../images/product1.jpeg"
          alt="contactImage"
          objectFit="cover"
        /> */}
        <div className="text">
          <h2>Contact</h2>
        </div>
      </div>

      <div className="card-contact">
        <div className="sendMsg">
          <h4>Send Us A Message</h4>
          <div className="inputContact">
            <InputGroup width="450px">
              <InputLeftElement
                pointerEvents="none"
                // children={<BsEnvelope className="envolope" color="gray.300" />}
                children={
                  <i className="fas fa-envelope envelope" color="gray.300"></i>
                }
              />
              <Input
                value={email}
                onChange={(e) => setemail(e.target.value)}
                type="text"
                placeholder="Your Email Address"
              />
            </InputGroup>
          </div>
          <div className="textAreaCnt">
            <Textarea
              value={body}
              onChange={(e) => setbody(e.target.value)}
              width="450px"
              placeholder="How Can We Help"
              height="200px"
            />
          </div>
          <div className="contentContact">
            <Button
              onClick={handlesubmit}
              borderRadius="90px"
              colorScheme="teal"
              variant="solid"
              size="180px"
              className="contactBtn"
            >
              Submit
            </Button>
          </div>
        </div>
        <div className="showAdrss">
          <div className="box">
            <div className="iconCtn">
              {/* <GiPositionMarker opacity="0.8" /> */}
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <div className="adressCtn">
              <h3> Address</h3>
              <p>
                Coza Store Center 8th floor, 379 Hudson St, New York, NY 10018
                US
              </p>
            </div>
          </div>
          <div className="box">
            <div className="iconCtn">
              {/* <HiOutlinePhone opacity="0.8" /> */}
              <i class="fas fa-phone"></i>
            </div>
            <div className="adressCtn">
              <h3>Lets Talk</h3>
              <p className="infoCtn">0657964665</p>
            </div>
          </div>
          <div className="box">
            <div className="iconCtn">
              {/* <BsEnvelope opacity="0.8" /> */}
              <i className="fas fa-envelope envelope" color="gray.300"></i>
            </div>
            <div className="adressCtn">
              <h3>Sale Support</h3>
              <p className="infoCtn">Store@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
