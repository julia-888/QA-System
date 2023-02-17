import styled from "styled-components";
import { useRef } from 'react';
import { adpt } from "../adaptive";
import { articles } from "../data";
import { useState } from "react";
import { ReactComponent as SearchIcon} from "../img/search.svg";
import { ReactComponent as OpenIcon} from "../img/open.svg";
import { ReactComponent as CloseIcon} from "../img/close.svg";
import { Div } from "./Div";
import { keyWordsList } from "../keyWordsList";
import KeyWord from "./KeyWord";
import { ScrolledDiv } from "./ScrolledDiv";

export default function Search() {
    // Состояние кнопки-активатора поиска
    const [clicked, setClicked] = useState(false);

    // Ссылка на элемент
    const targetRef = useRef<any>(null)

    return (
        <SearchDiv>
            {/* если нажата, то отображается панель с ключевыми словами */}
            {clicked ? 
                (
                <KeyWordsDiv>
                    <KeyDivButton onClick={(e) => setClicked(false)}>
                        <div>Ключевые слова</div> 
                        <div className="imgClose"><CloseIcon/></div>
                    </KeyDivButton>

                    {/* Взятие и отображение ключевых слов из массива */}
                    <KeyWordsDivDiv>
                        { keyWordsList.map((keyWord) => (
                            <KeyWord word={keyWord.word}/>
                        ))}                    
                    </KeyWordsDivDiv>
                </KeyWordsDiv>
                ) : (
                <SearchButton onClick={(e) => {
                    // Автоскролл до элемента
                    targetRef.current && targetRef.current.scrollIntoView({block: "center", behavior: "smooth"});
                    setClicked(true);
                    }
                }>
                    Искать по словам
                    <div className="imgSearch"><SearchIcon/></div>
                </SearchButton>
                )
            }

            {/* Добавляем ссылку */}
            <SearchDivArticles ref={targetRef}> 
            {/* Отображение первых четырёх заголовков из списка статей */}
            {articles.slice(0, 4).map(article => (
                <ArticleButton><div className="articleTitle">{article.title}</div><div className="imgOpen"><OpenIcon/></div></ArticleButton>
                ))}
            <ButtonLookAll>Показать все</ButtonLookAll>
            </SearchDivArticles>          
        </SearchDiv>
    );    
}

// Блок-родитель для поиска
const SearchDiv = styled(Div)`
    box-sizing: border-box;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: ${adpt(385)}px;
    padding-top: ${adpt(15)}px;
    margin: ${adpt(15)}px 0;
    border-radius: ${adpt(13)}px;
    box-shadow: ${adpt(0)}px ${adpt(3)}px ${adpt(6)}px lightgrey;
`

// Кнопка, открывающая блок с ключевыми словами
const SearchButton = styled.button`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    width: ${adpt(369)}px;
    background-color: rgba(118, 142, 183, 0.3);
    border-radius: ${adpt(13)}px;
    border: 0;
    margin-bottom: ${adpt(34)}px;
    padding: ${adpt(15)}px;
    font-size: ${adpt(19)}px;
    font-family: 'Montserrat';
    font-weight: Medium;
    .imgSearch{
        height: ${adpt(18)}px;
        width: ${adpt(18)}px;
        /* задать размеры */
        svg {
            width: 100%;
            height: 100%;
        }        
    }
`

// Блок-контейнер для кнопки и блока с ключевыми словами
const KeyWordsDiv = styled(Div)`
    background-color: #E9ECEE;
    width: ${adpt(363)}px;
    border-radius: ${adpt(13)}px;
    flex-direction: column;
    margin-bottom: ${adpt(30)}px;
    padding-right: ${adpt(7)}px;
`

// Кнопка, закрывающая блок с ключевыми словами
const KeyDivButton = styled.button`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    background-color: #E9ECEE;
    border-radius: ${adpt(13)}px;
    width: ${adpt(369)}px;
    border: 0;
    padding: ${adpt(15)}px;
    font-size: ${adpt(19)}px;
    font-family: 'Montserrat';
    font-weight: Medium;
    .imgClose{
        height: ${adpt(13.5)}px;
        width: ${adpt(13.5)}px;
        /* задать размеры */
        svg {
            width: 100%;
            height: 100%;
        }        
    }
`

// Блок с ключевыми словами
const KeyWordsDivDiv = styled(ScrolledDiv)`
    flex-wrap: wrap;
    max-height: ${adpt(250)}px;
`

// Кнопка-переход на статью
const ArticleButton = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: ${adpt(350)}px;
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
        width: ${adpt(277)}px;
    }
`

// Кнопка "Показать все"
const ButtonLookAll = styled(ArticleButton)`
    color: rgba(60, 60, 60, 0.9);
    justify-content: center;
`

// Блок на котором отображаются статьи
const SearchDivArticles = styled(Div)`
    flex-direction: column;
`
