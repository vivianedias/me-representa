import { useEffect } from 'react'
import { signIn, useSession } from 'next-auth/react'
import "../../shared/locales/i18n";

export default function CadastroCandidato({ data }) {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      signIn();
    }
  }, [status]);

  if (status === "loading" || session === null) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div>Candidato</div>
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        id="email"
        name="email"
        value={session.user.email}
      ></input>
    </>
  );
}
