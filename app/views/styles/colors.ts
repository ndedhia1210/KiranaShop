/*
 *
 * This file maintains the color palette used across our application.
 *
 * Usage -
 * 1. Define the color variable in this file. Use format sb_<Color>_<Shade>. Examples - sb_bright, sb_red_300 etc
 * 2. Import this file where the color variable/s is/are to be used using the import statement like
 *    import colors from '../config/colors';
 * 3. Use the color as - colors.<name_of_variable_defined_here>
 *
 */

export default {
  sb_blue_100: "#6397E3",
  sb_bright: "#FFFFFF",
  sb_bright_100: "#F5F5F5",
  sb_dark: "#000000",
  sb_yellow_100: "#FFBD14",
  sb_gray_100: "#E3E1E1",
  sb_gray_200: "#DCDAD9",
  sb_red_100: "#FF6347",
  sb_orange_200: "#FDAF83",
  sb_orange_100: "#FDCFB4",
  sb_green_100: "#09B088",
};
