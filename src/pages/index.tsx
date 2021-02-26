
import { Profile } from "../components/Profile"
import { ExperienceBar } from "../components/ExperienceBar"
import { CompletedChallengs } from "../components/CompletedChallenges"
import { Coutdown } from "../components/Countdown"

import Head from "next/head"
import styles from "../styles/pages/Home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | move.it</title>
      </Head>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallengs />
          <Coutdown />
        </div>
        <div>


        </div>
      </section>
    </div>
  )
}