import Box from "@component/Box";
import { useRouter } from "next/router";
import React from "react";
import FlexBox from "../FlexBox";
import {
  DashboardNavigationWrapper,
  StyledDashboardNav,
} from "./DashboardStyle";
import Image from "@component/Image";
import { signOut } from "firebase/auth";
import { firebaseAuth } from "../../firebase";

const VendorDashboardNavigation = () => {
  const { pathname } = useRouter();
  const router = useRouter();

  function logout() {
    signOut(firebaseAuth)
      .then(() => {
        router.push("/");
      })
      .catch((error) => {
        alert("Logout Failed!");
        alert(error.message);
      });
  }
  return (
    <DashboardNavigationWrapper
      px="0px"
      py="1.5rem"
      color="gray.900"
      style={{
        height: 500,
      }}
    >
      <div style={{ padding: 40 }}>
        <Image
          src="https://homeclick.vercel.app/assets/images/logo/log.png"
          alt="log"
          width={200}
        />
      </div>
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
      <StyledDashboardNav
        isCurrentPath={pathname.includes("#")}
        href="#"
        px="1.5rem"
        mb="1.25rem"
      >
        <FlexBox alignItems="center">
          <Box className="dashboard-nav-icon-holder"></Box>
          <a onClick={logout}>
            <span>Logout</span>
          </a>
        </FlexBox>
      </StyledDashboardNav>
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
