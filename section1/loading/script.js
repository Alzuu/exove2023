function changeSize() {
  // Get DOM elements
  const loading = document.getElementById('loading')
  const loadingText = document.getElementById('loading-text')

  // Use the toggle function to simplify class list checking
  // Removes unnecessary if-else statements
  loading.classList.toggle('loading-sm')
  loadingText.classList.toggle('loading-text-none')
}

function changeTheme() {
  const app = document.documentElement
  app.classList.toggle('dark')
}

function preferredTheme() {
  const app = document.documentElement
  const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)')
  if (preferredTheme.matches) {
    app.classList.toggle('dark')
  }
}

function changeSpeed() {
  const loading = document.getElementById('loading')
  loading.classList.toggle('loading-slow')
}

preferredTheme()
