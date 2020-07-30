import React, { useState, useEffect } from "react";
import CreateAdsStyle from "../../../styles/createAds";
import { Row, Col } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment"
import clsx from "clsx";
import GoogleMapReact from "google-map-react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import InputAdornment from "@material-ui/core/InputAdornment";
import MenuItem from "@material-ui/core/MenuItem";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import Typography from "@material-ui/core/Typography";
import Skeleton from "@material-ui/lab/Skeleton";
import Box from "@material-ui/core/Box";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import CreditCardIcon from "@material-ui/icons/CreditCard";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  margin: {
    margin: theme.spacing(1),
  },
  media: {
    height: "17rem",
  },
}));

export default function CreateAds() {
  const classes = useStyles();
  const [step, setStep] = useState(1);
  const [state, setState] = useState({
    title: "",
    headline: "",
    website: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  useEffect(() => {}, [step]);

  const Form = () => {
    switch (step) {
      case 1:
        return <FormOne handleChange={handleChange} setStep={setStep} />;

      case 2:
        return <FormTwo handleChange={handleChange} setStep={setStep} />;

      case 3:
        return <FormThree setStep={setStep} />;

      case 4:
        return <FormFour handleChange={handleChange} setStep={setStep} />;

      case 5:
        return <FormFive handleChange={handleChange} setStep={setStep} />;

      case 6:
        return <FormSix handleChange={handleChange} setStep={setStep} />;

      case 7:
        return <FormSeven handleChange={handleChange} setStep={setStep} />;

      case 8:
        return <FormEight handleChange={handleChange} setStep={setStep} />;

      case 9:
        return <FormNine handleChange={handleChange} setStep={setStep} />;

      case 10:
        return <FormTen handleChange={handleChange} setStep={setStep} />;

      case 11:
        return <FormEleven handleChange={handleChange} setStep={setStep} />;

      case 12:
        return <FormTwelve handleChange={handleChange} setStep={setStep} />;

      case 13:
        return <Checkout />;

      default:
        return <FormOne handleChange={handleChange} setStep={setStep} />;
    }
  };

  return (
    <CreateAdsStyle>
      <Row className="p-0">
        <Col md={5}>
          <Card>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  S
                </Avatar>
              }
              title="Semicolon Africa"
              subheader="Talents & Innovation"
            />
            {state.image !== "" ? (
              ""
            ) : (
              <Skeleton variant="rect" width="210%" height={200} />
            )}
            {/* <CardMedia
              className={classes.media}
              image="https://images.unsplash.com/photo-1562939651-9359f291c988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
              title="Advert Image"
            /> */}

            <CardContent>
              {state.headline === "" || state.headline === " " ? (
                <Box pt={0.1}>
                  <Skeleton width="60%" />
                </Box>
              ) : (
                <Typography gutterBottom component="h1">
                  {state.headline}
                </Typography>
              )}

              {state.description !== "" ? (
                <Typography variant="body2" color="textSecondary" component="p">
                  {state.description}
                </Typography>
              ) : (
                <Box pt={0.1}>
                  <Skeleton height={50} />
                </Box>
              )}
            </CardContent>
            <CardActions disableSpacing>
              <Button size="small" color="primary">
                Learn more
              </Button>
            </CardActions>
          </Card>
        </Col>
        <Col md={4}>{Form()}</Col>
      </Row>
    </CreateAdsStyle>
  );
}

const Buttons = ({ next, prev, setStep, end=false }) => {
  return (
    <>
      <div className="col-6">
        <Button
          variant="outlined"
          color="primary"
          onClick={() => setStep(prev)}
          fullWidth
        >
          BACK
        </Button>
      </div>
      <div className="col-6">
        <Button
          variant="outlined"
          className="next"
          fullWidth
          onClick={() => setStep(next)}
        >
          {end ? "DONE" : "NEXT"}
        </Button>
      </div>
    </>
  );
};

const FormOne = ({ handleChange, setStep }) => {
  const goals = [
    { id: 1, value: "Get more website visits" },
    { id: 2, value: "Get more app download" },
    { id: 3, value: "Get more product sales" },
  ];

  return (
    <FormControl className="form container">
      <h3>Let's Get Started!</h3>
      <div className="row">
        <div className="col-12">
          <TextField
            name="ad_title"
            label="Advert Name"
            variant="outlined"
            size="medium"
            fullWidth
            onChange={handleChange}
          />
        </div>

        <div className="col-12">
          <TextField
            name="website"
            label="Website"
            variant="outlined"
            size="medium"
            fullWidth
            onChange={handleChange}
          />
        </div>

        <div className="offset-6 col-6">
          <Button
            variant="outlined"
            className="next"
            fullWidth
            onClick={() => setStep(2)}
          >
            NEXT
          </Button>
        </div>
      </div>
    </FormControl>
  );
};

const FormTwo = ({ handleChange, setStep }) => {
  const goals = [
    { id: 1, value: "Get more website visits" },
    { id: 2, value: "Get more app download" },
    { id: 3, value: "Get more product sales" },
  ];

  return (
    <FormControl className="form container">
      <h3>What is the Advert Goal!</h3>
      <div className="row">
        <div className="col-12">
          <TextField
            id="filled-select-currency"
            select
            label="Select Advert Goal"
            variant="outlined"
            fullWidth
          >
            {goals.map((goal) => (
              <MenuItem key={goal.id} value={goal.value}>
                {goal.value}
              </MenuItem>
            ))}
          </TextField>
        </div>

        <Buttons next={3} prev={1} setStep={setStep} />
      </div>
    </FormControl>
  );
};

const FormThree = ({ handleChange, setStep }) => {
  const genders = [
    { id: 1, value: "Both" },
    { id: 2, value: "Male" },
    { id: 3, value: "Female" },
  ];

  const ages = [];

  for (let age = 18; age <= 70; age++) ages.push({ id: age, value: age });

  return (
    <FormControl className="form container">
      <h3>Who do you want to view this advert?</h3>
      <div className="row">
        <div className="col-12">
          <TextField select label="Gender" fullWidth variant="outlined">
            {genders.map((gender) => (
              <MenuItem key={gender.id} value={gender.value}>
                {gender.value}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div className="col-12 row pr-0">
          <p className="col-12">Select age range</p>

          <div className="col-6 pr-0">
            <TextField select label="From" fullWidth variant="outlined">
              {ages.map((age) => (
                <MenuItem key={age.id} value={age.value}>
                  {age.value}
                </MenuItem>
              ))}
            </TextField>
          </div>

          <div className="col-6 pr-0">
            <TextField select label="To" fullWidth variant="outlined">
              {ages.map((age) => (
                <MenuItem key={age.id} value={age.value}>
                  {age.value}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </div>

        <Buttons next={4} prev={2} setStep={setStep} />
      </div>
    </FormControl>
  );
};

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const FormFour = ({ handleChange, setStep }) => {
  const center = {
    lat: 59.95,
    lng: 30.33,
  };

  return (
    <FormControl className="form conatiner">
      <h3>Where are your customers?</h3>
      <div className="row">
        <div className="col-12">
          <TextField
            label="Specific Area"
            variant="outlined"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <RoomOutlinedIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>

        <div className="col-12 pb-4" style={{ height: "20vh", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyCRz96-v-28BYoKRHJ8GPW0ExGzrV8Gx78",
            }}
            defaultCenter={center}
            defaultZoom="1"
          >
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>

        <Buttons next={5} prev={3} setStep={setStep} />
      </div>
    </FormControl>
  );
};

const FormFive = ({ handleChange, setStep }) => {
  const goals = [
    { id: 1, value: "Automatic Placement" },
    { id: 2, value: "Manual Placement" },
  ];

  const platforms = [
    { title: "legit.com", value: "legit" },
    { title: "facebook.com", value: "facebook" },
    { title: "twitter.com", value: "twitter" },
    { title: "google.com", value: "google" },
  ];

  const [placement, setplacement] = useState("Automatic Placement");
  const [disabled, setDisabled] = useState(true);
  const [fields, setfields] = useState([]);

  const handleSelectChange = (e) => {
    setplacement(e.target.value);
  };

  useEffect(() => {
    if (placement !== "Manual Placement") setDisabled(true);
    else setDisabled(false);
  }, [placement]);

  return (
    <FormControl className="form container">
      <h3>Where do you want your advert to appear?</h3>
      <div className="row">
        <div className="col-12">
          <TextField
            id="filled-select-currency"
            select
            label="Select Placement Type"
            variant="outlined"
            value={placement}
            fullWidth
            onChange={handleSelectChange}
          >
            {goals.map((goal) => (
              <MenuItem key={goal.id} value={goal.value}>
                {goal.value}
              </MenuItem>
            ))}
          </TextField>
        </div>

        <div className="col-12">
          <Autocomplete
            options={platforms}
            disabled={disabled}
            onChange={(event, value) => console.log(value)}
            multiple
            getOptionLabel={(option) => option.title}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Select Placement"
                variant="outlined"
              />
            )}
          />
        </div>
        <Buttons next={6} prev={4} setStep={setStep} />
      </div>
    </FormControl>
  );
};

const FormSix = ({ handleChange, setStep }) => {
  const [ISP, setISP] = useState("All ISP Technologies");
  const [disabled, setDisabled] = useState(true);

  const methods = [
    { id: 1, value: "All ISP Technologies" },
    { id: 2, value: "Others" },
  ];

  const isps = [
    { title: "Spectranet Data", value: "spectranet" },
    { title: "MTN", value: "mtn" },
    { title: "AIRTEL", value: "airtel" },
    { title: "9mobile", value: "9mobile" },
    { title: "Etisalat", value: "etisalat" },
  ];

  const handleSelectChange = (e) => {
    setISP(e.target.value);
  };

  useEffect(() => {
    if (ISP !== "Others") setDisabled(true);
    else setDisabled(false);
  }, [ISP]);

  return (
    <FormControl className="form container">
      <h3>ISP Technologies</h3>
      <div className="row">
        <div className="col-12">
          <TextField
            id="filled-select-currency"
            select
            label="Select Method"
            variant="outlined"
            value={ISP}
            fullWidth
            onChange={handleSelectChange}
          >
            {methods.map((method) => (
              <MenuItem key={method.id} value={method.value}>
                {method.value}
              </MenuItem>
            ))}
          </TextField>
        </div>

        <div className="col-12">
          <Autocomplete
            options={isps}
            disabled={disabled}
            onChange={(event, value) => console.log(value)}
            multiple
            getOptionLabel={(option) => option.title}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Select Technology"
                variant="outlined"
              />
            )}
          />
        </div>
        <Buttons next={7} prev={5} setStep={setStep} />
      </div>
    </FormControl>
  );
};

const FormSeven = ({ handleChange, setStep }) => {
  const categories = [
    { title: "Business", value: "business" },
    { title: "Education", value: "education" },
    { title: "Real Estate", value: "estate" },
    { title: "Shopping", value: "shopping" },
    { title: "Art", value: "art" },
  ];

  return (
    <FormControl className="form container">
      <h3>Set Up Categories</h3>
      <div className="row">
        <div className="col-12">
          <Autocomplete
            options={categories}
            onChange={(event, value) => console.log(value)}
            multiple
            getOptionLabel={(option) => option.title}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Select Categories"
                variant="outlined"
              />
            )}
          />
        </div>
        <Buttons next={8} prev={6} setStep={setStep} />
      </div>
    </FormControl>
  );
};

const FormEight = ({ handleChange, setStep }) => {
  const [device, setDevice] = useState("All devices (Mobile & Desktop)");
  const [disabled, setDisabled] = useState(true);

  const devices = [
    { id: 1, value: "All devices (Mobile & Desktop)" },
    { id: 2, value: "Mobile devices only" },
    { id: 2, value: "Desktop devices only" },
  ];

  const mobile = [
    { title: "Andriod", value: "andriod" },
    { title: "IOS", value: "ios" },
  ];

  const mobileModels = [
    { title: "Apple", value: "apple" },
    { title: "Samsung", value: "samsung" },
    { title: "Oppo", value: "oppo" },
    { title: "Lenovo", value: "lenovo" },
    { title: "Huawei", value: "huawei" },
    { title: "LG", value: "lg" },
    { title: "Xiaomi", value: "xiaomi" },
    { title: "Vivo", value: "vivo" },
  ];

  const desktop = [
    { title: "Windows", value: "windows" },
    { title: "MacOS", value: "macos" },
    { title: "Linux", value: "linux" },
  ];

  const desktopModels = [
    { title: "HP", value: "hp" },
    { title: "Samsung", value: "samsung" },
    { title: "Dell", value: "dell" },
    { title: "Lenovo", value: "lenovo" },
    { title: "Asus", value: "asus" },
    { title: "MacBook", value: "macbook" },
    { title: "Acer", value: "acer" },
  ];

  const handleSelectChange = (e) => {
    setDevice(e.target.value);
  };

  useEffect(() => {
    if (device === "All devices (Mobile & Desktop)") setDisabled(true);
    else setDisabled(false);
  }, [device]);

  return (
    <FormControl className="form container">
      <h3>Select preferred devices</h3>
      <div className="row">
        <div className="col-12">
          <TextField
            select
            label="Select Provider"
            variant="outlined"
            value={device}
            fullWidth
            onChange={handleSelectChange}
          >
            {devices.map((device) => (
              <MenuItem key={device.id} value={device.value}>
                {device.value}
              </MenuItem>
            ))}
          </TextField>
        </div>

        <div className="col-12">
          <Autocomplete
            options={device === "Mobile devices only" ? mobile : desktop}
            disabled={disabled}
            onChange={(event, value) => console.log(value)}
            multiple
            getOptionLabel={(option) => option.title}
            renderInput={(params) => (
              <TextField {...params} label="Select OS" variant="outlined" />
            )}
          />
        </div>

        <div className="col-12">
          <Autocomplete
            options={
              device === "Mobile devices only" ? mobileModels : desktopModels
            }
            disabled={disabled}
            onChange={(event, value) => console.log(value)}
            multiple
            getOptionLabel={(option) => option.title}
            renderInput={(params) => (
              <TextField {...params} label="Select Model" variant="outlined" />
            )}
          />
        </div>

        <Buttons next={9} prev={7} setStep={setStep} />
      </div>
    </FormControl>
  );
};

const FormNine = ({ handleChange, setStep }) => {
  const options = [
    { id: 1, value: "Image" },
    { id: 2, value: "Slides" },
    { id: 3, value: "Video" },
  ];

  return (
    <FormControl className="form container">
      <h3>Headline and Description</h3>
      <div className="row">
        <div className="col-12">
          <TextField
            id="filled-select-currency"
            select
            label="Headline"
            variant="outlined"
            fullWidth
          />
        </div>

        <div className="col-12">
          <TextField
            id="filled-select-currency"
            label="Description 1"
            variant="outlined"
            multiline
            rows="2"
            fullWidth
          />
        </div>

        <div className="col-12">
          <TextField
            id="filled-select-currency"
            label="Description 2"
            variant="outlined"
            multiline
            rows="2"
            fullWidth
          />
        </div>

        <Buttons next={10} prev={8} setStep={setStep} />
      </div>
    </FormControl>
  );
};

const FormTen = ({ handleChange, setStep }) => {
  const types = [
    { title: "Slide", value: "slide" },
    { title: "Image", value: "image" },
    { title: "Video", value: "video" },
  ];
  return (
    <FormControl className="form container">
      <h3>Upload Media</h3>
      <div className="row">
        <div className="col-12">
          <TextField
            id="filled-select-currency"
            select
            label="Select Advert Goal"
            variant="outlined"
            fullWidth
          >
            {types.map((type) => (
              <MenuItem key={type.id} value={type.value}>
                {type.value}
              </MenuItem>
            ))}
          </TextField>
        </div>

        <div className="col-12">
          <TextField
            id="filled-select-currency"
            variant="outlined"
            type="file"
            fullWidth
          />
        </div>

        <div className="col-12">
          <TextField
            id="filled-select-currency"
            variant="outlined"
            type="file"
            fullWidth
          />
        </div>

        <Buttons next={11} prev={9} setStep={setStep} />
      </div>
    </FormControl>
  );
};

const FormEleven = ({ handleChange, setStep }) => {
  return (
    <FormControl className="form container">
      <h3>Set Advert Life Span</h3>
      <div className="row">
        <div className="col-12 mb-3">Start Date & Time</div>
        <div className="col-6">
          <TextField
            id="filled-select-currency"
            label="Date"
            variant="outlined"
            fullWidth
            type="date"
            defaultValue={moment()
              .add(1, "days")
              .format("YYYY-MM-DD")}
          />
        </div>

        <div className="col-6">
          <TextField
            id="filled-select-currency"
            label="Time"
            variant="outlined"
            fullWidth
            defaultValue="00:00"
            type="time"
          />
        </div>

        <div className="col-12 mb-3">End Date & Time</div>
        <div className="col-6">
          <TextField
            id="filled-select-currency"
            label="Date"
            variant="outlined"
            fullWidth
            type="date"
            defaultValue={moment()
              .add(2, "days")
              .format("YYYY-MM-DD")}
          />
        </div>

        <div className="col-6">
          <TextField
            id="filled-select-currency"
            label="Time"
            variant="outlined"
            fullWidth
            defaultValue="00:00"
            type="time"
          />
        </div>

        <Buttons next={12} prev={10} setStep={setStep} />
      </div>
    </FormControl>
  );
};

const FormTwelve = ({ handleChange, setStep }) => {
  const [currency, setcurrency] = useState("Nigerian Naira (NGN)");
  const [period, setperiod] = useState("Daily");
  const currencies = [
    { id: "usd", value: "United State Dollar (USD)" },
    { id: "ngn", value: "Nigerian Naira (NGN)" },
  ];

  const periods = [
    { id: 1, value: "Daily" },
    { id: 2, value: "Weekly" },
    { id: 3, value: "Monthly" },
  ];

  return (
    <FormControl className="form container">
      <h3>Setup Budget</h3>
      <div className="row">
        <div className="col-12">
          <TextField
            select
            label="Select Currency"
            variant="outlined"
            value={currency}
            fullWidth
            onChange={(e) => setcurrency(e.target.value)}
          >
            {currencies.map((currencie) => (
              <MenuItem key={currencie.id} value={currencie.value}>
                {currencie.value}
              </MenuItem>
            ))}
          </TextField>
        </div>

        <div className="col-12">
          <TextField
            select
            label="Select Period"
            variant="outlined"
            value={period}
            fullWidth
            onChange={(e) => setcurrency(e.target.value)}
          >
            {periods.map((data) => (
              <MenuItem key={data.id} value={data.value}>
                {data.value}
              </MenuItem>
            ))}
          </TextField>
        </div>

        <div className="col-12">
          <TextField
            name="amount"
            label="Enter Amount"
            variant="outlined"
            size="medium"
            fullWidth
          />
        </div>

        <Buttons next={13} prev={11} setStep={setStep} end={true} />
      </div>
    </FormControl>
  );
};


const Checkout = ({ handleChange, setStep }) => {

  return (
    <FormControl className="form container">
      <h3>Let's Get Started!</h3>
      <div className="row">
        <div className="col-6 text-center">
          <Card>
            <CardContent>
              <h6>Pay via wallet</h6>
              <div className="cashout-icons">
                <AccountBalanceWalletIcon />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="col-6 text-center">
          <Card>
            <CardContent>
              <h6>Pay via card</h6>
              <CreditCardIcon />
            </CardContent>
          </Card>
        </div>

        <div className="col-6">
          <Button variant="outlined" fullWidth onClick={() => setStep(12)}>
            BACK
          </Button>
        </div>
      </div>
    </FormControl>
  );
};