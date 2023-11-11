import styled from 'styled-components';

const Button = ({ onClick, name, children }) => (
  <StyledButton onClick={onClick} name={name}>{children}</StyledButton>
);

export default Button;

const StyledButton = styled.button`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: none;
  background-color: #04aaff;
  color: white;
  text-align: center;
  cursor: pointer;
  margin-bottom: 10px;

  &:hover {
    background-color: #0378a6;
  }

`;
