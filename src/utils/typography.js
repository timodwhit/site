import Typography from 'typography'
import moragaTheme from 'typography-theme-moraga'

moragaTheme.baseFontSize = '22px';
moragaTheme.headerColor = '#f96f5d';
moragaTheme.bodyColor = '#3C3C3C';
moragaTheme.bodyWeight = '300';
moragaTheme.googleFonts = [
  {
    name: "Source Sans Pro",
    styles: ["200", "300", "300i", "700"],
  },
];
moragaTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  a: {
    color: "#F96F5D",
  },
  "a:visited": {
    color: "#F96F5D",
  },
  "a:hover": {
    color: "#F96F5D",
  }
})


const typography = new Typography(moragaTheme)

export default typography
