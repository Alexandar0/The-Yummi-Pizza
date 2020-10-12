import React from 'react';
import styled from 'styled-components';
import { Title } from "../Styles/title";
import { pizzaGreen } from "../Styles/colors";

const QuantityInputStyled = styled.input`
  font-size: 18px;
  width: 24px;
  text-align: center;
  border: none;
  outline: none;
`;

const IncrementContainer = styled(Title)`
  display: flex;
  height: 24px;
`;

const IncrementButton = styled.div`
  width: 23px;
  color: ${pizzaGreen};
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  line-height: 23px;
  margin: 0px 10px;
  border: 1px solid ${pizzaGreen};
  ${({ disabled }) =>
    disabled &&
    `opacity: 0.5;
     pointer-events: none;
     `} 
  &:hover {
    background-color: #f2ffe3;
  }    
`;

export function QuantityInput({ quantity }) {
    return (
        <IncrementContainer>
            <div>Quantity:</div>
            <IncrementButton 
              onClick={() => {
                quantity.setValue(quantity.value - 1);
            }} 
            disabled={quantity.value === 1}
            > - </IncrementButton>
            <QuantityInputStyled {...quantity} />
            <IncrementButton 
              onClick={() => {
                quantity.setValue(quantity.value + 1);
            }}> + </IncrementButton>
        </IncrementContainer>
    );
}