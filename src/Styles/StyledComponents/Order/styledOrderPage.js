import React from "react";
import styled from "styled-components";

const mainSectionStyles = `
text-transform: uppercase;
display:flex;
justify-content:center;
align-items:center;
font-size: 12px;
padding: 10px;
cursor: pointer;
& sub{
    text-transform: lowercase;
}
&:hover {
    background-color: #FFDF8C;
}
    @media (max-width:1100px) {
    font-size: 8px;

    }
     @media (max-width:700px) {
    padding: 5px;
    font-size: 5px;

    }


`;


const SectionSizeButtonStyles = styled.div`
    background-color: ${({chosenSize,number}) => chosenSize === number ? "#FFDF8C" : "#F7F5F7"};
    border-bottom-left-radius: ${({size}) => size === "Small" ? "30px" : null};
    border-top-left-radius: ${({size}) => size === "Small" ? "30px" : null};
    border-bottom-right-radius: ${({size}) => size === "Large" ? "30px" : null};
    border-top-right-radius: ${({size}) => size === "Large" ? "30px" : null};
    ${mainSectionStyles}
`;
const SectionToppingsStyles = styled.div`
    background-color: ${({chosenToppings,number}) => chosenToppings.includes(number) ? "#FFDF8C" : "#F7F5F7"};
    border-radius: 30px;
    ${mainSectionStyles}
`;

export const SectionSizeButtons = ({ children, chosenSize, chooseSize, number, size }) => {
    return <SectionSizeButtonStyles onClick={() => chooseSize(number)} chosenSize={chosenSize}
                                    number={number} size={size}>{children}</SectionSizeButtonStyles>
};


export const ToppingsComponent = ({ children, chosenToppings, chooseToppings, deleteItemFromArray, number }) => {
    return <SectionToppingsStyles
        onClick={() => chooseToppings(chosenToppings.includes(number)
            ? () => deleteItemFromArray(number)
            : [...chosenToppings, number])}
        chosenToppings={chosenToppings}
        number={number}
    >{children}</SectionToppingsStyles>

};









