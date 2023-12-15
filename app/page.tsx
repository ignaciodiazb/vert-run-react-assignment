import Link from 'next/link';

export default function Home() {
  return (
    <div className={'py-10'}>
      <h1 className={'text-3xl text-center font-bold mb-10'}>Home</h1>
      <section className={'w-64 flex flex-col mx-auto'}>
        <Link
          className={
            'text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 block'
          }
          href={'/activities'}
        >
          Activities
        </Link>
        <Link
          className={
            'text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 block'
          }
          href={'/stats'}
        >
          Stats
        </Link>
      </section>
    </div>
  );
}
