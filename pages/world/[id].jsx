export const getStaticPaths = async () => {
  const  res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map(gold => {
    return {
      params: {id: gold.id.toString()}
    }

  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: {dada: data}
  }
}

export default function Details({dada}) {
    return (
        <div>
          <h1>{dada.name}</h1> 
          <p>{dada.email}</p> 
          <p>{dada.website}</p>
          <p>{dada.address.city}</p>
        </div>
    )
}  