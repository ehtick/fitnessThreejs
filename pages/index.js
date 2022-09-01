import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import { Squats, ThrillerMoves, HipHop, Excercise1, Excercise2, DanceOff, FunMoves } from '../components'
import Landing1 from '../components/Landing1'
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import Welcome from '../components/Welcome';

export default function Home() {

  return (
    <div>
      <Head>
        <title>Threecise</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <motion.div className="cursor" variants={variants} animate={cursorVariant}>

      </motion.div> */}
        <Landing1 />

    </div>
  )
}
