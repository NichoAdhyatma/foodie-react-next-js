import Image from "next/image";
import Layout from "../../components/Layout";
import { client, urlFor } from "../../lib/client";
import css from "../../styles/Food.module.css";
import leftArrow from "../../assets/arrowLeft.png";
import rightArrow from "../../assets/arrowRight.png";
import { useState } from "react";

const Pizza = ({ pizza }) => {
  const src = urlFor(pizza.image).url();

  const [size, setSize] = useState(1);
  const [jumlah, setjumlah] = useState(1);

  const handleQuantity = (type) => {
    type === "inc"
      ? setjumlah((prev) => prev + 1)
      : jumlah === 1
      ? null
      : setjumlah((prev) => prev - 1);
  };

  return (
    <Layout>
      <div className={css.container}>
        <div className={css.imageWrapper}>
          <Image
            loader={() => src}
            src={src}
            alt="food"
            layout="fill"
            unoptimized
            objectFit="cover"
          />
        </div>

        <div className={css.right}>
          <span>{pizza.name}</span>
          <span>{pizza.details}</span>
          <span>
            <span style={{ color: "var(--themeRed" }}>Rp </span>
            {pizza.price[size]}
          </span>
          <div className={css.size}>
            <span>Ukuran Porsi</span>
            <div className={css.sizeVar}>
              <div
                onClick={() => setSize(0)}
                className={size == 0 ? css.selected : ""}
              >
                S (Kecil)
              </div>
              <div
                onClick={() => setSize(1)}
                className={size == 1 ? css.selected : ""}
              >
                M (Sedang)
              </div>
              <div
                onClick={() => setSize(2)}
                className={size == 2 ? css.selected : ""}
              >
                L (Besar)
              </div>
            </div>
          </div>

          <div className={css.quantity}>
            <span>Jumlah</span>

            <div className={css.counter}>
              <Image
                src={leftArrow}
                height={20}
                width={20}
                alt="arr-left"
                objectFit="contain"
                onClick={() => handleQuantity("dec")}
              />

              <span>{jumlah}</span>

              <Image
                src={rightArrow}
                height={20}
                width={20}
                alt="arr-left"
                objectFit="contain"
                onClick={() => handleQuantity("inc")}
              />
            </div>
          </div>

          <div className={`btn ${css.btn}`}>Add to Cart!</div>
        </div>
      </div>
    </Layout>
  );
};

export default Pizza;

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type=="pizza" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params;

  const pizza = await client.fetch(
    `*[_type=="pizza" && slug.current == '${slug}'][0]`
  );
  return {
    props: {
      pizza,
    },
  };
}
