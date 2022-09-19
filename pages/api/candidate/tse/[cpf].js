import clientPromise from "../../../../lib/mongodb";

const CPF_KEY = "NR_CPF_CANDIDATO";

export default async function getCandidate(req, res) {
  try {
    const { cpf } = req.query;

    const client = await clientPromise;
    const db = client.db("merepresenta");

    const findResult = await db
      .collection("candidates_tse")
      .findOne({ [CPF_KEY]: cpf });

    return res.status(200).json(findResult);
  } catch (e) {
    console.error(e);
    return res.status(400);
  }
}
