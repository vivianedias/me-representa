import clientPromise from "../../lib/mongodb";

export default async function getPoliticalParties(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("merepresenta");

    const aggregate = await db
      .collection("political_parties")
      .aggregate([
        {
          $project: {
            label: "$SG_PARTIDO",
            value: "$SG_PARTIDO",
          },
        },
      ])
      .toArray();

    return res.status(200).json(aggregate);
  } catch (e) {
    console.log(e);
    return res.status(400);
  }
}
