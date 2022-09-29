import clientPromise from "../../../../lib/mongodb";

export default async function getTseCandidatesSocialMedia(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("merepresenta");

    const pageSize = Number(req.query.pageSize);
    const pageNum = Number(req.query.pageNum);
    const skips = pageSize * (pageNum - 1);

    const initialFilter = {
      candidateInviteStatus: "NOT_INVITED",
    };

    const rawFilters = JSON.parse(req.query.filters);
    const populatedFilters = Object.keys(rawFilters).reduce((arr, key) => {
      const filterValue = rawFilters[key]["value"];
      const check = filterValue !== null;

      const filter =
        key === "NM_URNA_CANDIDATO"
          ? { $regex: `/${filterValue}/i` }
          : { $in: filterValue };

      return [...arr, ...(check ? [{ [key]: filter }] : [])];
    }, []);

    const finalFilters =
      populatedFilters.length < 1
        ? initialFilter
        : { $and: [initialFilter, ...populatedFilters] };

    const findResult = await db
      .collection("candidates_tse_social_media")
      .find(finalFilters)
      .sort({ SQ_CANDIDATO: 1 })
      .skip(skips)
      .limit(pageSize)
      .toArray();

    return res.status(200).json({
      candidates: findResult,
      count: findResult.length,
    });
  } catch (e) {
    console.error("GET FILTERED CANDIDATES SOCIAL MEDIA", e);
    return res.status(400).send(e);
  }
}
