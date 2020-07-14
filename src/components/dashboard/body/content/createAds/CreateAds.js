import React, { useState, useEffect } from "react";
import CreateAdsStyle from "../../../styles/createAds";
import { Row, Col } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
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
  media: {
    height: "17rem",
  },
}));

export default function CreateAds() {
  const classes = useStyles();
  const [form, setForm] = useState(sessionStorage.getItem("form"))
  const [state, setState] = useState({
    title: "",
    headline: "",
    website: "",
    description: "",
    image: "",
  });

  // useEffect(() => {
  //   set
  // }, [sessionStorage.getItem("form")])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
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
              title="Semeicolon Africa"
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
        <Col md={5}>
          {
            !sessionStorage.getItem("form") ?  <FormOne handleChange={handleChange} /> :  <FormTwo handleChange={handleChange} />
          }
         
        </Col>
      </Row>
    </CreateAdsStyle>
  );
}

const FormOne = ({ handleChange }) => {
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
        onClick={() => sessionStorage.setItem("form", 1)}>
        NEXT
      </Button>
    </FormControl>
  );
};

const FormTwo = ({ handleChange }) => (
  <FormControl className="form">
    <h3>What is the Advert Goal!</h3>
    <TextField
      name="description"
      id="filled-textarea"
      label="Advert Goal"
      multiline
      variant="outlined"
      onChange={handleChange}
      rows={4}
    />

    <Button variant="outlined" color="primary">
      NEXT
    </Button>
  </FormControl>
);
