import { useEffect, useState } from 'react';

export default function ListBlog() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then((resp) => resp.json())
      .then((data) => setData(data));
  }, []);

  if (data.length === 0) {
    return <div>loading....</div>;
  }

  return (
    <div className="flex justify-center items-center">
      <h1>Halaman blog</h1>
      <div className="space-y-4 flex flex-row flex-wrap m-5 gap-4">
        {data.map((posts) => (
          <div key={posts.id}>
            <a
              href="#"
              className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{posts.title}</h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">{posts.body}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
