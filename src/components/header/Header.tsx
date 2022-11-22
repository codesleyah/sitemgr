import Image from "@component/Image";
import Link from "next/link";
import React from "react";
import Container from "../Container";
import FlexBox from "../FlexBox";
import StyledHeader from "./HeaderStyle";

type HeaderProps = {
  isFixed?: boolean;
  className?: string;
};

const Header: React.FC<HeaderProps> = ({ className }) => {

  return (
    <StyledHeader className={className}>
      <Container
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        height="100%"
      >
        <FlexBox className="logo" alignItems="center" mr="1rem">
          <Link href="/vendor/dashboard">
            <a>
              <Image src="assets/logos/react.png" alt="logo" />
            </a>
          </Link>
        </FlexBox>
      </Container>
    </StyledHeader>
  );
};

export default Header;
