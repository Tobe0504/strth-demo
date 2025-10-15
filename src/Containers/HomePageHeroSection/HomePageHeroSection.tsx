import { motion } from "framer-motion";
import Button from "../../Components/Button/Button";
import classes from "./HomePageHeroSection.module.css";

const HomePageHeroSection = () => {
  return (
    <section className={classes.container} id="home" data-section-id="home">
      <motion.div
        className={classes.textSection}
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.9,
          ease: "easeOut",
        }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
        >
          Integrated Certainty. <br />
          De-Risked Capital. <span>Proven Execution</span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
          Strathmore Energy is not a typical advisory firm. We are the
          architects of success for Nigeria’s oil and gas assets. Operating at
          the critical nexus of technical depth, financial mastery, and
          operational grit, we solve the industry's most complex integration
          challenges. We don't just bridge gaps; we merge them, providing a
          unified, sovereign solution that secures investment and guarantees
          project delivery from the first funding commitment to First Oil flow.
          Partnering with Strathmore is choosing unparalleled assurance.
        </motion.p>

        <motion.div
          className={classes.buttonSection}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
        >
          <Button
            onClick={() => {
              document.getElementById("what-we-do")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            Learn more
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        className={classes.imageSection}
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1,
          delay: 0.3,
          ease: "easeOut",
        }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <img src={"/images/heroImage.jpg"} alt="Find a home" />
      </motion.div>
    </section>
  );
};

export default HomePageHeroSection;
