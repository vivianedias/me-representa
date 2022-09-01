import { useSession } from "next-auth/react"

export default function CadastrarCandidato({ data }) {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return <p>Loading...</p>
  }

  if (status === "unauthenticated") {
    return <p>Access Denied</p>
  }

  return (
    <>
      <div>Candidato</div>
      <label hmtlFor="email">Email:</label>
      <input type="text" id="email" name="email" value={session.user.email}></input>
    </>
  )
}
