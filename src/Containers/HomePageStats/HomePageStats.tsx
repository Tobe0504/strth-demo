import classes from "./HomePageStats.module.css";

const HomePageStats = () => {
  // Utils
  const stats = [
    {
      title: "NO OF PROPERTIES",
      value: 180,
    },
    {
      title: "NO OF UNITS",
      value: 1800,
    },
    {
      title: "PLANS/METHODS YOU CAN PURCHASE YOUR HOME",
      value: 32,
    },
  ];

  return (
    <section className={classes.container}>
      {stats.map((data, i) => {
        return (
          <div key={i}>
            <h4>{data.value}</h4>
            <p>{data.title}</p>
          </div>
        );
      })}
    </section>
  );
};

export default HomePageStats;
