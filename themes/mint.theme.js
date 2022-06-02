const colorPalette = {
    light: "#c0eddd",
    mediumLight: "#AFBFC0",
    medium: "#9FA4A9",
    mediumDark: "#564f5b",
    dark: "#262324",
    black: "#000000"
}

export const MintTheme = {
    colors: {
        text: {
            link: colorPalette.light,
            altLink: colorPalette.dark,
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
            header: colorPalette.black,
            link: "transparent",
            fancyLink: colorPalette.black,
            badge: colorPalette.mediumDark,
            headerMenu: colorPalette.mediumDark,
            main: colorPalette.black,
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