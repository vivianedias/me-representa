import { useEffect } from 'react'
import { signIn, useSession } from 'next-auth/react'
import '../shared/locales/i18n'

export default function CadastroCandidato({ data }) {
  const { data: session, status } = useSession()

  useEffect(() => {
    if (status === "unauthenticated") {
      return signIn()
    }
  }, [status])

  if (status === "loading") {
    return <p>Loading...</p>
  }

  return (
    <>
      <div>Candidato</div>
      <label hmtlFor="email">Email:</label>
      <input type="text" id="email" name="email" value={session.user.email}></input>
    </>
  )
}
