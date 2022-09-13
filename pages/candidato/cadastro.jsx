import { signIn, useSession } from "next-auth/react";
import "../../shared/locales/i18n";

export default function CadastroCandidato({ data }) {
  const { status, data: session } = useSession({
    required: true,
    onUnauthenticated() {
      signIn();
    },
  });

  if (status === "loading") {
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
