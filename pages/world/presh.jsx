import styles from '@/styles/World.module.css'
import Link from 'next/link';

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { presh: data },
  };
};

export default function Presh({ presh }) {
  return (
    <div>
      <h1>Presh World</h1>
      {presh.map((dudu) => (
        <Link className={styles.single} href={'/world/' + dudu.id} key={dudu.id}>
          
            <h3>{dudu.name}</h3>
        
        </Link>
      ))}
    </div>
  );
}
