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
    align-items: ${p => !p.big && p.isArticle ? `center` : `flex-start`};
    width: ${p => p.big ? adpt(850) : adpt(420)}px;
    font-size: ${p => p.isArticle ? adpt(20) : adpt(22)}px;
    text-align: left;
    padding: ${adpt(27)}px 0 ${adpt(10)}px 0;

    .imgBack{
        margin-left: ${adpt(35)}px;
        height: ${adpt(17)}px;
        width: ${adpt(10)}px;
        /* задать размеры */
        svg {
            width: 100%;
            height: 100%;
        }
    }
    .imgMove{
        margin-right: ${adpt(20)}px;
        height: ${adpt(25)}px;
        width: ${adpt(15)}px;
        /* задать размеры */
        svg {
            width: 100%;
            height: 100%;
        }        
    }
    .imgCompress{
        margin-right: ${adpt(36)}px;
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
        margin-left: ${p => p.big ? adpt(30) : (p.isArticle && !p.big) ? adpt(15) : adpt(40)}px;
        width: ${p => p.big ? adpt(710) : adpt(318)}px;
        font: ${adpt(23)}px 'Montserrat-SemiBold';

    }
    .backButton {
        cursor: pointer;
        background: none;
        border: none;
    }
`
