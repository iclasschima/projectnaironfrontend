import React, { useState, useEffect } from "react";
import CreateAdsStyle from "../../../styles/createAds";
import { Row, Col } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
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
        <Col md={5}>{Form()}</Col>
      </Row>
    </CreateAdsStyle>
  );
}

const FormOne = ({ handleChange, setStep }) => {
  return (
    <FormControl className="form">
      <h3>Let's Get Started!</h3>
      <TextField
        name="ad_title"
        label="Advert Name"
        variant="outlined"
        size="medium"
        onChange={handleChange}
      />

      <TextField
        name="website"
        label="Website"
        variant="outlined"
        onChange={handleChange}
      />

      <Button
        variant="outlined"
        color="primary"
        onClick={() => setStep(2)}>
        NEXT
      </Button>
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
    <FormControl className="form">
      <h3>What is the Advert Goal!</h3>
      <TextField
        id="filled-select-currency"
        select
        label="Select Advert Goal"
        variant="outlined"
      >
        {goals.map((goal) => (
          <MenuItem key={goal.id} value={goal.value}>
            {goal.value}
          </MenuItem>
        ))}
      </TextField>

      <Button variant="outlined" color="primary" onClick={() => setStep(3)}>
        NEXT
      </Button>
      <Button variant="outlined" color="primary" onClick={() => setStep(1)}>
        BACK
      </Button>
    </FormControl>
  );
};

const FormThree = ({ handleChange, setStep}) => {
  const genders = [
    { id: 1, value: "Both" },
    { id: 2, value: "Male" },
    { id: 3, value: "Female" },
  ];

  const ages = []

  for (let age = 18; age <= 70; age++) ages.push({id: age, value: age})

  return (
    <FormControl className="form">
      <h3>Who do you want to view this advert?</h3>
      <TextField select label="Gender" variant="outlined">
        {genders.map((gender) => (
          <MenuItem key={gender.id} value={gender.value}>
            {gender.value}
          </MenuItem>
        ))}
      </TextField>
      <p>Select age range</p>
      <div className="row">

        <div className="col-6 pr-0">
          <TextField
            select
            label="From"
            variant="outlined"
          >
            {ages.map((age) => (
              <MenuItem key={age.id} value={age.value}>
                {age.value}
              </MenuItem>
            ))}
          </TextField>
        </div>

        <div className="col-5 pl-0 pr-0">
          <TextField select label="To" variant="outlined" fullWidth>
            {ages.map((age) => (
              <MenuItem key={age.id} value={age.value}>
                {age.value}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </div>

      <Button variant="outlined" color="primary" onClick={() => setStep(4)}>
        NEXT
      </Button>
      <Button variant="outlined" color="primary" onClick={() => setStep(2)}>
        BACK
      </Button>
    </FormControl>
  );
};

const FormFour = ({ handleChange, setStep }) => {
  return (
    <FormControl className="form">
      <h3>Where are your customers?</h3>
      <TextField
        label="Specific Area"
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <RoomOutlinedIcon />
            </InputAdornment>
          ),
        }}
      />

      <Button variant="outlined" color="primary" onClick={() => setStep(5)}>
        NEXT
      </Button>
      <Button variant="outlined" color="primary" onClick={() => setStep(3)}>
        BACK
      </Button>
    </FormControl>
  );
};

const FormFive = ({ handleChange, setStep }) => {
  const goals = [
    { id: 1, value: "Automatic Placement" },
    { id: 2, value: "Manual Placement" },
  ];

  return (
    <FormControl className="form">
      <h3>Choose Platform</h3>
      <TextField
        id="filled-select-currency"
        select
        label="Select Placement Type"
        variant="outlined"
      >
        {goals.map((goal) => (
          <MenuItem key={goal.id} value={goal.value}>
            {goal.value}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        id="filled-select-currency"
        select
        label="Select Placement Type"
        variant="outlined"
        disabled
      >
        {goals.map((goal) => (
          <MenuItem key={goal.id} value={goal.value}>
            {goal.value}
          </MenuItem>
        ))}
      </TextField>

      <Button variant="outlined" color="primary" onClick={() => setStep(6)}>
        NEXT
      </Button>
      <Button variant="outlined" color="primary" onClick={() => setStep(4)}>
        BACK
      </Button>
    </FormControl>
  );
};

const FormSix = ({ handleChange, setStep }) => {
  const goals = [
    { id: 1, value: "All ISP Technologies" },
    { id: 2, value: "Others" },
  ];

  return (
    <FormControl className="form">
      <h3>ISP Technologies</h3>
      <TextField
        id="filled-select-currency"
        select
        label="Select Provider"
        variant="outlined"
      >
        {goals.map((goal) => (
          <MenuItem key={goal.id} value={goal.value}>
            {goal.value}
          </MenuItem>
        ))}
      </TextField>

      <Button variant="outlined" color="primary" onClick={() => setStep(7)}>
        NEXT
      </Button>
      <Button variant="outlined" color="primary" onClick={() => setStep(5)}>
        BACK
      </Button>
    </FormControl>
  );
};

const FormSeven = ({ handleChange, setStep }) => {
  const categories = [
    { id: 2, value: "Agriculture" },
    { id: 1, value: "Business" },
    { id: 2, value: "Education" },
    { id: 2, value: "Real Estate" },
  ];

  return (
    <FormControl className="form">
      <h3>Set Up Categories</h3>
      <Autocomplete
        options={categories}
        getOptionLabel={(option) => option.value}
        renderInput={(params) => (
          <TextField {...params} label="Categories" variant="outlined" />
        )}
      />

      <Button variant="outlined" color="primary" onClick={() => setStep(6)}>
        NEXT
      </Button>
      <Button variant="outlined" color="primary" onClick={() => setStep(6)}>
        BACK
      </Button>
    </FormControl>
  );
};
