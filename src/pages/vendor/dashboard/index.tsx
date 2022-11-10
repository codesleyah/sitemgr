import Card from "@component/Card";
import Grid from "@component/grid/Grid";
import DashboardPageHeader from "@component/layout/DashboardPageHeader";
import VendorDashboardLayout from "@component/layout/VendorDashboardLayout";
import Typography, { H1, H5} from "@component/Typography";
import React from "react";

const VendorDashboard = () => {
  return (
    <div>
      <DashboardPageHeader title="Dashboard" />

      <Grid container spacing={6}>
        {cardList.map((item, ind) => (
          <Grid item lg={4} md={4} sm={6} xs={12} key={ind}>
            <Typography as={Card} textAlign="center" py="1.5rem" height="100%">
              <H5 color="text.muted" mb="8px">
                {item.title}
              </H5>
              <H1 color="gray.700" mb="4px" lineHeight="1.3">
                {item.amount}
              </H1>
            </Typography>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

const cardList = [
  {
    title: "New Applications",
    amount: "5",
  },
  {
    title: "Newly Uploaded Properties",
    amount: "45",
  },
  {
    title: "Total Properties",
    amount: "100",
  },
];


VendorDashboard.layout = VendorDashboardLayout;

export default VendorDashboard;
