import classes from "./SignIn.module.css";
import logo from "../../Assets/Images/logo.png";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";
import background1 from "../../Assets/Images/loginBackground.jpg";
import background2 from "../../Assets/Images/loginBackground2.jpg";
import background3 from "../../Assets/Images/loginBackground3.jpg";
import background4 from "../../Assets/Images/loginBackground4.jpg";
import { useContext, useEffect, useState } from "react";
import { AuthUserContext } from "../../Context/AuthUserContext";
import Error from "../../Components/Error/Error";

const SignIn = () => {
  // context
  const { userLoginDetails, setUserLoginDetails, login, user } =
    useContext(AuthUserContext);

  //   States

  const [backgroundImages, setBackgroundImages] = useState([
    {
      title: "Lekki-Ikoyi link bridge",
      location: "Lagos, Nigeria",
      image: background1,
      isActive: true,
    },

    {
      title: "Apapa Seaport",
      location: "Lagos, Nigeria",
      image: background2,
      isActive: false,
    },

    {
      title: "Obudu Cattle Ranch",
      location: "Calabar, Nigeria",
      image: background3,
      isActive: false,
    },

    {
      title: "Lagos Island Maarket",
      location: "Lagos, Nigeria",
      image: background4,
      isActive: false,
    },
  ]);

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (activeImageIndex >= backgroundImages.length - 1) {
        setActiveImageIndex(0);
      } else {
        setActiveImageIndex((prevState) => {
          return prevState + 1;
        });
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  });

  useEffect(() => {
    setBackgroundImages(
      backgroundImages.map((data, i) => {
        if (i === activeImageIndex) {
          return { ...data, isActive: true };
        } else {
          return { ...data, isActive: false };
        }
      })
    );

    // eslint-disable-next-line
  }, [activeImageIndex]);

  const activeImage = backgroundImages.find((data) => {
    return data.isActive;
  });

  const changeHandler = (e: any) => {
    setUserLoginDetails((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  return (
    <section
      className={classes.container}
      style={{ backgroundImage: `url(${activeImage?.image})` }}
    >
      <form>
        <img src={logo} alt="Logo" />
        {user.error && <Error type="error">{user?.error}</Error>}
        <Input
          label="Email"
          placeholder="abc@example.com"
          value={userLoginDetails.email}
          onChange={changeHandler}
          name="email"
        />
        <Input
          label="Password"
          placeholder="*******"
          type="password"
          value={userLoginDetails.password}
          onChange={changeHandler}
          name="password"
        />
        <Button
          onClick={(e) => {
            e.preventDefault();
            if (userLoginDetails.email && userLoginDetails.password) {
              login();
            }
          }}
          loading={user.isLoading}
          disabled={!userLoginDetails.email || !userLoginDetails.password}
        >
          Login
        </Button>
      </form>

      <div className={classes.nameAndLocation}>
        <h4>{activeImage?.title}</h4>
        <p>{activeImage?.location}</p>
      </div>
    </section>
  );
};

export default SignIn;
