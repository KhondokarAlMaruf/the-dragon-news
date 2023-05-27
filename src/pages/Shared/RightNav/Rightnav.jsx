import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle } from "react-icons/fa";
import { FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import QZone from "../QZone/QZone";

const Rightnav = () => {
  return (
    <div className=" my-4 py-4">
      <h4 className=" my-4 ">Login With</h4>
      <Button className="mb-2 " variant="outline-primary">
        <FaGoogle /> Login with Google
      </Button>
      <Button variant="outline-primary">
        <FaGithub /> Login with GitHub
      </Button>
      <div>
        <h4 className=" my-4 ">Find Us On</h4>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook></FaFacebook> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram></FaInstagram> Instragram
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter></FaTwitter> Twitter
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
    </div>
  );
};

export default Rightnav;
