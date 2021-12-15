import Navbar from "../components/organisms/navbar";
import Hero from "../components/organisms/hero";
import Products from "../components/organisms/products";
import Content1 from "../components/organisms/content1";
import Content2 from "../components/organisms/content2";
import Quick from "../components/organisms/quick";
import Strategies from "../components/organisms/strategies";
import Price from "../components/organisms/price";
import Clients from "../components/organisms/clients";
import Join from "../components/organisms/Join";
import Footer from "../components/organisms/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      {/* Content 1 */}
      <Content1
        subtitle="Effortless Validation for"
        title="Management"
        desc="The Myspace page defines the individual, his or her characteristics, traits, personal choices and the overall personality of the person."
        desctitle1="Accessory makers"
        desc1="While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun"
        desctitle2="Alterationists"
        desc2="If you are looking for a new way to promote your business that won’t cost you more money,"
        image="/images/content1.svg"
        width={540}
        height={473}
      />
      {/* Content 2 */}
      <Content2
        subtitle="Easier decision making for"
        title="Customer Support"
        desc="The Myspace page defines the individual, his or her characteristics, traits, personal choices and the overall personality of the person."
      />
      <Content1
        subtitle="Optimisation for"
        title="Collaborative"
        desc="Few would argue that, despite the advancements of feminism over the past three decades, women still face a double standard when it comes to their behavior. "
        desctitle1="Accessory makers"
        desc1="While most people enjoy casino gambling, sports betting, lottery and bingo playing for the fun"
        desctitle2="Alterationists"
        desc2="If you are looking for a new way to promote your business that won’t cost you more money,"
        image="/images/content3.svg"
        width={542}
        height={451}
      />
      <Quick />
      <Strategies />
      <Price />
      <Clients />
      <Join />
      <Footer />
    </>
  );
}
