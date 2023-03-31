import styled from "styled-components"
import { adpt } from "../adaptive"
import { Div } from "./Div"

interface HeaderDivProps {
    big: boolean;
    isArticle: boolean;
}

// Заголовок страницы с элементом для перемещения окна (самый верхний заголовок)
export const HeaderDiv = styled(Div)<HeaderDivProps>`
    justify-content: space-between;
    align-items: flex-start;
    width: ${p => p.big ? adpt(850-40) : adpt(420-10)}px;
    font-weight: 600;
    font-size: ${p => p.isArticle ? adpt(20) : adpt(22)}px;
    text-align: left;
    margin-bottom: ${adpt(10)}px;
    margin-left: ${p => p.big && adpt(15) }px;

    .imgBack{
        height: ${adpt(17)}px;
        width: ${adpt(10)}px;
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
        margin-left: ${p => p.big ? adpt(30) : (p.isArticle && !p.big) ? adpt(15) : adpt(30)}px;
        width: ${p => p.big ? adpt(710) : adpt(318)}px;
    }
    .backButton {
        cursor: pointer;
        background: none;
        border: none;
    }
`
