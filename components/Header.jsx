import css from "../styles/Header.module.css";
import Image from "next/image";
import logo from "../assets/Logo.png";
import { UilShoppingBag, UilReceipt } from "@iconscout/react-unicons";
import { useStore } from "../store/store";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const items = useStore((state) => state.cart.pizzas.length);
  const [order, setOrder] = useState("");

  useEffect(() => {
    setOrder(localStorage.getItem("order"));
  }, []);

  return (
    <div className={css.header}>
      {/* Logo side */}
      <div className={css.logo}>
        <Image src={logo} alt="logo" width={50} height={50} />
        <span>Foodie</span>
      </div>

      {/* Menu side*/}
      <ul className={css.menu}>
        <li>Home</li>
        <li>Menu</li>
        <li>Contact</li>
      </ul>

      {/* Right side */}
      <div className={css.rightSide}>
        <Link href="/cart">
          <div className={css.cart}>
            <UilShoppingBag size={35} color="2E2E2E" />
            <div className={css.badge}>{items}</div>
          </div>
        </Link>

        {order && (
          <Link href={`order/${order}`}>
            <div className={css.cart}>
              <UilReceipt size={35} color="2E2E2E" />
              {order != "" && <div className={css.badge}>1</div>}
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
