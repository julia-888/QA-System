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

    // Ссылка на элемент
    const targetRef = useRef<any>(null)

    useEffect(() => {
        if (!clicked){
            setClickedKeyWordIDs([]);
        }
    }, [clicked])

    return (
        <SearchDiv>
            {/* если нажата, то отображается панель с ключевыми словами */}
            {/* {clicked ? 
                (
                <KeyWordsDiv>
                    <KeyDivButton onClick={(e) => setClicked(false)}>
                        <div>Ключевые слова</div> 
                        <div className="imgClose"><CloseIcon/></div>
                    </KeyDivButton>

                    <KeyWordsWrapDiv>
                        { keyWordsList.map((keyWord) => (
                            <KeyWord word = {keyWord.word}
                            modifyClickedKeyWordIDs={modifyClickedKeyWordIDs} 
                            id={keyWord.id} />
                        ))}
                    </KeyWordsWrapDiv>
                </KeyWordsDiv>
                ) : (
                <MiniSearchButton onClick={(e) => {
                    // Автоскролл до элемента
                    targetRef.current && targetRef.current.scrollIntoView({block: "center", behavior: "smooth"});
                    setClicked(true);
                    }
                }>
                    Искать по словам
                    <div className="imgMiniSearch"><SearchIcon/></div>
                </MiniSearchButton>
                ) */}

            {/* Добавляем ссылку */}
            <SearchDivArticles ref={targetRef}> 
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
    /* border-radius: ${adpt(13)}px; */
    /* box-shadow: ${adpt(0)}px ${adpt(3)}px ${adpt(6)}px lightgrey; */
`

// // Кнопка, открывающая блок с ключевыми словами
// const MiniSearchButton = styled.button`
//     box-sizing: border-box;
//     display: flex;
//     justify-content: space-between;
//     width: ${adpt(369)}px;
//     background-color: rgba(118, 142, 183, 0.3);
//     border-radius: ${adpt(13)}px;
//     border: 0;
//     margin-bottom: ${adpt(34)}px;
//     padding: ${adpt(15)}px;
//     font-size: ${adpt(19)}px;
//     font-family: 'Montserrat';
//     font-weight: Medium;
//     .imgMiniSearch{
//         height: ${adpt(18)}px;
//         width: ${adpt(18)}px;
//         /* задать размеры */
//         svg {
//             width: 100%;
//             height: 100%;
//         }        
//     }
// `

// // Блок-контейнер для кнопки и блока с ключевыми словами
// const KeyWordsDiv = styled(Div)`
//     background-color: #E9ECEE;
//     width: ${adpt(363)}px;
//     border-radius: ${adpt(13)}px;
//     flex-direction: column;
//     margin-bottom: ${adpt(30)}px;
//     padding-right: ${adpt(7)}px;
// `

// // Блок с ключевыми словами
// const KeyWordsWrapDiv = styled(ScrolledDiv)`
//     flex-wrap: wrap;
//     max-height: ${adpt(250)}px;
// `

// // Кнопка, закрывающая блок с ключевыми словами
// const KeyDivButton = styled.button`
//     box-sizing: border-box;
//     display: flex;
//     justify-content: space-between;
//     background-color: #E9ECEE;
//     border-radius: ${adpt(13)}px;
//     width: ${adpt(369)}px;
//     border: 0;
//     padding: ${adpt(15)}px;
//     font-size: ${adpt(19)}px;
//     font-family: 'Montserrat';
//     font-weight: Medium;
//     .imgClose{
//         height: ${adpt(13.5)}px;
//         width: ${adpt(13.5)}px;
//         /* задать размеры */
//         svg {
//             width: 100%;
//             height: 100%;
//         }        
//     }
// `

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