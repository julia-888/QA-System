import { adpt } from "../adaptive";
import styled from "styled-components";
import { Div } from "./Div";
import { ReactComponent as SearchIcon} from "../icons/search.svg";

export const LineSearch = () => {
    return (
        <Line>
            <input type='text' placeholder="Введите запрос" className="searchInput"/>
            
            <button className="searchButton" onClick={
                () => {}
            }>
                <div className="imgSearch"><SearchIcon/></div>
            </button>
        </Line>
    )
}

const Line = styled(Div)`
    width: ${adpt(709)}px;
    border-radius: ${adpt(13)}px;
    border: none;
    /* outline: none; */
    background: linear-gradient(150deg, rgba(91, 112, 149, 0.29) 30%, rgba(139, 161, 200, 0.29) 97%, rgba(91, 112, 149, 0.29));
    padding: ${adpt(15)}px;
    /* font-family: Montserrat;
    font-weight: 600;
    font-size: ${adpt(19)}px; */
    color: '#000000';
    margin-bottom: ${adpt(35)}px;
    justify-content: space-between;
    
    .searchInput {
        background: none;
        border: none;
        outline: none;
        font-family: Montserrat;
        font-weight: 600;
        font-size: ${adpt(19)}px;
        width: ${adpt(500)}px;
    }
    
    .searchButton {
        background: none;
        border: none;
        .imgSearch{
            height: ${adpt(18)}px;
            width: ${adpt(18)}px;
            /* задать размеры */
            svg {
                width: 100%;
                height: 100%;
            }        
        }
    }
`