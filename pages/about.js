import Image from "next/image";

export default function AboutPage() {
  return (
    <>
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
