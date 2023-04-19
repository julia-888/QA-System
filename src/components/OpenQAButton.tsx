import styled from 'styled-components';
import { Div } from './Div';
import { adpt } from '../adaptive';
import { useState } from 'react';
import { ReactComponent as OpenHoverIcon} from "../icons/open_hover.svg";
import { ReactComponent as OpenNotHoverIcon} from "../icons/open_not-hover.svg";
import { ReactComponent as CloseHoverIcon} from "../icons/close_hover.svg";
import { ReactComponent as CloseNotHoverIcon} from "../icons/close_not-hover.svg";

type Props = {
    openedQA: boolean;
    setOpenedQA: (state: boolean) => void;
};

export const OpenQAButton = ({openedQA, setOpenedQA}: Props) => {
    const [hovered, setHovered] = useState(false);
    return (
        <OpenCloseWrap>
            <OpenCloseButton>
                <div className="img" onClick={() => {setOpenedQA(!openedQA)}} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                    {
                        openedQA ? (hovered ? <CloseHoverIcon/> : <CloseNotHoverIcon/>) : (hovered ? <OpenHoverIcon/> : <OpenNotHoverIcon/>)
                    }
                </div>
            </OpenCloseButton>
        </OpenCloseWrap>
    )
}

const OpenCloseWrap = styled(Div)`
    position: fixed;
    top: 93vh;
    left: 95vw;
`

const OpenCloseButton = styled.button`
    border: none;
    background: none;

    .img {
        height: ${adpt(60)}px;
        width: ${adpt(60)}px;
        /* задать размеры */
        svg {
            width: 100%;
            height: 100%;
        }
    }
`