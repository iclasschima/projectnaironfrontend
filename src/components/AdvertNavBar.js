/* eslint-disable react/react-in-jsx-scope */
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../advertNavBar.css";
import smile from "../advertimages/Path 8simile.svg";
import notification from "../advertimages/Group 5notification.svg";
import setting from "../advertimages/Group 7setting.svg";
import question from "../advertimages/Group 3question.svg";
class AdvertNavBar extends Component{

    render(){
      return(
    
        <div className="row-lg-12">
            
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div className=" nairontext navbar-brand d-flex">
                    <h4>nairon</h4>
                    <div className="vl"></div>
                </div>
            
                <div className="navbar-brand advertnavtext">
                    <h4>New Advert</h4>
                </div>
                

                <div className="navbar-brand d-flex icongroup">
                        <div className="questionicon">
                            <img alt="question" src={question}/>
                            
                        </div>
                        
                        <div className="settingicon">
                            <img alt="setting" src={setting}/>
                        </div>
                        <div className="">
                            <img alt="notification" src={notification}/>
                        </div>
                        <div className="smileicon">
                            <img alt="smile" src={smile}/>
                        </div>
                    
                </div>
                <div className="navbar-brand advertname">
                <h5 className="dropdown-toggle ">Micheal Joshua</h5>
            </div>

            </nav>
        </div>
    
        );

    }



   

}
export default AdvertNavBar;