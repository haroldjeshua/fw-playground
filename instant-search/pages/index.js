import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import CarForm from "../lib/CarForm";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={inter.className}>
      <h1>Create A Car</h1>
      <CarForm />
    </div>
  );
}
