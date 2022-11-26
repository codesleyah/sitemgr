import Avatar from "@component/avatar/Avatar";
import IconButton from "@component/buttons/IconButton";
import FlexBox from "@component/FlexBox";
import Hidden from "@component/hidden/Hidden";
import Icon from "@component/icon/Icon";
import DashboardPageHeader from "@component/layout/DashboardPageHeader";
import VendorDashboardLayout from "@component/layout/VendorDashboardLayout";
import Pagination from "@component/pagination/Pagination";
import TableRow from "@component/TableRow";
import Typography, { H5 } from "@component/Typography";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { fireStore } from "../../../firebase";

const AccountSettings = () => {
  const [listings, setListings] = useState([]);
  const [listingsId, setListingIds] = useState([]);
  const querySnapshot = getDocs(collection(fireStore, "properties"));

  const getListings = async () => {
    const data = [];
    const ids = [];
    await querySnapshot.then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        if (doc.data().isApproved === false) {
          data.push(doc.data());
          ids.push(doc.id);
        }
      });
    });
    setListings(data);
    setListingIds(ids);
  };

  useEffect(() => {
    getListings();
  }, []);

  return (
    <div>
      <DashboardPageHeader title="New Listings" />

      <Hidden down={769}>
        <TableRow padding="0px 18px" mb="-0.125rem" boxShadow="none" bg="none">
          <H5 ml="56px" color="text.muted" textAlign="left">
            Title
          </H5>
          <H5 color="text.muted" my="0px" mx="6px" textAlign="left">
            Location
          </H5>
          <H5 color="text.muted" my="0px" mx="6px" textAlign="left">
            Rent
          </H5>
          <H5 color="text.muted" my="0px" mx="6px" textAlign="left">
            Owner / agent
          </H5>
          <H5 color="text.muted" my="0px" mx="6px" textAlign="left">
            Phone Number
          </H5>
          <H5
            flex="0 0 0 !important"
            color="text.muted"
            px="22px"
            my="0px"
          ></H5>
        </TableRow>
      </Hidden>

      {listings.map((item, ind) => (
        <Link href={"#"} key={ind}>
          <TableRow as="a" href={"#"} my="1rem" padding="6px 18px">
            <FlexBox alignItems="center" m="6px">
              <Avatar src={item.images ? item.images[0] : ""} size={36} />
              <H5 textAlign="left" ml="20px">
                {item.title.padStart(2, "0")}
              </H5>
            </FlexBox>
            <H5 m="6px" textAlign="left" fontWeight="400">
              {item.location}
            </H5>
            <H5 m="6px" textAlign="left" fontWeight="400">
              ${item.rent} / month
            </H5>
            <H5 m="6px" textAlign="left" fontWeight="400">
              {item.ownername} {item.ownersurname}
            </H5>
            <H5 m="6px" textAlign="left" fontWeight="400">
              {item.ownerphone}
            </H5>

            <Hidden flex="0 0 0 !important" down={769}>
              <Typography textAlign="center" color="text.muted">
                <Link
                  href={{
                    pathname: "/vendor/account-settings/new-listings",
                    query: {
                      propertyId: listingsId[ind],
                    },
                  }}
                >
                  <IconButton size="small">
                    <Icon variant="small" defaultcolor="currentColor">
                      arrow-right
                    </Icon>
                  </IconButton>
                </Link>
              </Typography>
            </Hidden>
          </TableRow>
        </Link>
      ))}

      <FlexBox justifyContent="center" mt="2.5rem">
        <Pagination
          pageCount={5}
          onChange={(data) => {
            console.log(data.selected);
          }}
        />
      </FlexBox>
    </div>
  );
};

AccountSettings.layout = VendorDashboardLayout;

export default AccountSettings;
