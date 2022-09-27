import { unstable_getServerSession } from "next-auth/next";
import { ObjectId } from "mongodb";
import clientPromise from "../../../lib/mongodb";
import { authOptions } from "../auth/[...nextauth]";
import normalizeName from "../../../utils/normalizeName";

function getTseCandidate(tseCandidate) {
  if (!tseCandidate) return {};
  return {
    state: tseCandidate.SG_UE,
    stateName: tseCandidate.NM_UE,
    position: tseCandidate.DS_CARGO,
    tseId: tseCandidate.SQ_CANDIDATO,
    candidateNumber: tseCandidate.NR_CANDIDATO,
    name: normalizeName(tseCandidate.NM_URNA_CANDIDATO),
    partyName: tseCandidate.SG_PARTIDO,
    partyNumber: tseCandidate.NR_PARTIDO,
    race: tseCandidate.DS_COR_RACA,
    gender: tseCandidate.DS_GENERO,
  };
}

export default async function registerCandidate(req, res) {
  try {
    const session = await unstable_getServerSession(req, res, authOptions);
    if (!session) return res.status(401).send("Not authorized");

    const { tseCandidate, ...rest } = req.body;

    const newCandidate = {
      ...rest,
      ...getTseCandidate(tseCandidate),
      lgbtConfirm: req.body.lgbtConfirm === "yes",
      acceptedTerms: req.body.acceptedTerms[0] === "yes",
      userId: ObjectId(req.body.userId),
    };

    const userId = ObjectId(session.user.id);
    const client = await clientPromise;
    const db = client.db("merepresenta");
    const findResult = await db.collection("candidates").updateOne(
      { userId },
      {
        $set: newCandidate,
      },
      { upsert: true }
    );

    return res.status(200).json(findResult);
  } catch (e) {
    console.error("REGISTER CANDIDATE", e);
    return res.status(400).send(e);
  }
}
