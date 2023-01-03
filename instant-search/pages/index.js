import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import CarForm from "../lib/CarForm";
import SearchForm from "../lib/SearchForm";

const inter = Inter({ subsets: ["latin"], variable: "--inter-font" });

export default function Home(props) {
  return (
    <main className={inter.className}>
      <div className="card-wrapper">
        <div className="flex justify-center">
          <h1 className="text-4xl font-medium mb-4">Create A Car</h1>
        </div>
        <CarForm />
      </div>

      <div className="card-wrapper">
        <div className="flex justify-center">
          <h1 className="text-4xl font-medium mb-4">Find A Car</h1>
        </div>
        <SearchForm />
      </div>
    </main>
  );
}
