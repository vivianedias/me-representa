import { getUser } from "../api/user"

export default function Candidato({ data }) {
  return (
    <>
      <div>Candidato</div>
      <p key={data._id}>{data.email}</p>
    </>
  )
}

export async function getServerSideProps(req, res) {
  // Fetch data from external API
  const data = await getUser(req, res)

  // Pass data to the page via props
  return { props: { data: JSON.parse(JSON.stringify(data)) } }
}