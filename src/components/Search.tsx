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
    big: boolean;
  };

export default function Search( {extendScreen, big}: ScreenProps ) {
    // Нажатые ключевые слова
    const [clickedKeyWordIDs, setClickedKeyWordIDs] = useState<number[]>([1]);
    
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

    // Состояние кнопки-открывателя списка ключевых слов
    const [clicked, setClicked] = useState(false);

    // Ссылка на элемент
    const targetRef = useRef<any>(null)

    return (
        <SearchDiv  shadow={big?false:true} 
                    justify={big?'space-between':'center'}
                    width={big?false:true}
                    paddingTop={big?false:true}>
            {
                // Эта часть кода относится только к маленькому экрану
                !big && (clicked ? 
                (
                <KeyWordsDiv>
                    <KeyDivButton onClick={(e) => setClicked(false)}>
                        <div>Ключевые слова</div> 
                        <div className="imgClose"><CloseIcon/></div>
                    </KeyDivButton>
                    
                     {/* Взятие и отображение ключевых слов из массива с учётом их нажатости */}
                     <KeyWordsWrapDiv>
                        { keyWordsList.map((keyWord) => (
                            <KeyWord word = {keyWord.word}
                            modifyClickedKeyWordIDs={modifyClickedKeyWordIDs} 
                            id={keyWord.id}
                            clicked={clickedKeyWordIDs.includes(keyWord.id)}
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

            {big && 
                // Отображение в большом окне поисковой строки или выбранных ключевых слов
                ( clickedKeyWordIDs.length==0 ? (
                        <LineSearch type='text' placeholder="Введите запрос">

                        </LineSearch>
                    ) : (
                        <ClickedDiv>
                            { keyWordsList.map((keyWord) => (
                                clickedKeyWordIDs.includes(keyWord.id) ? 
                            (<KeyWord word = {keyWord.word}
                                modifyClickedKeyWordIDs={modifyClickedKeyWordIDs} 
                                id={keyWord.id}
                                clicked={clickedKeyWordIDs.includes(keyWord.id)}
                                big={true} />) : (<></>) 
                            ))}
                        </ClickedDiv>
                    )
            )}


            {/* Добавляем ссылку */}
            <SearchDivArticles ref={targetRef}> 
            {/* Отображение всех статей, если окно большое, или первых четырёх заголовков из списка статей, если окно маленькое */}
            {   (big ? FilterArticles(articles, clickedKeyWordIDs) : FilterArticles(articles, clickedKeyWordIDs).slice(0, 4)).map(article => (
                <ArticleButton articleButtonWidth={big?728:350} articleHeaderWidth={big?528:277}>
                    <div className="articleTitle">{article.title}</div><div className="imgOpen"><OpenIcon/></div>
                </ArticleButton>
                ))}
            {
                !big && (
                    <ButtonLookAll articleButtonWidth={350} articleHeaderWidth={500} onClick={() => { /* При нажатии на "Показать все" экран расширяется */
                    extendScreen(true);
                }}> 
                    Показать все </ButtonLookAll>
                )                
            }
            
            </SearchDivArticles>          
        </SearchDiv>
    );    
}

interface SearchDivProps {
    shadow: boolean,
    justify: string,
    width: boolean,
    paddingTop: boolean,
}

interface ArticleButtonProps {
    articleButtonWidth: number,
    articleHeaderWidth: number,
}

// Блок-родитель для поиска
const SearchDiv = styled(Div)<SearchDivProps>`
    box-sizing: border-box;
    flex-direction: column;
    justify-content: ${props => props.justify};
    align-items: center;
    width: ${props => props.width && `${adpt(385)}px`};
    padding-top: ${props => props.paddingTop && adpt(15)}px;
    margin: ${adpt(15)}px 0;
    border-radius: ${adpt(13)}px;
    box-shadow: ${props => props.shadow && `${adpt(0)}px ${adpt(3)}px ${adpt(6)}px lightgrey`};
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

// Блок с ключевыми словами
const KeyWordsWrapDiv = styled(ScrolledDiv)`
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

// Кнопка-переход на статью
const ArticleButton = styled.button<ArticleButtonProps>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: ${props => adpt(props.articleButtonWidth)}px;
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
        width: ${props => adpt(props.articleHeaderWidth)}px;
    }
`

// Кнопка "Показать все"
const ButtonLookAll = styled(ArticleButton)<ArticleButtonProps>`
    color: rgba(60, 60, 60, 0.9);
    justify-content: center;
`

// Блок на котором отображаются статьи
const SearchDivArticles = styled(Div)`
    flex-direction: column;
`

const LineSearch = styled.input`
    width: ${adpt(709)}px;
    border-radius: ${adpt(13)}px;
    border: none;
    outline: none;
    background: linear-gradient(150deg, rgba(91, 112, 149, 0.29) 30%, rgba(139, 161, 200, 0.29) 97%, rgba(91, 112, 149, 0.29));
    padding: ${adpt(15)}px;
    font-family: Montserrat;
    font-weight: 600;
    font-size: ${adpt(19)}px;
    color: '#000000';
    margin-bottom: ${adpt(35)}px;
    
`
const ClickedDiv = styled(Div)`
    margin-bottom: ${adpt(30)}px;
    flex-wrap: wrap;
    /* justify-content: flex-start; */
    width: ${adpt(730)}px;
`