import styled from "styled-components";
import { adpt } from "../adaptive";

interface DivProps {
    flexDirection?: string;
    justifyContent?: string;
    alignItems?: string;

    borderRadius?: number;
}

// Стилевая основа для большинства div

export const Div = styled.div`
    display: flex;
    font-family: 'Montserrat';
`