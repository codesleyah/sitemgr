import Box from "@component/Box";
import { useRouter } from "next/router";
import React from "react";
import FlexBox from "../FlexBox";
import {
  DashboardNavigationWrapper,
  StyledDashboardNav,
} from "./DashboardStyle";

const VendorDashboardNavigation = () => {
  const { pathname } = useRouter();

  return (
    <DashboardNavigationWrapper
      px="0px"
      py="1.5rem"
      color="gray.900"
      style={{
        height: 500,
      }}
    >
      {linkList.map((item) => (
        <StyledDashboardNav
          isCurrentPath={pathname.includes(item.href)}
          href={item.href}
          key={item.title}
          px="1.5rem"
          mb="1.25rem"
        >
          <FlexBox alignItems="center">
            <Box className="dashboard-nav-icon-holder"></Box>
            <span>{item.title}</span>
          </FlexBox>
        </StyledDashboardNav>
      ))}
    </DashboardNavigationWrapper>
  );
};

const linkList = [
  {
    href: "/vendor/dashboard",
    title: "Dashboard",
  },
  {
    href: "/vendor/products",
    title: "Listings",
  },
  {
    href: "/vendor/orders",
    title: "Applications",
  },
  {
    href: "/vendor/account-settings",
    title: "Newly added listings",
  },
];

export default VendorDashboardNavigation;
