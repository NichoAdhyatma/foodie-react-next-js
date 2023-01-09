import css from "../styles/Services.module.css";
import Image from "next/image";
import s1 from "../assets/s1.png";
import s2 from "../assets/s2.png";
import s3 from "../assets/s3.png";

const Services = () => {
  return (
    <>
      <div className={css.heading}>
        <span>APA YANG KITA SAJIKAN</span>
        <span>Makanan Favoritmu</span>
        <span>Partner Pengiriman</span>
      </div>
      {/*Features */}
      <div className={css.services}>
        <div className={css.feature}>
          <div className={css.imageWrapper}>
            <Image
              src={s1}
              alt="service-1"
              objectFit="cover"
              layout="intrinsic"
            />
          </div>
          <span>Pemesanan Mudah</span>
          <span>
            Anda hanya membutuhkan beberapa langkah untuk memesan makanan
          </span>
        </div>

        <div className={css.feature}>
          <div className={css.imageWrapper}>
            <Image
              src={s2}
              alt="service-1"
              objectFit="cover"
              layout="intrinsic"
            />
          </div>
          <span>Pengiriman Cepat</span>
          <span>
            Anda tidak perlu lama saat pengiriman makanan,
            karena mitra pengiriman yang tersebar luas
          </span>
        </div>
        <div className={css.feature}>
          <div className={css.imageWrapper}>
            <Image
              src={s3}
              alt="service-1"
              objectFit="cover"
              layout="intrinsic"
            />
          </div>
          <span>Kualitas Makanan</span>
          <span>
            Tidak hanya cepat, namun berkualitas juga, kualitas tetap menjadi nomor 1
          </span>
        </div>
      </div>
    </>
  );
};

export default Services;
