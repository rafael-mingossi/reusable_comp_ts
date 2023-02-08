import {FunctionComponent} from 'react';

//Packages
import styled from 'styled-components/native';

//Colours
import {colours} from "../../../utils/colours";
const {black} = colours;

//Types
import {TextProps} from './types';

//Styled Components
const StyledText = styled.Text`
  font-size: 30px;
  color: ${black};
`

const BigText: FunctionComponent<TextProps> = (props) => {
    return(
        <StyledText style={props.style}>
            {props.children}
        </StyledText>
    )
}

export default BigText;
