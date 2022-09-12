import { Outlet } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <main>
      <Outlet>{children}</Outlet>
    </main>
  );
}
