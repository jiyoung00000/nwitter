import styled from 'styled-components';

const Footer = () => (
  <StyledFooter>&copy; {new Date().getFullYear()} Nwitter</StyledFooter>
);

export default Footer;

const StyledFooter = styled.footer`
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #DDDDDD;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
