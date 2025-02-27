import { motion } from "framer-motion";

const AnimatedComponent = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
    >
      <h1></h1>
    </motion.div>
  );
};

export default AnimatedComponent;
