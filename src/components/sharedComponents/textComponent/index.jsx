import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

const StyledTypography = styled(Typography)(({ theme }) => ({
  letterSpacing: "0.01em",
  padding: theme.spacing(0),
}));

const TextComponent = (props) => {
  return (
    <>
      <StyledTypography
        className={props.className}
        variant={props.variant}
        align={props.align}
        style={{
          fontSize: props.fontSize,
          fontWeight: props.fontWeight,
          color: props.color,
          textDecoration: props.textDecoration,
          padding: props.padding,
          lineHeight: props.lineHeight,
          cursor:props.cursor || "default"
        }}
      >
        {props.children}
      </StyledTypography>
    </>
  );
};

export default TextComponent;
