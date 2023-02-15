import {useState} from 'react'
import { keyWordsList } from "../keyWordsList";
import styled from 'styled-components'
import { adpt } from "../adaptive";
import { Interface } from "readline";
import { ReactComponent as PlusIcon} from "../img/plus.svg";
import { ReactComponent as SelectedIcon} from "../img/selected.svg";

interface Props {
    color: string;
}

const KeyWordButton = styled.button<Props>`
    border-radius: ${adpt(22)}px;
    border: none;
    padding: ${adpt(6)}px ${adpt(11)}px;
    background-color: ${p => p.color};
    color: #FFFFFF;
    font-family: 'Montserrat';
    font-size: ${adpt(18)}px;
    font-style: normal;
`

export default function KeyWord({word}:{word: string}) {
    const [ keyWordClicked, setKeyWordClicked ] = useState(false);
    const [ backgroundColor, setBackgroundColor ] = useState('#768EB7')

    return (
            <KeyWordButton color={backgroundColor} onClick={(e) => {
                setKeyWordClicked(!keyWordClicked);
                backgroundColor == '#768EB7' ? setBackgroundColor('#2D3F61') : setBackgroundColor('#768EB7')
                }}>
                {word}
                {keyWordClicked ? (<SelectedIcon/>) : (<PlusIcon/>)}
            </KeyWordButton>
    );
}