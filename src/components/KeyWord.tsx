import {useEffect, useState} from 'react'
import styled from 'styled-components'
import { adpt } from "../adaptive";
import { ReactComponent as PlusIcon} from "../icons/plus.svg";
import { ReactComponent as SelectedIcon} from "../icons/selected.svg";
import { ReactComponent as CloseTagIcon} from "../icons/closeTag.svg";

// Тип для передачи в функцию
type KeyWordsProps = {
    modifyclickedKeyWords: (keyWord: string, clicked: boolean) => void;
    word: string;
    clicked: boolean;
    big: boolean;
    fromArticle?: boolean;
    articleNumber?: number;
    openAndCloseArticle: (article: number, fromKeyWord: boolean, word: string, previousArticle: number) => void;
    extendScreen: (big: boolean) => void;
};

export function KeyWord({modifyclickedKeyWords, word, clicked, big, fromArticle, articleNumber, openAndCloseArticle}: KeyWordsProps) {
  //Предотвращает срабатывание useEffect при первой отрисовке
  const [ firstDrawing, setFirstDrawing ] = useState(true);

  // Активировано ли ключевое слово
  const [ keyWordClicked, setKeyWordClicked ] = useState(clicked);

  //Автоматическое изменение списка ключевых слов при изменеии свойства "Ключевое слово нажато"
  useEffect(() => {
      firstDrawing ? setFirstDrawing(false) :
      modifyclickedKeyWords(word, keyWordClicked);
  }, [keyWordClicked])
  

    return (
        <KeyWordButton clicked={keyWordClicked} big={big}
            onClick={(e) => {
                fromArticle && articleNumber ? openAndCloseArticle(-1, true, word, articleNumber) : setKeyWordClicked(!keyWordClicked);
            }}>
            <WordDiv>{word}</WordDiv>
            <div className='image'>{keyWordClicked ? (big&&!fromArticle? (<CloseTagIcon/>) :(<SelectedIcon/>)) : (<PlusIcon/>)}</div>
        </KeyWordButton>
    )
}


// Интерфейс со свойством цвета кнопки-ключевого слова
interface Props {
    clicked: boolean;
    big: boolean;
}

// Стилевой компонент кнопки-ключевого слова
const KeyWordButton = styled.button<Props>`
    display: flex;
    justify-content: space-between;
    border-radius: ${adpt(22)}px;
    border: none;
    padding: ${adpt(6)}px ${adpt(11)}px;
    background-color: ${p => p.clicked ? '#2D3F61' : '#768EB7' };
    color: #FFFFFF;
    font: ${adpt(18)}px 'Montserrat-Regular';
    margin: 0 0 ${p => p.big ? adpt(15) : adpt(10)}px ${p => p.big ? adpt(15) : adpt(10)}px;
    cursor: pointer;
    .image {

        height: ${p => p.big? adpt(10) : adpt(13)}px;
        width: ${p => p.big? adpt(10) : adpt(13)}px;
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
