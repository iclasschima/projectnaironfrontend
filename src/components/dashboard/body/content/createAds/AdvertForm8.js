import React,{ Component } from "react";
import "./advertBody.css";
import arrowUp from "./advertimages/Path 2arrup.svg"
import arrowDown from "./advertimages/Path 3arrdown.svg"
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

class AdvertForm8 extends Component{

    render(){
        const {
            versions,
            onChangeData,
            onNext,
            onBack,

        }=this.props
        return(

            <div className="">

                {/* <AdvertNavBar /> */}

                <div className="row">

                    <div className="col">

                        <div className="card advertcard">

                            <div className="card-body advertcardcontent ">

                                <div>
                                    <p className="card-text advertbodytext">What versions do you want your advert to appear?  </p>
                                </div>
                                <form>
                                    <RadioGroup value={versions} onChange={onChangeData('versions')} >
                                        <p className="recommend">RECOMMENDED FOR YOU </p>
                                        <div className="radioRec " style={versions==="All Versions"?{border:"1px solid #9160A4"}:{border:"1px solid #444444"}}>

                                            <FormControlLabel  value="All Versions" className="m-auto" control={<Radio />} label="All Version (mobile & desktop)" labelPlacement={"end"} />

                                        </div>

                                        <div className="radioRec manual " style={versions==="Mobile Version"?{border:"1px solid #9160A4"}:{border:"1px solid #444444"}}>

                                            <FormControlLabel   className="m-auto" value="Mobile Version" control={<Radio />} label="Mobile Version Only" labelPlacement={"end"}/>

                                        </div>

                                        <div className="radioRec " style={versions==="Desktop Version"?{border:"1px solid #9160A4"}:{border:"1px solid #444444"}}>

                                            <FormControlLabel  value="Desktop Version" className="m-auto" control={<Radio />} label="Desktop Version Only" labelPlacement={"end"} />

                                        </div>

                                    </RadioGroup>



                                    <div className="startfloat d-flex">
                                        <p onClick={onNext} className="btn startbtn">Next</p><p className="press">PressEnter</p>
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




            </div>
        );
    }
}

export default AdvertForm8;