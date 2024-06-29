import Header from "@/components/header/Header";
import SearchTickets from "@/components/searchTickets/SearchTickets";
import Login from "@/components/login/Login";
import Footer from "@/components/footer/Footer";

import styles from "./main.module.css";

export default function Main() {
  return (
    <div className={styles.wrapper}>
      <Header/>
      <SearchTickets/>
      <Login/>
      <Footer/>
    </div>
  )
}
