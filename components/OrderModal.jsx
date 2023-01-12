import { Modal, useMantineTheme } from "@mantine/core";
import { useState, useEffect } from "react";
import css from "../styles/OrderModal.module.css";

const OrderModal = ({ opened, setOpened, paymentMethod }) => {
  const theme = useMantineTheme();
  const [total, setTotal] = useState(undefined);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTotal(localStorage.getItem("total"));
    }
  }, [opened]);

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
      <form className={css.formContainer}>
        <input type="text" name="name" required placeholder="Name" />
        <input type="text" name="phone" required placeholder="Phone Number" />
        <textarea name="address" rows="3" placeholder="Address"></textarea>
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
