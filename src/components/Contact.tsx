import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "vedant.lonkar@walchandsangli.ac.in",
      href: "mailto:vedant.lonkar@walchandsangli.ac.in"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 9156983369",
      href: "tel:+91 9156983369"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Walchand College of Engineering, Sangli, Maharashtra",
    
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Contact Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm actively looking for job and internship opportunities and would love to connect! 
            Feel free to reach out if you'd like to discuss projects or opportunities.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 text-center">


            <div className="space-y-6 max-w-2xl mx-auto">
              {contactInfo.map((item, index) => (
                <Card key={index} className="p-6 gradient-card border-border/50 hover:shadow-elegant transition-all duration-300">
                  <a 
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 group justify-center"
                  >
                    <div className="flex-shrink-0 p-3 bg-primary/10 text-primary rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {item.icon}
                    </div>
                    <div className="text-center">
                      <h4 className="font-semibold text-lg">{item.title}</h4>
                      <p className="text-muted-foreground group-hover:text-primary transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                </Card>
              ))}
            </div>

            
          </div>


        </div>
      </div>
    </section>
  );
};

export default Contact;