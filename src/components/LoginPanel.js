import React, {useState} from 'react';
import styled from 'styled-components';

const LoginPanel = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const handleSumbit = e => {
        e.preventDefault();
        console.log(password, email);
        setEmail('');
        setPassword('');
    }

       return (
        <StyledLoginPanel>
            <Title>Login Form</Title>
            <form onSubmit = {handleSumbit }>
                <Row>
                    <Label fieldName="email">Email</Label>
                    <Field 
                        name="email"
                        value = {email}
                        onChange = {e=> setEmail(e.target.value)}
                    />
                </Row>
                <Row>
                    <Label fieldName="password">Password</Label>
                    <Field 
                        name="password"
                        value = {password}
                        onChange = {e=>setPassword(e.target.value)}
                    />
                </Row>
                <RowWithButton>
                    <Submit/>
                </RowWithButton>
            </form>
        </StyledLoginPanel>
    )
}

const StyledLoginPanel = styled.section`
    border: 1px solid #dcdcdc;
    padding:20px;
`
const Title = styled.h3`
    text-align: center;
`
const Row = styled.div`
    display:flex;
    justify-content:space-between;
    margin: 5px 0;
`
const RowWithButton = styled(Row)`
    justify-content: center;
    margin-top: 20px
`
const Label = styled.label.attrs(props => ({
    htmlFor: `field-${props.fieldName}`
}))`
    border-left:5px solid #e2e2e2;
    padding-left:5px
`
const Field = styled.input.attrs(({name, type})=> ({
    id: name ?`field-${name}` :null,
    type: type ? type: name
}))`
    border: none;
    border-bottom: 1px solid #e2e2e2;
    &:focus {
        outline: 0;
        border-color:#57c7f3;
    }
`
const Submit = styled.input.attrs(()=> ({
    type: 'submit'
}))`
    background-color: #fff;
    border: 1px solid #e2e2e2;
    cursor: pointer;
    padding: 5px 10px;
`

export default LoginPanel;
