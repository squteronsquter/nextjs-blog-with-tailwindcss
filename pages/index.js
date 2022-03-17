import Image from "next/image";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Karol Bajrulewicz | Blog | Home Page</title>
        <meta
          name="description"
          value="Karol Kajrulewicz in his blog writes about the state of contemporary world and illustrates his short essays with paintings and illustrations of his own."
        />
      </Head>
      <main className="flex flex-col w-screen h-screen justify-start items-center">
        <Image
          src="/img/hajfa_2000.webp"
          alt="Port in Hajfa"
          width={2000}
          height={940}
        />
        <h1 className="text-2xl font-thin text-slate-800">
          Port in Hajfa - Tryptych
        </h1>
        <p className="text-sm font-thin text-slate-500">
          Watercolor on paper by Karol Bajrulewicz
        </p>
      </main>
    </>
  );
}
