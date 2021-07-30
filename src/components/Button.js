import styled from 'styled-components';

export const Button = styled.button`
        padding: 13px 72px;
        border: 2px solid var(--mainColor);
        border-radius: 6px;
        cursor: pointer;
        /* margin: 10px 8px; */
        font-size: 16px;
        font-weight:600;
        width: 100%;
        color: ${props=>props.color || '#e85c30'};
        background-color: ${props=>props.bgColor || 'white'} ;
        transition:all 0.3s ease-in-out;
        :hover{
            background: ${props=>props.color};
            color: ${props=>props.bgColor};
        }
`