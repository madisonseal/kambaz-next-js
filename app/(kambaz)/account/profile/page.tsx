"use client";
import Link from "next/link";


import { Form, FormControl } from "react-bootstrap";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h1>Profile</h1>
      <FormControl placeholder="alice" />
      <FormControl placeholder="123" />
      <FormControl placeholder="Alice" />
      <FormControl placeholder="Wonderland" />
      <FormControl type="date" placeholder="Alice" />
      <FormControl type="email" placeholder="alice@wonderland.com" />
      <Form.Group className="mb-3">
    <Form.Select>
      <option>User</option>
      <option>Admin</option>
      <option>Faculty</option>
      <option>Student</option>
    </Form.Select>
  </Form.Group>

  <Link id="wd-signin-btn"
            href="/account/signin"
            className="btn btn-primary danger w-100 mb-2">
            Signout </Link>
  </div>

   
);}
