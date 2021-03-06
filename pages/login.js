import Head from "next/head";
import Footer from "../components/footer/Footer";
import SignIn from "../components/signIn/SignIn";

export default function Login() {
  return (
    <div
      style={{
        width: "90%",
        maxWidth: "400px",
        marginBottom: "50px",
        margin: "auto"
      }}
    >
      <Head>
        <title>Login</title>
        <meta name="description" content="Login page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <SignIn />
      </main>
    </div>
  );
}
