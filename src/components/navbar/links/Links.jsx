"use client";
import React from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/NavLink";
import { useState } from "react";
const links = [
  {
    id: 1,
    title: "Homepage",
    path: "/",
  },
  {
    id: 2,
    title: "About Page",
    path: "/about",
  },
  {
    id: 3,
    title: "Blog",
    path: "/blog",
  },
];

const Links = () => {
  const [open, setOpen] = useState(false);
  const session = true;
  const isAdmin = true;
  return (
    <>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.id} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={styles.menuButton}
      >
        Menu
      </button>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.id} />
          ))}
        </div>
      )}
    </>
  );
};

export default Links;
