import Image from "next/image";
import Head from "next/head";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Karol Bajrulewicz | Bio | Photo</title>
        <meta
          name="description"
          value="Karol Bajrulewicz is a painter and illustrator."
        />
      </Head>
      <main className="flex flex-col w-screen h-screen justify-center items-center">
        <h1 className="text-2xl font-thin text-slate-800">About Me</h1>
        <p className="text-sm font-thin text-slate-500">
          My name is Karol Bajrulewicz.
        </p>
        <div className="p-4 m-4 border-zinc-200 border-2">
          <Image
            src="/img/bajrulewicz.webp"
            alt="Karol Bajrulewicz Autoportrait"
            width={300}
            height={300}
          />
        </div>
      </main>
    </>
  );
}
