import Layout from "../components/Layout";
import { useStore } from "../store/store";
import css from "../styles/Cart.module.css";
import { urlFor } from "../lib/client";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import OrderModal from "../components/OrderModal";

export default function Cart() {
  const cartData = useStore((state) => state.cart);
  const removePizza = useStore((state) => state.removePizza);
  const [payment, setPayment] = useState(null);
  const handleRemove = (index) => {
    removePizza(index);
    toast.error("Barang dihapus.", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const total = () =>
    cartData.pizzas.reduce((a, b) => a + b.quantity * b.price, 0);

  const handleOnDelivery = () => {
    setPayment(0);
    typeof window !== "undefined" && localStorage.setItem("total", total());
  };

  return (
    <Layout>
      <div className={css.container}>
        {/* details */}
        <div className={css.details}>
          <table className={css.table}>
            <thead>
              <th>Pizza</th>
              <th>Nama</th>
              <th>Ukuran</th>
              <th>Harga</th>
              <th>Jumlah</th>
              <th>Total</th>
              <th></th>
            </thead>

            <tbody className={css.tbody}>
              {cartData.pizzas.length > 0
                ? cartData.pizzas.map((pizza, index) => {
                    const src = urlFor(pizza.image).url();

                    return (
                      <tr key={index}>
                        <td className={css.imageTd}>
                          <Image
                            loader={() => src}
                            src={src}
                            alt=""
                            width={85}
                            height={85}
                            objectFit="cover"
                          />
                        </td>

                        <td>{pizza.name}</td>

                        <td>
                          {pizza.size === 0
                            ? "Kecil"
                            : pizza.size === 1
                            ? "Sedang"
                            : "Besar"}
                        </td>

                        <td>{pizza.price}</td>
                        <td>{pizza.quantity}</td>
                        <td>{pizza.quantity * pizza.price}</td>
                        <td>
                          <span
                            className={css.remove}
                            onClick={() => handleRemove(index)}
                          >
                            x
                          </span>
                        </td>
                      </tr>
                    );
                  })
                : "Cart Anda Kosong"}
            </tbody>
          </table>
        </div>
        {/* summary */}
        <div className={css.cart}>
          <span>Cart</span>
          <div className={css.cartDetails}>
            <div>
              <span>Barang</span>
              <span>{cartData.pizzas.length}</span>
            </div>

            <div>
              <span>Total</span>
              <span>Rp {total()}</span>
            </div>
          </div>

          <div className={css.btnGroup}>
            <button className="btn" onClick={handleOnDelivery}>
              Bayar di Tempat
            </button>
            <button className="btn">Bayar Sekarang</button>
          </div>
        </div>
      </div>
      <ToastContainer />
      {/* Modal */}
      <OrderModal
        opened={payment === 0}
        setOpened={setPayment}
        paymentMethod={payment}
      />
    </Layout>
  );
}
