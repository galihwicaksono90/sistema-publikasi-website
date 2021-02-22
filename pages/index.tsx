import { InferGetStaticPropsType } from "next";

import Layout from "../components/Layout";
import Nav from "../components/nav/Nav";
import Hero from "../components/hero/Hero";
import Journal from "../components/journal/Journal";
import Services from "../components/services/Services";
import Testimony from "../components/testimony/Testimony";
import Contact from "../components/contact/Contact";
import BlogCards from "../components/blog/BlogCards";
import Footer from "../components/footer/Footer";
import Counter from "../components/Counter";

import { getLatestPosts } from "../lib/api";

const Home = ({ allPosts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <Nav />
      <Hero />
      <Journal />
      <Services />
      <Testimony />
      <BlogCards posts={allPosts} title="Latest Articles" />
      <Footer />
    </Layout>
  );
};
export default Home;

export const getStaticProps = async () => {
  const fields: string[] = [
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ];
  const number: number = 2;
  const allPosts = getLatestPosts(fields, number);
  return {
    props: { allPosts },
  };
};
