import { FaPhone, FaEnvelope, FaMapPin, FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
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
                  <FaEnvelope className="h-5 w-5 text-orange-400" />
                  <span>adminallpack128@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaPhone className="h-5 w-5 text-orange-400" />
                  <span>+91 88055 19081</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaMapPin className="h-5 w-5 text-orange-400" />
                  <span>Katrj Pune, India</span>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button variant="secondary" size="icon" className="bg-white/10 hover:bg-white/20 text-white">
                  <FaInstagram className="h-5 w-5" />
                </Button>
                <Button variant="secondary" size="icon" className="bg-white/10 hover:bg-white/20 text-white">
                  <FaFacebook className="h-5 w-5" />
                </Button>
                <Button variant="secondary" size="icon" className="bg-white/10 hover:bg-white/20 text-white">
                  <FaTwitter className="h-5 w-5" />
                </Button>
                <Button variant="secondary" size="icon" className="bg-white/10 hover:bg-white/20 text-white">
                  <FaLinkedin className="h-5 w-5" />
                </Button>
              </div>
            </div>
            <ContactForm />
            
          </div>
        </div>
      </section>
    )
}