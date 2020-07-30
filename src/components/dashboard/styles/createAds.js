import styled from "styled-components";

export default styled.div`
  font-weight: 300 !important;
  padding: 5rem 0 0 0;

  .MuiFormControl-root {
    /* width: 90%; */
    &.form {
      margin: 17% auto;
    }
  }

  .MuiOutlinedInput-root,
  .MuiInputLabel-root {
    margin-bottom: 0rem !important;
    font-weight: 300 !important;
    font-family: "Fira Sans", sans-serif;
  }

  .form > .MuiButtonBase-root {
    height: 3.3rem;
    font-family: "Fira Sans", sans-serif;
    width: 90%;
  }

  h3 {
    font-size: 1.7rem;
    font-family: "Fira Sans", sans-serif;
    font-weight: 500;
    margin-bottom: 1.5rem;
  }

  .ad-card {
    width: 80%;
    margin: auto;
    background-color: red;
    height: 80%;
  }
  .card {
    font-family: "Fira Sans", sans-serif !important;
    margin: 20% auto;
  }

  .MuiCard-root {
    overflow: hidden;
    width: 80%;
    margin: 10% auto;
  }

  form {
    width: 90%;
    margin: 50% auto 0 !important;
  }

  .MuiButton-outlined[class*="MuiOutlinedInput-root"]
    .MuiAutocomplete-endAdornment {
    right: 30% !important;
    top: 10%;
  }

  .cashout-icons {
    border-radius: 100% 50% 50% 100% !important;
    width: 100px;
    height: 100px;
    display: inline-block;
    vertical-align: top;
    overflow: hidden;
    margin-bottom: 25px;
    font-size: 38px;
    line-height: 100px;
    color: #333357;
    background: #f2f3f8;
    border: 1px solid #eee;
  }

  .MuiButton-outlined {
    margin-bottom: 1rem !important;
  }

  .col-6 {
    button {
      height: 3rem !important;
      &.next {
        background-color: #2b52ba;
        color: #fff;
      }
    }
  }
`;
