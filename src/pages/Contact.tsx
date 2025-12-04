import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent } from "../components/ui/card";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

export const Contact = (): JSX.Element => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex flex-col w-full">
      <section className="w-full px-5 py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-screen-xl mx-auto text-center">
          <span className="inline-block mb-4 px-4 py-2 bg-white/10 rounded-full font-heading-tagline text-[length:var(--heading-tagline-font-size)] text-white">
            Get In Touch
          </span>
          <h1 className="font-heading-h1 text-4xl md:text-6xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="font-text-regular-normal text-white/90 text-lg md:text-xl max-w-3xl mx-auto">
            Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      <section className="w-full px-5 py-20 bg-white">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-2 hover:border-gray-900 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading-h5 text-xl font-bold mb-3">Email Us</h3>
                <p className="font-text-regular-normal text-gray-600 mb-2">
                  Send us an email anytime
                </p>
                <a
                  href="mailto:info@viruox.com"
                  className="font-text-regular-normal text-gray-900 hover:underline"
                >
                  info@viruox.com
                </a>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-gray-900 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading-h5 text-xl font-bold mb-3">Call Us</h3>
                <p className="font-text-regular-normal text-gray-600 mb-2">
                  Available 24/7 for your needs
                </p>
                <a
                  href="tel:+1234567890"
                  className="font-text-regular-normal text-gray-900 hover:underline"
                >
                  +123 456 7890
                </a>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-gray-900 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading-h5 text-xl font-bold mb-3">Visit Us</h3>
                <p className="font-text-regular-normal text-gray-600 mb-2">
                  Come say hello
                </p>
                <p className="font-text-regular-normal text-gray-900">
                  Your City, Your Country
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="border-2">
              <CardContent className="p-8">
                <div className="mb-8 text-center">
                  <h2 className="font-heading-h2 text-3xl md:text-4xl font-bold mb-4">
                    Send Us a Message
                  </h2>
                  <p className="font-text-regular-normal text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="font-heading-h5 text-2xl font-bold mb-3">
                      Message Sent Successfully!
                    </h3>
                    <p className="font-text-regular-normal text-gray-600">
                      Thank you for contacting us. We'll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block font-text-regular-semi-bold text-gray-900 mb-2"
                        >
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block font-text-regular-semi-bold text-gray-900 mb-2"
                        >
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block font-text-regular-semi-bold text-gray-900 mb-2"
                        >
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+123 456 7890"
                          className="w-full"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="subject"
                          className="block font-text-regular-semi-bold text-gray-900 mb-2"
                        >
                          Subject *
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Project Inquiry"
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block font-text-regular-semi-bold text-gray-900 mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project..."
                        rows={6}
                        className="flex w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 font-text-regular-normal"
                      />
                    </div>

                    <div className="pt-4">
                      <Button
                        type="submit"
                        className="w-full px-8 py-6 text-lg bg-gray-900 text-white hover:bg-gray-800"
                      >
                        Send Message
                        <Send className="ml-2 w-5 h-5" />
                      </Button>
                    </div>

                    <p className="text-center font-text-small-normal text-gray-600 mt-4">
                      * Required fields
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full px-5 py-20 bg-gray-50">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading-h2 text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
            <p className="font-text-regular-normal text-gray-600 text-lg max-w-2xl mx-auto">
              Quick answers to common questions about our services and process
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "What is your typical project timeline?",
                answer: "Project timelines vary based on scope and complexity. Simple websites typically take 2-4 weeks, while more complex applications can take 2-3 months. We provide detailed timelines during the initial consultation.",
              },
              {
                question: "Do you offer ongoing support after project completion?",
                answer: "Yes, we provide 24/7 support and maintenance services. We offer various support packages to ensure your digital solutions continue to perform optimally.",
              },
              {
                question: "What are your payment terms?",
                answer: "We typically work with a 50% upfront payment and 50% upon completion. For larger projects, we can arrange milestone-based payments. Custom payment plans are available upon discussion.",
              },
              {
                question: "Can you work with our existing systems?",
                answer: "Absolutely. We have experience integrating with various existing systems and platforms. We'll assess your current infrastructure and recommend the best approach for seamless integration.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border-2">
                <CardContent className="p-6">
                  <h3 className="font-heading-h5 text-xl font-bold mb-3">
                    {faq.question}
                  </h3>
                  <p className="font-text-regular-normal text-gray-600">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
