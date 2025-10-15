import moment from "moment";
import { useContext, useEffect } from "react";
import InfoCard from "../../Components/InfoCard/InfoCard";
import Loader from "../../Components/Loader/Loader";
import { AuthUserContext } from "../../Context/AuthUserContext";
import { formatAmountWithCommas2dp } from "../../HelperFunctions/amountToString";
import classes from "../DefaultsPayment/DefaultsPayment.module.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const SuccessfulTransactions = () => {
  // Context
  const { getSuccessfulPayment, getSuccessfulPaymentObject } =
    useContext(AuthUserContext);

  // Effects
  useEffect(() => {
    getSuccessfulPayment();

    // eslint-disable-next-line
  }, []);

  if (getSuccessfulPaymentObject.isLoading) {
    return <Loader />;
  }

  return (
    <section className={classes.container}>
      <div className={classes.infoSection}>
        <InfoCard
          title="Successful Transactions"
          value={getSuccessfulPaymentObject?.data?.totalRecords}
        />
      </div>

      <p>Successful transactions made by customers in your organisation</p>

      <div className={classes.table}>
        <div className={classes.tableHeader}>
          <span>ID</span>
          <span>CUSTOMER</span>
          <span>TOTAL PAID</span>
          <span>YOUR EARNINGS</span>
          <span>GIDDAA</span>
          <span>TYPE</span>
          <span>PROPERTY</span>
          <span>PLAN</span>
          <span>PAYMENT DATE</span>
          <span></span>
        </div>

        {getSuccessfulPaymentObject?.data?.data?.map((data: any, i: number) => {
          return (
            <div className={classes.tableBody} key={i}>
              <span>{data?.customer?.customerId}</span>
              <span>
                {data?.customer?.firstName} {data?.customer?.lastName}
              </span>
              <span>{formatAmountWithCommas2dp(data?.amount)}</span>
              <span>{formatAmountWithCommas2dp(data?.organizationAmount)}</span>
              <span>{formatAmountWithCommas2dp(data?.giddaaAmount)}</span>
              <span>{data?.transactionType}</span>
              <span>{data?.house?.address || data?.house?.cityName}</span>

              <span>{data?.mortgagePlan?.name}</span>
              <span>{moment(data?.dateOfPayment).format("MMMM Do YYYY")}</span>
              <span>
                <MoreVertIcon />
              </span>
              {data?.isActive && (
                <div className={classes.otherOptions}>
                  <div>
                    <span>VIEW RECEIPT</span>
                  </div>

                  <div>
                    <span>DOWNLOAD RECEIPT</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SuccessfulTransactions;
