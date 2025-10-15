import AppLayoutHeader from "../../Containers/AppLayoutHeader/AppLayoutHeader";
import SideNav from "../../Containers/SideNav/SideNav";
import classes from "./AppLayout.module.css";

type AppLayoutProps = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  notShowHeader?: boolean;
};

const AppLayout = ({
  children,
  title,
  description,
  notShowHeader,
}: AppLayoutProps) => {
  return (
    <section className={classes.container}>
      <div className={classes.sideNav}>
        <SideNav />
      </div>
      <div className={classes.bodyMain}>
        <div>
          {!notShowHeader && (
            <AppLayoutHeader title={title} description={description || ""} />
          )}
          {children}
        </div>
      </div>
    </section>
  );
};

export default AppLayout;
