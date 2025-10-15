import { motion } from "framer-motion";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";
import classes from "./HomePageWhyGiddaa.module.css";

const HomePageWhyGiddaa = () => {
  const why = [
    {
      title: "Unlock Capital",
      description:
        "Turning geological data into bankable, fully de-risked financial models that accelerate investor confidence and funding timelines.",
    },
    {
      title: "Guarantee Continuity",
      description:
        "Establishing a supply chain and logistics fortress that eliminates operational downtime and shields project schedules.",
    },
    {
      title: "Set the Standard",
      description:
        "Leveraging the best of Nigerian expertise to deliver projects with uncompromising global quality and regulatory compliance.",
    },
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const cardVariant = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className={classes.container}
      id="our-mission"
      data-section-id="our-mission"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div variants={fadeUp}>
        <SectionHeader title="Our Mission: To Transform Nigeria's Energy Future." />
      </motion.div>

      <motion.p variants={fadeUp}>
        The next phase of Nigeria's energy sector requires more than ambition.
        It demands flawless execution. Our mission is to be the catalyst of this
        transformation, empowering indigenous operators to achieve global
        standards of profitability and efficiency. We are relentless in our
        commitment to:
      </motion.p>

      <motion.div className={classes.whyContainer} variants={containerVariants}>
        <div className={classes.whySection}>
          {why.map((data, i) => (
            <motion.div
              key={i}
              className={classes.why}
              variants={cardVariant}
              whileHover={{
                y: -6,
                scale: 1.02,
                boxShadow: "0 8px 24px rgba(227, 26, 33, 0.15)",
                transition: { type: "spring", stiffness: 220 },
              }}
            >
              <h4>{data.title}</h4>
              <p>{data.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default HomePageWhyGiddaa;
