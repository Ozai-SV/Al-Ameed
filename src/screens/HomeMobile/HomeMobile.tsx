import React from "react";
import { CallToActionSection } from "./sections/CallToActionSection";
import { CtaContainerSection } from "./sections/CtaContainerSection";
import { FooterSection } from "./sections/FooterSection";
import { HeaderContainerSection } from "./sections/HeaderContainerSection";
import { HeaderSection } from "./sections/HeaderSection";
import { LayoutContainerSection } from "./sections/LayoutContainerSection";
import { LayoutSection } from "./sections/LayoutSection";
import { MainContentSection } from "./sections/MainContentSection";

export const HomeMobile = (): JSX.Element => {
  return (
    <div className="flex flex-col items-start relative w-full">
      <HeaderSection />
      <LayoutSection />
      <MainContentSection />
      <CallToActionSection />
      <HeaderContainerSection />
      <LayoutContainerSection />
      <CtaContainerSection />
      <FooterSection />
    </div>
  );
};
