import classes from "./HomePageTrustedBy.module.css";
import vimeo from "../../Assets/Images/vimeo.svg";
import chrome from "../../Assets/Images/chrome.svg";
import dropbox from "../../Assets/Images/dropbox.svg";
import reddit from "../../Assets/Images/reddit.svg";
import viber from "../../Assets/Images/viber.svg";
import handShake from "../../Assets/Images/handShake.svg";
import SectionHeader from "../../Components/SectionHeader/SectionHeader";

const HomePageTrustedBy = () => {
  // Utils
  const partners = [vimeo, chrome, dropbox, reddit, viber];

  const infinitePartners = [...partners, ...partners, ...partners, ...partners];

  return (
    <section className={classes.container}>
      <SectionHeader title="Trusted By" />

      <div className={classes.logoSection}>
        {infinitePartners.map((data, i) => {
          return <img src={data} alt="Partner" key={i} />;
        })}
      </div>

      <div className={classes.trustSection}>
        <img src={handShake} alt="If They Trust Us, So Can You" />
        <span>If They Trust Us, So Can You</span>
      </div>
    </section>
  );
};

export default HomePageTrustedBy;
