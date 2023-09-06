import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <Link href="/about">TO ABOUT PAGE</Link>
     <h1>NEXT</h1>
    </main>
  )
}
