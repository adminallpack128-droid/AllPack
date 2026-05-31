"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "../Components/Ui/button";
import Link from "next/link";
import { FaAward, FaUsers, FaBullseye, FaLightbulb, FaCheckCircle, FaTrophy } from "react-icons/fa";
import Image from "next/image";
import QuoteButtonWithDialog from "../Components/getQuotePopup";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-12 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <Badge className="bg-orange-500/20 text-orange-300 hover:bg-orange-500/30 text-lg justify-center w-fit mx-auto">
              Our Story
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Transforming Packaging into
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                {" "}
                Brand Success
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Since inception, Allpack Creation has been your trusted partner in creating exceptional packaging solutions that elevate your products and captivate your customers. We combine creative design, quality materials, and industry expertise to deliver packaging that sells.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-12 lg:py-20 bg-[#F5F3ED]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Mission */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-orange-100 rounded-lg">
                  <FaBullseye className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To provide innovative, sustainable, and cost-effective packaging solutions that help agricultural businesses communicate their brand story effectively. We empower farmers, dealers, and manufacturers with packaging that doesn&apos;t just protect products—it sells them.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                  <span>Custom design for your unique brand identity</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                  <span>Premium quality materials and printing</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                  <span>Competitive pricing and fast delivery</span>
                </li>
              </ul>
            </div>

            {/* Vision */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-orange-100 rounded-lg">
                  <FaLightbulb className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To become India&apos;s most trusted packaging design and manufacturing partner, recognized for innovation, quality, and customer success. We envision a future where every farmer and business has access to world-class packaging that represents their values and drives growth.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                  <span>Expand across India with local expertise</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                  <span>Implement sustainable packaging solutions</span>
                </li>
                <li className="flex items-start gap-2">
                  <FaCheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                  <span>Lead innovation in agricultural packaging</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Allpack Creation
            </h2>
            <p className="text-lg text-gray-600">
              We&apos;ve built our reputation on reliability, innovation, and customer success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: FaAward,
                title: "Industry Expertise",
                description: "8+ years of experience designing and manufacturing packaging solutions for agricultural, industrial, and consumer products across India.",
              },
              {
                icon: FaUsers,
                title: "Customer-Focused",
                description: "We listen to your needs, understand your challenges, and create packaging solutions that directly impact your bottom line and brand perception.",
              },
              {
                icon: FaTrophy,
                title: "Quality Guaranteed",
                description: "Premium materials, expert printing, rigorous quality control, and compliance with industry standards ensure every product exceeds expectations.",
              },
              {
                icon: FaCheckCircle,
                title: "Fast Delivery",
                description: "Pan-India shipping with 10-12 day delivery. We maintain inventory of popular designs to ensure quick fulfillment of urgent orders.",
              },
              {
                icon: FaLightbulb,
                title: "Innovative Design",
                description: "Our creative team stays ahead of packaging trends, combining market research, brand strategy, and visual excellence in every design.",
              },
              {
                icon: FaBullseye,
                title: "Competitive Pricing",
                description: "Professional designs and quality materials at prices that work for your business. Volume discounts and flexible payment options available.",
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#F5F3ED] rounded-2xl p-8 border border-gray-200 hover:border-orange-400 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-6 h-6 text-orange-600" />
                    <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Journey / Timeline */}
      <section className="py-12 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Growth Journey
            </h2>
            <p className="text-lg text-gray-600">
              From a small design studio to a trusted national partner
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                year: "2016",
                title: "The Beginning",
                description: "Allpack Creation was founded with a simple vision: to provide exceptional packaging design services to agricultural businesses. Started with a small team and big dreams.",
              },
              {
                year: "2017-2018",
                title: "Building Excellence",
                description: "Expanded our design capabilities and manufacturing partnerships. Developed our first 50+ design variations for fertilizer and agricultural products. Earned trust of 100+ clients across India.",
              },
              {
                year: "2019-2020",
                title: "Scaling Operations",
                description: "Established partnerships with major suppliers and logistics providers. Implemented quality control processes and regulatory compliance systems. Became one of the preferred packaging partners for major agricultural dealers.",
              },
              {
                year: "2021-Present",
                title: "Digital Transformation & Growth",
                description: "Launched our digital platform for easy ordering and tracking. Expanded product range to include feed bags, agricultural bags, and specialized packaging. Now serving 200+ happy clients with 50+ unique designs in our portfolio.",
              },
            ].map((milestone, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {idx + 1}
                  </div>
                  {idx < 3 && <div className="w-1 h-20 bg-orange-200 mt-2" />}
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-bold text-gray-900">{milestone.year}: {milestone.title}</h3>
                  <p className="text-gray-700 mt-2 leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { number: "200+", label: "Designs Created", icon: "🎨" },
              { number: "100+", label: "Happy Clients", icon: "😊" },
              { number: "8+", label: "Years Experience", icon: "📅" },
              { number: "50+", label: "Design Varieties", icon: "📦" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-[#F5F3ED] rounded-2xl p-8 text-center border border-gray-200 hover:border-orange-400 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl lg:text-4xl font-bold text-orange-600 mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-12 lg:py-20 bg-[#F5F3ED]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600">
              These principles guide every decision we make
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Quality First",
                description: "We never compromise on quality. Every design, every print, every delivery must exceed expectations. Your reputation is our responsibility.",
              },
              {
                title: "Innovation",
                description: "We stay ahead of market trends and continuously improve our designs and processes. Your packaging should stand out and tell your brand story.",
              },
              {
                title: "Integrity",
                description: "We believe in transparent communication, fair pricing, and delivering exactly what we promise. Your trust is our most valuable asset.",
              },
              {
                title: "Customer Success",
                description: "Your success is our success. We're committed to creating packaging that directly contributes to your sales, brand recognition, and customer satisfaction.",
              },
              {
                title: "Sustainability",
                description: "We care about the environment. We actively work towards sustainable packaging solutions that minimize waste and environmental impact.",
              },
              {
                title: "Continuous Improvement",
                description: "We listen to feedback, learn from every project, and constantly refine our processes to deliver better results with every order.",
              },
            ].map((value, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-orange-400 transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Ready to Create Packaging That Sells?
            </h2>
            <p className="text-xl text-gray-300">
              Join 200+ happy clients who trust Allpack Creation for their packaging needs. Let&apos;s transform your product packaging into a powerful sales tool.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link href="/product">
                <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-6 text-lg rounded-lg">
                  View Our Products
                </Button>
              </Link>
              <QuoteButtonWithDialog className="bg-white hover:bg-gray-100 text-orange-600 font-semibold px-8 py-6 text-lg rounded-lg">
                Get Your Quote Now
              </QuoteButtonWithDialog>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
