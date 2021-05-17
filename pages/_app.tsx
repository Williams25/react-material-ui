import "../styles/globals.css";
import { UserProvider, UserContext } from "../src/contexts";

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
