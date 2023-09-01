import React from "react";
import { motion } from "framer-motion";

type AnimationProps = {
  children: React.ReactNode;
};

export const FadeUp = ({ children }: AnimationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      
    >
      {children}
    </motion.div>
  );
};

export const FadeLeft = ({ children }: AnimationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export const FadeRight = ({ children }: AnimationProps) => {
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export const Fade = ({ children }: AnimationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
};
