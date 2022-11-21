import Link from "next/link";
import React from "react";
import TableRow from "../TableRow";
import Typography, { H5 } from "../Typography";

export interface OrderRowProps {
  item: {
    applicantname: any;
    applicantsurname: string;
    applicantphone: string;
    applicantemail: string;
    propertyid: string;
    
  };
}

const OrderRow: React.FC<OrderRowProps> = ({ item }) => {

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
      </TableRow>
    </Link>
  );
};

export default OrderRow;
