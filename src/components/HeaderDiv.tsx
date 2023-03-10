import styled from "styled-components"
import { adpt } from "../adaptive"
import { Div } from "./Div"

interface QASystemFrameDims {
    big: boolean;
}

// Заголовок страницы с элементом для перемещения окна
export const HeaderDiv = styled(Div)<QASystemFrameDims>`
    justify-content: space-between;
    align-items: flex-start;
    width: ${p => p.big ? adpt(850) - adpt(25) : adpt(420) - adpt(25)}px;
    font-weight: 600;
    font-size: ${adpt(23)}px;
    text-align: left;
    margin-bottom: ${adpt(10)}px;
    .imgBack{
        height: ${adpt(19)}px;
        width: ${adpt(12)}px;
        /* задать размеры */
        svg {
            width: 100%;
            height: 100%;
        }
    }
    .imgMove{
        height: ${adpt(25)}px;
        width: ${adpt(15)}px;
        /* задать размеры */
        svg {
            width: 100%;
            height: 100%;
        }        
    }
    .imgCompress{
        height: ${adpt(21)}px;
        width: ${adpt(21)}px;
        /* задать размеры */
        svg {
            width: 100%;
            height: 100%;
        }        
    }
    .imgExtend{
        height: ${adpt(19)}px;
        width: ${adpt(19)}px;
        /* задать размеры */
        svg {
            width: 100%;
            height: 100%;
        }        
    }
    .headerText {
        margin-left: ${adpt(30)}px;
        width: ${p => p.big ? adpt(710) : adpt(318)}px;
    }
    .backButton {
        cursor: pointer;
        background: none;
        border: none;
    }
`
