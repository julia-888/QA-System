import {useState} from 'react'
import styled from 'styled-components'
import { adpt } from "../adaptive";
import { ReactComponent as PlusIcon} from "../img/plus.svg";
import { ReactComponent as SelectedIcon} from "../img/selected.svg";

// Интерфейс со свойством цвета кнопки-ключевого слова
interface Props {
    color: string;
}

// Стилевой компонент кнопки-ключевого слова
const KeyWordButton = styled.button<Props>`
    border-radius: ${adpt(22)}px;
    border: none;
    padding: ${adpt(6)}px ${adpt(11)}px;
    background-color: ${p => p.color};
    color: #FFFFFF;
    font-family: 'Montserrat';
    font-size: ${adpt(18)}px;
    font-style: normal;
    margin: 0 0 ${adpt(12)}px ${adpt(10)}px;
`

// Обёртка текста ключевого слова (создана только ради пробела между словом и картинкой на кнопке)
const WordSpan = styled.span`
    margin-right: ${adpt(12)}px;
`

export default function KeyWord({word}:{word: string}) {
    // Активировано ли ключевое слово
    const [ keyWordClicked, setKeyWordClicked ] = useState(false);
    // Цвет кнопки-ключевого слова
    const [ backgroundColor, setBackgroundColor ] = useState('#768EB7')

    return (
        <KeyWordButton color={backgroundColor} onClick={(e) => {
            setKeyWordClicked(!keyWordClicked);
            backgroundColor == '#768EB7' ? setBackgroundColor('#2D3F61') : setBackgroundColor('#768EB7')
            }}>
            <WordSpan>{word}</WordSpan>
            <span>{keyWordClicked ? (<SelectedIcon/>) : (<PlusIcon/>)}</span>
        </KeyWordButton>
    );
}