import { useEffect, useState } from 'react';

// Server side fetching
// getServerSideProps => function bawaan next js tidak bisa diganti
// export async function getServerSideProps() {
//   const resp = await fetch('https://jsonplaceholder.typicode.com/users/1');
//   const user = await resp.json();

// bawaan dari next js bahwa harus dimasukkan di props
//   return { props: { user } };
// }

// static side generator

export async function getStaticProps() {
  const resp = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const user = await resp.json();
  
  // bawaan dari next js bahwa harus dimasukkan di props
    return { props: { user } };
}

export default function Homepage({ user }) {
  // const [data, setData] = useState([]);

  // flow fetching data
  // buat dulu component
  // fetch terjadi didalam component
  // selama fetching ada loading
  // kemudian akan muncul contentnya

  // useEffect(() => {
  // fetch('https://jsonplaceholder.typicode.com/users/1')
  //   .then((resp) => resp.json())
  //   .then((data) => setData(data));
  // async function fetchAsync()
  // const fetchAsync = async () => {
  //   try {
  //     const response = await fetch('https://jsonplaceholder.typicode.com/users/2');
  //     const data = await response.json();
  //     setData(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // fetchAsync();
  // }, []);

  // if (data.length === 0) {
  //   return <div>Loading....</div>;
  // }

  return (
    <div className="space-y-3">
      {/* {data.map((user) => (
        <div key={user.id}>
          <h1>{user.name}</h1>
          <p>{user.email}</p>
        </div>
      ))} */}
      {/* <h1>{user?.name}</h1> */}
      <h1>{JSON.stringify(user)}</h1>
    </div>
  );
}
