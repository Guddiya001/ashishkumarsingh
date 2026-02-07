import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
       Senior Full-Stack &amp; GenAI Engineer with <strong>9+ years of experience</strong>
    building and scaling <strong>enterprise-grade web platforms and AI-enabled systems</strong>
    across <strong>FinTech, Healthcare, and E-Commerce</strong>.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
      >
           My expertise spans <strong>LLMs</strong>, <strong>RAG architectures</strong>, and
          <strong>LangChain</strong>, alongside modern cloud-native development using
          <strong>Python</strong>, <strong>Node.js</strong>, <strong>React</strong>, and
          <strong>AWS</strong>. I have contributed to and led the delivery of
          <strong>mission-critical solutions</strong> for global enterprises such as
          <strong>DBS Bank</strong>, <strong>Walmart</strong>, and
          <strong>UnitedHealth Group</strong>, collaborating with distributed teams
          across regions.
      </motion.p>
    </motion.section>
  );
}



