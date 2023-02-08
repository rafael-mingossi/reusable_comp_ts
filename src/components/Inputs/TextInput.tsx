import { FunctionComponent, useState } from "react";

//Packages
import styled from "styled-components/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

//Colours
import { colours } from "../../../utils/colours";
const { primary, accent, secondary, black, gray } = colours;
import SmallText from "../Text/Small";

//Types
import { InputProps } from "./types";

//Styled Components
const InputWrapper = styled.View`
  width: 100%;
`;

const LeftIcon = styled.View`
  position: absolute;
  top: 35px;
  left: 15px;
  z-index: 1;
  border-right-width: 2px;
  border-color: ${secondary};
  padding-right: 10px;
`;

const RightIcon = styled.TouchableOpacity`
  position: absolute;
  top: 35px;
  right: 15px;
  z-index: 1;
`;

const InputField = styled.TextInput`
  background-color: ${primary};
  height: 60px;
  border-radius: 10px;
  border-width: 2px;
  border-color: ${secondary};
  margin-vertical: 3px;
  margin-bottom: 10px;
  padding: 15px 55px 15px 65px;
  font-size: 16px;
  color: ${black};
`;

const TextInput: FunctionComponent<InputProps> = ({
  icon,
  label,
  isPassword,
  ...props
}) => {
  const [inputBG, setInputBG] = useState(primary);
  const [hidePassword, setHidePassword] = useState(true);

  const customOnFocus = () => {
    //props?.onFocus;
    setInputBG(secondary);
  };

  const customOnBlur = () => {
    //props?.onBlur;
    setInputBG(primary);
  };

  return (
    <InputWrapper>
      <LeftIcon>
        <MaterialCommunityIcons name={icon} size={30} color={accent} />
      </LeftIcon>
      <SmallText>{label}</SmallText>
      <InputField
        {...props}
        placeholderTextColor={gray}
        style={[{ backgroundColor: inputBG }, props.style]}
        onFocus={customOnFocus}
        onBlur={customOnBlur}
        secureTextEntry={isPassword && hidePassword}
      />
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <MaterialCommunityIcons
            name={hidePassword ? "eye-off" : "eye"}
            size={30}
            color={accent}
          />
        </RightIcon>
      )}
    </InputWrapper>
  );
};

export default TextInput;
