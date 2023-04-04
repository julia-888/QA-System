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
    width: ${p => p.big ? adpt(850) : adpt(420)}px;
    font-size: ${p => p.isArticle ? adpt(20) : adpt(22)}px;
    text-align: left;
    padding: ${adpt(27)}px 0 0 0;
    margin-bottom: ${adpt(10)}px;

    .imgBack{
        margin-left: ${p => !p.big && p.isArticle ? adpt(20) : adpt(35)}px;
        height: ${adpt(17)}px;
        width: ${adpt(10)}px;
        /* задать размеры */
        svg {
            width: 100%;
            height: 100%;
        }
    }
    .imgMove{
        margin-right: ${p => p.big ? adpt(36) : adpt(20)}px;
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
        margin-right: ${adpt(24)}px;
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
        font: ${p => p.big ? `${adpt(22)}px 'Montserrat-Bold'` : `${adpt(23)}px 'Montserrat-SemiBold'`};
        ${p => p.isArticle && `font: ${adpt(20)}px 'Montserrat-Bold';`}
        ${p => p.isArticle && `display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;  
        overflow: hidden;`}
    }
    .backButton {
        cursor: pointer;
        background: none;
        border: none;
    }
`
