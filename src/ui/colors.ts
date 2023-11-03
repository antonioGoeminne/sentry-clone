import tinycolor from "tinycolor2";

export const primary = "#38173b";
export const primaryLighter = "#ce99d9";
export const primaryLighter2 = "#f7eef9";
export const primaryDarker = "#300c34";
export const secondary = "#ca0c47";
export const secondaryDarker = "#e81652";
export const errorColor = '#F65454'

export const lightenRate = 7.5;
export const darkenRate = 15;

export const primaryLigtherTiny = tinycolor(primary)
  .lighten(lightenRate)
  .toHexString();

export const primaryDarkerTiny = tinycolor(primary)
  .darken(darkenRate)
  .toHexString();

export const secondaryLigtherTiny = tinycolor(secondary)
  .lighten(lightenRate)
  .toHexString();

export const secondaryDarkerTiny = tinycolor(secondary)
  .darken(darkenRate)
  .toHexString();
