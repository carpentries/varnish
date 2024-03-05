/*!
 * Modified from:
 * Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2023 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 */

(() => {
  'use strict'

  // Retreive the current store
  try {
    var store = window.localStorage || {};
  } catch (e) {
    var store = {};
  }

  // Get the stored theme
  // Fallback to user preference if no stored theme
  const getPreferredTheme = () => {
    const storedTheme = store.getItem('theme')
    if (storedTheme) {
      return storedTheme
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  // Set the preferred 
  const setTheme = theme => {
    if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-bs-theme', 'dark')
    } 
    else if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: light)').matches) {
      document.documentElement.setAttribute('data-bs-theme', 'light')
    }
    else {
      document.documentElement.setAttribute('data-bs-theme', theme)
    }
  }

  setTheme(getPreferredTheme())

  const showActiveTheme = (theme, focus = false) => {
    const themeSwitcher = document.querySelector('#bd-theme')

    if (!themeSwitcher) {
      return
    }

    document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
      element.classList.remove('active')
      element.setAttribute('aria-pressed', 'false')
    })

    var svgOfActiveBtn;
    
    document.querySelectorAll(`[data-bs-theme-value="${theme}"]`).forEach(btnToActive => {
      svgOfActiveBtn = btnToActive.querySelector('svg use').getAttribute('href')
      btnToActive.classList.add('active')
      btnToActive.setAttribute('aria-pressed', 'true')
      const themeSwitcherLabel = `Toggle theme (${btnToActive.dataset.bsThemeValue})`
      themeSwitcher.setAttribute('aria-label', themeSwitcherLabel)

      if (focus) {
        themeSwitcher.focus()
      }
    })

    document.querySelectorAll('.theme-icon-active use').forEach(activeThemeIcon => {
      activeThemeIcon.setAttribute('href', svgOfActiveBtn)
    })
  }

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    const storedTheme = store.getItem('theme')
    if (storedTheme == 'auto') {
      setTheme(getPreferredTheme())
    }
  })

  window.addEventListener('DOMContentLoaded', () => {
    showActiveTheme(getPreferredTheme())

    document.querySelectorAll('[data-bs-theme-value]')
      .forEach(toggle => {
        toggle.addEventListener('click', () => {
          const theme = toggle.getAttribute('data-bs-theme-value')
          store.setItem('theme', theme)
          setTheme(theme)
          showActiveTheme(theme, true)
        })
      })
  })
})()
