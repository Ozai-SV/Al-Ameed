import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Code, Palette, Database, Presentation, Smartphone, Settings, Server, Layers } from "lucide-react";

const servicesData = [
  {
    icon: Code,
    title: "Front-end Web Design & UI Development",
    description: "Create stunning, responsive user interfaces with modern frameworks like React, Vue, and Angular. We build fast, accessible, and visually appealing websites that provide exceptional user experiences across all devices.",
    features: [
      "Responsive design for all screen sizes",
      "Modern JavaScript frameworks",
      "Performance optimization",
      "Cross-browser compatibility",
      "Accessible user interfaces",
    ],
  },
  {
    icon: Palette,
    title: "Logo Design & Branding",
    description: "Craft memorable visual identities that represent your brand's essence. From logo concepts to complete brand guidelines, we create designs that make lasting impressions and build recognition.",
    features: [
      "Custom logo design",
      "Brand identity guidelines",
      "Color palette development",
      "Typography selection",
      "Brand asset creation",
    ],
  },
  {
    icon: Presentation,
    title: "PowerPoint Presentation Design",
    description: "Transform your ideas into compelling visual narratives. We design professional presentations that engage audiences, communicate clearly, and leave memorable impressions.",
    features: [
      "Custom slide templates",
      "Data visualization",
      "Infographic design",
      "Animation and transitions",
      "Professional formatting",
    ],
  },
  {
    icon: Server,
    title: "Back-end Development",
    description: "Build robust server-side applications with secure APIs and efficient data processing. We develop scalable back-end systems using Node.js, Python, PHP, and other modern technologies.",
    features: [
      "RESTful API development",
      "Authentication & authorization",
      "Third-party integrations",
      "Server optimization",
      "Security implementation",
    ],
  },
  {
    icon: Smartphone,
    title: "Application & System Development",
    description: "Develop custom applications tailored to your specific business needs. From enterprise systems to mobile apps, we create solutions that streamline operations and enhance productivity.",
    features: [
      "Custom business applications",
      "Mobile app development",
      "Desktop applications",
      "System integration",
      "Workflow automation",
    ],
  },
  {
    icon: Database,
    title: "Database Creation & Management",
    description: "Design and implement efficient database architectures that scale with your business. We work with SQL and NoSQL databases to ensure your data is organized, secure, and accessible.",
    features: [
      "Database design & modeling",
      "Performance optimization",
      "Data migration services",
      "Backup & recovery solutions",
      "Database security",
    ],
  },
  {
    icon: Layers,
    title: "Full-Stack Development",
    description: "End-to-end development services combining front-end and back-end expertise. We build complete web applications with seamless integration between user interface and server logic.",
    features: [
      "Complete application development",
      "Technology stack selection",
      "API design & implementation",
      "Cloud deployment",
      "Continuous maintenance",
    ],
  },
  {
    icon: Settings,
    title: "Other Software & Digital Solutions",
    description: "Beyond standard services, we offer specialized digital solutions including automation, integration, optimization, and custom software development to address unique business challenges.",
    features: [
      "Process automation",
      "System integration",
      "Legacy system modernization",
      "Performance consulting",
      "Custom software solutions",
    ],
  },
];

export const Services = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full">
      <section className="w-full px-5 py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-screen-xl mx-auto text-center">
          <span className="inline-block mb-4 px-4 py-2 bg-white/10 rounded-full font-heading-tagline text-[length:var(--heading-tagline-font-size)] text-white">
            Our Services
          </span>
          <h1 className="font-heading-h1 text-4xl md:text-6xl font-bold text-white mb-6">
            Comprehensive Digital Solutions
          </h1>
          <p className="font-text-regular-normal text-white/90 text-lg md:text-xl max-w-3xl mx-auto">
            From design to development, we provide end-to-end services to bring your digital vision to life
          </p>
        </div>
      </section>

      <section className="w-full px-5 py-20 bg-white">
        <div className="max-w-screen-xl mx-auto">
          <div className="space-y-12">
            {servicesData.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="border-2 hover:border-gray-900 transition-all duration-300 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                      <div className="lg:col-span-1 bg-gray-900 p-8 flex flex-col justify-center items-center text-center">
                        <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-6">
                          <Icon className="w-10 h-10 text-gray-900" />
                        </div>
                        <h3 className="font-heading-h5 text-2xl font-bold text-white mb-3">
                          {service.title}
                        </h3>
                      </div>

                      <div className="lg:col-span-2 p-8">
                        <p className="font-text-regular-normal text-gray-700 text-lg mb-6">
                          {service.description}
                        </p>

                        <div className="space-y-3">
                          <h4 className="font-heading-tagline text-[length:var(--heading-tagline-font-size)] font-semibold text-gray-900 mb-4">
                            Key Features:
                          </h4>
                          <ul className="space-y-2">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-gray-900 rounded-full mt-2"></div>
                                <span className="font-text-regular-normal text-gray-600">
                                  {feature}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="w-full px-5 py-20 bg-gray-50">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading-h2 text-4xl md:text-5xl font-bold mb-6">
              Our Development Process
            </h2>
            <p className="font-text-regular-normal text-gray-600 text-lg max-w-2xl mx-auto">
              We follow a structured approach to ensure quality and timely delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your needs and project goals" },
              { step: "02", title: "Planning", description: "Creating detailed roadmaps and specifications" },
              { step: "03", title: "Development", description: "Building your solution with best practices" },
              { step: "04", title: "Delivery", description: "Launch, support, and continuous improvement" },
            ].map((phase, index) => (
              <Card key={index} className="border-2 p-6 text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="text-5xl font-bold text-gray-200 mb-4">{phase.step}</div>
                  <h3 className="font-heading-h5 text-xl font-bold mb-3">{phase.title}</h3>
                  <p className="font-text-regular-normal text-gray-600">{phase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full px-5 py-20 bg-gray-900">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="font-heading-h2 text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="font-text-regular-normal text-white/90 text-lg max-w-2xl mx-auto mb-10">
            Let's discuss your project and create a solution that meets your goals
          </p>
          <Link to="/contact">
            <Button className="px-8 py-6 text-lg bg-white text-black hover:bg-gray-100">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};
