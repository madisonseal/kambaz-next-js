"use client";
import Link from "next/link";

export default function Navigation() {
  return (
  <div>
  <Link href="/account/signin" className="text-dark text-decoration-none d-block mb-2">
    Signin
  </Link>
  <Link href="/account/signup" className="text-danger text-decoration-none d-block mb-2">
    Signup
  </Link>
  <Link href="/account/profile" className="text-danger text-decoration-none d-block mb-2">
    Profile
  </Link>
  </div>


  );
}