import { useState } from "react";
import Layout from "../components/Layout";
import OrderModal from "../components/OrderModal";

export default function success() {
  const [payment, setPayment] = useState(null);
  return(
    <Layout>
      <OrderModal opened={true} paymentMethod={1} setOpened={setPayment}/>
    </Layout>)
};