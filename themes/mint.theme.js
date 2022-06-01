const colorPalette = {
    light: "#c0eddd",
    mediumLight: "#AFBFC0",
    medium: "#9FA4A9",
    mediumDark: "#564f5b",
    dark: "#262324"
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
            logoMain: colorPalette.light,
            logoSecondary: colorPalette.dark
        },
        background: {
            header: colorPalette.mediumDark,
            link: "transparent",
            fancyLink:"transparent",
            badge: colorPalette.mediumDark,
            headerMenu: colorPalette.mediumDark,
            main: colorPalette.dark,
            logo: colorPalette.light,
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