import React from "react";
import "./advertBody.css";
import arrowUp from "./advertimages/Path 2arrup.svg";
import arrowDown from "./advertimages/Path 3arrdown.svg";
import AdvertiserHook from "./AdvertiserHook";
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


class AdvertForm2 extends AdvertiserHook{

    

    render(){

        console.log("AdvertBody1", this.props)
        // const agedropdown = {
        //     ageRange: ['Under 16','16-20','21-30','31-39','40 and above'],

        // },
        // const 

        const{
            goal,
            onNext,
            onChangeData,
            onBack,
            goalSelect = {
                goal:[  'Get more website visit','more viewers','for fun'],
            },
            
            handleChangeMultiple,
        }= this.props;
       
        
       
        return(

            <div>
        
                    {/* <AdvertNavBar /> */}

                    <div className="row">

                        <div className="col">

                            <div className="card advertcard ">

                                <div className="card-body align-items-center  justify-content-center advertcardcontent">
                                    <div>
                                        <p className="card-text advertbodytext">What is your ads goal ?</p>
                                    </div>
                                    
                                    <div className="d-flex">
                                    <p className="want">I want to </p>
                                        <FormControl className="">

                                            <Select
                                            // multiple
                                            displayEmpty
                                            value={goal}
                                            onChange={onChangeData('goal')}
                                            input={<Input />}
                                            renderValue={(selected) => {
                                                if (selected.length === 0) {
                                                return <em>Get more website visit</em>;
                                                }

                                                return selected;
                                            }}
                                            
                                            >
                                            <MenuItem disabled value="">
                                                {/* <em>Placeholder</em> */}
                                            </MenuItem>
                                            {goalSelect.goal.map((goalSelects) => (
                                                <MenuItem key={goalSelects} value={goalSelects} >
                                                {goalSelects}
                                                </MenuItem>
                                            ))}
                                            </Select>
                                        </FormControl>
                                        
                                    </div>



                                    <div className="d-flex">
                                    <p className="  btn startbtn" onClick={onNext}>Next</p><p className="press">PressEnter</p>
                                    </div>
                                    <div className="justify-content-end">
                                        <div className=" arr  ">
                                            <img onClick={onNext} className="arrnav" src={arrowUp} alt="arrow"/>
                                        </div>
                                        <div className=" arr  ">
                                            <img onClick={onBack} className="arrnav" src={arrowDown} alt="arrow"/>
                                        </div>
                                    </div>
                                    
                                </div>

                            </div>

                        </div>

                        {/* <div className="col-md-4">
                            <div className="card text-left w-20 advertcard ">
                                <div className="card-body advertcardcontent infocard">
                                    <p className="card-text adverinfotext"> There are 254,432 
                                    possible audiences/customers in our network around you.</p>
                                    <a href="/" className="btn gobtn">Get to them Now</a>

                                </div>

                            </div> 

                        </div> */}

                    </div>

                    

                
            </div>
        );
    }
}

export default AdvertForm2;