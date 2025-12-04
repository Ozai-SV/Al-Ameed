import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";

const servicesLinks = [
  "Web design",
  "Database development",
  "Logo design",
  "Graphic design",
  "Digital solutions",
];

const companyLinks = ["About us", "Our work", "Contact us", "Careers", "Blog"];

const socialLinks = [
  { name: "Facebook", icon: "/facebook.svg" },
  { name: "Instagram", icon: "/instagram.svg" },
  { name: "X", icon: "/x.svg" },
  { name: "LinkedIn", icon: "/linkedin.svg" },
  { name: "YouTube", icon: "/youtube.svg" },
];

const footerLinks = ["Privacy Policy", "Terms of service", "Cookies settings"];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="flex items-center gap-12 px-5 py-12 w-full bg-white flex-col">
      <div className="flex flex-col max-w-screen-xl items-start gap-12 w-full">
        <div className="flex-col items-start gap-12 w-full flex">
          <div className="flex flex-col items-start gap-5 w-full">
            <div className="w-[84px] h-9">
              <span className="text-2xl font-bold">Viruox</span>
            </div>

            <p className="w-full font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-black text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
              Get the latest updates on our digital services and new releases.
            </p>

            <div className="flex flex-col items-start gap-3 w-full">
              <div className="flex flex-col items-start gap-4 w-full">
                <Input
                  type="email"
                  placeholder="Email address"
                  className="w-full border border-black rounded-none font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)] placeholder:text-[#00000099]"
                />

                <Button
                  variant="outline"
                  className="w-full border border-black rounded-none font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-black text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)] bg-white hover:bg-gray-50"
                >
                  Subscribe
                </Button>
              </div>

              <p className="w-full font-text-tiny-normal font-[number:var(--text-tiny-normal-font-weight)] text-black text-[length:var(--text-tiny-normal-font-size)] tracking-[var(--text-tiny-normal-letter-spacing)] leading-[var(--text-tiny-normal-line-height)] [font-style:var(--text-tiny-normal-font-style)]">
                By subscribing you agree to our Privacy Policy and consent to
                receive updates.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-start gap-10 w-full">
            <nav className="flex flex-col items-start gap-3 w-full">
              <h3 className="w-full font-text-regular-semi-bold font-[number:var(--text-regular-semi-bold-font-weight)] text-black text-[length:var(--text-regular-semi-bold-font-size)] tracking-[var(--text-regular-semi-bold-letter-spacing)] leading-[var(--text-regular-semi-bold-line-height)] [font-style:var(--text-regular-semi-bold-font-style)]">
                Services
              </h3>

              <ul className="flex flex-col items-start w-full">
                {servicesLinks.map((link, index) => (
                  <li key={index} className="flex items-start px-0 py-2 w-full">
                    <a
                      href="#"
                      className="flex-1 font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-black text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] [font-style:var(--text-small-normal-font-style)] hover:underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav className="flex flex-col items-start gap-3 w-full">
              <h3 className="w-full font-text-regular-semi-bold font-[number:var(--text-regular-semi-bold-font-weight)] text-black text-[length:var(--text-regular-semi-bold-font-size)] tracking-[var(--text-regular-semi-bold-letter-spacing)] leading-[var(--text-regular-semi-bold-line-height)] [font-style:var(--text-regular-semi-bold-font-style)]">
                Company
              </h3>

              <ul className="flex flex-col items-start w-full">
                {companyLinks.map((link, index) => (
                  <li key={index} className="flex items-start px-0 py-2 w-full">
                    <a
                      href="#"
                      className="flex-1 font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-black text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] [font-style:var(--text-small-normal-font-style)] hover:underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav className="flex flex-col items-start gap-3 w-full">
              <h3 className="w-full font-text-regular-semi-bold font-[number:var(--text-regular-semi-bold-font-weight)] text-black text-[length:var(--text-regular-semi-bold-font-size)] tracking-[var(--text-regular-semi-bold-letter-spacing)] leading-[var(--text-regular-semi-bold-line-height)] [font-style:var(--text-regular-semi-bold-font-style)]">
                Follow us
              </h3>

              <ul className="flex flex-col items-start w-full">
                {socialLinks.map((social, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 px-0 py-2 w-full"
                  >
                    <img
                      className="w-6 h-6"
                      alt={social.name}
                      src={social.icon}
                    />
                    <a
                      href="#"
                      className="font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-black text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] whitespace-nowrap [font-style:var(--text-small-normal-font-style)] hover:underline"
                    >
                      {social.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="flex flex-col items-start gap-6 w-full">
          <Separator className="w-full bg-black" />

          <div className="items-start gap-8 pt-0 pb-4 px-0 flex flex-col w-full">
            <nav className="inline-flex items-start gap-4 flex-col">
              {footerLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="font-text-small-link font-[number:var(--text-small-link-font-weight)] text-black text-[length:var(--text-small-link-font-size)] tracking-[var(--text-small-link-letter-spacing)] leading-[var(--text-small-link-line-height)] underline whitespace-nowrap [font-style:var(--text-small-link-font-style)]"
                >
                  {link}
                </a>
              ))}
            </nav>

            <p className="font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-black text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] whitespace-nowrap [font-style:var(--text-small-normal-font-style)]">
              © 2025 Viruox. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
