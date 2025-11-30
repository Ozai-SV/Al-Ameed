import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-6 px-5 py-12 w-full bg-white">
      <div className="flex flex-col max-w-screen-xl items-start gap-12 w-full">
        <Card className="w-full border-0 shadow-none bg-[linear-gradient(0deg,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0.4)_100%),url(..//card-4.png)_50%_50%_/_cover] bg-cover bg-center">
          <CardContent className="flex flex-col items-center gap-2 p-8">
            <div className="flex flex-col max-w-screen-md items-center gap-6 w-full">
              <div className="flex flex-col items-center gap-5 w-full">
                <h1 className="w-full font-heading-h1 font-[number:var(--heading-h1-font-weight)] text-white text-[length:var(--heading-h1-font-size)] text-center tracking-[var(--heading-h1-letter-spacing)] leading-[var(--heading-h1-line-height)] [font-style:var(--heading-h1-font-style)]">
                  We build what works
                </h1>

                <p className="w-full font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-white text-[length:var(--text-regular-normal-font-size)] text-center tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                  From web design to database architecture, Al-Ameed handles the
                  digital work that keeps businesses moving forward. Simple.
                  Direct. Done right.
                </p>
              </div>

              <div className="inline-flex items-start justify-center gap-4">
                <Button
                  variant="default"
                  className="bg-white text-black hover:bg-white/90 font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)] px-6 py-3"
                >
                  Explore
                </Button>

                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 hover:text-white font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)] px-6 py-3"
                >
                  Details
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
