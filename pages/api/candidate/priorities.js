import { unstable_getServerSession } from "next-auth/next";
import { ObjectId } from "mongodb";
import clientPromise from "../../../lib/mongodb";
import { authOptions } from "../auth/[...nextauth]";

export default async function saveCandidatePriorities(req, res) {
  try {
    const session = await unstable_getServerSession(req, res, authOptions);
    if (!session) return res.status(401).send("Not authorized");

    const userId = ObjectId(session.user.id);
    const client = await clientPromise;

    const db = client.db("merepresenta");
    const findResult = await db.collection("candidates").updateOne(
      { userId },
      {
        $set: req.body,
      },
      { upsert: true }
    );

    return res.status(200).json(findResult);
  } catch (e) {
    console.error(e);
    return res.status(500).send(`An error occurred`);
  }
}
