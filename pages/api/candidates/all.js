import clientPromise from "../../../lib/mongodb";

export default async function getCandidates(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("merepresenta");

    const findResult = await db
      .collection("candidates")
      .find({
        $and: [{ tseId: { $exists: true } }, { answers: { $exists: true } }],
      })
      .toArray();

    return res.status(200).json({
      candidates: findResult,
      count: findResult.length,
    });
  } catch (e) {
    console.error("GET ALL CANDIDATES", e);
    return res.status(400).send(e);
  }
}
