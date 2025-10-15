import AppLayout from "../../Components/AppLayout/AppLayout";
import Layout from "../../Components/Layout/Layout";
import classes from "./ErrorPage.module.css";

const ErrorPage = () => {
  // Local storage
  const userToken = localStorage.getItem("giddaa-userToken");

  if (userToken) {
    return (
      <AppLayout notShowHeader>
        <section className={classes.container}>
          <h4>404 page</h4>
          <p>This page is unavailable at the moment</p>
        </section>
      </AppLayout>
    );
  } else {
    return (
      <Layout>
        <section className={classes.container}>
          <h4>404 page</h4>
          <p>This page is unavailable at the moment</p>
        </section>
      </Layout>
    );
  }
};

export default ErrorPage;
