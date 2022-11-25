import React, { Fragment, useState, useEffect } from "react";
import FlexBox from "../FlexBox";
import Hidden from "../hidden/Hidden";
import Pagination from "../pagination/Pagination";
import TableRow from "../TableRow";
import { H5 } from "../Typography";
import OrderRow from "./OrderRow";
import { collection, getDocs } from "firebase/firestore";
import { fireStore } from "../../firebase";

export interface VendorOrderListProps {}

const VendorOrderList: React.FC<VendorOrderListProps> = () => {
  const [applications, setApplications] = useState([]);
  const [applicationIds, setApplicationIds] = useState([]);
  const querySnapshot = getDocs(collection(fireStore, "applications"));

  const getApplications = async () => {
    const data = [];
    const ids = [];
    await querySnapshot.then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
        ids.push(doc.id);
      });
    });
    setApplications(data);
    setApplicationIds(ids);
  };

  useEffect(() => {
    getApplications();
  }, []);

  return (
    <Fragment>
      <Hidden down={769}>
        <TableRow padding="0px 18px" boxShadow="none" bg="none">
          <H5 color="text.muted" my="0px" mx="6px" textAlign="left">
            Applicant Name
          </H5>
          <H5 color="text.muted" my="0px" mx="6px" textAlign="left">
            Phone number
          </H5>
          <H5 color="text.muted" my="0px" mx="6px" textAlign="left">
            Email
          </H5>
          <H5 color="text.muted" my="0px" mx="6px" textAlign="left">
            Property Id
          </H5>
        </TableRow>
      </Hidden>

      {applications.map((item, ind) => (
        <OrderRow item={item} _id={applicationIds[ind]} key={ind} />
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

export default VendorOrderList;
