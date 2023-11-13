import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
     <div className={styles.container}>
       
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad aliquam, quasi eum iste repudiandae dolor placeat recusandae numquam, ratione voluptatem culpa ducimus nemo beatae error accusantium voluptas quod ipsam vel.</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, eveniet est perferendis dignissimos tenetur ipsa quam laboriosam alias esse facere eos qui nisi enim distinctio eligendi repudiandae sapiente dicta illum!</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum incidunt dignissimos adipisci placeat laboriosam tempore rerum cum itaque ut. Explicabo laborum fugit asperiores ratione officia. Commodi, delectus. Exercitationem, deserunt architecto?</p>
      <Link className={styles.tbn} href="world/presh">see Presh List</Link>
      
      </div>
  )
}