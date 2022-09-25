import clientPromise from "../../../lib/mongodb";

function getParties(parties) {
  return parties.map(({ value }) => value);
}

function buildPrioritiesQuery(priorities) {
  return priorities.map((priority) => ({
    [priority]: { $gt: 0 },
  }));
}

export default async function getCandidates(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("merepresenta");

    const initialFilters = {
      state: req?.body?.state || null,
      priorities: req?.body?.priorities || [],
      lgbt: req?.body?.lgbt || [],
      parties: req?.body?.parties || [],
      identity: req?.body?.identity || [],
    };
    const filters = [
      { tseId: { $exists: true } },
      { answers: { $exists: true } },
    ];

    const prioritiesFilter = buildPrioritiesQuery(initialFilters.priorities);
    if (prioritiesFilter.length > 0) {
      filters.push(...prioritiesFilter);
    }

    if (initialFilters.state) {
      filters.push({ state: req.body.state.value });
    }

    if (initialFilters.lgbt.length > 0) {
      filters.push({ lgbt: { $in: req.body.lgbt } });
    }

    if (initialFilters.parties.length > 0) {
      const partiesFilter = getParties(req.body.parties);
      filters.push({ partyName: { $in: partiesFilter } });
    }

    const raceFilters = initialFilters.identity.filter((i) => i !== "FEMININO");
    if (raceFilters.length > 0) {
      filters.push({ race: { $in: raceFilters } });
    }

    const hasGenderIdentityFilter = initialFilters.identity.find(
      (i) => i === "FEMININO"
    );
    if (hasGenderIdentityFilter) {
      filters.push({ gender: "FEMININO" });
    }

    const findResult = await db
      .collection("candidates")
      .find({
        $and: filters,
      })
      .toArray();

    return res.status(200).json({
      candidates: findResult,
      count: findResult.length,
    });
  } catch (e) {
    console.error("FILTER ERROR", e);
    return res.status(400).send(e);
  }
}
