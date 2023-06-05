import { render, screen } from "@testing-library/react";
import Login from "./Login";

test('username input should be rendered', ()=> {
    render(<Login/>);
    const userInputElement = screen.getByPlaceholderText(/username/i)
    expect(userInputElement).toBeInTheDocument()
})

test('password input should be rendered', ()=> {
    render(<Login/>);
    const passwordInputElement = screen.getByPlaceholderText(/password/i)
    expect(passwordInputElement).toBeInTheDocument()
})

test('login BTN should be rendered', ()=> {
    render(<Login/>);
    const btnInputElement = screen.getByRole('button')
    expect(btnInputElement).toBeInTheDocument()
})

test('username input should be empty', ()=> {
    render(<Login/>);
    const userInputElement = screen.getByPlaceholderText(/username/i)
    expect(userInputElement.value).toBe('')
})

test('password input should be empty', ()=> {
    render(<Login/>);
    const passwordInputElement = screen.getByPlaceholderText(/password/i)
    expect(passwordInputElement.value).toBe('')
})

test('login BTN should be disabled', ()=> {
    render(<Login/>);
    const btnInputElement = screen.getByRole('button')
    expect(btnInputElement).toBeDisabled()
})

test('error message should be invisible', ()=> {
    render(<Login/>);
    const errElement = screen.getByTestId('error')
    expect(errElement).not.toBeVisible()
})