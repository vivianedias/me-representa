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

    const filters = [];
    const prioritiesFilter = buildPrioritiesQuery(req.body.priorities);
    if (prioritiesFilter.length > 0) {
      filters.push(...prioritiesFilter);
    }

    if (req.body.state.length > 0) {
      filters.push({ state: { $in: req.body.state.value } });
    }

    if (req.body.lgbt.length > 0) {
      filters.push({ lgbt: { $in: req.body.lgbt } });
    }

    const partiesFilter = getParties(req.body.parties);
    if (partiesFilter.length > 0) {
      filters.push({ partyName: { $in: partiesFilter } });
    }

    const raceFilters = req.body.identity.filter((i) => i !== "FEMININO");
    if (raceFilters.length > 0) {
      filters.push({ race: { $in: raceFilters } });
    }

    const hasGenderIdentityFilter = req.body.identity.find(
      (i) => i === "FEMININO"
    );
    if (hasGenderIdentityFilter) {
      filters.push({ gender: "FEMININO" });
    }

    console.log({ filters: JSON.stringify(filters, null, 2) });

    const findResult = await db
      .collection("candidates")
      .find({
        $and: filters,
      })
      .toArray();
    console.log({ findResult });
    return res.status(200).json({
      candidates: findResult,
      count: findResult.length,
    });
  } catch (e) {
    console.log(e);
    return res.status(400);
  }
}
