import css from "../styles/Menu.module.css";
import Image from "next/image";
import { urlFor } from "../lib/client";
import Link from "next/link";

const Menu = ({ pizzas }) => {
  return (
    <div className={css.container}>
      <div className={css.heading}>
        <span>Menu yang kami sediakan</span>
        <span>Beragam menu lezat dan nagih</span>
        <span>Bikin ngiler cuy</span>
      </div>

      <div className={css.menu}>
        {/* Menu */}
        {pizzas.map((pizza, key) => {
          const src = urlFor(pizza.image).url();
          return (
            <div className={css.pizza} key={key}>
              <Link href={`./food/${pizza.slug.current}`}>
                <div className={css.imageWrapper}>
                  <Image
                    loader={() => src}
                    src={src}
                    alt="menu"
                    objectFit="cover"
                    layout="fill"
                  />
                </div>
              </Link>

              <span>{pizza.name}</span>
              <span>
                <span style={{ color: "var(--themeRed)" }}>Rp </span>
                {pizza.price[1]}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
