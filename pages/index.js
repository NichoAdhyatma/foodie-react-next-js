
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Services from "../components/Services";
import css from "../styles/Home.module.css";
import { client } from "../lib/client";
import Menu from "../components/Menu";

export default function Home({ pizzas }) {
  return (
    <Layout>
      <div className={css.container}>
        <main>
          <Hero />
          <Services />
          <Menu pizzas={pizzas}/>
        </main>
      </div>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const query = '*[_type == "pizza"]';
  const pizzas = await client.fetch(query);
  return {
    props: {
      pizzas,
    },
  };
};
