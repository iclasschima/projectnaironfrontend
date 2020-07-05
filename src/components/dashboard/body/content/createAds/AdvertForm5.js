import React,{ Component } from "react";
import "./advertBody.css";
import arrowUp from "./advertimages/Path 2arrup.svg";
import arrowDown from "./advertimages/Path 3arrdown.svg";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";



class AdvertForm5 extends Component{

    render(){
        const{
            platform,
            manualPlatForm,
            onNext,
            onBack,
            onChangeData,
        }=this.props
        const manualdropdown={

            manualPlatform:["Legit.com","Nairon.com","Semicolon.africa"]

        }

        return(

            <div className="">

                    {/* <AdvertNavBar /> */}

                    <div className="row">

                        <div className="col">

                            <div className="card advertcard">

                                <div className="card-body advertcardcontent ">

                                    <div>
                                        <p className="card-text advertbodytext">Which platform do you want this ads? </p>
                                    </div>
                                    <form>
                                    <RadioGroup value={platform} onChange={onChangeData('platform')} >
                                        <p className="recommend">RECOMMENDED FOR YOU </p>
                                    <div className="radioRec " style={platform==="Automatic"?{border:"1px solid #9160A4"}:{border:"1px solid #444444"}}>

                                         {/*<input type="radio" id="auto1" value="Automatic" name="action" />*/}
                                         {/*<label htmlFor="auto1" className="autoText">Automatic placement</label>*/}

                                        <FormControlLabel  value="Automatic" className="m-auto" control={<Radio />} label="Automatic placement" labelPlacement={"end"} />

                                    </div>

                                    <div className="radioRec manual " style={platform==="Manual"?{border:"1px solid #9160A4"}:{border:"1px solid #444444"}}>

                                        <FormControlLabel   className="m-auto" value="Manual" control={<Radio />} label="Manual placement" labelPlacement={"end"}/>


                                    </div>
                                        {platform==="Manual" ?
                                        <FormControl className=" ml-5 w-75 " variant="filled">

                                            <Select
                                                labelId="demo-simple-select-filled-label"
                                                id="demo-simple-select-filled"
                                                value={manualPlatForm}
                                                defaultValue="Legit.com"
                                                name="age1"


                                                onChange={onChangeData('manualPlatform')}
                                            >
                                                {manualdropdown.manualPlatform.map((option) => (
                                                    <MenuItem key={option} value={option}>
                                                        {option }
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>:<input className="d-none"/>}


                                    </RadioGroup>



                                    <div className="startfloat d-flex">
                                    <p onClick={onNext}  className="btn startbtn">Next</p><p className="press">PressEnter</p>
                                    </div>

                                        <div className="justify-content-end">
                                            <div className=" arr  ">
                                                <img onClick={onNext} className="arrnav" src={arrowUp} alt="arrow"/>
                                            </div>
                                            <div className=" arr  ">
                                                <img onClick={onBack} className="arrnav" src={arrowDown} alt="arrow"/>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                            </div>

                        </div>



                    </div>

                    {/* <AdvertFooter /> */}


            </div>
        );
    }
}

export default AdvertForm5;