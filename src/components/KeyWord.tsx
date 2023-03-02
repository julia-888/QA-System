import {useEffect, useState} from 'react'
import styled from 'styled-components'
import { adpt } from "../adaptive";
import { ReactComponent as PlusIcon} from "../img/plus.svg";
import { ReactComponent as SelectedIcon} from "../img/selected.svg";
import { ReactComponent as CloseTagIcon} from "../img/closeTag.svg";
import { ScrolledDiv } from "./ScrolledDiv"
import { keyWordsList } from "../keyWordsList"
import { isTemplateSpan } from 'typescript';

// Тип для передачи в функцию
type KeyWordsProps = {
    modifyClickedKeyWordIDs: (keyWordID: number, clicked: boolean) => void;
    word: string;
    id: number;
    clicked: boolean,
    big: boolean
};

export  function KeyWord({modifyClickedKeyWordIDs, word, id, clicked, big}: KeyWordsProps) {
  //Предотвращает срабатывание useEffect при первой отрисовке
  const [ firstDrawing, setFirstDrawing ] = useState(true);

  // Активировано ли ключевое слово
  const [ keyWordClicked, setKeyWordClicked ] = useState(clicked);

  // Цвет кнопки-ключевого слова
  const [ backgroundColor, setBackgroundColor ] = useState(clicked ? '#2D3F61' : '#768EB7')

  useEffect(() => {
      firstDrawing ? setFirstDrawing(false) :
      modifyClickedKeyWordIDs(id, keyWordClicked);
  }, [keyWordClicked])
  

    return (
        <KeyWordButton color={backgroundColor} margin={big? adpt(15) : adpt(10)} iconDims={big? adpt(10) : adpt(13)}
            onClick={(e) => {
                setKeyWordClicked(!keyWordClicked);
                backgroundColor == '#768EB7' ? setBackgroundColor('#2D3F61') : setBackgroundColor('#768EB7');
            }}>
            <WordDiv>{word}</WordDiv>
            <div className='image'>{keyWordClicked ? (big? (<CloseTagIcon/>) :(<SelectedIcon/>)) : (<PlusIcon/>)}</div>
        </KeyWordButton>
    );
}


// Интерфейс со свойством цвета кнопки-ключевого слова
interface Props {
    color: string;
    margin: number;
    iconDims: number;
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
    margin: 0 0 ${p => p.margin}px ${p => p.margin}px;
    cursor: pointer;
    .image {

        height: ${p => p.iconDims}px;
        width: ${p => p.iconDims}px;
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
