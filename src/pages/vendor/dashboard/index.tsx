import Card from "@component/Card";
import Grid from "@component/grid/Grid";
import DashboardPageHeader from "@component/layout/DashboardPageHeader";
import VendorDashboardLayout from "@component/layout/VendorDashboardLayout";
import Typography, { H1, H5 } from "@component/Typography";
import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { fireStore } from "../../../firebase";

const VendorDashboard = () => {
  const [listings, setListings] = useState([]);
  const [applications, setApplications] = useState([]);
  const [newlistings, setNewListings] = useState([]);

  const querySnapshot = getDocs(collection(fireStore, "properties"));
  const querySnapshot2 = getDocs(collection(fireStore, "applications"));

  const getListings = async () => {
    const listingsData = [];
    const newListingsData = [];
    await querySnapshot.then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.data().isApproved === true) {
          listingsData.push(doc.data());
        } else {
          newListingsData.push(doc.data());
        }
      });
    });
    setListings(listingsData);
    setNewListings(newListingsData);
  };

  const getApplications = async () => {
    const data = [];
    await querySnapshot2.then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
    });
    setApplications(data);
  };

  useEffect(() => {
    getListings();
    getApplications();
  }, []);

  return (
    <div>
      <DashboardPageHeader title="Dashboard" />
      <Grid container spacing={6}>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <Typography as={Card} textAlign="center" py="1.5rem" height="100%">
            <H5 color="text.muted" mb="8px">
              New Applications
            </H5>
            <H1 color="gray.700" mb="4px" lineHeight="1.3">
              {applications.length}
            </H1>
          </Typography>
        </Grid>

        <Grid item lg={4} md={4} sm={6} xs={12}>
          <Typography as={Card} textAlign="center" py="1.5rem" height="100%">
            <H5 color="text.muted" mb="8px">
              Newly Added Property
            </H5>
            <H1 color="gray.700" mb="4px" lineHeight="1.3">
              {newlistings.length}
            </H1>
          </Typography>
        </Grid>

        <Grid item lg={4} md={4} sm={6} xs={12}>
          <Typography as={Card} textAlign="center" py="1.5rem" height="100%">
            <H5 color="text.muted" mb="8px">
              Total listings
            </H5>
            <H1 color="gray.700" mb="4px" lineHeight="1.3">
              {listings.length}
            </H1>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

VendorDashboard.layout = VendorDashboardLayout;

export default VendorDashboard;
