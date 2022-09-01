import { getUsers } from "./api/user"

export default function Dashboard({ data }) {
  return (
    <>
      <div>Dashboard</div>
      {data.map(i => (<p key={i._id}>{i.email}</p>))}
    </>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const data = await getUsers()

  // Pass data to the page via props
  return { props: { data: JSON.parse(JSON.stringify(data)) } }
}
