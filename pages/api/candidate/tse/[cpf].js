import clientPromise from "../../../../lib/mongodb";

const CPF_KEY = "NR_CPF_CANDIDATO";

function removesSpecialChars(cpf) {
  return cpf.replace(/[^\w\s]/gi, "");
}

export default async function getCandidateByCpf(req, res) {
  try {
    const { cpf } = req.query;

    const client = await clientPromise;
    const db = client.db("merepresenta");

    const findResult = await db
      .collection("candidates_tse")
      .findOne({ [CPF_KEY]: removesSpecialChars(cpf) });

    return res.status(200).json(findResult);
  } catch (e) {
    console.error(e);
    return res.status(400);
  }
}
