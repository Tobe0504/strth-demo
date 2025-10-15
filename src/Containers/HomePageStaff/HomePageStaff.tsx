import StaffCard from "../../Components/StaffCard/StaffCard";
import classes from "./HomePageStaff.module.css";
import staff1 from "../../Assets/Images/staff1.png";
import staff2 from "../../Assets/Images/staff2.png";
import staff3 from "../../Assets/Images/staff3.png";
import staff4 from "../../Assets/Images/staff4.png";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { useRef } from "react";

const HomePageStaff = () => {
  // Refs
  const carouselRef = useRef<HTMLDivElement | null>(null);

  // Utils
  const staff = [
    {
      name: "Lanre Edun",
      role: "HEAD OF MARKETING AT BRAINS & HAMMERS",
      image: staff1,
    },
    {
      name: "Kunle Fatimehin",
      role: "DIRECTOR OF DIGITAL & INNOVATION AT KAIROS HOF",
      image: staff2,
    },
    {
      name: "Emmanuel Uge",
      role: "DIRECTOR OF SALES AT WIGWE INFRASTURUCTURE",
      image: staff3,
    },
    {
      name: "Dooshima Anakaa",
      role: "DIRECTOR OF FINANCE AT IKPAAHINDI VENTURES",
      image: staff4,
    },
    {
      name: "Lanre Edun",
      role: "HEAD OF MARKETING AT BRAINS & HAMMERS",
      image: staff1,
    },

    {
      name: "Kunle Fatimehin",
      role: "DIRECTOR OF DIGITAL & INNOVATION AT KAIROS HOF",
      image: staff2,
    },
  ];

  const scrollToNextDivItem = () => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const scrollAmount = container.offsetWidth;
      container.scrollLeft += scrollAmount;
    }
  };

  const scrollToPrevDivItem = () => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const scrollAmount = container.offsetWidth;
      container.scrollLeft -= scrollAmount;
    }
  };

  return (
    <section className={classes.container}>
      <div className={classes.staffSection} ref={carouselRef}>
        {staff.map((data, i) => {
          return (
            <div key={i}>
              <StaffCard name={data.name} role={data.role} image={data.image} />
            </div>
          );
        })}
      </div>

      <div className={classes.scrollButtons}>
        <span onClick={scrollToPrevDivItem}>
          <ArrowLeftIcon fontSize="large" />
        </span>
        <span onClick={scrollToNextDivItem}>
          <ArrowRightIcon fontSize="large" />
        </span>
      </div>
    </section>
  );
};

export default HomePageStaff;
