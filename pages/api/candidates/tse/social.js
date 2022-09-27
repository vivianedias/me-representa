import clientPromise from "../../../../lib/mongodb";

export default async function getTseCandidatesSocialMedia(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("merepresenta");

    const pageSize = Number(req.query.pageSize);
    const pageNum = Number(req.query.pageNum);
    const skips = pageSize * (pageNum - 1);

    const findResult = await db
      .collection("candidates_tse_social_media")
      .find({
        candidateInviteStatus: "NOT_INVITED",
      })
      .sort({ SQ_CANDIDATO: 1 })
      .skip(skips)
      .limit(pageSize)
      .toArray();

    const count = await db.collection("candidates_tse_social_media").count();

    return res.status(200).json({
      candidates: findResult,
      count,
    });
  } catch (e) {
    console.error("GET CANDIDATES SOCIAL MEDIA", e);
    return res.status(400).send(e);
  }
}
