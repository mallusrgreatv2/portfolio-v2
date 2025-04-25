import Image from "next/image";

export default function User() {
  return (
    <div className="flex mt-10 items-center">
      <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-[2px] rounded-full">
        <Image
          src="/pfp.png"
          alt="pfp"
          width={200}
          height={200}
          className="rounded-full p-1"
        />
      </div>
      <div className="md:ml-10 ml-3">
        <h1 className="md:text-5xl text-xl">mallusrgreat</h1>
        <p className="md:text-lg text-[11px] opacity-65 md:mt-2 mt-1">
          TypeScript enthusiast
        </p>
      </div>
    </div>
  );
}
