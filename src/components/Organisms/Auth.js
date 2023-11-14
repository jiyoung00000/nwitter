import Button from "components/Atoms/Button";
import Form from "components/Molecules/Form";
import styled from 'styled-components';

const Auth = ({ onSubmit, email, password, onChange, newAccount, error, toggleAccount, onSocialClick }) => {
  return (
    <Container>
      <Form onSubmit={onSubmit} email={email} password={password} onChange={onChange} newAccount={newAccount} error={error} />
      <Toggle onClick={toggleAccount}>
        {newAccount ? "Sign In" : "Create Account"}
      </Toggle>
      <div>
        <Button onClick={onSocialClick} name="google">
          Continue with Google
        </Button>
        <Button onClick={onSocialClick} name="github">
          Continue with Github
        </Button>
      </div>
    </Container>
  );
}

export default Auth;

const Container = styled.div`
  width: 100%;
  max-width: 320px;
  margin: 0 auto;
  margin-top: 100px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

const Toggle = styled.span`
cursor: pointer;
margin: 10px 0px;
color: #0095f6;
font-weight: 600;
`;
