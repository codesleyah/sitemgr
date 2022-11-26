import Button from "@component/buttons/Button";
import Image from "@component/Image";
import Card from "@component/Card";
import Grid from "@component/grid/Grid";
import DashboardPageHeader from "@component/layout/DashboardPageHeader";
import VendorDashboardLayout from "@component/layout/VendorDashboardLayout";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { H1, H6, SemiSpan } from "@component/Typography";
import FlexBox from "@component/FlexBox";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { fireStore } from "../../../../src/firebase";

const TheProperty = () => {
  const router = useRouter();
  const { propertyId, applicationId } = router.query;
  const [theProperty, setTheProperty] = useState(null);
  const querySnapshot = getDocs(collection(fireStore, "properties"));

  const getProperty = async () => {
    await querySnapshot.then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.id === propertyId) {
          setTheProperty(doc.data());
          console.log(doc.data());
          return;
        }
      });
    });
  };

  const closeApplication = async (_id) => {
    if (confirm("Close this Application?") === true) {
      await deleteDoc(doc(fireStore, "applications", _id))
        .then(() => {
          alert("Application Closed");
          router.push("/vendor/orders/");
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  useEffect(() => {
    getProperty();
  }, []);

  return (
    <div>
      <DashboardPageHeader
        title="Applied Property"
        iconName="delivery-box"
        button={
          <Link href="/vendor/orders/">
            <Button color="primary" bg="primary.light" px="2rem">
              Back to Aplications
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
              src={theProperty ? theProperty.images[0] : ""}
              style={{ objectFit: "contain" }}
            />
            <Image
              width={100}
              height={80}
              src={theProperty ? theProperty.images[1] : ""}
              style={{ objectFit: "contain" }}
            />
            <Image
              width={100}
              height={80}
              src={theProperty ? theProperty.images[2] : ""}
              style={{ objectFit: "contain" }}
            />
          </Grid>
          <Grid item sm={7} xs={12}>
            <Image
              width={"100%"}
              src={theProperty ? theProperty.images[0] : ""}
              style={{ objectFit: "contain" }}
            />
          </Grid>
          <Grid item sm={3} xs={12}>
            <H1 mb="1rem">{theProperty ? theProperty.title : ""}</H1>
            <FlexBox alignItems="center" mb="1rem">
              <SemiSpan>Location:</SemiSpan>
              <H6 ml="8px">{theProperty ? theProperty.location : ""}</H6>
            </FlexBox>
            <FlexBox alignItems="center" mb="1rem">
              <SemiSpan>Rent:</SemiSpan>
              <H6 ml="8px">${theProperty ? theProperty.rent : ""} / month</H6>
            </FlexBox>
            <FlexBox alignItems="center" mb="1rem">
              <SemiSpan>Owner:</SemiSpan>
              <H6 ml="8px">
                {theProperty
                  ? theProperty.ownername + " " + theProperty.ownersurname
                  : ""}
              </H6>
            </FlexBox>
            <FlexBox alignItems="center" mb="1rem">
              <SemiSpan>Phone:</SemiSpan>
              <H6 ml="8px">{theProperty ? theProperty.ownerphone : ""}</H6>
            </FlexBox>
            <FlexBox alignItems="center" mb="1rem">
              <SemiSpan>Email:</SemiSpan>
              <H6 ml="8px">{theProperty ? theProperty.owneremail : ""}</H6>
            </FlexBox>
            <FlexBox alignItems="center" mb="1rem">
              <SemiSpan>{theProperty ? theProperty.description : ""}</SemiSpan>
            </FlexBox>
            <FlexBox alignItems="center" mb="1rem">
              <Button
                color="primary"
                bg="primary.light"
                px="2rem"
                onClick={() => closeApplication(applicationId)}
              >
                Close Application
              </Button>
            </FlexBox>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

TheProperty.layout = VendorDashboardLayout;

export default TheProperty;
