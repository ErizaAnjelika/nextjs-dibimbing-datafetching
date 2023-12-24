// import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';

// client side data fetching (Dynamic data)
// default fetching strategy pada react js using useEffect + useState + router.query

// export default function IdUserPage() {
// untuk membuat dinamic data pakai useRouter untuk mendapatkan id dibelakang url
//   const router = useRouter();

//   const [data, setData] = useState([]);

// flow fetching data
// buat dulu component
// fetch terjadi didalam component
// selama fetching ada loading
// kemudian akan muncul contentnya

//   useEffect(() => {
// dia akan fetch jika idnya ada
//     if (router.query.idUser) {
//       fetch(`https://jsonplaceholder.typicode.com/users/${router.query.idUser}`)
//         .then((resp) => resp.json())
//         .then((data) => setData(data));
//     }
//   }, [router.query.idUser]);

//   console.log(router);

//   if (data.length === 0) {
//     return <div>Loading....</div>;
//   }
//   console.log(data);
//   return (
//     <div className="space-y-3">
//       {/* {data.map((user) => (
//         <div key={user.id}>
//           <h1>{user.name}</h1>
//           <p>{user.email}</p>
//         </div>
//       ))} */}
//       <h1>{data?.name}</h1>
//     </div>
//   );
// }

// export async function getServerSideProps(router) {
//   const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${router.params.idUser}`);
//   const user = await resp.json();

// bawaan dari next js bahwa harus dimasukkan di props
//   return { props: { user } };
// }

// jika halaman dinamis maka hasur pakai getStaticPatch sebelum getStaticProps

/** getStaticPaths:
 * untuk mendapatkan seluruh dynamic path pada halaman. Untuk contoh disamping berarti mendapatkan [userId]
 */
export async function getStaticPaths() {
  const resp = await fetch(`https://jsonplaceholder.typicode.com/users/`);
  const users = await resp.json();
  const userId = users.map((user) => ({ params: { idUser: String(user.id) } }));
  /**
   *userId = [{
    {params:{userId:1}},
    {params:{userId:2}},
    {params:{userId:3}},
    {params:{userId:4}},
    {params:{userId:5}},
   }]
   */

  return { paths: userId, fallback: false };
}

/** getStaticProps:
 * untuk mendapatkan data agar diberikan kepada component secara statis
 */
export async function getStaticProps(router) {
  const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${router.params.idUser}`);
  const user = await resp.json();

  // bawaan dari next js bahwa harus dimasukkan di props
  return { props: { user } };
}

export default function IdUserPage({ user }) {
  return (
    <div>
      <h1>{JSON.stringify(user)}</h1>
    </div>
  );
}
