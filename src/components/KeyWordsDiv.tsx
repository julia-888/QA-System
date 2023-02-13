import styled from "styled-components";
import {HtmlHTMLAttributes, useRef} from 'react';
import { adpt } from "../adaptive";
import { articles } from "../data";
import { useState } from "react";
import { ReactComponent as SearchIcon} from "../img/search.svg";
import { ReactComponent as OpenIcon} from "../img/open.svg";
import { ReactComponent as PlusIcon} from "../img/plus.svg";
import { ReactComponent as SelectedIcon} from "./../img/selected.svg";

const SearchDiv = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: ${adpt(385)}px;
    padding-top: ${adpt(15)}px;
    border-radius: ${adpt(13)}px;
    box-shadow: ${adpt(0)}px ${adpt(3)}px ${adpt(6)}px lightgrey;
`

const SearchDivButton = styled.button`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;

    align-self: center;
    width: ${adpt(369)}px;
    background-color: rgba(118, 142, 183, 0.3);
    border-radius: ${adpt(13)}px;
    border: 0;
    margin-bottom: ${adpt(34)}px;
    padding: ${adpt(15)}px;
    font-size: ${adpt(19)}px;
    font-family: 'Montserrat';
    font-weight: Medium;
`

const SearchDivButtonArticle = styled.button`
    display: flex;
    justify-content: space-between;
    width: ${adpt(350)}px;

    font-size: ${adpt(18)}px;
    font-weight: normal;
    background: none;
    font-family: 'Montserrat';
    text-align: start;
    border: none;
    margin: 0 ${adpt(28)}px ${adpt(25)}px ${adpt(25)}px;
    padding: 0;
`

const SearchDivButtonLookAll = styled.button`
    font-size: ${adpt(18)}px;
    font-weight: normal;
    background: none;
    font-family: 'Montserrat';
    color: rgba(60, 60, 60, 0.9);
    text-align: start;
    border: none;
    margin: 0 ${adpt(28)}px ${adpt(25)}px ${adpt(25)}px;
    padding: 0;
`

const Wrap = styled.div`
    height: ${adpt(300)}px;
`


export default function KeyWordsDiv() {
    const [clicked, setClicked] = useState(false);


    // Ссылка на элемент
    const targetRef = useRef<any>(null)


    return (
        <SearchDiv>
            <SearchDivButton onClick={(e) => {
                // Автоскролл до элемента
                targetRef.current && targetRef.current.scrollIntoView({block: "center", behavior: "smooth"});
                
                setClicked(!clicked)
                }
            }>
                Искать по словам
                <SearchIcon/>
            </SearchDivButton>
            
            {/* Добавляем ссылку */}
            <Wrap ref={targetRef}> 
            {clicked && articles.map(article => (
                <SearchDivButtonArticle><div>{article.title}</div><div><OpenIcon/></div></SearchDivButtonArticle>
                ))}
            </Wrap>
            {clicked && 
                (<SearchDivButtonLookAll>Показать все</SearchDivButtonLookAll>)
            }
            
        </SearchDiv>
    );

    
}
