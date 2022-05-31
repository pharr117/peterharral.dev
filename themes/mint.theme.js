const colorPalette = {
    light: "#C2D3CD",
    mediumLight: "#AFBFC0",
    medium: "#9FA4A9",
    mediumDark: "#847E89",
    dark: "#3B3335"
}

export const MintTheme = {
    colors: {
        text: {
            link: colorPalette.light,
            h1: colorPalette.light,
            h2: colorPalette.light,
            h3: colorPalette.light,
            h4: colorPalette.light,
            h5: colorPalette.light,
            h6: colorPalette.light,
            p: colorPalette.light,
        },
        background: {
            header: colorPalette.mediumDark,
            link: "transparent",
            fancyLink:"transparent",
            badge: colorPalette.mediumDark,
            headerMenu: colorPalette.mediumDark,
            main: colorPalette.dark
        },
        border: {
            link: "transparent",
            fancyLink: colorPalette.light,
            roundedImageOuter: colorPalette.light,
            badge: colorPalette.light
        },
        buttons: {
            icon: colorPalette.light,
            headerMenu: colorPalette.light,
        }
    }
}