//pages/auth/signin.js
import { getProviders, signIn } from 'next-auth/react';

export default function SignIn({ providers }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl mb-6 text-gray-800">Sign in</h1>
      {Object.values(providers).map((provider) => (
        <div key={provider.name} className="mb-4">
          <button 
            className="px-6 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
            onClick={() => signIn(provider.id)}
          >
            Sign in with {provider.name}
          </button>
        </div>
      ))}
      <form 
        method="post" 
        action="/api/auth/callback/credentials"
        className="flex flex-col items-center mt-4"
      >
        <label className="flex flex-col mb-4">
          Email
          <input 
            name="email" 
            type="email" 
            className="mt-1 p-2 border border-gray-300 rounded w-64"
          />
        </label>
        <label className="flex flex-col mb-4">
          Password
          <input 
            name="password" 
            type="password" 
            className="mt-1 p-2 border border-gray-300 rounded w-64"
          />
        </label>
        <button 
          type="submit" 
          className="px-6 py-2 text-white bg-green-600 rounded hover:bg-green-700"
        >
          Sign in
        </button>
      </form>
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
