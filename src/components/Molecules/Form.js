import Button from "components/Atoms/Button";
import Input from "components/Atoms/Input";

const Form = ({ onSubmit, email, password, onChange, newAccount, error }) => (
  <form onSubmit={onSubmit}>
    <Input name="email" type="text" placeholder="Email" required value={email} onChange={onChange}/>
    <Input name="password" type="password" placeholder="Password" required value={password} onChange={onChange}/>
    <Button type="submit">{newAccount ? "Create Account" : "Log In"}</Button>
    {error && <span>{error}</span>}
  </form>
);

export default Form;
