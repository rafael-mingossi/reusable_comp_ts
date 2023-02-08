import { FunctionComponent } from "react";

//Packages
import styled from "styled-components/native";

//Colours
import { colours } from "../../../utils/colours";
const { primary, accent } = colours;

//Types
import { ButtonProps } from "./types";
import RegularText from "../Text/Regular";

//Styled Components
const ButtonView = styled.TouchableOpacity`
  background-color: ${accent};
  width: 100%;
  height: 60px;
  padding: 15px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const RegularButton: FunctionComponent<ButtonProps> = (props) => {
  return (
    <ButtonView style={props.style} onPress={props.onPress}>
      <RegularText style={[{ color: primary }, props.textStyle]}>
        {props.children}
      </RegularText>
    </ButtonView>
  );
};

export default RegularButton;
