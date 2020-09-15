//determines if the user has a set theme
export const detectColorScheme = () =>{
    let theme="light";
    //local storage is used to override OS theme settings
    if(localStorage.getItem("theme")){
        if(localStorage.getItem("theme") === "dark"){
            theme = "dark";
        }
    } else if(!window.matchMedia) {
        //matchMedia method not supported
        return false;
    } else if(window.matchMedia("(prefers-color-scheme: dark)").matches) {
        //OS theme setting detected as dark
        theme = "dark";
    }

    document.documentElement.setAttribute("data-theme", theme);
    return theme;
}

export const changeColorScheme = (theme="light") =>{
    document.documentElement.setAttribute("data-theme", theme);
};
