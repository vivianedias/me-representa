import { unstable_getServerSession } from "next-auth/next";
import { ObjectId } from "mongodb";
import clientPromise from "../../../lib/mongodb";
import { authOptions } from "../auth/[...nextauth]";

export default async function saveCandidateAnswers(req, res) {
  try {
    const session = await unstable_getServerSession(req, res, authOptions);
    if (!session) return res.status(401).send("Not authorized");

    const userId = ObjectId(session.user.id);
    const client = await clientPromise;

    const db = client.db("merepresenta");
    const findResult = await db.collection("candidates").updateOne(
      { userId },
      {
        $set: {
          answers: req.body,
        },
      },
      { upsert: true }
    );

    return res.status(200).json(findResult);
  } catch (e) {
    console.error("SAVE CANDIDATE ANSWERS", e);
    return res.status(400).send(e);
  }
}
