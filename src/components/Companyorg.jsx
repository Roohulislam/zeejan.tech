import { useState } from 'react';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const CompanyOrg = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: 'Alex Johnson',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in tech industry. Drives company strategy and innovation.',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      id: 2,
      name: 'Sarah Williams',
      role: 'CFO',
      bio: 'Financial strategist ensuring sustainable growth and operational efficiency.',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      id: 3,
      name: 'Michael Chen',
      role: 'Lead Developer',
      bio: 'Full-stack architect building robust, scalable solutions for complex problems.',
      image: 'https://randomuser.me/api/portraits/men/75.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    },
    {
      id: 4,
      name: 'Emily Rodriguez',
      role: 'Digital Marketer',
      bio: 'Growth hacker specializing in data-driven marketing and brand strategy.',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#'
      }
    }
  ];

  return (
    <div className="bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Meet Our Leadership
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            The brilliant minds driving innovation and growth at our company.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredCard(member.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300"
            >
              <div className="relative h-40 overflow-hidden">
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  animate={{ scale: hoveredCard === member.id ? 1.05 : 1 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div className="p-2 text-center">
                <motion.h3 
                  className="text-xl font-bold text-gray-900 mb-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {member.name}
                </motion.h3>
                <motion.p 
                  className="text-blue-600 font-medium mb-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {member.role}
                </motion.p>
                <motion.p 
                  className="text-gray-600 mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {member.bio}
                </motion.p>

                <motion.div 
                  className="flex justify-center space-x-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <a href={member.social.linkedin} className="text-gray-500 hover:text-blue-600 transition-colors">
                    <FaLinkedin className="text-xl" />
                  </a>
                  <a href={member.social.twitter} className="text-gray-500 hover:text-blue-400 transition-colors">
                    <FaTwitter className="text-xl" />
                  </a>
                  <a href={member.social.github} className="text-gray-500 hover:text-gray-800 transition-colors">
                    <FaGithub className="text-xl" />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyOrg;