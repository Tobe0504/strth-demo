import { motion } from "framer-motion";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import classes from "./HomeServicesHeader.module.css";

const HomeServicesHeader = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      className={classes.container}
      id="what-we-do"
      data-section-id="what-we-do"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div variants={fadeUp}>
        <SectionHeader title="Integrated Core Services" />
      </motion.div>

      <motion.p variants={fadeUp}>
        Our competitive edge is the elimination of project friction. <br /> We
        don't hand off problems; we deliver integrated solutions that maximize
        value across the board.
      </motion.p>
    </motion.div>
  );
};

export default HomeServicesHeader;
