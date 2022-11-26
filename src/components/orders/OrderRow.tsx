import Link from "next/link";
import React from "react";
import TableRow from "../TableRow";
import Typography, { H5 } from "../Typography";
import Hidden from "@component/hidden/Hidden";
import Icon from "@component/icon/Icon";
import IconButton from "@component/buttons/IconButton";

export interface OrderRowProps {
  item: {
    applicantname: any;
    applicantsurname: string;
    applicantphone: string;
    applicantemail: string;
    propertyid: string;
  };
  _id: string;
}

const OrderRow: React.FC<OrderRowProps> = ({ item, _id }) => {
  return (
    <Link href="#">
      <TableRow as="a" href="#" my="1rem" padding="6px 18px">
        <H5 m="6px" textAlign="left">
          {item.applicantname} {item.applicantsurname}
        </H5>
        <Typography className="flex-grow pre" m="6px" textAlign="left">
          {item.applicantphone}
        </Typography>
        <Typography m="6px" textAlign="left">
          {item.applicantemail}
        </Typography>
        <Typography m="6px" textAlign="left">
          {item.propertyid}
        </Typography>
        <Hidden flex="0 0 0 !important" down={769}>
          <Typography textAlign="center" color="text.muted">
            <Link
              href={{
                pathname: "/vendor/orders/the-property",
                query: { propertyId: item.propertyid, applicationId: _id },
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
  );
};

export default OrderRow;
