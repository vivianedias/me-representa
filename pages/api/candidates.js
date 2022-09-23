import clientPromise from "../../lib/mongodb";

export default async function getCandidates(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("merepresenta");

    const findResult = await db.collection("candidates").find({}).toArray();
    const count = await db.collection("candidates").count();

    return res.status(200).json({
      candidates: findResult,
      count,
    });
  } catch (e) {
    console.log(e);
    return res.status(400);
  }
}
