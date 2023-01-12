import { Modal, useMantineTheme } from "@mantine/core";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import css from "../styles/OrderModal.module.css";

const OrderModal = ({ opened, setOpened, paymentMethod }) => {
  const theme = useMantineTheme();
  const [total, setTotal] = useState(undefined);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTotal(localStorage.getItem("total"));
    }
  }, [opened]);

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    toast.success("Pesanan di proses", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
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
