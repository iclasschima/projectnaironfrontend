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
    line-height: 4rem;
    font-family: "Fira Sans", sans-serif;
    font-weight: 500;
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

  /* .MuiIconButton-label {
    width: 100%;
    display: flex;
    align-items: inherit;
    justify-content: inherit;
    top: -80%;
    position: absolute;
  } */

  .MuiButton-outlined {
    margin-bottom: 1rem !important;
  }

  .col-6 {
    button {
      height: 3rem !important;
      &.next {
        background-color: #2b52ba;
        color: #fff
      }
    }
  }
`;
