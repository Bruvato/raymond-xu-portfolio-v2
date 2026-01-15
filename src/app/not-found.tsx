import Link from "next/dist/client/link";

export default function NotFound() {
  return (
    <div>
      <h2>404 Not Found</h2>
      <Link href="/">Return Home</Link>
    </div>
  );
}
