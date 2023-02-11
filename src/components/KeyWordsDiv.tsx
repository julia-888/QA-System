import styled from "styled-components";


const SearchDiv = styled.div`
box-sizing: border-box;
align-self: center;
width: 369px;
background-color: rgba(118, 142, 183, 0.3);
border-radius: 13px;
padding: 15px;
font-size: 19px;
font-weight: Medium;
`

const SearchDivButton = styled.button`
font-size: 19px;
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
            }>
                
                Искать по словам
            </SearchDivButton>
        </SearchDiv>
    );
}