import React from "react";
import { useMediaQuery } from "react-responsive";

const Desktop = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element | null => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  return isDesktop ? children : null;
};

const Tablet = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element | null => {
  const isTablet = useMediaQuery({ maxWidth: 1023 });
  return isTablet ? children : null;
};

const Mobile = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element | null => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};

export { Desktop, Tablet, Mobile };
