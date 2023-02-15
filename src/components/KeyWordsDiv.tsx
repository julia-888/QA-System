import { keyWordsList } from "../keyWordsList";
import styled from 'styled-components'
import { adpt } from "../adaptive";
import { Interface } from "readline";
import { ReactComponent as PlusIcon} from "../img/plus.svg";
import { ReactComponent as SelectedIcon} from "../img/selected.svg";
import { ReactComponent as CloseIcon} from "../img/close.svg";

interface Props {
    clicked?: boolean;
}

const KeyDiv = styled.div`
    background-color: #E9ECEE;
`
const KeyDivButton = styled.button`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;

    background-color: none;
    align-self: center;
    width: ${adpt(369)}px;
    border: 0;
    margin-bottom: ${adpt(34)}px;
    padding: ${adpt(15)}px;
    font-size: ${adpt(19)}px;
    font-family: 'Montserrat';
    font-weight: Medium;
`

const KeyWord = styled.button<Props>`
    border-radius: ${adpt(22)}px;
    border: none;
    padding: ${adpt(6)}px ${adpt(11)}px;
    background-color: ${p => p.clicked ? '#2D3F61':'#768EB7'};
    color: #FFFFFF;
    font-family: 'Montserrat';
    font-size: ${adpt(18)}px;
    font-style: Regular;
`

export default function KeyWordsDiv() {
    return (
        <KeyDiv>
            <KeyDivButton><div>Ключевые слова</div> <div><CloseIcon/></div></KeyDivButton>
            <KeyWord clicked>Способы <SelectedIcon/></KeyWord>
            <KeyWord >Способы <PlusIcon/></KeyWord>
            <KeyWord >Способы <PlusIcon/></KeyWord>
            <KeyWord >Способы <PlusIcon/></KeyWord>

        </KeyDiv>
    );
}