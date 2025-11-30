import React from "react";
import { Button } from "../../../../components/ui/button";

export const HeaderSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-6 px-5 py-12 w-full bg-white">
      <div className="flex flex-col max-w-screen-xl items-start gap-12 w-full">
        <div className="flex flex-col items-center gap-2 p-8 w-full bg-[linear-gradient(0deg,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0.4)_100%),url(..//card-4.png)_50%_50%_/_cover]">
          <div className="flex flex-col max-w-screen-md items-center gap-6 w-full">
            <div className="flex flex-col items-center gap-5 w-full">
              <h1 className="w-full mt-[-1.00px] font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-white text-[length:var(--heading-h1-font-size)] text-center tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)]">
                Digital solutions built to last
              </h1>

              <p className="w-full font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-white text-[length:var(--text-regular-normal-font-size)] text-center tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                Al-Ameed creates the electronic services your business needs. We
                design websites, develop databases, craft logos, and deliver
                results that matter.
              </p>
            </div>

            <div className="inline-flex items-start justify-center gap-4">
              <Button
                variant="secondary"
                className="px-6 py-3 bg-white text-black border border-solid hover:bg-white/90"
              >
                <span className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                  Start
                </span>
              </Button>

              <Button
                variant="outline"
                className="px-6 py-3 bg-transparent text-white border border-solid border-white hover:bg-white/10"
              >
                <span className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                  Learn
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
