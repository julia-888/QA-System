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
};

export function Tag({articleNumber, clicked, word, openAndCloseArticle}: TagProps) {
  // Нажат ли тег
  const [ tagClicked, setTagClicked ] = useState(clicked);
  

    return (
        <TagButton clicked={tagClicked}
            onClick={(e) => {
                !tagClicked ? openAndCloseArticle(-1, word, true, articleNumber) : openAndCloseArticle(articleNumber, word, true, -1);
                setTagClicked(!tagClicked);
            }}>
            <WordDiv>{word}</WordDiv>
            <div className='image'>{tagClicked ? (<CloseTagIcon/>) :(<SelectedIcon/>)}</div>
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
    margin: 0 0 ${adpt(15)}px ${adpt(15)}px;
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
