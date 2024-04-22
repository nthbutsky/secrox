if (!URL.canParse(process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT)) {
  throw new Error(`
    Please provide a valid WordPress instance URL.
    Add to your environment variables WORDPRESS_API_ENDPOINT.
  `);
}

const { protocol, hostname, port, pathname } = new URL(
  process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT,
);

/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    // domains: ["secrox.local", "secrox.000webhostapp.com"],
    remotePatterns: [
      {
        protocol: protocol.slice(0, -1),
        hostname,
        port,
        pathname: `/**`,
      },
    ],
  },
};
