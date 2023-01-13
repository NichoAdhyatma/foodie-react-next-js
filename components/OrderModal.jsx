import { Modal, useMantineTheme } from "@mantine/core";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { createOrder } from "../lib/OrderHandler";
import { useStore } from "../store/store";
import css from "../styles/OrderModal.module.css";

const OrderModal = ({ opened, setOpened, paymentMethod }) => {
  const theme = useMantineTheme();
  const router = useRouter();
  const [total, setTotal] = useState(undefined);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTotal(localStorage.getItem("total"));
    }
  }, [opened]);

  const resetCart = useStore((state) => state.resetCart);

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = await createOrder({ ...formData, total, paymentMethod });
    toast.success(`Pesanan # ${id} di proses`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    resetCart();
    {
      typeof window !== undefined && localStorage.setItem("order", id);
    }
    setOpened(null);
    router.push(`/order/${id}`)
  };

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      opened={opened}
      onClose={() => setOpened(null)}
    >
      {/* Modal content */}
      <form onSubmit={handleSubmit} className={css.formContainer}>
        <input
          type="text"
          onChange={handleInput}
          name="name"
          required
          placeholder="Name"
        />
        <input
          type="text"
          onChange={handleInput}
          name="phone"
          required
          placeholder="Phone Number"
        />
        <textarea
          name="address"
          onChange={handleInput}
          rows="3"
          placeholder="Address"
        ></textarea>
        <span>
          Anda akan membayar <span>Rp {total}</span>
        </span>
        <button className="btn" type="submit">
          Terima Pesanan
        </button>
      </form>
    </Modal>
  );
};

export default OrderModal;
