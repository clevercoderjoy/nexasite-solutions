import Search from "@/components/Search";
import HomePage from "./home/page";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <div className="pt-[7rem] md:pt-[4rem] sm:pt-[7rem]">
        <Search />
        <HomePage />
        <Footer />
      </div>
    </>
  );
}
