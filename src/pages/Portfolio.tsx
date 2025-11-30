import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { ExternalLink, Filter } from "lucide-react";

const categories = ["All", "Web Development", "Design", "Applications", "Database"];

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Full-stack e-commerce solution with payment integration, inventory management, and customer dashboard.",
    image: "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Corporate Brand Identity",
    category: "Design",
    description: "Complete brand redesign including logo, color palette, typography, and brand guidelines.",
    image: "https://images.pexels.com/photos/6476588/pexels-photo-6476588.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Branding", "Logo Design", "Guidelines"],
  },
  {
    title: "Real Estate Web App",
    category: "Web Development",
    description: "Property listing platform with advanced search filters, virtual tours, and agent management system.",
    image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["React", "PostgreSQL", "Maps API"],
  },
  {
    title: "Mobile Task Manager",
    category: "Applications",
    description: "Cross-platform mobile application for project and task management with team collaboration features.",
    image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["React Native", "Firebase", "Mobile"],
  },
  {
    title: "Healthcare Database System",
    category: "Database",
    description: "Secure patient records management system with appointment scheduling and medical history tracking.",
    image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["SQL Server", "Security", "HIPAA Compliant"],
  },
  {
    title: "Restaurant Website",
    category: "Web Development",
    description: "Modern restaurant website with online reservation system, menu management, and gallery.",
    image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["React", "Booking System", "CMS"],
  },
  {
    title: "Presentation Templates",
    category: "Design",
    description: "Professional PowerPoint template collection for business presentations and sales pitches.",
    image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["PowerPoint", "Templates", "Business"],
  },
  {
    title: "Inventory Management System",
    category: "Applications",
    description: "Custom inventory tracking application with barcode scanning and automated reordering.",
    image: "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Desktop App", "Automation", "Reporting"],
  },
  {
    title: "Analytics Dashboard",
    category: "Web Development",
    description: "Real-time data visualization dashboard with customizable widgets and export capabilities.",
    image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["React", "D3.js", "Real-time"],
  },
];

export const Portfolio = (): JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="flex flex-col w-full">
      <section className="w-full px-5 py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-screen-xl mx-auto text-center">
          <span className="inline-block mb-4 px-4 py-2 bg-white/10 rounded-full font-heading-tagline text-[length:var(--heading-tagline-font-size)] text-white">
            Our Work
          </span>
          <h1 className="font-heading-h1 text-4xl md:text-6xl font-bold text-white mb-6">
            Portfolio Showcase
          </h1>
          <p className="font-text-regular-normal text-white/90 text-lg md:text-xl max-w-3xl mx-auto">
            Explore our recent projects and see how we've helped businesses achieve their digital goals
          </p>
        </div>
      </section>

      <section className="w-full px-5 py-20 bg-white">
        <div className="max-w-screen-xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-gray-600" />
                <span className="font-heading-tagline text-[length:var(--heading-tagline-font-size)] text-gray-900">
                  Filter by category:
                </span>
              </div>

              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    className={`${
                      selectedCategory === category
                        ? "bg-gray-900 text-white"
                        : "border-gray-300 text-gray-700 hover:border-gray-900"
                    }`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            <p className="font-text-regular-normal text-gray-600">
              Showing {filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="border-2 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ExternalLink className="w-8 h-8 text-white" />
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="inline-block mb-3 px-3 py-1 bg-gray-100 rounded-full">
                    <span className="font-text-small-normal text-[length:var(--text-small-normal-font-size)] text-gray-700">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="font-heading-h5 text-xl font-bold mb-3">
                    {project.title}
                  </h3>

                  <p className="font-text-regular-normal text-gray-600 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-900 text-white text-sm rounded-full font-text-small-normal"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="font-text-regular-normal text-gray-600 text-lg">
                No projects found in this category
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="w-full px-5 py-20 bg-gray-50">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block mb-4 px-4 py-2 bg-white rounded-full font-heading-tagline text-[length:var(--heading-tagline-font-size)] text-gray-700">
                Success Stories
              </span>
              <h2 className="font-heading-h2 text-4xl md:text-5xl font-bold mb-6">
                Real Results for Real Businesses
              </h2>
              <p className="font-text-regular-normal text-gray-600 text-lg mb-6">
                Each project in our portfolio represents a partnership built on trust, expertise, and
                dedication to excellence. We take pride in delivering solutions that exceed expectations
                and drive measurable business growth.
              </p>
              <p className="font-text-regular-normal text-gray-600 text-lg mb-8">
                From startups to established enterprises, we've helped businesses across various industries
                achieve their digital goals through innovative technology and creative design.
              </p>
              <Link to="/contact">
                <Button className="px-8 py-6 text-lg bg-gray-900 text-white hover:bg-gray-800">
                  Start Your Project
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 border-2 text-center">
                <CardContent className="p-0">
                  <div className="text-4xl font-bold text-gray-900 mb-2">50+</div>
                  <div className="font-text-regular-normal text-gray-600">Completed Projects</div>
                </CardContent>
              </Card>
              <Card className="p-6 border-2 text-center">
                <CardContent className="p-0">
                  <div className="text-4xl font-bold text-gray-900 mb-2">40+</div>
                  <div className="font-text-regular-normal text-gray-600">Happy Clients</div>
                </CardContent>
              </Card>
              <Card className="p-6 border-2 text-center">
                <CardContent className="p-0">
                  <div className="text-4xl font-bold text-gray-900 mb-2">100%</div>
                  <div className="font-text-regular-normal text-gray-600">Satisfaction Rate</div>
                </CardContent>
              </Card>
              <Card className="p-6 border-2 text-center">
                <CardContent className="p-0">
                  <div className="text-4xl font-bold text-gray-900 mb-2">5+</div>
                  <div className="font-text-regular-normal text-gray-600">Years Experience</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-5 py-20 bg-gray-900">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="font-heading-h2 text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Create Something Amazing?
          </h2>
          <p className="font-text-regular-normal text-white/90 text-lg max-w-2xl mx-auto mb-10">
            Let's discuss your project and bring your vision to life
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button className="px-8 py-6 text-lg bg-white text-black hover:bg-gray-100">
                Get Started
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" className="px-8 py-6 text-lg border-2 border-white text-white hover:bg-white/10">
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
