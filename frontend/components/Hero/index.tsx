import Link from "next/link";

export const Hero = () => {
  return (
    <section className="container mx-auto py-12 text-center border-b">
      <div>
        <h1 className="text-2xl md:text-4xl">Hey, welcome to Secrox!</h1>
        <p className="my-6 text-lg">
          Follow us on{" "}
          <Link
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-500"
          >
            Twitter
          </Link>
          .
        </p>
        <p className="text-center">🎁🎁🎁</p>
      </div>
    </section>
  );
};
