// get user preferred color scheme
window.isDarkModePreferred = () => { return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches; };

// get user saved theme
window.getSavedTheme = () => { return localStorage.getItem('theme'); };

// set user saved theme
window.setSavedTheme = (theme) => { localStorage.setItem('theme', theme); };

// as property of window object
window.theme = () => window.getSavedTheme() || (window.isDarkModePreferred() ? 'dark' : 'light');