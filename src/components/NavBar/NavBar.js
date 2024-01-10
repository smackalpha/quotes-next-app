"use client"
import React from "react";
import { useRouter } from 'next/navigation'

const NavBar = () => {
    const router = useRouter();
  const navItems = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        gap:"10px"
      }}
    >
      <div style={{ fontSize: "30px", fontWeight: "600" }}>Quotes App</div>
      <div style={{ display: "flex", gap: "20px" }}>
        {navItems.map((item, index) => (
          <div key={index}>
            <div onClick={()=>{router.push(item.path)}} style={{ fontSize: "20px", textDecoration: "none", color: "black" }}>
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
