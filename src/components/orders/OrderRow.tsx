import { format } from "date-fns";
import Link from "next/link";
import React from "react";
import Box from "../Box";
import { Chip } from "../Chip";
import TableRow from "../TableRow";
import Typography, { H5, Small } from "../Typography";

export interface OrderRowProps {
  item: {
    apllicantname: any;
    status: string;
    property: string;
    date: string | Date;
    owner: string;
    ownerphone: string;
    tenandphone: string;
    
  };
}

const OrderRow: React.FC<OrderRowProps> = ({ item }) => {
  const getColor = (status) => {
    switch (status) {
      case "Pending":
        return "secondary";
      case "Processing":
        return "secondary";
      case "Delivered":
        return "success";
      case "Cancelled":
        return "error";
      default:
        return "";
    }
  };

  return (
    <Link href="#">
      <TableRow as="a" href="#" my="1rem" padding="6px 18px">
        <H5 m="6px" textAlign="left">
          {item.apllicantname}
        </H5>
        <Box m="6px">
          <Chip p="0.25rem 1rem" bg={`${getColor(item.status)}.light`}>
            <Small color={`${getColor(item.status)}.main`}>{item.status}</Small>
          </Chip>
        </Box>
        <Typography className="flex-grow pre" m="6px" textAlign="left">
          {item.property}
        </Typography>
        <Typography m="6px" textAlign="left">
          {item.owner}
        </Typography>
        <Typography m="6px" textAlign="left">
          {item.ownerphone}
        </Typography>
        <Typography m="6px" textAlign="left">
          {item.tenandphone}
        </Typography>
        <Typography m="6px" textAlign="left">
          {format(new Date(item.date), "MMM dd, yyyy")}
        </Typography>
      </TableRow>
    </Link>
  );
};

export default OrderRow;
