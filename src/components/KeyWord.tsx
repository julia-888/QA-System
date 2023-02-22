import {useState} from 'react'
import styled from 'styled-components'
import { adpt } from "../adaptive";
import { ReactComponent as PlusIcon} from "../img/plus.svg";
import { ReactComponent as SelectedIcon} from "../img/selected.svg";
import { ScrolledDiv } from "./ScrolledDiv"
import { keyWordsList } from "../keyWordsList"
import { isTemplateSpan } from 'typescript';

// Тип для передачи в функцию
type KeyWordsProps = {
    setList: (keyWord: string, clicked: boolean) => void;
    word: string;
  };

export  function KeyWord({setList, word}: KeyWordsProps) {
    // Активировано ли ключевое слово
    const [ keyWordClicked, setKeyWordClicked ] = useState(false);

    // Цвет кнопки-ключевого слова
    const [ backgroundColor, setBackgroundColor ] = useState('#768EB7')

    return (
        <KeyWordButton color={backgroundColor}
            onClick={(e) => {
                setList(word, !keyWordClicked);
                setKeyWordClicked(keyWordClicked => !keyWordClicked);
                backgroundColor == '#768EB7' ? setBackgroundColor('#2D3F61') : setBackgroundColor('#768EB7');
            }}>
            <WordDiv>{word}</WordDiv>
            <div className='image'>{keyWordClicked ? (<SelectedIcon/>) : (<PlusIcon/>)}</div>
        </KeyWordButton>
    );
}


// Интерфейс со свойством цвета кнопки-ключевого слова
interface Props {
    color: string;
}

// Стилевой компонент кнопки-ключевого слова
const KeyWordButton = styled.button<Props>`
    display: flex;
    justify-content: space-between;
    border-radius: ${adpt(22)}px;
    border: none;
    padding: ${adpt(6)}px ${adpt(11)}px;
    background-color: ${p => p.color};
    color: #FFFFFF;
    font-family: 'Montserrat';
    font-size: ${adpt(18)}px;
    font-style: normal;
    margin: 0 0 ${adpt(12)}px ${adpt(10)}px;
    .image{
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
