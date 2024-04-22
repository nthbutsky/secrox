import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="container mx-auto">
      <div className="text-center border-t py-8">
        <h3 className="text-xl">Important Links</h3>
        <div className="flex items-center justify-center my-4 underline">
          <Link href="https://www.linkedin.com/in/denisbutsky" className="px-4">
            LinkedIn
          </Link>
          <Link href="https://denisbutsky.com/" className="px-4">
            Website
          </Link>
          <Link href="https://github.com/nthbutsky" className="px-4">
            GitHub
          </Link>
        </div>
        <small>Secrox &copy; {new Date().getFullYear()}</small>
      </div>
    </footer>
  );
};
