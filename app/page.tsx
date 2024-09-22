import Image from "next/image";
import Navbar from "@/components/ui/navbar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Info, Briefcase, HeartHandshake, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-[#f9f3e7]">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 lg:ml-16 p-8">
        {/* Hero Section */}
        <section id="about" className="mb-16">
          <h1
            className="mb-6 text-4xl font-bold"
            style={{ fontFamily: "Brush Script MT, cursive" }}
          >
            Digital experiences that endure,
          </h1>
          <h2
            className="mb-8 text-3xl"
            style={{ fontFamily: "Brush Script MT, cursive" }}
          >
            where every line is a stroke of mastery.
          </h2>
          <div className="flex justify-between">
            <div className="w-2/3">
              <p
                className="mb-6 text-lg"
                style={{ fontFamily: "Courier New, monospace" }}
              >
                Our mission is simple: to transform your vision into a seamless
                web experience that feels timeless and enduring.
              </p>
              <p
                className="mb-6 text-lg"
                style={{ fontFamily: "Courier New, monospace" }}
              >
                Each project we undertake is a new journey, where we blend
                creativity and technology, tradition and innovation. Just as ink
                flows effortlessly on paper, we let your ideas take form through
                our designs and code.
              </p>
            </div>
            <div className="w-1/3">
              {/* Placeholder for the brush painting illustration */}
              <div className="h-64 w-full bg-gray-200 rounded-lg"></div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="mb-16">
          <h2 className="mb-8 text-3xl font-bold">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "設計", subtitle: "Design" },
              { title: "開発", subtitle: "Development" },
              { title: "支持", subtitle: "Support" },
            ].map((service, index) => (
              <Card
                key={index}
                className="bg-[#a05f5f] text-white hover:bg-[#8B4B4B] transition-colors duration-200"
              >
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p>{service.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="mb-16">
          <h2 className="mb-8 text-3xl font-bold">Our Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="h-64 bg-gray-300 rounded-lg"></div>
            ))}
          </div>
        </section>

        {/* Quote Section */}
        <section className="mb-16">
          <blockquote className="text-2xl italic text-center">
            Every project we bring to life is a story shaped by collaboration,
            vision, and careful execution.
          </blockquote>
        </section>

        {/* Contact Form */}
        <section id="contact" className="mb-16">
          <Card className="bg-[#a05f5f] text-white">
            <CardContent className="p-6">
              <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
              <form className="space-y-4">
                <Input
                  placeholder="Your Name"
                  className="bg-white text-black"
                />
                <Input
                  placeholder="Your E-mail"
                  type="email"
                  className="bg-white text-black"
                />
                <Textarea
                  placeholder="Your Message"
                  className="bg-white text-black"
                />
                <Button className="w-full bg-white text-[#8B4B4B] hover:bg-gray-100">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm">
          <p>© 2023 Your Company Name. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
