import styled from 'styled-components';

const Input = ({ name, type, placeholder, required, value, onChange }) => (
  <StyledInput name={name} type={type} placeholder={placeholder} required={required} value={value} onChange={onChange}/>
);

export default Input;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
  margin-bottom: 10px;
  
  box-sizing: border-box;
`;
