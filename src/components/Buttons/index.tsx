import { FunctionComponent } from "react";

//Packages
import styled from "styled-components/native";

//Colours
import { colours } from "../../../utils/colours";
const { primary } = colours;

//Types
import { ButtonProps } from "./types";

//Styled Components
const StyledView = styled.View`
  flex: 1;
  padding: 40px 25px 25px 25px;
  background-color: ${primary};
  justify-content: center;
  align-items: center;
`;

const RegularButton: FunctionComponent<ButtonProps> = (props) => {
  return <StyledView style={props.style}>{props.children}</StyledView>;
};

export default RegularButton;
