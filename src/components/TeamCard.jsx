import { motion } from 'framer-motion';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function TeamCard({ name, role, image, delay = 0 }) {
  return (
    <motion.div
      className="text-center group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8 }}
    >
      <div className="relative mb-4 overflow-hidden rounded-2xl bg-gray-100">
        <img
          src={image}
          alt={name}
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <h4 className="text-gray-900 font-bold text-lg group-hover:text-orange-500 transition-colors">
        {name}
      </h4>
      <p className="text-gray-500 text-sm mb-3">{role}</p>
      <div className="flex justify-center gap-4">
        <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors"><FaLinkedin size={16} /></a>
        <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors"><FaInstagram size={16} /></a>
      </div>
    </motion.div>
  );
}
