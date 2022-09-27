import clientPromise from "../../../../lib/mongodb";

export default async function saveCandidateSocial(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("merepresenta");
    console.log("log", {
      SQ_CANDIDATO: String(req.body.SQ_CANDIDATO),
      candidateInviteStatus: req.body.candidateInviteStatus,
    });
    const updateSocialMedia = await db
      .collection("candidates_tse_social_media")
      .updateMany(
        { SQ_CANDIDATO: req.body.SQ_CANDIDATO },
        {
          $set: {
            candidateInviteStatus: req.body.candidateInviteStatus,
          },
        }
      );

    return res.status(200).json(updateSocialMedia);
  } catch (e) {
    console.error("SAVE CANDIDATE TSE SOCIAL MEDIA", e);
    return res.status(400).send(e);
  }
}
