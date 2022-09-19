import clientPromise from "../../../lib/mongodb";
import { authOptions } from "../auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth/next";
import { ObjectId } from "mongodb";

export default async function updateCandidate(req, res) {
  try {
    const session = await unstable_getServerSession(req, res, authOptions);
    if (!session) return res.status(401).send("Not authorized");

    const newCandidate = {
      ...req.body,
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
        $set: {
          ...req.body,
          newCandidate,
        },
      },
      { upsert: true }
    );

    return res.status(200).json(findResult);
  } catch (e) {
    console.error(e);
    return res.status(500).send(`An error occurred`);
  }
}
