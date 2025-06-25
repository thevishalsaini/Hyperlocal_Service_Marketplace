import { 
  FaUserTie, 
  FaChartLine, 
  FaGlobe, 
  FaUsers,
  FaLinkedin, 
  FaInstagram, 
  FaTwitter,
  FaHandshake,
  FaLightbulb,
  FaGem,
  FaStar,
  FaUserShield,
  FaRocket
} from 'react-icons/fa';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-18">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold text-emerald-800 mb-6">Who We Are</h1>
        <p className="text-xl text-emerald-700 max-w-3xl mx-auto">
          Urban Company is Asia's largest online home services platform. We're on a mission to empower millions of service professionals by connecting them with millions of customers looking for quality services.
        </p>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 text-center">
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-emerald-100">
          <FaUsers className="text-4xl text-amber-500 mx-auto mb-4" />
          <h3 className="text-3xl font-bold text-emerald-800 mb-2">48,000+</h3>
          <p className="text-emerald-700">Active Service Professionals*</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-emerald-100">
          <FaUserTie className="text-4xl text-amber-500 mx-auto mb-4" />
          <h3 className="text-3xl font-bold text-emerald-800 mb-2">13 Million+</h3>
          <p className="text-emerald-700">Consumers**</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-emerald-100">
          <FaGlobe className="text-4xl text-amber-500 mx-auto mb-4" />
          <h3 className="text-3xl font-bold text-emerald-800 mb-2">59</h3>
          <p className="text-emerald-700">Cities**</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-emerald-100">
          <FaChartLine className="text-4xl text-amber-500 mx-auto mb-4" />
          <h3 className="text-3xl font-bold text-emerald-800 mb-2">4</h3>
          <p className="text-emerald-700">Countries**</p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="mb-20">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf" 
              alt="Our Story" 
              className="rounded-xl shadow-lg w-full h-auto border border-emerald-100"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-emerald-800 mb-6">Our Story</h2>
            <p className="text-emerald-700 mb-4">
              Founded in 2014, Urban Company (formerly UrbanClap) set out to solve the trust deficit in the home services sector. What started as a platform to connect customers with reliable service professionals has now transformed into a full-stack managed marketplace.
            </p>
            <p className="text-emerald-700 mb-4">
              We've built technology that enables service professionals to grow their businesses while delivering standardized, high-quality services to customers.
            </p>
            <p className="text-emerald-700">
              Today, we're present in multiple countries across Asia and the Middle East, serving millions of customers with hundreds of services.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-emerald-800 mb-12 text-center">Our Leadership Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { 
              name: "Abc Xyz", 
              role: "Co-Founder & CEO", 
              image: "https://randomuser.me/api/portraits/men/1.jpg",
              linkedin: "#",
              instagram: "#",
              twitter: "#",
            },
            { 
              name: "Def Uvw", 
              role: "Co-Founder & CTO", 
              image: "https://randomuser.me/api/portraits/men/2.jpg",
              linkedin: "#",
              instagram: "#",
              twitter: "#",
            },
            { 
              name: "Ghi Rst", 
              role: "Chief Operating Officer", 
              image: "https://randomuser.me/api/portraits/women/1.jpg",
              linkedin: "#",
              instagram: "#",
              twitter: "#",
            },
            { 
              name: "Jkl Mno", 
              role: "Chief Financial Officer", 
              image: "https://randomuser.me/api/portraits/men/3.jpg",
              linkedin: "#",
              instagram: "#",
              twitter: "#",
            },
            { 
              name: "Pqr Stu", 
              role: "Chief Product Officer", 
              image: "https://randomuser.me/api/portraits/women/2.jpg",
              linkedin: "#",
              instagram: "#",
              twitter: "#",
            },
            { 
              name: "Vwx Yza", 
              role: "Chief Marketing Officer", 
              image: "https://randomuser.me/api/portraits/women/3.jpg",
              linkedin: "#",
              instagram: "#",
              twitter: "#",
            },
          ].map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl border border-emerald-100">
              <div className="relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-emerald-800 mb-1">{member.name}</h3>
                <p className="text-amber-500 font-medium mb-4">{member.role}</p>
                
                <div className="flex justify-center space-x-3">
                  {member.linkedin && (
                    <a href={member.linkedin} className="text-emerald-700 hover:text-emerald-900 transition-colors">
                      <FaLinkedin className="text-xl" />
                    </a>
                  )}
                  {member.instagram && (
                    <a href={member.instagram} className="text-pink-600 hover:text-pink-800 transition-colors">
                      <FaInstagram className="text-xl" />
                    </a>
                  )}
                  {member.twitter && (
                    <a href={member.twitter} className="text-blue-400 hover:text-blue-600 transition-colors">
                      <FaTwitter className="text-xl" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Investors Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-emerald-800 mb-12 text-center">Our Investors</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            { name: "Steadview Capital", logo: "https://via.placeholder.com/150x80?text=Steadview" },
            { name: "Vy Capital", logo: "https://via.placeholder.com/150x80?text=VY+Capital" },
            { name: "Tiger Global", logo: "https://via.placeholder.com/150x80?text=Tiger+Global" },
            { name: "Accel", logo: "https://via.placeholder.com/150x80?text=Accel" },
            { name: "Elevation Capital", logo: "https://via.placeholder.com/150x80?text=Elevation" },
          ].map((investor, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md flex items-center justify-center hover:shadow-lg transition-shadow border border-emerald-100">
              <img src={investor.logo} alt={investor.name} className="h-12 object-contain" />
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-emerald-800 mb-12 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: "Customer First", 
              description: "We obsess over customer experience and measure our success by customer satisfaction.",
              icon: <FaUserShield className="text-4xl text-amber-500 mb-4" />
            },
            { 
              title: "Ownership", 
              description: "We act like owners - we're accountable for our results and take pride in our work.",
              icon: <FaGem className="text-4xl text-amber-500 mb-4" />
            },
            { 
              title: "Excellence", 
              description: "We strive for excellence in everything we do, setting high standards for ourselves.",
              icon: <FaStar className="text-4xl text-amber-500 mb-4" />
            },
            { 
              title: "Transparency", 
              description: "We believe in open communication and honest feedback at all levels.",
              icon: <FaHandshake className="text-4xl text-amber-500 mb-4" />
            },
            { 
              title: "Innovation", 
              description: "We challenge the status quo and continuously look for better ways to solve problems.",
              icon: <FaLightbulb className="text-4xl text-amber-500 mb-4" />
            },
            { 
              title: "Collaboration", 
              description: "We work together across teams to achieve our common goals.",
              icon: <FaRocket className="text-4xl text-amber-500 mb-4" />
            },
          ].map((value, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow text-center border border-emerald-100">
              <div className="flex justify-center">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-emerald-800 mb-3">{value.title}</h3>
              <p className="text-emerald-700">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-emerald-700 to-emerald-800 text-white rounded-xl p-12 text-center shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Join Us in Transforming the Services Industry</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Whether you're looking for a reliable service provider or want to grow your service business, we've got you covered.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-amber-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-amber-600 transition hover:shadow-lg">
            Book a Service
          </button>
          <button className="border-2 border-white px-8 py-3 rounded-lg font-medium hover:bg-emerald-700 transition hover:shadow-lg">
            Partner With Us
          </button>
        </div>
      </section>

      {/* Footer Note */}
      <div className="mt-12 text-center text-emerald-600 text-sm">
        <p>*Active service professionals who have completed at least one job in the last 6 months</p>
        <p>**As of last quarter</p>
      </div>
    </div>
  );
};

export default About;