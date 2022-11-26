import Button from "@component/buttons/Button";
import Image from "@component/Image";
import Card from "@component/Card";
import Grid from "@component/grid/Grid";
import DashboardPageHeader from "@component/layout/DashboardPageHeader";
import VendorDashboardLayout from "@component/layout/VendorDashboardLayout";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { H1, H6, SemiSpan } from "@component/Typography";
import FlexBox from "@component/FlexBox";



const NewListings = () => {
  const router = useRouter();
  const {title, location, rent, owner, phone, email, image1, image2, image3, description} = router.query;

  return (
    <div>
      <DashboardPageHeader
        title="Property Details"
        iconName="delivery-box"
        button={
          <Link href="/vendor/products">
            <Button color="primary" bg="primary.light" px="2rem">
              Back to Listings
            </Button>
          </Link>
        }
      />

      <Card p="30px">
      <Grid container spacing={6}>
      <Grid item sm={2} xs={12}>
          <Image
            width={100}
            height={80}
            src={image1}
            style={{ objectFit: "contain" }}
              />
          <Image
            width={100}
            height={80}
            src={image2}
            style={{ objectFit: "contain" }}
              />
          <Image
            width={100}
            height={80}
            src={image3}
            style={{ objectFit: "contain" }}
              />
        </Grid>
        <Grid item sm={7} xs={12}>
          <Image
            width={"100%"}
            src={image1}
            style={{ objectFit: "contain" }}
              />
        </Grid>
        <Grid item sm={3} xs={12}>
          <H1 mb="1rem">{title}</H1>
          <FlexBox alignItems="center" mb="1rem">
            <SemiSpan>Location:</SemiSpan>
            <H6 ml="8px">{location}</H6>
          </FlexBox>
          <FlexBox alignItems="center" mb="1rem">
            <SemiSpan>Rent:</SemiSpan>
            <H6 ml="8px">${rent} / month</H6>
          </FlexBox>
          <FlexBox alignItems="center" mb="1rem">
            <SemiSpan>Owner:</SemiSpan>
            <H6 ml="8px">{owner}</H6>
          </FlexBox>
          <FlexBox alignItems="center" mb="1rem">
            <SemiSpan>Phone:</SemiSpan>
            <H6 ml="8px">{phone}</H6>
          </FlexBox>
          <FlexBox alignItems="center" mb="1rem">
            <SemiSpan>Email:</SemiSpan>
            <H6 ml="8px">{email}</H6>
          </FlexBox>
          <FlexBox alignItems="center" mb="1rem">
            <SemiSpan>{description}</SemiSpan>
          </FlexBox>
          <FlexBox alignItems="center" mb="1rem">
            <Button color="primary" bg="primary.light" px="2rem">
              Approve Listing
            </Button>
          </FlexBox>
          <FlexBox alignItems="center" mb="1rem">
            <Button color="primary" bg="primary.light" px="2rem">
              Delete Listing
            </Button>
          </FlexBox>
        </Grid>
      </Grid>
      </Card>
    </div>
  );
};

NewListings.layout = VendorDashboardLayout;

export default NewListings;
