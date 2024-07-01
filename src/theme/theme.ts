import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  background: {
    primary: "#ffff",
    secondary: "#F4F6FA",
    tertiary: "#3B4D66",
  },
  text: {
    primary: "#313E51",
    secondary: "#626C7F",
    tertiary: "#EE5454",
  },
  src: {
    sun: "/images/icon-sun-dark.svg",
    moon: "/images/icon-moon-dark.svg",
    switch: "/images/on.svg",
    bgPattern: "/images/pattern-background-mobile-light.svg",
    bgPatternTablet: "/images/pattern-background-tablet-light.svg",
    bgPatternDesktop: "/images/pattern-background-desktop-light.svg",
  },
};

export const darkTheme: DefaultTheme = {
  background: {
    primary: "#3B4D66",
    secondary: "#313E51",
    tertiary: "#ffffffcc",
  },
  text: {
    primary: "#ffff",
    secondary: "#ABC1E1",
    tertiary: "#ffff",
  },
  src: {
    sun: "/images/icon-sun-light.svg",
    moon: "/images/icon-moon-light.svg",
    switch: "/images/off.svg",
    bgPattern: "/images/pattern-background-mobile-dark.svg",
    bgPatternTablet: "/images/pattern-background-tablet-dark.svg",
    bgPatternDesktop: "/images/pattern-background-desktop-dark.svg",
  },
};
