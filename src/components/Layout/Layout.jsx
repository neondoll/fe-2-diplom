import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { childrenType, classNameType } from "../../types/base";
import { cn } from "../../lib/utils";
import "./Layout.css";

function Layout({ children, mainClassName }) {
  return (
    <div className="layout">
      <Header className="layout__header" />
      <main className={cn("layout__main", mainClassName)}>{children}</main>
      <Footer />
    </div>
  );
}

Layout.propTypes = { children: childrenType, mainClassName: classNameType };

export default Layout;
