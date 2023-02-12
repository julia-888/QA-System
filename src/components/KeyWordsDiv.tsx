import styled from "styled-components";
import { adpt } from "../adaptive";

const SearchDiv = styled.div`
box-sizing: border-box;
display: flex;
justify-content: space-between;

align-self: center;
width: ${adpt(369)}px;
background-color: rgba(118, 142, 183, 0.3);
border-radius: ${adpt(13)}px;
padding: ${adpt(15)}px;
font-size: ${adpt(19)}px;
font-weight: Medium;
margin-top: ${adpt(20)}px;
`

const SearchDivButton = styled.button`
font-size: ${adpt(19)}px;
font-weight: Medium;
background: rgba(0,0,0,0);
font-family: 'Montserrat';
padding:0;
border: 0;
`

export default function KeyWordsDiv() {
    return (
        <SearchDiv>
            <SearchDivButton onClick={
                () => {}
            }>Искать по словам</SearchDivButton>

        </SearchDiv>
    );
}