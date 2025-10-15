import { motion } from "framer-motion";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import classes from "./HomePageHowItWorks.module.css";
import { useState } from "react";
import VideoModal from "../../Components/Modals/AcceptedModal/VideoModal";
import HowItWorksVideo from "./HowItWorksVideo";

interface Props {
  title: string;
  description: string;
  menu: { title: string; description: string }[];
}

const HomePageHowItWorks: React.FC<Props> = ({ title, description, menu }) => {
  const [showModal, setShowModal] = useState(false);

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.3,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const stepVariant = {
    hidden: { opacity: 0, x: 60 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className={classes.container}
      id="how-it-works"
      data-section-id="how-it-works"
      initial="hidden"
      whileInView="show"
      variants={containerVariants}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Video Modal */}
      {showModal && (
        <VideoModal
          onClick={() => setShowModal(false)}
          body={<HowItWorksVideo />}
        />
      )}

      <motion.div variants={fadeUp}>
        <SectionHeader title={title} color="#000" />
      </motion.div>

      <motion.p className={classes.description} variants={fadeUp}>
        {description}
      </motion.p>

      <motion.div
        className={classes.howItWorksContainer}
        variants={containerVariants}
      >
        {menu.map((data, i) => (
          <motion.div
            key={i}
            className={classes.how}
            variants={stepVariant}
            whileHover={{
              scale: 1.03,
              transition: { type: "spring", stiffness: 180 },
            }}
          >
            <div className={classes.stepNumber}>{i + 1}</div>
            <div>
              <h4>{data.title}</h4>
              <p>{data.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default HomePageHowItWorks;
