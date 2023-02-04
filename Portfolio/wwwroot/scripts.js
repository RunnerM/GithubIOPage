const lightTheme = 'light';
const darkTheme = 'dark';
const themeKey = 'theme';
const darkBackgroundColor = '#1a1c23';
const lightBackgroundColor = 'rgb(241,246,245)';

// get user preferred color scheme
window.isDarkModePreferred = () => { return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches; };

// get user saved theme
window.getSavedTheme = () => { 
    if(localStorage.getItem(themeKey) !== darkTheme && localStorage.getItem(themeKey) !== lightTheme) {
        return null;
    }
    return localStorage.getItem(themeKey); };

// set user saved theme
window.setSavedTheme = (theme) => { localStorage.setItem(themeKey, theme); };

// as property of window object
window.theme = () =>{
    // if user has saved theme, use it
    if (window.getSavedTheme() !== null && window.getSavedTheme() !== undefined) {
        return window.getSavedTheme();
    }
    // if user has not saved theme, use preferred color scheme
    else {
        return window.isDarkModePreferred() ? darkTheme : lightTheme;
    }
};

// set body background color
window.setBodyBackgroundColor = () => {
    document.body.style.backgroundColor = window.theme() === darkTheme ? darkBackgroundColor : lightBackgroundColor;
}