import clientPromise from "../../../lib/mongodb";
import { authOptions } from "../auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth/next";
import { ObjectId } from "mongodb";

export default async function updateCandidate(req, res) {
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
          ...req.body,
          userId: ObjectId(req.body.userId),
        },
      },
      { upsert: true }
    );

    return res.status(200).json(findResult);
  } catch (e) {
    console.log(e);
    return res.status(500).send(`An error occurred`);
  }
}
