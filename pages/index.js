// pages/index.js
import Head from 'next/head';
import ToDo from '../components/ToDo';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#e0f7fa] flex items-center justify-center">
      <Head>
        <title>Intern Assessment</title>
        <meta name="description" content="A simple Daily To Do List App built with Next.js and Tailwind CSS." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <h1 className="text-5xl font-bold text-center mb-6">Daily To Do List</h1>
        <ToDo />
      </main>
    </div>
  );
}
