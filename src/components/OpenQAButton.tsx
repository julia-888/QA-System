import styled from 'styled-components';
import { Div } from './Div';
import { adpt } from '../adaptive';
import { useState } from 'react';
import { ReactComponent as OpenQA} from "../icons/openQA.svg";
import { ReactComponent as CloseQA} from "../icons/closeQA.svg";

type Props = {
    openedQA: boolean;
    setOpenedQA: (state: boolean) => void;
};

export const OpenQAButton = ({openedQA, setOpenedQA}: Props) => {
    // const [hovered, setHovered] = useState(false);
    return (
        <OpenCloseWrap>
            <OpenCloseButton opened={openedQA}  onClick={() => {setOpenedQA(!openedQA)}}>
                {/* onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}> */}
                {
                    openedQA ? (<div className="imgClose"><CloseQA/></div>) : (<div className="imgOpen"><OpenQA/></div>)
                }
            </OpenCloseButton>
        </OpenCloseWrap>
    )
}

interface ButtonProps {
    opened: boolean;
}

const OpenCloseWrap = styled(Div)`
    position: fixed;
    top: 92vh;
    left: 95vw;
`

const OpenCloseButton = styled(Div)<ButtonProps>`
    align-items: center;
    justify-content: center;
    border: none;
    background-color: ${p => p.opened ? 'rgba(135, 157, 196, 55%)' : '#879DC4'};

    border-radius: 50%;
    height: ${adpt(60)}px;
    width: ${adpt(60)}px;

    transition: all 0.5s;

    .imgOpen {
        height: ${adpt(17)}px;
        width: ${adpt(25)}px;
        color: #FFF;
        /* задать размеры */
        svg {
            width: 100%;
            height: 100%;
        }

        transition: all 0.5s;
    }

    .imgClose {
        height: ${adpt(16)}px;
        width: ${adpt(16)}px;
        color: #FFF;
        /* задать размеры */
        svg {
            width: 100%;
            height: 100%;
        }

        transition: all 0.5s;
    }

    &:hover {
        background-color: ${p => p.opened ? 'rgba(255, 94, 138, 17%)' : '#879DC4'};
        .imgOpen { color: #E5EEFF; }
        .imgClose { color: #FF5E8A; }
    }
`