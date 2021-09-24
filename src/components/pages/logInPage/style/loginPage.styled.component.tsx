import {Grid} from 'semantic-ui-react'
import styled from 'styled-components';
import {fontColor,fontLink} from '../../../utils/fontColor.context';



export const StyledGridLogoColumn = styled(Grid.Column)`
    &&&&&{
        ${fontLink.url};
        ${fontLink.fontFamily};
        background-color: #E0ECFD;
        color: ${fontColor.default};
        text-align: center;

        img{
            margin-top: 24px;
            margin-bottom: 14px;
        }

        h1{
            font-size: 26px;
            font-weight: 700;
            color: #2F80ED;
            margin-bottom: 7px;
        }
        p{
            margin-bottom: 30px;
            font-size: 14px;
            color: #86A8D6;
            font-weight: 400;
        }
    }
`;

export const StyledGridFormColumn = styled(Grid.Column)`
    &&&&&{
        ${fontLink.url};
        ${fontLink.fontFamily};
        padding-right: 30px;
        padding-left: 30px;

        label{
            margin-bottom: 11px;
            color: ${fontColor.default};
            font-weight: 400;
        }

        .field:nth-child(2) {
            margin-top: 26px;
            margin-bottom: 29px;
        }
    }
`;