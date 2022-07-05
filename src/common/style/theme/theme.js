import colors from "./colors";
import fonts from "./fonts";
import dimension from "./dimensions";

const theme = {
  // app colors
  colorWhite: colors.WHITE,
  colorLink: colors.LINK,
  colorBgGrey: colors.BG_GREY,
  colorLightGrey: colors.LIGHT_GREY,
  colorGrey: colors.Grey,
  colorDarkGrey: colors.DARK_GREY,
  colorIvory: colors.IVORY,
  colorBlack: colors.BLACK,
  colorBeige: colors.BEIGE,
  colorDarkBlue: colors.DARK_BLUE,
  colorFuschia: colors.FUSCHIA,
  colorLightBlue: colors.LIGHT_BLUE,
  colorLightGreen: colors.LIGHT_GREEN,
  colorSkyBlue: colors.SKY_BLUE,

  colorMcdBlack: colors.MCD_BLACK,
  colorMcdGreen: colors.MCD_GREEN,
  colorMcdGold: colors.MCD_GOLD,
  colorMcdRed: colors.MCD_RED,
  colorDanger: colors.DANGER,
  colorInfo: colors.INFO,
  colorPrimary: colors.PRIMARY,
  colorSuccess: colors.SUCCESS,
  colorWarning: colors.WARNING,

  // app fonts
  fallbackFont: fonts.FALLBACK_FONT,
  speedeeBold: fonts.speedeeBold,
  speedeeLight: fonts.speedeeLight,
  speedeeNormal: fonts.speedeeNormal,
  speedeeItalic: fonts.speedeeItalic,

  // app font variable
  fontIX: fonts.FONT_IX,
  fontX: fonts.FONT_X,
  fontXS: fonts.FONT_XS,
  fontS: fonts.FONT_S,
  fontL: fonts.FONT_L,
  fontXL: fonts.FONT_XL,
  fontXXL: fonts.FONT_XXL,
  fontXXII: fonts.FONT_XXII,
  fontXXV: fonts.FONT_XXV,

  // app font weight variable
  letterSpacing: fonts.LETTER_SPACING,
  fontNormal: fonts.FONT_NORMAL,
  fontWt400: fonts.FONT_BOOK,
  fontWt300: fonts.FONT_300,
  fontWt500: fonts.FONT_MEDIUM,
  fontWt700: fonts.FONT_SEMI_BOLD,
  fontWt900: fonts.FONT_BOLD,

  // app line height variable
  lineHeightBase: fonts.BASE_LINE_HEIGHT,
  lineHeightBase_XS: fonts.LINE_HEIGHT_FONT_XS,
  lineHeightFont_S: fonts.LINE_HEIGHT_FONT_S,
  lineHeightBase_XX: fonts.LINE_HEIGHT_FONT_XX,
  lineHeightFont_XXII: fonts.LINE_HEIGHT_FONT_XXII,
  lineHeightFont_XXXII: fonts.LINE_HEIGHT_FONT_XXXII,

  // app media query
  largeMediaQuery: dimension.mediaQuery.large,
  desktopMediaQuery: dimension.mediaQuery.desktop,
  tabletMediaQuery: dimension.mediaQuery.tablet,
  smallMediaQuery: dimension.mediaQuery.small,

  // theme border radius

  borderRadius: "5px",
  borderRadius3: "3px",

  // theme box shadow

  boxShadow: `0px 2px 4px -1px ${colors.DARK_GREY}`,
  hoverBoxShadow: `0px 4px 5px -1px ${colors.DARK_GREY}`,
  boxShadowLight: `0px 1px 5px 0px ${colors.LIGHT_GREY}`,
};

const themes = { dimension, ...theme };
export default themes;
