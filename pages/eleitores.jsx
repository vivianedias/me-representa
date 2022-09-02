import fetchClient from '../utils/apiClient'

export default function Dashboard({ data }) {
  return (
    <>
      <div>Dashboard</div>
      {data.map(i => (<p key={i._id}>{i.email}</p>))}
    </>
  )
}

export async function getServerSideProps(req, res) {
  // Fetch data from external API
  const data = await fetchClient('/api/users')

  // Pass data to the page via props
  return { props: { data } }
}