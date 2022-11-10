import React, { Fragment } from "react";
import FlexBox from "../FlexBox";
import Hidden from "../hidden/Hidden";
import Pagination from "../pagination/Pagination";
import TableRow from "../TableRow";
import { H5 } from "../Typography";
import OrderRow from "./OrderRow";

export interface VendorOrderListProps {}

const VendorOrderList: React.FC<VendorOrderListProps> = () => {
  return (
    <Fragment>
      <Hidden down={769}>
        <TableRow padding="0px 18px" boxShadow="none" bg="none">
          <H5 color="text.muted" my="0px" mx="6px" textAlign="left">
            Tenand
          </H5>
          <H5 color="text.muted" my="0px" mx="6px" textAlign="left">
            Application Status
          </H5>
          <H5 color="text.muted" my="0px" mx="6px" textAlign="left">
            Property
          </H5>
          <H5 color="text.muted" my="0px" mx="6px" textAlign="left">
            Owner
          </H5>
          <H5 color="text.muted" my="0px" mx="6px" textAlign="left">
            Owner Phone
          </H5>
          <H5 color="text.muted" my="0px" mx="6px" textAlign="left">
            Tenand Phone
          </H5>
          <H5 color="text.muted" my="0px" mx="6px" textAlign="left">
            Date
          </H5>
        </TableRow>
      </Hidden>

      {orderList.map((item, ind) => (
        <OrderRow item={item} key={ind} />
      ))}

      <FlexBox justifyContent="center" mt="2.5rem">
        <Pagination
          pageCount={5}
          onChange={(data) => {
            console.log(data.selected);
          }}
        />
      </FlexBox>
    </Fragment>
  );
};

const orderList = [
  {
    apllicantname: "Elvin Kakomo",
    status: "Pending",
    date: new Date(),
    property: "Full House",
    owner: "Jarod jomu",
    ownerphone: "0777 777 777",
    tenandphone: "0777 777 777",
  },
 
];

export default VendorOrderList;
