import { mount } from 'svelte'
import './app.css'
import App from './App.svelte'

const app = mount(App, {
  target: document.getElementById('app')!,
})

const toggleButton = document.getElementById('toggle-button')
const navbarLinks = document.getElementById('links')


if (toggleButton && navbarLinks) {
  toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
  })
}

export default app
