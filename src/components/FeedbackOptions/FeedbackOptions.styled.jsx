import styled from '@emotion/styled';

export const DivOfButtons = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  background-color: blue;
  color: white;
  border: 1px solid transparent;
  border-radius: 4px;

  :first-of-type{
    background-color: green;
  }

  :last-child {
    background-color: red;
  }
`;