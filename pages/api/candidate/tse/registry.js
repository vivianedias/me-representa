import { unstable_getServerSession } from "next-auth/next";
import { ObjectId } from "mongodb";
import clientPromise from "../../../../lib/mongodb";
import { authOptions } from "../../auth/[...nextauth]";

export const TSE_ID = "SQ_CANDIDATO";

export default async function updateTseRegistry(req, res) {
  try {
    const session = await unstable_getServerSession(req, res, authOptions);
    if (!session) return res.status(401).send("Not authorized");

    const userId = ObjectId(session.user.id);
    const client = await clientPromise;
    const db = client.db("merepresenta");

    const findResult = await db.collection("candidates").findOne({ userId });

    if (!findResult) {
      throw new Error("You can't update a different candidate");
    }

    const updateResult = await db.collection("candidates_tse").updateOne(
      { [TSE_ID]: findResult.tseId },
      {
        $set: {
          isRegistered: true,
        },
      }
    );

    return res.status(200).json(updateResult);
  } catch (e) {
    console.error("UPDATE TSE REGISTRY", e);
    return res.status(400).send(e);
  }
}
