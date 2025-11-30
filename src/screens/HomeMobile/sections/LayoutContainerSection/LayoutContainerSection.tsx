import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const services = [
  {
    image: "/placeholder-image-7.png",
    title: "Web design that converts",
    description:
      "Sites that look sharp and function better. We build pages that work as hard as you do.",
  },
  {
    image: "/placeholder-image-7.png",
    title: "Database systems that scale",
    description:
      "Strong architecture keeps your data organized and accessible. We design systems built to grow with you.",
  },
  {
    image: "/placeholder-image-7.png",
    title: "Logos and graphics that stick",
    description:
      "Visual identity matters. We create graphics that people remember and recognize instantly.",
  },
  {
    image: "/placeholder-image-7.png",
    title: "Digital services beyond the basics",
    description:
      "We handle the electronic work others overlook. From integration to optimization, we cover the gaps.",
  },
];

export const LayoutContainerSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-12 px-5 py-16 w-full bg-white">
      <div className="flex-col max-w-screen-xl gap-12 flex items-center w-full">
        <header className="flex flex-col max-w-screen-md items-center gap-3 w-full">
          <div className="inline-flex items-center">
            <p className="w-fit mt-[-1.00px] font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-black text-[length:var(--heading-tagline-font-size)] text-center tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)]">
              Services
            </p>
          </div>

          <div className="flex flex-col items-center gap-5 self-stretch w-full">
            <h2 className="self-stretch mt-[-1.00px] font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-black text-[length:var(--heading-h2-font-size)] text-center tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
              What we build
            </h2>

            <p className="self-stretch font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-black text-[length:var(--text-regular-normal-font-size)] text-center tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
              Each service is built with precision and purpose for your
              business.
            </p>
          </div>
        </header>

        <div className="items-center gap-12 flex flex-col self-stretch w-full">
          {services.map((service, index) => (
            <Card
              key={index}
              className="flex flex-col items-start gap-5 self-stretch w-full border-0 shadow-none"
            >
              <CardContent className="p-0 w-full flex flex-col gap-5">
                <img
                  className="self-stretch w-full h-44 object-cover"
                  alt={service.title}
                  src={service.image}
                />

                <div className="flex-col items-center gap-3 self-stretch w-full flex">
                  <h3 className="text-black text-[length:var(--heading-h5-font-size)] text-center leading-[var(--heading-h5-line-height)] self-stretch mt-[-1.00px] font-heading-h5 font-[number:var(--heading-h5-font-weight)] tracking-[var(--heading-h5-letter-spacing)] [font-style:var(--heading-h5-font-style)]">
                    {service.title}
                  </h3>

                  <p className="self-stretch font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-black text-[length:var(--text-regular-normal-font-size)] text-center tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                    {service.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="inline-flex items-center gap-6">
          <Button
            variant="outline"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 mt-[-1.00px] mb-[-1.00px] ml-[-1.00px] border border-solid border-black bg-transparent hover:bg-black hover:text-white rounded-none"
          >
            <span className="w-fit font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] whitespace-nowrap [font-style:var(--text-regular-normal-font-style)]">
              Explore
            </span>
          </Button>

          <Button
            variant="ghost"
            className="inline-flex items-center justify-center gap-2 hover:bg-transparent"
          >
            <span className="w-fit font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-black text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] whitespace-nowrap [font-style:var(--text-regular-normal-font-style)]">
              Explore
            </span>

            <ChevronRightIcon className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};
