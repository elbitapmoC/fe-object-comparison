import { useState } from "react";
import Head from "next/head";
import Footer from "../components/Footer";
import ComparingObjects_Stringify from "../components/ComparingObjects_Stringify";
import ComparingObjects_For_In from "../components/ComparingObjects_For_In";
import ComparingObjects_For from "../components/ComparingObjects_For";
import Accordion from "../components/Accordion";

export default function Home() {
  return (
    <div className="p-4">
      <style jsx>{`
        .main {
          min-height: 85vh;
          padding: 4rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
      <Head>
        <title>Comparing Objects | 3 Methods</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="main">
        <Accordion multiselect title="Accordion | Multiselect" />
        <Accordion title="Accordion | Single Select" />
        <ComparingObjects_Stringify />
        <ComparingObjects_For_In />
        {/* <ComparingObjects_For /> */}
      </div>
      <Footer />
    </div>
  );
}
