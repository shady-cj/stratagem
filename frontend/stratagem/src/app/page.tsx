import Image from "next/image";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen">
      <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
      <p className="text-lg">This is a simple example of a Next.js page.</p>
      <Image src="/path/to/image.jpg" alt="Example Image" width={500} height={300} />
    </div>
  );
}
