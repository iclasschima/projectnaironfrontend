import React,{ Component } from "react";
import AdvertNavBar from "../AdvertNavBar";
import "../../advertBody.css";
import AdvertFooter from "../AdvertFooter";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// import { MDBSelect} from "mdbreact";


class AdvertForm7 extends Component{
  constructor(props){
    super(props);
    this.state={
      devices:""
    }
  };

  onHandleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value});
    console.log(this.state)
  }


    
    
    render(){

      const devicesdropdown={
            
        devices:["Mobile Device Only","Desktop Device Only"]

      }

      let {devices} = this.state;
        return(
         
            <div className=" ">
        
                    <AdvertNavBar />

                    <div className="row">
                        

                        <div className="col">

                            <div className="card advertcard w-80">

                                <div className="card-body advertcardcontent">
                                    <div>
                                        <p className="card-text advertbodytext">Select specific mobile devices and operating systems</p>
                                    </div>
                                    
                                    {/* <TextField onChange={this.setOnChange}
                                            // fullWidth
                                           select  label="All Device (Recommended) " name='devices'
                                           variant="outlined" value={devices}  margin="normal"
                                           color={"secondary"} required
                                           // defaultValue="Age Range"
                                     >
                                    {devicesdropdown.devices.map((option) => (
                                        <MenuItem key={option} value={option}>
                                            {option}
                                        </MenuItem>
                                    ))}

                                </TextField> */}


                                <FormControl variant="filled">
                                  <InputLabel id="demo-simple-select-filled-label">All Device(Recommended)</InputLabel>
                                  <Select
                                    labelId="demo-simple-select-filled-label"
                                    id="demo-simple-select-filled"
                                    value={devices}
                                    name="devices"
                                    onChange={this.onHandleChange}
                                  >
                                  {devicesdropdown.devices.map((option) => (
                                        <MenuItem key={option} value={option}>
                                            {option}
                                        </MenuItem>
                                    ))}
                                    </Select>
                                  </FormControl>

                                    <div>
                                        <p className="question2">Business website</p>
                                        <input type="text" className="fillform"></input>
                                        {/* <hr className="fillform"/> */}
                                    </div>

                                    <div>
                                    <a href="/" class="btn startbtn">Start</a>
                                    </div>
                                    
                                </div>

                            </div>

                        </div>

                        <div className="col-md-4">
                            <div className="card text-left w-20 advertcard ">
                                <div className="card-body advertcardcontent infocard">
                                    <p className="card-text adverinfotext"> There are 254,432 
                                    possible audiences/customers in our network around you.</p>
                                    <a href="/" class="btn gobtn">Get to them Now</a>

                                </div>

                            </div> 

                        </div>

                    </div>

                    <AdvertFooter />

                
            </div>
            
        );
        
    }
}

export default AdvertForm7;