import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { Badge } from "../Components/Ui/badge";
import { Button } from "../Components/Ui/button";
import ContactForm from "../Components/contact";

export default function ContactPage() {
    return (

           <section id="contact" className="py-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 lg:px-[5rem]">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-orange-500/20 text-orange-300 hover:bg-orange-500/30 text-lg">
                  Get In Touch
                </Badge>
                <h2 className="text-3xl lg:text-5xl font-bold">Ready to Create Amazing Packaging?</h2>
                <p className="text-xl text-gray-300">
                  Let&apos;s discuss your packaging design needs and create something that makes your product stand out
                  on the shelf and communicate effectively with your customers.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-orange-400" />
                  <span>illusiondesign128@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-orange-400" />
                  <span>+91 89750 40173</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-orange-400" />
                  <span>Katrj Pune, India</span>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button variant="secondary" size="icon" className="bg-white/10 hover:bg-white/20 text-white">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="secondary" size="icon" className="bg-white/10 hover:bg-white/20 text-white">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="secondary" size="icon" className="bg-white/10 hover:bg-white/20 text-white">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="secondary" size="icon" className="bg-white/10 hover:bg-white/20 text-white">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </div>
            </div>
            <ContactForm />
            
          </div>
        </div>
      </section>
    )
}