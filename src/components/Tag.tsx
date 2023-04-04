import {useEffect, useState} from 'react'
import styled from 'styled-components'
import { adpt } from "../adaptive";
import { ReactComponent as PlusIcon} from "../icons/plus.svg";
import { ReactComponent as SelectedIcon} from "../icons/selected.svg";
import { ReactComponent as CloseTagIcon} from "../icons/closeTag.svg";

// Тип для передачи в функцию
type TagProps = {
    word: string;
    clicked: boolean;
    articleNumber: number;
    openAndCloseArticle: (article: number, word: string, fromTag: boolean, fromArticle: number) => void;
    setClickedTag: (clickedTag: [string, number]) => void;
};

//Тег - ключевое слово внутри статьи, нажав на которое открывается поиск по нему
export function Tag({articleNumber, clicked, word, openAndCloseArticle, setClickedTag}: TagProps) {
    return (
        <TagButton clicked={clicked}
            onClick={(e) => {
                !clicked ? openAndCloseArticle(-1, word, true, articleNumber) : setClickedTag(["", articleNumber]);
            }}>
            <WordDiv>{word}</WordDiv>
            <div className='image'>{clicked ? (<CloseTagIcon/>) :(<SelectedIcon/>)}</div>
        </TagButton>
    )
}


// Интерфейс со свойством цвета кнопки-ключевого слова
interface Props {
    clicked: boolean;
}

// Стилевой компонент кнопки-тега
const TagButton = styled.button<Props>`
    display: flex;
    justify-content: space-between;
    border-radius: ${adpt(22)}px;
    border: none;
    padding: ${adpt(6)}px ${adpt(11)}px;
    background-color: ${p => p.clicked ? '#2D3F61' : '#2D3F61'};
    color: #FFFFFF;
    font: ${adpt(18)}px 'Montserrat-Regular';
    margin: 0 ${adpt(20)}px ${adpt(15)}px 0;
    margin-right: ${p => p.clicked && adpt(20)}px;
    cursor: pointer;
    .image {
        height: ${adpt(13)}px;
        width: ${adpt(13)}px;
        /* задать размеры */
        svg {
            width: 100%;
            height: 100%;
        }        
    }
`

// Обёртка текста ключевого слова (создана только ради пробела между словом и картинкой на кнопке)
const WordDiv = styled.div`
    margin-right: ${adpt(11)}px;
`
