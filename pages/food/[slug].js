import Image from "next/image";
import Layout from "../../components/Layout";
import { client, urlFor } from "../../lib/client";
import css from "../../styles/Food.module.css";
const Pizza = ({ pizza }) => {
  const src = urlFor(pizza.image).url();
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
          <span>{pizza.price[1]}</span>
          <div className={css.size}>
            <span>Ukuran Porsi</span>
            <div className={css.sizeVar}>
              <div>S (Kecil)</div>
              <div>M (Sedang)</div>
              <div>L (Besar)</div>
            </div>
          </div>

          <div className={css.quantity}>
            <span>Harga</span>

            <div className={css.counter}>
              <Image src={leftArrow} />
            </div>
          </div>
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
