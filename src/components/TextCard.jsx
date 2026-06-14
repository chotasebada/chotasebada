import { motion } from 'framer-motion';

export default function TextCard({ icon: Icon, title, description, delay = 0 }) {
  return (
    <motion.div
      className="glass-card p-8 md:p-10 rounded-3xl border border-border-light"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ borderColor: '#F97316', boxShadow: '0 4px 20px rgba(249, 115, 22, 0.15)' }}
    >
      {Icon && (
        <div className="text-orange-500 text-4xl mb-4">
          <Icon />
        </div>
      )}
      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-500 leading-relaxed">{description}</p>
    </motion.div>
  );
}
