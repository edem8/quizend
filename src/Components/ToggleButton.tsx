import { ToggleWrapper } from "../styledComponents/AppWrapperStyles";
import {
  SunIcon,
  MoonIcon,
  TogglerIcon,
} from "../styledComponents/IconStyles";
import { DefaultTheme, ThemeContext } from "styled-components";
import { useContext } from "react";
import React from "react";

type ToggleProps = {
  handleThemeSwitch: () => void;
};

function ToggleButton({ handleThemeSwitch }: ToggleProps) {
  const theme: DefaultTheme | undefined = useContext(ThemeContext);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLImageElement>) => {
    if (event.key === "Enter") {
      handleThemeSwitch();
    }
  };

  return (
    <ToggleWrapper>
      <SunIcon
        src={theme ? theme.src.sun : null}
        alt="Sun icon"
        width={16}
        height={16}
      />

      <TogglerIcon
        onClick={handleThemeSwitch}
        onKeyDown={handleKeyPress}
        src={theme ? theme.src.switch : null}
        alt="Light-theme icon"
        width={36}
        height={24}
        tabIndex={0}
        role="button"
      />

      <MoonIcon
        src={theme ? theme.src.moon : null}
        alt="Moon icon"
        width={16}
        height={16}
      />
    </ToggleWrapper>
  );
}

export default ToggleButton;