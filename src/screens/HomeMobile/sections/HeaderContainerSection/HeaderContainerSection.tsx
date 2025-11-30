import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeaderContainerSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-6 px-5 py-12 w-full bg-white">
      <div className="flex flex-col max-w-screen-xl items-start gap-12 w-full">
        <div className="flex flex-col items-center gap-2 p-8 w-full bg-[linear-gradient(0deg,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0.4)_100%),url(..//card-4.png)_50%_50%_/_cover] bg-cover bg-center">
          <div className="flex flex-col max-w-screen-md items-center gap-6 w-full">
            <div className="flex flex-col items-center gap-5 w-full">
              <h1 className="font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-white text-[length:var(--heading-h1-font-size)] text-center tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)]">
                Electronic services that move your business forward
              </h1>

              <p className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-white text-[length:var(--text-regular-normal-font-size)] text-center tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                Al-Ameed builds the digital foundation your company needs. We
                design, develop, and deliver work that lasts.
              </p>
            </div>

            <div className="inline-flex items-start justify-center gap-4">
              <Button
                variant="secondary"
                className="px-6 py-3 bg-white text-black hover:bg-white/90 font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]"
              >
                Start
              </Button>

              <Button
                variant="outline"
                className="px-6 py-3 bg-transparent border-white text-white hover:bg-white/10 font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]"
              >
                Learn
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
