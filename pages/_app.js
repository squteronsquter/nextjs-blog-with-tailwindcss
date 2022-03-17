import "../styles/globals.css";
import NavBar from "../components/NavBar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <header className="bg-slate-900 h-16 p-2">
        <NavBar />
      </header>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
