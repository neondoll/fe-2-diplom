import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { childrenType, classNameType } from "../../types/base";
import { cn } from "../../lib/utils";
import "./Layout.css";

function Layout({ children, className, mainClassName }) {
  return (
    <div className={cn("layout", className)}>
      <Header className="layout__header" />
      <main className={cn("layout__main", mainClassName)}>{children}</main>
      <Footer className="layout__footer" />
    </div>
  );
}

Layout.propTypes = { children: childrenType, className: classNameType, mainClassName: classNameType };

export default Layout;
