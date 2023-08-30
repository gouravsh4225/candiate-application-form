import React from "react";
import { Outlet } from "react-router-dom";

export const Layout = (prpos) => {
  return (
    <main>
      <Outlet />
      {prpos.children}
    </main>
  );
};
