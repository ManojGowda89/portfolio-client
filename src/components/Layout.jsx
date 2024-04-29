import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { useMyContext } from "../firebase/config.jsx";



// eslint-disable-next-line react/prop-types
export default function Layout({ children, title }) {
  const { toglemode, handelbackground } = useMyContext();

  // background-color: #fff;
  // color: #333;

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>{" "}
      <Header changetogle={handelbackground} toggle={toglemode} />
      <main
        style={{ backgroundColor: toglemode ? "#fff" : "#333", height: "auto" }}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
