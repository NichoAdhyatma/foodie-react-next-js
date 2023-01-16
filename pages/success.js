import { useState } from "react";
import Layout from "../components/Layout";
import OrderModal from "../components/OrderModal";

export default function Success() {
  const [payment, setPayment] = useState(1);
  return(
    <Layout>
      <OrderModal opened={true} paymentMethod={1} setOpened={setPayment}/>
    </Layout>)
};
