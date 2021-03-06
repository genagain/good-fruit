import { render, screen } from '@testing-library/react'

import Signup from '../Signup'

describe('The Signup component', () => {
    describe('renders', () => {
        beforeEach(() => {
            render(<Signup />)
        })

        test('the Sign Up title', () => {
            const title = screen.getByRole("heading", { name: /sign up/i})
            expect(title).toHaveTextContent("Sign Up")
        })

        test('the username field', () => {
            const usernameField = screen.getByPlaceholderText('Username')
            expect(usernameField.type).toBe('text')
        })

        test('the email field', () => {
            const emailField = screen.getByPlaceholderText('Email')
            expect(emailField.type).toBe('text')
        })

        test('the password field', () => {
            const passwordField = screen.getByPlaceholderText('Password')
            expect(passwordField.type).toBe('password')
        })

        test('the password confirmation field', () => {
            const passwordConfirmationField = screen.getByPlaceholderText('Confirm Password')
            expect(passwordConfirmationField.type).toBe('password')
        })

        test('the signup button', () => {
            const signupButton = screen.getByRole("button", { name: /sign up/i })
            expect(signupButton.type).toBe('submit')
        })
    })
})