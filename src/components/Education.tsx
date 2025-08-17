import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin, Award, ExternalLink } from "lucide-react";
import oracleBadge from "@/assets/ai badge.png";
import eCertificate from "@/assets/eCertificate.pdf";

const Education = () => {
  const education = [
    {
      degree: "B.Tech (Information Technology)",
      school: "Walchand College of Engineering, Sangli",
      location: "Sangli, Maharashtra",
      period: "2023 - 2026",
      gpa: "Pursuing",
      status: "Currently Enrolled",
      coursework: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Database Management Systems",
        "Software Engineering",
        "Web Development",
        "Computer Networks",
        "Operating Systems",
        "Computer Architecture"
      ],
      achievements: [
        "Active member of SAIT (Students' Association of Information Technology)",
        "Participating in various technical events and competitions",
        "Engaged in innovation and entrepreneurship activities"
      ]
    },
    {
      degree: "Diploma (Computer Engineering)",
      school: "Government Polytechnic, Miraj",
      location: "Miraj, Maharashtra",
      period: "2021 - 2023",
      gpa: "Completed",
      status: "Graduated",
      coursework: [
        "Computer Programming",
        "Digital Electronics",
        "Computer Architecture",
        "Data Structures",
        "Database Management",
        "Web Technologies"
      ],
      achievements: [
        "Successfully completed diploma program",
        "Gained practical knowledge in computer engineering",
        "Developed foundation for higher studies"
      ]
    },
    {
      degree: "Secondary School",
      school: "MTDK English School, Miraj",
      location: "Miraj, Maharashtra",
      period: "2020",
      gpa: "Completed",
      status: "Graduated",
      coursework: [
        "Mathematics",
        "Science",
        "English",
        "Social Studies",
        "Computer Science"
      ],
      achievements: [
        "Completed secondary education",
        "Strong foundation in core subjects",
        "Prepared for technical education path"
      ]
    }
  ];

  const certifications = [
    {
      title: "Oracle Database Certification",
      issuer: "Oracle",
      date: "2025",
      credentialId: "ORACLE-DB-CERT",
      badge: "Oracle Certified"
    }
  ];

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Academic journey from secondary education to pursuing B.Tech in Information Technology.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Education */}
          {education.map((edu, index) => (
            <Card key={index} className="p-8 gradient-card border-border/50 hover:shadow-elegant transition-all duration-300">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-primary/10 text-primary rounded-lg">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{edu.degree}</h3>
                        <h4 className="text-xl text-primary font-semibold">{edu.school}</h4>
                      </div>
                    </div>
                    <Badge className="gradient-primary text-primary-foreground">
                      {edu.status}
                    </Badge>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 text-muted-foreground mb-6">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {edu.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {edu.location}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold mb-3">Relevant Coursework:</h5>
                      <div className="space-y-2">
                        {edu.coursework.map((course, courseIndex) => (
                          <div key={courseIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-muted-foreground text-sm">{course}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="font-semibold mb-3">Achievements:</h5>
                      <div className="space-y-2">
                        {edu.achievements.map((achievement, achievementIndex) => (
                          <div key={achievementIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-tech-cyan rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-muted-foreground text-sm">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}

          {/* Certifications */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">Certifications & Online Learning</h3>
            <div className="flex justify-center">
              {certifications.map((cert, index) => (
                <Card key={index} className="p-6 gradient-card border-border/50 hover:shadow-elegant transition-all duration-300 hover:scale-105 transform">
                  <div className="text-center">
                    {cert.issuer === "Oracle" ? (
                      <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                        <img 
                          src={oracleBadge} 
                          alt="Oracle Badge" 
                          className="w-full h-full object-contain"
                        />
                      </div>
                    ) : (
                      <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <Award className="w-8 h-8" />
                      </div>
                    )}
                    <h4 className="font-semibold mb-2">{cert.title}</h4>
                    <p className="text-primary font-medium mb-1">{cert.issuer}</p>
                    <p className="text-muted-foreground text-sm mb-2">{cert.date}</p>
                    <div className="space-y-2">
                      {cert.issuer === "Oracle" && (
                        <button
                          onClick={() => window.open(eCertificate, '_blank')}
                          className="mt-3 px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:bg-primary/90 transition-colors flex items-center gap-2 mx-auto"
                        >
                          <ExternalLink className="w-4 h-4" />
                          View Certificate
                        </button>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;