import styled from "styled-components";
import { useRef, useEffect } from 'react';
import { adpt } from "../adaptive";
import { articles } from "../data";
import { useState } from "react";
import { ReactComponent as SearchIcon} from "../img/search.svg";
import { ReactComponent as OpenIcon} from "../img/open.svg";
import { ReactComponent as CloseIcon} from "../img/close.svg";
import { Div } from "./Div";
import { keyWordsList } from "../keyWordsList";
import { ScrolledDiv } from "./ScrolledDiv";
import { FilterArticles } from "../functions/FilterArticles";
import { KeyWord } from "./KeyWord"

type ScreenProps = {
    extendScreen: (big: boolean) => void;
  };

export default function Search( {extendScreen}: ScreenProps ) {
    // Нажатые ключевые слова
    const [clickedKeyWordIDs, setClickedKeyWordIDs] = useState<number[]>([]);
    
    // Функция, изменяющая список нажатых слов
    const modifyClickedKeyWordIDs = (keyWordID: number, clicked: boolean) => {
        clicked ?
        setClickedKeyWordIDs([...clickedKeyWordIDs, keyWordID])
        :
        setClickedKeyWordIDs([
            ...clickedKeyWordIDs.slice(0, clickedKeyWordIDs.indexOf(keyWordID)),
            ...clickedKeyWordIDs.slice(clickedKeyWordIDs.indexOf(keyWordID) + 1, clickedKeyWordIDs.length)
        ]);
    }

    // Состояние кнопки-активатора поиска
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        if (!clicked){
            setClickedKeyWordIDs([]);
        }
    }, [clicked])

    return (
        <SearchDiv>
            <SearchDivArticles> 
            {/* Отображение первых четырёх заголовков из списка статей */}
            {   FilterArticles(articles, clickedKeyWordIDs).slice(0, 4).map(article => (
                <ArticleButton><div className="articleTitle">{article.title}</div><div className="imgOpen"><OpenIcon/></div></ArticleButton>
                ))}
            
            </SearchDivArticles>          
        </SearchDiv>
    );    
}

// Блок-родитель для поиска
const SearchDiv = styled(Div)`
    box-sizing: border-box;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: ${adpt(385)}px;
    padding-top: ${adpt(15)}px;
    margin: ${adpt(15)}px 0;
`
 
// Кнопка-переход на статью
const ArticleButton = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: ${adpt(728)}px;
    font-size: ${adpt(18)}px;
    font-weight: normal;
    background: none;
    font-family: 'Montserrat';
    text-align: start;
    border: none;
    margin: 0 ${adpt(28)}px ${adpt(25)}px ${adpt(25)}px;
    padding: 0;
    .imgOpen{
        height: ${adpt(19)}px;
        width: ${adpt(11)}px;
        margin-left: ${adpt(10)}px;
        /* задать размеры */
        svg {
            width: 100%;
            height: 100%;
        }        
    };
    
    .articleTitle{
        width: ${adpt(528)}px;
    }
`


// Блок на котором отображаются статьи
const SearchDivArticles = styled(Div)`
    flex-direction: column;
`