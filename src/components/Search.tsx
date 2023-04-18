import styled from "styled-components";
import { useRef, useEffect } from 'react';
import { adpt } from "../adaptive";
import { articles, IArticle } from "../dataForArticles";
import { useState } from "react";
import { ReactComponent as SearchIcon} from "../icons/search.svg";
import { ReactComponent as OpenIcon} from "../icons/open.svg";
import { ReactComponent as CloseIcon} from "../icons/close.svg";
import { Div } from "./Div";
import { LineSearch } from "./LineSearch";
import { keyWordsList } from "../keyWordsList";
import { ScrolledDiv } from "./ScrolledDiv";
import { FilterArticlesByKeys } from "../functions/FilterArticlesByKeys";
import { FilterArticles } from '../functions/FilterArticles'
import { KeyWord } from "./KeyWord"
import { Tag } from "./Tag";

type SearchProps = {
    extendScreen: (big: boolean) => void;
    openAndCloseArticle: (i: number, word?: string, fromTag?: boolean, fromArticle?: number) => void;
    big: boolean;
    clickedKeyWords: string[];
    modifyclickedKeyWords: (keyWord: string, clicked: boolean) => void;
    articlesShowed: IArticle[];
    setArticlesShowed: (articles: IArticle[]) => void;
    clickedTag: [string, number];
    searchLineText: string;
    setSearchLineText: (text: string) => void;
    setClickedTag: (clickedTag: [string, number]) => void;
  };

export default function Search( {extendScreen, openAndCloseArticle, big, modifyclickedKeyWords, clickedKeyWords, articlesShowed, setArticlesShowed, clickedTag, searchLineText, setSearchLineText, setClickedTag}: SearchProps ) {
    // Состояние кнопки-открывателя списка ключевых слов
    const [clicked, setClicked] = useState(false);

    // Ссылка на элемент
    const targetRef = useRef<any>(null);

    return (
        <SearchDiv big={big}>
            {
                // Эта часть кода относится только к маленькому окну
                !big && (clicked ? 
                (
                <KeyWordsDiv>
                    <KeyDivButton>
                        <div>Ключевые слова</div> 
                        <div className="imgClose" onClick={(e) => setClicked(false)}><CloseIcon/></div>
                    </KeyDivButton>
                    
                     {/* Взятие и отображение ключевых слов из массива с учётом их нажатости */}
                     <KeyWordsWrapDiv>
                        { keyWordsList.map((keyWord) => (
                            <KeyWord word = {keyWord}
                            modifyclickedKeyWords={modifyclickedKeyWords} 
                            clicked={clickedKeyWords.includes(keyWord)}
                            big={false} />
                        ))}
                    </KeyWordsWrapDiv>
                </KeyWordsDiv>
                ) : (
                <SearchButton onClick={(e) => {
                    // Автоскролл до элемента
                    targetRef.current && targetRef.current.scrollIntoView({block: "center", behavior: "smooth"});
                    setClicked(true);
                    }
                }> Искать по словам
                    <div className="imgSearch"><SearchIcon/></div>
                </SearchButton>
                ))
            }

            {/* Эта часть кода относится только к большому окну */}
            {big && 
                // Отображение в большом окне поисковой строки или выбранных ключевых слов
                ( clickedKeyWords.length==0 || clickedTag[0] !== "" ? (
                        clickedTag[0] == "" ?
                        <LineSearch setArticlesShowed={setArticlesShowed} searchLineText={searchLineText} setSearchLineText={setSearchLineText} />
                        :
                        <ClickedDiv>
                            <Tag word={clickedTag[0]} clicked={true} articleNumber={clickedTag[1]} openAndCloseArticle={openAndCloseArticle} setClickedTag={setClickedTag} />
                        </ClickedDiv>
                    ) : (
                        <ClickedDiv>
                            { keyWordsList.map((keyWord) => (
                                clickedKeyWords.includes(keyWord) ? 
                            (<KeyWord word = {keyWord}
                                modifyclickedKeyWords={modifyclickedKeyWords} 
                                clicked={clickedKeyWords.includes(keyWord)}
                                big={true} />) : (<></>) 
                            ))}
                        </ClickedDiv>
                    )
            )}


            {/* Добавляем ссылку */}
            <SearchDivArticles ref={targetRef}> 
            {/* Отображение надписи, если окно большое, или кнопки "Показать все", если окно маленькое */}
            {       articlesShowed.length == 0 && big ? (
                        <SearchDivArticles>
                            <ResultsNotFound>По вашему запросу ничего не найдено</ResultsNotFound>
                            <AlsoFinds>
                                <div className="alsoAsk">Также задают:</div>
                                {
                                    articles.slice(0, 6).map(article => (
                                        <ArticleButton big={big} similar={true}
                                            onClick={() => {
                                                openAndCloseArticle(articles.indexOf(article));
                                            }}>
                                            <div className="articleTitle">{article.title}</div><div className="imgOpen"><OpenIcon/></div>
                                        </ArticleButton>))
                                }
                            </AlsoFinds>
                        </SearchDivArticles>
                    ) : (
                    articlesShowed.map(article => (
                        <ArticleButton big={big}
                            onClick={() => {
                                openAndCloseArticle(articles.indexOf(article));
                            }}>
                            <div className="articleTitle">{article.title}</div><div className="imgOpen"><OpenIcon/></div>
                        </ArticleButton>
                    ))
            )}
            {
                !big && (
                    <ButtonLookAll big={big} onClick={() => { /* При нажатии на "Показать все" экран расширяется */
                    extendScreen(true);
                }}> Показать все </ButtonLookAll>
                )                
            }
            
            </SearchDivArticles>          
        </SearchDiv>
    );    
}

interface Props {
    big: boolean,
    similar?: boolean,
    fromArticle? : boolean,
}


// Блок-родитель для поиска
const SearchDiv = styled.div<Props>`
    width: ${p => p.big ? adpt(380) : adpt(385) }px;
    margin: ${p => p.big ? 
        `${adpt(0)}px ${adpt(0)}px ${adpt(15)}px ${adpt(59)}px` :
        `${adpt(30)}px ${adpt(9)}px ${adpt(15)}px ${adpt(15)}px` };
    border-radius: ${adpt(13)}px;
    ${props => !props.big && `box-shadow: 0px ${adpt(3)}px ${adpt(6)}px rgba(0, 0, 0, 0.16)`};
    padding: ${p => p.big? adpt(10) : adpt(15)}px 0 0 0;
    ${p => p.big && 
    `max-height: ${adpt(630)}px;`
    };
    user-select: none;
`

// Кнопка, открывающая блок с ключевыми словами
const SearchButton = styled.button`
    display: flex;
    justify-content: space-between;
    width: ${adpt(369)}px;
    background-color: rgba(118, 142, 183, 0.3);
    border-radius: ${adpt(13)}px;
    border: 0;
    margin: 0 ${adpt(8)}px ${adpt(30)}px ${adpt(8)}px;
    padding: ${adpt(15)}px;
    font: ${adpt(19)}px 'Montserrat-Medium';
    cursor: pointer;
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
    width: ${adpt(362)}px;
    padding-left: ${adpt(7)}px; 
    border-radius: ${adpt(13)}px;
    flex-direction: column;
    margin-bottom: ${adpt(30)}px;
    margin: 0 ${adpt(8)}px ${adpt(34)}px ${adpt(8)}px;
`

// Блок с ключевыми словами
const KeyWordsWrapDiv = styled(ScrolledDiv)`
    display: flex;
    flex-wrap: wrap;
    max-height: ${adpt(250)}px;
`

// Кнопка, закрывающая блок с ключевыми словами
const KeyDivButton = styled.button`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    background-color: #E9ECEE;
    border-radius: ${adpt(13)}px;
    width: ${adpt(362)}px;
    border: 0;
    padding: ${adpt(14)}px ${adpt(19)}px ${adpt(14)}px ${adpt(4)}px;
    font: ${adpt(19)}px 'Montserrat-Medium';
    .imgClose{
        cursor: pointer;
        height: ${adpt(13.5)}px;
        width: ${adpt(13.5)}px;
        /* задать размеры */
        svg {
            width: 100%;
            height: 100%;
        }        
    }
`

// Кнопка-переход на статью
export const ArticleButton = styled.button<Props>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: ${props => props.big ? (props.similar ? adpt(650) : adpt(639)) : adpt(334)}px;
    font: ${adpt(18)}px 'Montserrat-Regular';
    line-height: 1.5;
    background: none;
    text-align: start;
    border: none;
    margin: 0 ${adpt(28)}px 0 ${p => p.similar ? adpt(0) : p.big ? adpt(15) : adpt(25)}px;
    padding-bottom: ${adpt(15)}px;
    cursor: pointer;
    user-select: none;
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
        width: ${props => props.big ? adpt(528) : (props => props.fromArticle? adpt(357) : adpt(276)) }px;
    }
`

// Кнопка "Показать все"
const ButtonLookAll = styled(ArticleButton)<Props>`
    color: rgba(60, 60, 60, 0.9);
    justify-content: center;
    padding-bottom: ${adpt(20)}px;
`

// Блок на котором отображаются статьи
const SearchDivArticles = styled.div`
    
`

const ClickedDiv = styled(Div)`
    margin-bottom: ${adpt(23)}px;
    margin-left: ${adpt(0)}px;
    flex-wrap: wrap;
    width: ${adpt(730)}px;
`

const ResultsNotFound = styled.div`
    margin-left: ${adpt(171)}px;
    width: ${adpt(380)}px;
    font: ${adpt(18)}px 'Montserrat-Regular';
`

const AlsoFinds = styled.div`
    margin: ${adpt(70)}px 0 ${adpt(35)}px 0;
    font-size: ${adpt(22)}px;
    font-family: 'Montserrat-Bold';
    line-height: ${adpt(25)}px;

    .alsoAsk {
        margin-bottom: ${adpt(35)}px;
    }
`