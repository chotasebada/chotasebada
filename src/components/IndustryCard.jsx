import { motion } from 'framer-motion';

export default function IndustryCard({ icon: Icon, name, delay = 0 }) {
  return (
    <motion.div
      className="bg-white p-6 md:p-8 rounded-2xl text-center group border border-gray-100 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ borderColor: '#F97316', boxShadow: '0 4px 20px rgba(249,115,22,0.15)', y: -4 }}
    >
      <div className="text-4xl mb-4 text-orange-500 flex justify-center group-hover:scale-110 transition-transform">
        {Icon && <Icon />}
      </div>
      <h4 className="text-gray-900 font-semibold text-base">{name}</h4>
    </motion.div>
  );
}
