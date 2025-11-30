import { ChevronRightIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const servicesData = [
  {
    category: "Design",
    title: "Web pages that work hard",
    description: "We design sites that function as well as they look.",
    image: "/placeholder-image-3.png",
  },
  {
    category: "Data",
    title: "Databases built for scale",
    description:
      "Strong architecture means your data stays organized and accessible.",
    image: "/placeholder-image-3.png",
  },
  {
    category: "Brand",
    title: "Logos that stand out",
    description:
      "Visual identity matters. We create graphics that stick with people.",
    image: "/placeholder-image-3.png",
  },
  {
    category: "Digital",
    title: "More than the basics",
    description:
      "Beyond the standard services, we handle the digital work others miss.",
    image: "/placeholder-image-3.png",
  },
];

export const LayoutSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-12 px-5 py-16 w-full bg-white">
      <div className="flex flex-col max-w-screen-xl items-start gap-12 w-full">
        <header className="flex flex-col max-w-screen-md items-center gap-3 w-full">
          <div className="inline-flex items-center">
            <h3 className="w-fit mt-[-1.00px] font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-black text-[length:var(--heading-tagline-font-size)] text-center tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)]">
              Services
            </h3>
          </div>

          <div className="flex flex-col items-center gap-5 self-stretch w-full">
            <h2 className="self-stretch mt-[-1.00px] font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-black text-[length:var(--heading-h2-font-size)] text-center tracking-[var(--heading-h2-letter-spacing)] leading-[var(--heading-h2-line-height)] [font-style:var(--heading-h2-font-style)]">
              What we deliver
            </h2>

            <p className="self-stretch font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-black text-[length:var(--text-regular-normal-font-size)] text-center tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
              Each service is built with precision and purpose for your
              business.
            </p>
          </div>
        </header>

        <div className="flex flex-col items-start gap-6 self-stretch w-full">
          <div className="flex flex-col items-start gap-6 self-stretch w-full">
            {servicesData.map((service, index) => (
              <Card
                key={index}
                className="flex-col items-start bg-white border border-solid border-black flex self-stretch w-full rounded-none"
              >
                <img
                  className="self-stretch w-full h-[171px] object-cover"
                  alt="Placeholder image"
                  src={service.image}
                />

                <CardContent className="flex-col items-start gap-5 p-6 self-stretch w-full flex">
                  <div className="flex-col items-start gap-2 self-stretch w-full flex">
                    <div className="inline-flex items-center">
                      <span className="w-fit mt-[-1.00px] font-heading-tagline font-[number:var(--heading-tagline-font-weight)] text-black text-[length:var(--heading-tagline-font-size)] tracking-[var(--heading-tagline-letter-spacing)] leading-[var(--heading-tagline-line-height)] whitespace-nowrap [font-style:var(--heading-tagline-font-style)]">
                        {service.category}
                      </span>
                    </div>

                    <div className="flex-col items-start gap-2 self-stretch w-full flex">
                      <h4 className="text-black text-[length:var(--heading-h5-font-size)] leading-[var(--heading-h5-line-height)] self-stretch mt-[-1.00px] font-heading-h5 font-[number:var(--heading-h5-font-weight)] tracking-[var(--heading-h5-letter-spacing)] [font-style:var(--heading-h5-font-style)]">
                        {service.title}
                      </h4>

                      <p className="font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-black text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] self-stretch [font-style:var(--text-regular-normal-font-style)]">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <button className="flex items-center gap-6 self-stretch w-full cursor-pointer bg-transparent border-none p-0">
                    <div className="inline-flex items-center justify-center gap-2">
                      <span className="w-fit font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-black text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] whitespace-nowrap [font-style:var(--text-regular-normal-font-style)]">
                        Explore
                      </span>

                      <ChevronRightIcon className="w-6 h-6" />
                    </div>
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
