import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <h2 className="text-red-500">404 not found</h2>
      <Link href={"/"}>Home</Link>
    </div>
  );
};

export default NotFound;
