import fetchClient from '../../utils/apiClient'
import "../../shared/locales/i18n";

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
  const { id } = req.query

  const data = await fetchClient(`/api/candidate/${id}`);

  // Pass data to the page via props
  return { props: { data } }
}