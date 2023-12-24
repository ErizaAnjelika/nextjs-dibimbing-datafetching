// export async function getServerSideProps(router) {
//   const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${router.params.postId}`);
//   const posts = await resp.json();

  // bawaan dari next js bahwa harus dimasukkan di props
//   return { props: { posts } };
// }


export async function getStaticPaths(){
  const resp = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const posts = await resp.json();
  const postId = posts.map((post)=>({params:{postId:String(post.id)}}))
  return {paths:postId,fallback:false};
}


export async function getStaticProps(router){
  const resp=await fetch(`https://jsonplaceholder.typicode.com/posts/${router.params.postId}`);
  const posts=await resp.json();

  return {props:{posts}}
}

export default function IdPostsPage({ posts }) {
  return (
    <div>
      <h1>{JSON.stringify(posts)}</h1>
    </div>
  );
}
