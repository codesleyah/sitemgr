import React,{useState, useEffect} from "react";
import FlexBox from "../FlexBox";
import Hidden from "../hidden/Hidden";
import DashboardPageHeader from "../layout/DashboardPageHeader";
import Pagination from "../pagination/Pagination";
import TableRow from "../TableRow";
import { H5 } from "../Typography";
import OrderRow from "./OrderRow";
import { collection, getDocs } from "firebase/firestore";
import { fireStore } from "../../firebase";

export interface CustomerOrderListProps {}

const CustomerOrderList: React.FC<CustomerOrderListProps> = () => {

  const [listings, setListings] = useState([])
  const [applicationIds, setApplicationIds] = useState([]);
  const querySnapshot =  getDocs(collection(fireStore, "properties"))

  const getListings = async () => {
    const data = []
    const ids = [];
    await querySnapshot.then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        data.push(doc.data())
        ids.push(doc.id)
      })})
    setListings(data)
    setApplicationIds(ids);
  }

  useEffect(() => {
      getListings()
  },[])

  return (
    <div>
      <DashboardPageHeader title="My Orders" iconName="bag_filled" />

      <Hidden down={769}>
        <TableRow padding="0px 18px" boxShadow="none" bg="none">
          <H5 color="text.muted" my="0px" mx="6px" textAlign="left">
            Order #
          </H5>
          <H5 color="text.muted" my="0px" mx="6px" textAlign="left">
            Status
          </H5>
          <H5 color="text.muted" my="0px" mx="6px" textAlign="left">
            Date purchased
          </H5>
          <H5 color="text.muted" my="0px" mx="6px" textAlign="left">
            Total
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
    </div>
  );
};



export default CustomerOrderList;
