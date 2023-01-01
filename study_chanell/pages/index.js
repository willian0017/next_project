import styles from '../styles/Home.module.css'
import Countries from '../components/Countries'
import dynamic from 'next/dynamic'

// const Search = dynamic(() => import("../components/Search"), { ssr: false})

export default function Home() {
  return (
    <>
        {/* <Search/> */}
        <Countries/>
    </>
  )
}
