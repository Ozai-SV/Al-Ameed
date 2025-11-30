import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Target, Lightbulb, Users, Award, ArrowRight } from "lucide-react";

const teamMembers = [
  {
    name: "Team Member One",
    role: "Full-Stack Developer & Founder",
    description: "Expert in front-end and back-end development with a passion for creating seamless digital experiences. Specializes in React, Node.js, and database architecture.",
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Team Member Two",
    role: "UI/UX Designer & Brand Specialist",
    description: "Creative designer focused on user-centered design and visual branding. Transforms ideas into beautiful, functional interfaces and memorable brand identities.",
    image: "https://images.pexels.com/photos/3782235/pexels-photo-3782235.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    name: "Team Member Three",
    role: "Software Engineer & Systems Architect",
    description: "Technical specialist in system development and database management. Builds robust, scalable solutions that power business operations efficiently.",
    image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const values = [
  {
    icon: Target,
    title: "Quality First",
    description: "We never compromise on quality. Every project receives our full attention to detail and commitment to excellence.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We stay ahead of technology trends, bringing fresh perspectives and modern solutions to every challenge.",
  },
  {
    icon: Users,
    title: "Client Focus",
    description: "Your success is our success. We build lasting partnerships through transparent communication and dedicated support.",
  },
  {
    icon: Award,
    title: "Expertise",
    description: "With diverse skills across development, design, and strategy, we deliver comprehensive solutions.",
  },
];

export const About = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full">
      <section className="w-full px-5 py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-screen-xl mx-auto text-center">
          <span className="inline-block mb-4 px-4 py-2 bg-white/10 rounded-full font-heading-tagline text-[length:var(--heading-tagline-font-size)] text-white">
            About Us
          </span>
          <h1 className="font-heading-h1 text-4xl md:text-6xl font-bold text-white mb-6">
            Meet Al-Ameed
          </h1>
          <p className="font-text-regular-normal text-white/90 text-lg md:text-xl max-w-3xl mx-auto">
            A dedicated team of three professionals committed to delivering exceptional digital solutions
          </p>
        </div>
      </section>

      <section className="w-full px-5 py-20 bg-white">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <span className="inline-block mb-4 px-4 py-2 bg-gray-100 rounded-full font-heading-tagline text-[length:var(--heading-tagline-font-size)] text-gray-700">
                Our Story
              </span>
              <h2 className="font-heading-h2 text-4xl md:text-5xl font-bold mb-6">
                Building Digital Excellence Together
              </h2>
              <p className="font-text-regular-normal text-gray-600 text-lg mb-6">
                Al-Ameed was founded on a simple belief: that exceptional digital solutions come from
                a combination of technical expertise, creative vision, and genuine dedication to client success.
              </p>
              <p className="font-text-regular-normal text-gray-600 text-lg mb-6">
                Our three-person team brings together diverse skills in development, design, and systems
                architecture. This focused approach allows us to maintain high quality standards while
                providing personalized attention to every project.
              </p>
              <p className="font-text-regular-normal text-gray-600 text-lg">
                We believe in building long-term partnerships with our clients, delivering solutions that
                not only meet immediate needs but grow and evolve with your business.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <Card className="p-6 border-2">
                  <CardContent className="p-0">
                    <div className="text-4xl font-bold text-gray-900 mb-2">50+</div>
                    <div className="font-text-regular-normal text-gray-600">Successful Projects</div>
                  </CardContent>
                </Card>
                <Card className="p-6 border-2">
                  <CardContent className="p-0">
                    <div className="text-4xl font-bold text-gray-900 mb-2">100%</div>
                    <div className="font-text-regular-normal text-gray-600">Client Satisfaction</div>
                  </CardContent>
                </Card>
              </div>
              <div className="space-y-6 pt-12">
                <Card className="p-6 border-2">
                  <CardContent className="p-0">
                    <div className="text-4xl font-bold text-gray-900 mb-2">3</div>
                    <div className="font-text-regular-normal text-gray-600">Expert Professionals</div>
                  </CardContent>
                </Card>
                <Card className="p-6 border-2">
                  <CardContent className="p-0">
                    <div className="text-4xl font-bold text-gray-900 mb-2">24/7</div>
                    <div className="font-text-regular-normal text-gray-600">Support Available</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="text-center mb-12">
              <span className="inline-block mb-4 px-4 py-2 bg-gray-100 rounded-full font-heading-tagline text-[length:var(--heading-tagline-font-size)] text-gray-700">
                Our Values
              </span>
              <h2 className="font-heading-h2 text-4xl md:text-5xl font-bold mb-6">
                What Drives Us
              </h2>
              <p className="font-text-regular-normal text-gray-600 text-lg max-w-2xl mx-auto">
                The principles that guide our work and shape our relationships with clients
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="border-2 hover:border-gray-900 transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-heading-h5 text-xl font-bold mb-3">
                        {value.title}
                      </h3>
                      <p className="font-text-regular-normal text-gray-600">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <div>
            <div className="text-center mb-12">
              <span className="inline-block mb-4 px-4 py-2 bg-gray-100 rounded-full font-heading-tagline text-[length:var(--heading-tagline-font-size)] text-gray-700">
                Our Team
              </span>
              <h2 className="font-heading-h2 text-4xl md:text-5xl font-bold mb-6">
                Meet The Professionals
              </h2>
              <p className="font-text-regular-normal text-gray-600 text-lg max-w-2xl mx-auto">
                Three dedicated experts working together to bring your digital vision to life
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="border-2 overflow-hidden hover:shadow-xl transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <CardContent className="p-6">
                    <h3 className="font-heading-h5 text-xl font-bold mb-2">
                      {member.name}
                    </h3>
                    <p className="font-heading-tagline text-[length:var(--heading-tagline-font-size)] text-gray-600 mb-4">
                      {member.role}
                    </p>
                    <p className="font-text-regular-normal text-gray-600">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-5 py-20 bg-gray-900">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="font-heading-h2 text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Work Together
          </h2>
          <p className="font-text-regular-normal text-white/90 text-lg max-w-2xl mx-auto mb-10">
            Ready to start your project? We're here to help turn your ideas into reality
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button className="px-8 py-6 text-lg bg-white text-black hover:bg-gray-100">
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" className="px-8 py-6 text-lg border-2 border-white text-white hover:bg-white/10">
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
