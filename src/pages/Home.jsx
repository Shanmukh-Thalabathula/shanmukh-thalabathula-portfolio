import './Home.css';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="home-container">
      <div className="overlay">
        <motion.h1
          className="main-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          SHANMUKH THALABATHULA
        </motion.h1>

        <motion.h2
          className="sub-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
        >
          Python Full Stack Developer
        </motion.h2>
      </div>
    </div>
  );
}
