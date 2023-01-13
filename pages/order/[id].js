import { client } from "../../lib/client";
import Layout from "../../components/Layout";
import css from "../../styles/Order.module.css";
import { UilBill, UilBox } from "@iconscout/react-unicons";
import Image from "next/image";
import Cooking from "../../assets/cooking.png";
import OnWay from "../../assets/onway.png";
import Spinner from "../../assets/spinner.svg";
import { useEffect } from "react";

export const getServerSideProps = async ({ params }) => {
  const query = `*[_type == 'order' && _id == '${params.id}']`;
  const order = await client.fetch(query);

  return {
    props: {
      order: order[0],
    },
  };
};

export default function Order({ order }) {
  useEffect(() => {
    if (order.status > 3) {
      localStorage.clear();
    }
  }, [order]);
  return (
    <Layout>
      <div className={css.container}>
        <span className={css.heading}>Pesananmu sedang di proses 😁</span>
        <div className={css.details}>
          <div>
            <span>Order ID</span>
            <span>{order._id}</span>
          </div>
          <div>
            <span>Name</span>
            <span>{order.name}</span>
          </div>
          <div>
            <span>Phone</span>
            <span>{order.phone}</span>
          </div>
          <div>
            <span>Method</span>
            <span>
              {order.method === 0 ? "Bayar di tempat" : "Bayar Online (Paid)"}
            </span>
          </div>
          <div>
            <span>Total</span>
            <span>Rp {order.total}</span>
          </div>
        </div>

        <div className={css.statusContainer}>
          <div className={css.status}>
            <UilBill width={50} height={50} />
            <span>Pembayaran</span>
            {order.method === 0 ? (
              <span className={css.pending}>Bayar di tempat</span>
            ) : (
              <span className={css.completed}>Sudah dibayar</span>
            )}
          </div>

          <div className={css.status}>
            <Image src={Cooking} alt="" width={50} height={50} />
            <span>Sedang dimasak di dapur</span>
            {order.status === 1 && (
              <div className={css.spinner}>
                <Image src={Spinner} alt="spinner" />
              </div>
            )}

            {order.status > 1 && <span className={css.completed}>Selesai</span>}
          </div>

          <div className={css.status}>
            <Image src={OnWay} width={50} height={50} />
            <span>Sedang dikirim</span>
            {order.status === 2 && (
              <div className={css.spinner}>
                <Image src={Spinner} alt="spinner" />
              </div>
            )}
            {order.status > 2 && <span className={css.completed}>Selesai</span>}
          </div>

          <div className={css.status}>
            <UilBox width={50} height={50} />
            <span>Selesai dikirim</span>
            {order.status === 3 && (
              <div className={css.spinner}>
                <Image src={Spinner} alt="spinner" />
              </div>
            )}

            {order.status > 3 && <span className={css.completed}>Selesai</span>}
          </div>
        </div>
      </div>
    </Layout>
  );
}
