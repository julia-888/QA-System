import { adpt } from "../adaptive"
import { Div } from "./Div"
import styled from "styled-components"

export const ScrolledDiv = styled(Div)`
    overflow-y: auto;
    
    &::-webkit-scrollbar {
        width: ${adpt(5)}px;
        border-radius: ${adpt(10)}px;
    }
    &::-webkit-scrollbar-track {
        background-color: rgba(139, 161, 200, 0.7);
        border-radius: ${adpt(10)}px;
        margin-block: ${adpt(22)}px;
        margin-block-start: 0;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: ${adpt(10)}px;
        background-color: #5e7398;
    }
`