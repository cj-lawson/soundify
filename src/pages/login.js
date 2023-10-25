import { getProviders, signIn } from "next-auth/react";

const Login = ({ providers }) => {
  return (
    <div>
      <h1>This is a login page</h1>

      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id, { callbackUrl: "/" })}>
            login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
