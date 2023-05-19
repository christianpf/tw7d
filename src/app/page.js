"use client"
import Image from 'next/image'
import Link from 'next/link'
import Hero from './layout/Hero'
import Servicios from './layout/Servicios'
import { useEffect } from 'react'
import AOS from 'aos'
import Nosotros from './layout/Nosotros'

export default function Home() {

  useEffect(() => {
    AOS.init();
  },[])

  return (
    <main className=" min-w-[300px] w-full -z-50">
      <Hero />
      <Servicios/>
      <Nosotros/>
      <Servicios />
    </main>
  )
}
