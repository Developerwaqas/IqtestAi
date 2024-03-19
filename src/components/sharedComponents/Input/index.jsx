import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import { TextField } from "@mui/material";


const Input = styled(TextField)`
  background: white;
  border-radius: 50px;
  & .MuiInputBase-root {
    padding: 5px 25px; /* add padding inside the input */
  }
  & label.Mui-focused {
    color: white;
  }
  & .MuiInput-underline:after {
    border-bottom-color: #3182CE !important;
    border: 2px solid #3182CE;
  }
  & .MuiOutlinedInput-root {
    & fieldset {
      border-radius: 50px;
    }
    &:hover fieldset {
      border-color: #3182CE !important;
      border-radius: 50px;
      border: 2px solid #3182CE;
    }
    &.Mui-focused fieldset {
      border-color: #3182CE !important;
      border-radius: 50px;
      border: 2px solid #3182CE;
    }
  }
`;


const InputComponent = (props) => {
  return (
    <>
      
      <Input
     
        onChange={props.onChange}
        value={props.value}
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        variant="outlined"
        disabled={props.readonly}
        style={{width: props.width || "100%"}}
       
      />
    </>
  );
};

export default InputComponent;
