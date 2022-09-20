import { ObjectId } from "mongodb";
import clientPromise from "../../../lib/mongodb";

export default async function getCandidateById(req, res) {
  try {
    const { id } = req.query;

    const client = await clientPromise;
    const db = client.db("merepresenta");

    const findResult = await db
      .collection("candidates")
      .findOne({ userId: ObjectId(id) });

    return res.status(200).json(findResult);
  } catch (e) {
    console.error(e);
    return res.status(400);
  }
}
