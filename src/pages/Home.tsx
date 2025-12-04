import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { ArrowRight, Code, Palette, Database, Presentation, Smartphone, Settings } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Front-end Development",
    description: "Modern, responsive web interfaces with cutting-edge technologies",
  },
  {
    icon: Palette,
    title: "Logo & Branding",
    description: "Unique visual identities that make your brand unforgettable",
  },
  {
    icon: Database,
    title: "Database Solutions",
    description: "Scalable database architecture built for performance",
  },
  {
    icon: Presentation,
    title: "Presentation Design",
    description: "Professional PowerPoint designs that captivate audiences",
  },
  {
    icon: Smartphone,
    title: "Application Development",
    description: "Custom applications tailored to your business needs",
  },
  {
    icon: Settings,
    title: "Digital Solutions",
    description: "Comprehensive software services beyond the standard",
  },
];

export const Home = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full">
      <section className="relative w-full min-h-[600px] bg-[linear-gradient(135deg,#1e293b_0%,#334155_100%)] flex items-center justify-center px-5 py-20">
        <div className="max-w-screen-xl w-full text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-white/10 rounded-full">
            <span className="text-white font-heading-tagline text-[length:var(--heading-tagline-font-size)]">
              Digital Excellence Since Day One
            </span>
          </div>

          <h1 className="font-heading-h1 text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Building Digital Solutions
            <br />
            That Drive Success
          </h1>

          <p className="font-text-medium-normal text-white/90 text-lg md:text-xl max-w-3xl mx-auto mb-10">
            Viruox delivers professional software development, design, and digital services.
            We transform your vision into powerful digital solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/services">
              <Button className="px-8 py-6 text-lg bg-white text-black hover:bg-gray-100">
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="px-8 py-6 text-lg border-2 border-white text-white hover:bg-white/10">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full px-5 py-20 bg-white">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block mb-4 px-4 py-2 bg-gray-100 rounded-full font-heading-tagline text-[length:var(--heading-tagline-font-size)] text-gray-700">
              Our Services
            </span>
            <h2 className="font-heading-h2 text-4xl md:text-5xl font-bold mb-6">
              What We Offer
            </h2>
            <p className="font-text-regular-normal text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive digital services designed to elevate your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="border-2 hover:border-gray-900 transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-gray-900 rounded-lg flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-heading-h5 text-2xl font-bold mb-3">
                      {service.title}
                    </h3>
                    <p className="font-text-regular-normal text-gray-600">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" className="px-8 py-6 text-lg border-2 border-black hover:bg-black hover:text-white">
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full px-5 py-20 bg-gray-50">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block mb-4 px-4 py-2 bg-white rounded-full font-heading-tagline text-[length:var(--heading-tagline-font-size)] text-gray-700">
                Why Choose Us
              </span>
              <h2 className="font-heading-h2 text-4xl md:text-5xl font-bold mb-6">
                Your Trusted Technology Partner
              </h2>
              <p className="font-text-regular-normal text-gray-600 text-lg mb-8">
                With a dedicated team of three expert professionals, Viruox combines technical excellence
                with personalized service. We understand that every project is unique, and we deliver
                solutions that exceed expectations.
              </p>
              <Link to="/about">
                <Button className="px-8 py-6 text-lg bg-black text-white hover:bg-gray-800">
                  Meet Our Team
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 text-center border-2">
                <CardContent className="p-0">
                  <div className="text-4xl font-bold text-gray-900 mb-2">50+</div>
                  <div className="font-text-regular-normal text-gray-600">Projects Completed</div>
                </CardContent>
              </Card>
              <Card className="p-6 text-center border-2">
                <CardContent className="p-0">
                  <div className="text-4xl font-bold text-gray-900 mb-2">3</div>
                  <div className="font-text-regular-normal text-gray-600">Expert Team Members</div>
                </CardContent>
              </Card>
              <Card className="p-6 text-center border-2">
                <CardContent className="p-0">
                  <div className="text-4xl font-bold text-gray-900 mb-2">100%</div>
                  <div className="font-text-regular-normal text-gray-600">Client Satisfaction</div>
                </CardContent>
              </Card>
              <Card className="p-6 text-center border-2">
                <CardContent className="p-0">
                  <div className="text-4xl font-bold text-gray-900 mb-2">24/7</div>
                  <div className="font-text-regular-normal text-gray-600">Support Available</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-5 py-20 bg-gray-900">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="font-heading-h2 text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="font-text-regular-normal text-white/90 text-lg max-w-2xl mx-auto mb-10">
            Let's discuss how we can bring your digital vision to life with innovative solutions
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button className="px-8 py-6 text-lg bg-white text-black hover:bg-gray-100">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline" className="px-8 py-6 text-lg border-2 border-white text-white hover:bg-white/10">
                View Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
