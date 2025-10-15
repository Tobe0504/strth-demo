import Button from "../../Components/Button/Button";
import classes from "./HomePageGetStarted.module.css";

const HomePageGetStarted = () => {
  return (
    <div
      className={classes.container}
      id="contact-us"
      data-section-id="contact-us"
    >
      <h4>Contact Our Team!</h4>
      <p>
        Stop managing financial, technical, and logistical risks separately.
        Demand integrated certainty.
      </p>
      <p>
        Connect with Strathmore Energy today. Let's discuss how our unified
        approach can redefine the success and profitability of your next energy
        project.
      </p>
      <Button>Send us an E-mail</Button>
    </div>
  );
};

export default HomePageGetStarted;
