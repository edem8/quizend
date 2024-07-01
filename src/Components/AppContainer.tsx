import React from "react";
import {
  AppWrapper,
  HeaderWrapper,
  TopicWrapper,
} from "../styledComponents/AppWrapperStyles";
import { SubjectIcon } from "../styledComponents/IconStyles";
import ToggleButton from "./ToggleButton";
import { ReactNode } from "react";

type AppContainerProps = {
  isVisible: boolean;
  alt?: string;
  src?: string;
  title?: string;
  bgColor?: string;
  handleThemeSwitch: () => void;
  children: ReactNode;
};

function AppContainer({
  alt,
  src,
  isVisible,
  title,
  bgColor,
  handleThemeSwitch,
  children,
}: AppContainerProps) {
  return (
    <AppWrapper>
      <HeaderWrapper>
        <TopicWrapper isVisible={isVisible}>
          <SubjectIcon
            src={src}
            alt={alt}
            width={28.57}
            height={28.57}
            bgColor={bgColor}
          />
          <div className="topic-title">{title}</div>
        </TopicWrapper>

        <ToggleButton handleThemeSwitch={handleThemeSwitch} />
      </HeaderWrapper>
      {children}
    </AppWrapper>
  );
}

export default AppContainer;
