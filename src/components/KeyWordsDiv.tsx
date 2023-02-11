import styled from "styled-components";


const SearchDiv = styled.div`
box-sizing: border-box;
align-self: center;
width: 369px;
background-color: rgba(118, 142, 183, 0.3);
border-radius: 13px;
padding: 15px;
font-size: 19px;
font-weight: 500;

`

export default function KeyWordsDiv() {
    return (
        <SearchDiv>
            <button onClick={
                () => {}
            }>
                
                Искать по словам
            </button>
        </SearchDiv>
    );
}