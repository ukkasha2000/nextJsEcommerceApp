import Image from "next/image";
import styles from "./page.module.css";
import AppHeader from "@/organisms/header";
import { ImageCarousel } from "@/molecules";
import DashboardLayout from "./(dashboard)/layout";

export default function Home() {
  return (
    <section>
      <DashboardLayout />
    </section>
  );
}
