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
  };

export default function Search( {extendScreen, openAndCloseArticle, big, modifyclickedKeyWords, clickedKeyWords, articlesShowed, setArticlesShowed, clickedTag, searchLineText, setSearchLineText}: SearchProps ) {
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
                        clickedTag[0] == "" && clickedTag[1] == -1 ?
                        <LineSearch setArticlesShowed={setArticlesShowed} searchLineText={searchLineText} setSearchLineText={setSearchLineText} />
                        :
                        <ClickedDiv>
                            <Tag word={clickedTag[0]} clicked={true} articleNumber={clickedTag[1]} openAndCloseArticle={openAndCloseArticle} />
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
}


// Блок-родитель для поиска
const SearchDiv = styled.div<Props>`
    margin: ${p => p.big ? 
        `${adpt(10)}px ${adpt(0)}px ${adpt(15)}px ${adpt(20)}px` :
        `${adpt(30)}px ${adpt(9)}px ${adpt(15)}px ${adpt(3)}px` };
    border-radius: ${adpt(13)}px;
    ${props => !props.big && `box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16)`};
    padding: ${adpt(5)}px 0 ${adpt(5)}px 0;
    ${p => p.big && 
    `
     max-height: ${adpt(630)}px;`
    };
`

// Кнопка, открывающая блок с ключевыми словами
const SearchButton = styled.button`
    display: flex;
    justify-content: space-between;
    width: ${adpt(369)}px;
    background-color: rgba(118, 142, 183, 0.3);
    border-radius: ${adpt(13)}px;
    border: 0;
    margin: ${adpt(15)}px auto ${adpt(34)}px auto;
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
    width: ${adpt(369)}px;
    border-radius: ${adpt(13)}px;
    flex-direction: column;
    margin-bottom: ${adpt(30)}px;
    margin: ${adpt(15)}px auto ${adpt(34)}px auto;
    padding-right: ${adpt(7)}px;
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
    width: ${adpt(369)}px;
    border: 0;
    padding: ${adpt(15)}px;
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
    width: ${props => props.big ? (props.similar ? adpt(680) : adpt(728)) : adpt(350)}px;
    font: ${adpt(18)}px 'Montserrat-Regular';
    line-height: 1.5;
    background: none;
    text-align: start;
    border: none;
    margin: 0 ${adpt(20)}px ${adpt(25)}px ${p => p.similar ? adpt(0) : adpt(25)}px;
    cursor: pointer;
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
        width: ${props => props.big ? adpt(528) : adpt(300) }px;
    }
`

// Кнопка "Показать все"
const ButtonLookAll = styled(ArticleButton)<Props>`
    color: rgba(60, 60, 60, 0.9);
    justify-content: center;
    
`

// Блок на котором отображаются статьи
const SearchDivArticles = styled.div`
    
`

const ClickedDiv = styled(Div)`
    margin-bottom: ${adpt(30)}px;
    flex-wrap: wrap;
    width: ${adpt(730)}px;
`

const ResultsNotFound = styled.div`
    font: ${adpt(18)}px 'Montserrat-Regular';
    line-height: ${adpt(25)}px;
    text-align: center;
`

const AlsoFinds = styled.div`
    margin: ${adpt(70)}px 0 ${adpt(35)}px ${adpt(35)}px;
    font-size: ${adpt(22)}px;
    font-family: 'Montserrat-Bold';
    line-height: ${adpt(25)}px;

    .alsoAsk {
        margin: ${adpt(70)}px 0 ${adpt(35)}px 3px;
    }
`