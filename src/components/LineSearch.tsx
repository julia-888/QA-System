import { adpt } from "../adaptive";
import styled from "styled-components";
import { Div } from "./Div";
import { ReactComponent as SearchIcon} from "../icons/search.svg";
import { ReactComponent as CleanIcon} from "../icons/close.svg";
import { FilterArticles } from "../functions/FilterArticles";
import { articles, IArticle } from "../dataForArticles";
import { useState } from "react";


type LineSearchProps = {
    setArticlesShowed: (articles: IArticle[]) => void;
  };

// поисковая строка в большом окне
export const LineSearch = ({setArticlesShowed}: LineSearchProps) => {
    const [inputText, setInputText] = useState("");

    return (
        <Line isEmpty={inputText==""}>
            <input type='text' placeholder="Введите запрос" className="searchInput" value={inputText} 
            onChange={(e) => {
                setInputText(e.target.value);
                setArticlesShowed(FilterArticles(e.target.value));
            }}/>

            <div>
                <button className="button cleanButton" onClick={() => {
                    setInputText("");
                    setArticlesShowed(articles);
                }} >
                    <div className="imgClean"><CleanIcon/></div>
                </button>

                <button className="button" onClick={
                    () => {setArticlesShowed(FilterArticles(inputText))}
                }>
                    <div className="imgSearch"><SearchIcon/></div>
                </button>
            </div>
        </Line>
    )
}

interface LineProps {
    isEmpty: boolean;
}

const Line = styled(Div)<LineProps>`
    width: ${adpt(709)}px;
    border-radius: ${adpt(13)}px;
    border: none;
    background: linear-gradient(150deg, rgba(91, 112, 149, 0.29) 30%, rgba(139, 161, 200, 0.29) 97%, rgba(91, 112, 149, 0.29));
    padding: ${adpt(15)}px;
    color: '#000000';
    margin-bottom: ${adpt(35)}px;
    justify-content: space-between;
    
    .searchInput {
        background: none;
        border: none;
        outline: none;
        font: ${adpt(19)}px 'Montserrat-Medium';
        width: ${adpt(500)}px;
    }
    
    .button {
        background: none;
        border: none;
        padding-left: ${adpt(20)}px;
        height: ${adpt(30)}px;
        .imgSearch{
            height: ${adpt(18)}px;
            width: ${adpt(18)}px;
            /* задать размеры */
            svg {
                width: 100%;
                height: 100%;
            }        
        }
    }

    .cleanButton {
        /* border-right: ${adpt(3)}px solid #707070; */
        /* border-radius: ${adpt(3)}px; */
        padding-right: ${adpt(20)}px;
        display: ${p => p.isEmpty? 'none' : 'inline-block'};
        position: relative;
        &::before {
            content:"";
            position: absolute;
            top: 0;
            right: -2px;
            background-color: #707070;
            width: 2px;
            height: ${adpt(27)}px;
            border-radius: 6px;

        }
        
        .imgClean{
            height: ${adpt(16)}px;
            width: ${adpt(16)}px;
            /* задать размеры */
            svg {
                width: 100%;
                height: 100%;
            }        
        }
    }

`