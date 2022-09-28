import clientPromise from "../../../../lib/mongodb";

const CPF_KEY = "NR_CPF_CANDIDATO";

const CANDIDATURE_STATUS_KEY = "DS_SITUACAO_CANDIDATURA";
const VALID_CANDIDATE = "APTO";

export default async function getCandidateByCpf(req, res) {
  try {
    const { cpf } = req.query;

    const client = await clientPromise;
    const db = client.db("merepresenta");

    const findResult = await db.collection("candidates_tse").findOne({
      [CPF_KEY]: cpf,
      [CANDIDATURE_STATUS_KEY]: VALID_CANDIDATE,
      $or: [{ isRegistered: { $exists: false } }, { isRegistered: false }],
    });

    return res.status(200).json(findResult);
  } catch (e) {
    console.error("CANDIDATE CPF", e);
    return res.status(400).send(e);
  }
}
