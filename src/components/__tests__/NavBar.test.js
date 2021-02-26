import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import NavBar from '../NavBar'

describe('When user is not authenticated, the NavBar component', () => {
  beforeEach(() => {
    const authenticated = false
    const setAuthenticated = jest.fn()
    render(<BrowserRouter><NavBar authenticated={authenticated} setAuthenticated={setAuthenticated} /></BrowserRouter>)
  })

  describe('renders', () => {
    it('the logo', () => {
      const logo = screen.getByAltText("Good Fruit Logo")
      expect(logo.src).toContain("logo.svg")
    })

    it('the logo text', () => {
      const indexLink = screen.getByRole("heading", { name: /good fruit/i })
      expect(indexLink).toHaveTextContent('Good Fruit')
    })

    it('login link', () => {
      const loginLink = screen.getByRole("link", { name: /login/i })
      expect(loginLink).toHaveTextContent('Login')
    })

    it('sign up link', () => {
      const signupLink = screen.getByRole("link", { name: /sign up/i })
      expect(signupLink).toHaveTextContent('Sign Up')
    })
  })

  describe('does not render', () => {
    it('logout link', () => {
      const logoutLink = screen.queryByRole("link", { name: /logout/i })
      expect(logoutLink).toBeNull()
    })
  })
})

describe('When user is authenticate, the NavBar component', () => {
  beforeEach(() => {
    const authenticated = true
    const setAuthenticated = jest.fn()
    render(<BrowserRouter><NavBar authenticated={authenticated} setAuthenticated={setAuthenticated} /></BrowserRouter>)
  })

  describe('renders', () => {
    it('the logo', () => {
      const logo = screen.getByAltText("Good Fruit Logo")
      expect(logo.src).toContain("logo.svg")
    })

    it('the logo text', () => {
      const indexLink = screen.getByRole("heading", { name: /good fruit/i })
      expect(indexLink).toHaveTextContent('Good Fruit')
    })

    it('logout link', () => {
      const logoutLink = screen.getByRole("link", { name: /logout/i })
      expect(logoutLink).toHaveTextContent('Logout')
    })
  })

  describe('does not render', () => {
    it('login link', () => {
      const loginLink = screen.queryByRole("link", { name: /login/i })
      expect(loginLink).toBeNull()
    })

    it('signup link', () => {
      const signupLink = screen.queryByRole("link", { name: /sign up/i })
      expect(signupLink).toBeNull()
    })
  })
})