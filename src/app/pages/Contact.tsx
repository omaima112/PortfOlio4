import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  // ...existing code...

  return (
    <div className="min-h-screen bg-[#E8D8C4] py-16 md:py-20">
      <div className="max-w-2xl mx-auto px-6">
        <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#561C24] mb-4 text-center">
          Contact Fizza Naveed
        </h1>
        <p className="font-['Montserrat'] text-[#6D2932] text-center mb-12 max-w-2xl mx-auto">
          Feel free to reach out for academic discussions, collaboration opportunities, or any inquiries.
        </p>
        <div className="bg-white rounded-lg p-8 shadow-sm space-y-8">
          <div className="flex items-start gap-4">
            <div className="bg-[#E8D8C4] p-3 rounded-lg">
              <Mail className="text-[#561C24]" size={20} />
            </div>
            <div>
              <p className="font-['Montserrat'] text-[#561C24] font-medium mb-1">Email</p>
              <a
                href="mailto:fna713585@gmail.com"
                className="font-['Montserrat'] text-[#6D2932] hover:text-[#561C24] transition-colors"
              >
                fna713585@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-[#E8D8C4] p-3 rounded-lg">
              <Phone className="text-[#561C24]" size={20} />
            </div>
            <div>
              <p className="font-['Montserrat'] text-[#561C24] font-medium mb-1">Phone</p>
              <a
                href="tel:03334423644"
                className="font-['Montserrat'] text-[#6D2932] hover:text-[#561C24] transition-colors block"
              >
                +92333 4423644
              </a>
              <a
                href="tel:03325866416"
                className="font-['Montserrat'] text-[#6D2932] hover:text-[#561C24] transition-colors block mt-1"
              >
                +92332 5866416
              </a>
            </div>
          </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-[#E8D8C4] p-3 rounded-lg">
                        <Linkedin className="text-[#561C24]" size={20} />
                      </div>
                      <div>
                        <p className="font-['Montserrat'] text-[#561C24] font-medium mb-1">LinkedIn</p>
                        <a
                          href="https://www.linkedin.com/in/fizza-naveed"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-['Montserrat'] text-[#6D2932] hover:text-[#561C24] transition-colors"
                        >
                          www.linkedin.com/in/fizza-naveed
                        </a>
                      </div>
                    </div>
          <div className="flex items-start gap-4">
            <div className="bg-[#E8D8C4] p-3 rounded-lg">
              <MapPin className="text-[#561C24]" size={20} />
            </div>
            <div>
              <p className="font-['Montserrat'] text-[#561C24] font-medium mb-1">Location</p>
              <p className="font-['Montserrat'] text-[#6D2932]">Islamabad, Pakistan</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
