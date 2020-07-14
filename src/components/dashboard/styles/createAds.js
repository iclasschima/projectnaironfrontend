import styled from "styled-components";

export default styled.div`
  font-weight: 300 !important;
  padding: 5rem 0 0 0;

  .MuiFormControl-root {
      width: 90%;
      &.form {
        margin: 15% auto;
      }
  }

  .MuiOutlinedInput-root, .MuiInputLabel-root {
    margin-bottom: 1rem !important;
    font-weight: 300 !important;
    font-family: "Fira Sans", sans-serif;
  }

  .MuiButtonBase-root {
    height: 3.3rem;
    font-family: "Fira Sans", sans-serif;
    width: 90%;
  }

  h3 {
    font-size: 1.7rem;
    line-height: 4rem;
    font-family: "Fira Sans", sans-serif;
    font-weight: 500
  }

  .ad-card {
      width: 80%;
      margin: auto;
      background-color: red;
      height: 80%;
  }
  .card {
    font-family: "Fira Sans", sans-serif !important;
    margin: 20% auto
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
`
