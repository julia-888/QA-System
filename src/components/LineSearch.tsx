import { adpt } from "../adaptive";
import styled from "styled-components";
import { Div } from "./Div";
import { ReactComponent as SearchIcon} from "../icons/search.svg";
import { ReactComponent as CleanIcon} from "../icons/close.svg";
import { FilterArticles } from "../functions/FilterArticles";
import { articles, IArticle } from "../dataForArticles";
import { useEffect, useState } from "react";


type LineSearchProps = {
    setArticlesShowed: (articles: IArticle[]) => void;
    searchLineText: string;
    setSearchLineText: (text: string) => void;
  };

// поисковая строка в большом окне
export const LineSearch = ({setArticlesShowed, searchLineText, setSearchLineText}: LineSearchProps) => {
    // const [inputText, setInputText] = useState("");

    useEffect (() => {
        setArticlesShowed(FilterArticles(searchLineText));
    }, [searchLineText] )

    return (
        <Line isEmpty={searchLineText==""}>
            <input type='text' placeholder="Введите запрос" className="searchInput" value={searchLineText} 
            onChange={(e) => {
                setSearchLineText(e.target.value);
            }}/>

            <div>
                <button className="button cleanButton" onClick={() => {
                    setSearchLineText("");
                    setArticlesShowed(articles);
                }} >
                    <div className="imgClean"><CleanIcon/></div>
                </button>

                <button className="button" onClick={
                    () => {setArticlesShowed(FilterArticles(searchLineText))}
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
    width: ${adpt(679)}px;
    border-radius: ${adpt(13)}px;
    border: none;
    background: linear-gradient(150deg, rgba(91, 112, 149, 0.29) 30%, rgba(139, 161, 200, 0.29) 97%, rgba(91, 112, 149, 0.29));
    padding: ${adpt(10)}px ${adpt(15)}px;
    color: '#000000';
    margin: 0 0 ${adpt(30)}px 0;
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
        padding-right: ${adpt(20)}px;
        display: ${p => p.isEmpty? 'none' : 'inline-block'};
        position: relative;
        &::before {
            content:"";
            position: absolute;
            top: 0;
            right: -2px;
            background-color: #707070;
            width: ${adpt(2)}px;
            height: ${adpt(27)}px;
            border-radius: ${adpt(6)}px;

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