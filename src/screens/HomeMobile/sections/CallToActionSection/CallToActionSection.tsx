import React from "react";
import { Button } from "../../../../components/ui/button";

export const CallToActionSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-12 px-5 py-16 w-full bg-white">
      <div className="flex flex-col max-w-screen-xl items-start gap-12 w-full">
        <div className="items-center justify-center p-8 bg-[linear-gradient(0deg,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0.4)_100%),url(..//card-4.png)_50%_50%_/_cover] flex w-full">
          <div className="flex-col max-w-screen-md items-center gap-6 flex-1 grow flex">
            <div className="flex flex-col items-center gap-5 w-full">
              <h2 className="text-white text-[length:var(--heading-h2-font-size)] text-center leading-[var(--heading-h2-line-height)] w-full mt-[-1.00px] font-heading-h2 font-[number:var(--heading-h2-font-weight)] tracking-[var(--heading-h2-letter-spacing)] [font-style:var(--heading-h2-font-style)]">
                Let&#39;s build something together
              </h2>

              <p className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-white text-[length:var(--text-regular-normal-font-size)] text-center tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] w-full [font-style:var(--text-regular-normal-font-style)]">
                Tell us what you need and we&#39;ll show you what&#39;s possible
              </p>
            </div>

            <div className="inline-flex items-start gap-4">
              <Button
                variant="secondary"
                className="px-6 py-3 bg-white text-black border border-solid hover:bg-white/90 font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]"
              >
                Quote
              </Button>

              <Button
                variant="outline"
                className="px-6 py-3 bg-transparent text-white border border-solid border-white hover:bg-white/10 font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]"
              >
                Talk
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
