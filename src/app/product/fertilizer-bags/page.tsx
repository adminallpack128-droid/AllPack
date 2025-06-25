
import QuoteButtonWithDialog from "@/app/Components/getQuotePopup"
import { Badge } from "@/app/Components/Ui/badge"
import { Button } from "@/app/Components/Ui/button"
import { Card, CardContent } from "@/app/Components/Ui/card"
import { Search, Phone, Mail, Star, CheckCircle, Package, Truck, Shield, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PlainPPFertilizerBagPage() {
  const productImages = ["/HomePage2.jpeg", "/HomePage1.jpeg", "/HomePage3.jpeg", "/HomePage4.jpeg"]

  const productSpecs = [
    { label: "Minimum Order Quantity", value: "1000 Piece" },
    { label: "Storage Capacity", value: "25-50 Kg" },
    { label: "Usage/Application", value: "Fertilizer Packaging" },
    { label: "Material", value: "PP (Polypropylene)" },
    { label: "Shape", value: "Rectangular" },
    { label: "Pattern", value: "Plain" },
    { label: "Brand", value: "AllPack Pro" },
    { label: "Color", value: "White/Natural" },
    { label: "Weave Type", value: "Woven" },
    { label: "Thickness", value: "70-100 GSM" },
  ]

  const features = [
    "High-strength woven polypropylene construction",
    "Cost-effective solution for bulk packaging",
    "Excellent tear and puncture resistance",
    "Moisture-resistant properties",
    "Lightweight yet durable design",
    "Available in multiple sizes and capacities",
    "Easy to handle and transport",
    "Eco-friendly and recyclable material",
  ]

  const benefits = [
    { icon: Shield, title: "Durability", desc: "Strong construction for heavy-duty use" },
    { icon: Package, title: "Cost Effective", desc: "Economical solution for bulk packaging" },
    { icon: Truck, title: "Easy Transport", desc: "Lightweight and stackable design" },
    { icon: Award, title: "Quality Material", desc: "Premium PP woven fabric" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-orange-25 to-amber-50">
      {/* Header Section */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 lg:px-[5rem] py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Company Info */}
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">AP</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">AllPack Pro</h1>
                <p className="text-gray-600">Pune, Maharashtra</p>
                <div className="flex items-center space-x-4 mt-1">
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                    ✓ GST Verified
                  </Badge>
                  <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                    ⭐ TrustSEAL Verified
                  </Badge>
                </div>
              </div>
            </div>

            {/* Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="outline" className="border-gray-800 text-gray-800 hover:bg-gray-50">
                <Phone className="h-4 w-4 mr-2" />
                Call +91 89750 40173
                <span className="text-xs text-gray-500 ml-2">68% Response Rate</span>
              </Button>
              <QuoteButtonWithDialog className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white">
                <Mail className="h-4 w-4 mr-2" />
                SEND EMAIL
              </QuoteButtonWithDialog>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 lg:px-[5rem] py-4">
          <div className="flex items-center justify-between">
            <nav className="text-sm text-gray-600 flex items-center">
              <Link href="/" className="hover:text-orange-600">
                Home
              </Link>
              <span className="mx-2">»</span>
              <Link href="/product" className="hover:text-orange-600">
                Our Products
              </Link>
              <span className="mx-2">»</span>
              <Link href="/product/fertilizer-bags" className="hover:text-orange-600">
                Fertilizer Bags
              </Link>
             
            </nav>

            <div className="relative hidden md:flex">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search Products/Services"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 w-64"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Back Button */}
      {/* <section className="py-6">
        <div className="container mx-auto px-4 lg:px-[5rem]">
          <Link <span className="mx-2">»</span>
              
            href="/product/fertilizer-bags"
            className="inline-flex items-center text-orange-600 hover:text-orange-800 font-medium"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Fertilizer Bags
          </Link>
        </div>
      </section> */}

       {/* Category Header Section - This is the blue section you're asking about */}
       <section className="py-5 bg-gradient-to-br from-amber-50 via-orange-25 to-orange-50">
        <div className="container mx-auto px-4 lg:px-[5rem]">
          <div className="text-gray-800">
            {/* Category Title */}
            <div className="mb-4">
              <h1 className="text-2xl font-bold text-white bg-gradient-to-r from-orange-500 to-orange-600 inline-block px-6 py-3 rounded-lg shadow-lg">
                Fertilizer Bags
              </h1>
            </div>

            {/* Category Description */}
            <div className="bg-white bg-opacity-90 border border-orange-200 rounded-lg p-6 shadow-md">
              <p className="text-lg leading-relaxed text-gray-700">
                We are a leading Manufacturer of{" "}
                <span className="font-semibold text-orange-600">printed fertilizer bag</span>,{" "}
                <span className="font-semibold text-orange-600">plain pp fertilizer bag</span>,{" "}
                <span className="font-semibold text-orange-600">dap fertilizer bag</span>,{" "}
                <span className="font-semibold text-orange-600">white fertilizer packaging bag</span>,{" "}
                <span className="font-semibold text-orange-600">25kg fertilizer bag</span> and{" "}
                <span className="font-semibold text-orange-600">bopp fertilizer bag</span> from{" "}
                <span className="font-semibold text-gray-900">Indore, India</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Section */}
     <section className="pb-16">
        <div className="container mx-auto px-4 lg:px-[5rem]">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Side - Product Images */}
              <div className="p-8 space-y-4">
                <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src={productImages[0] || "/placeholder.svg"}
                    alt="Plain PP Fertilizer Bag"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {productImages.map((image, index) => (
                    <div
                      key={index}
                      className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 border-orange-200 hover:border-orange-500 cursor-pointer"
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Product view ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side - Product Info with Scrollable Content */}
              <div className="border-l border-gray-200 flex flex-col h-[800px]">
                {/* Fixed Header Section */}
                <div className="p-8 border-b border-gray-200 bg-white">
                  <div>
                    <h1 className="text-3xl font-bold text-red-600 mb-2">Plain PP Fertilizer Bag</h1>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                        ))}
                        <span className="ml-2 text-gray-600">(4.7/5 - 89 reviews)</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 mb-6">
                      <span className="text-2xl font-bold text-gray-900">₹ 28</span>
                      <span className="text-gray-600">/ Piece</span>
                      <Button variant="outline" size="sm" className="border-red-500 text-red-600 hover:bg-red-50">
                        Get Latest Price
                      </Button>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <QuoteButtonWithDialog className="flex-1">
                        <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3">
                          Get Best Quote
                        </Button>
                      </QuoteButtonWithDialog>
                      <Button className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-3">
                        Yes! I am Interested
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Scrollable Content Area */}
                <div className="flex-1 overflow-y-auto p-8 space-y-8">
                  {/* Product Specifications */}
                  <Card className="border-gray-200">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Details:</h3>
                      <div className="grid grid-cols-1 gap-3">
                        {productSpecs.map((spec, index) => (
                          <div
                            key={index}
                            className="flex justify-between py-2 border-b border-gray-100 last:border-b-0"
                          >
                            <span className="text-gray-600 font-medium">{spec.label}</span>
                            <span className="text-gray-900 font-semibold">{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* About Section */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">About Plain PP Fertilizer Bags</h2>
                    <div className="prose max-w-none text-gray-700 leading-relaxed">
                      <p className="mb-6">
                        <strong>Plain PP Fertilizer Bags</strong> are cost-effective, durable packaging solutions made
                        from high-quality woven polypropylene material. These bags are designed for bulk fertilizer
                        packaging where custom printing is not required, offering an economical choice for large-scale
                        agricultural operations.
                      </p>

                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        Key Advantages of Plain PP Fertilizer Bags:
                      </h3>

                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">1. Material Excellence:</h4>
                          <ul className="space-y-2 text-gray-700 ml-4">
                            <li>
                              • High-strength <strong>woven polypropylene</strong> construction
                            </li>
                            <li>• Superior tear and puncture resistance</li>
                            <li>• Moisture-resistant properties protect contents</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">2. Cost Efficiency:</h4>
                          <ul className="space-y-2 text-gray-700 ml-4">
                            <li>
                              • <strong>Economical solution</strong> for bulk packaging needs
                            </li>
                            <li>• Lower cost compared to printed alternatives</li>
                            <li>• Ideal for large-volume fertilizer distribution</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">3. Practical Design:</h4>
                          <ul className="space-y-2 text-gray-700 ml-4">
                            <li>
                              • <strong>Lightweight yet durable</strong> construction
                            </li>
                            <li>• Easy to handle and transport</li>
                            <li>• Stackable design for efficient storage</li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">4. Environmental Benefits:</h4>
                          <ul className="space-y-2 text-gray-700 ml-4">
                            <li>• Made from recyclable polypropylene material</li>
                            <li>• Eco-friendly packaging solution</li>
                            <li>• Reusable for various agricultural applications</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Benefits Section */}
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Why Choose Our Plain PP Fertilizer Bags?</h2>
                    <div className="grid grid-cols-2 gap-4">
                      {benefits.map((benefit, index) => (
                        <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                          <CardContent className="p-4 text-center">
                            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-3">
                              <benefit.icon className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-sm font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                            <p className="text-gray-600 text-xs">{benefit.desc}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Features List */}
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Product Features</h2>
                    <div className="space-y-3">
                      {features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-[5rem]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose AllPack Pro for Fertilizer Bags?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading manufacturer of high-quality fertilizer packaging solutions with years of expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">8+</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Years Experience</h3>
              <p className="text-gray-600 text-sm">Extensive experience in fertilizer packaging industry</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">50+</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fertilizer Bag Types</h3>
              <p className="text-gray-600 text-sm">Wide range of fertilizer packaging solutions</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">100+</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Happy Clients</h3>
              <p className="text-gray-600 text-sm">Satisfied customers across India</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">✓</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Assured</h3>
              <p className="text-gray-600 text-sm">Premium quality materials and printing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Request Callback Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <QuoteButtonWithDialog>
          <Button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
            Request Callback
          </Button>
        </QuoteButtonWithDialog>
      </div>
    </div>
  )
}
