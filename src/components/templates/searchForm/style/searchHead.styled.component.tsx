import styled from 'styled-components';
import {fontColor,fontLink} from '../../../utils/fontColor.context';
import ButtonComponent from "../../../atoms/button"


export const StyledButtonSelect = styled(ButtonComponent)`
    &&&&&{
        ${fontLink.url};
        ${fontLink.fontFamily};
        border-radius: 4px;
        margin-top: 12px;
        color: #2F80ED !important;
        background: #E0ECFD !important;
    }
`;