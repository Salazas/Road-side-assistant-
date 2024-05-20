import React from "react";
import Header from "../features/home/Header";
import ServicesList from "../features/home/ServicesList";
import Search from "../components/Search";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div className="flex h-full flex-col gap-4 bg-white px-4 py-4">
      <Header />
      <Banner />
      <ServicesList />
    </div>
  );
};

export default Home;
