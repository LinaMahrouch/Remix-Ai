//import { cssBundleHref } from "@remix-run/css-bundle";
import stylesheet from "~/tailwind.css";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
//import { Analytics } from "@vercel/analytics/react";
import type { LinksFunction } from "@vercel/remix";
import Navbar from "./components/Navbar/Index";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-black">
      <Navbar />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
