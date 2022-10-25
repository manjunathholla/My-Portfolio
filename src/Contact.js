import React, {Component} from "react";
import "./Contact.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Contact extends Component{
    render(){
        return(
            <div>
                <h2>Contact me</h2>
                <p>Got questions? This is my contact.</p>
                <div className="mail">
                <p style={{ marginBottom: "2rem"}}>You can email me to <a href="manjunathholla415@gmail.com">manjunathholla415@gmail</a></p>
                </div>
                <FontAwesomeIcon icon="fa-brands fa-twitter" size="2x" />
                <a href="https://twitter.com/home"
                style={{
                    textShadow: "0 1px 0 rgba(0,0,0,0.1)",
                    margin: "0rem 2rem 0rem 0.5rem",
                    textDecoration: "none",
                    color: "rgba(171, 234, 217, 0.778)"
                }}
                >Twitter</a>
                <FontAwesomeIcon icon="fa-brands fa-linkedin" size="2x" />
                <a href="https://www.linkedin.com/in/manjunath-holla-4a5870198/"
                style={{
                    textShadow: "0 1px 0 rgba(0,0,0,0.1)",
                    margin: "0rem 2rem 0rem 0.5rem",
                    textDecoration: "none",
                    color: "rgba(171, 234, 217, 0.778)"
                }}
                >linkedin</a>
                <FontAwesomeIcon icon="fa-brands fa-github" size="2x" />
                <a href="https://github.com/"
                style={{
                    textShadow: "0 1px 0 rgba(0,0,0,0.1)",
                    margin: "0rem 2rem 0rem 0.5rem",
                    textDecoration: "none",
                    color: "rgba(171, 234, 217, 0.778)"
                }}
                >Github</a>
                
            </div>
        )
    }
}

export default Contact;