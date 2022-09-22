function getsCandidatesPriorities(candidate) {
  const candidatePriorities = Object.keys(candidate || {}).reduce(
    (obj, key) => {
      const keyHasPriority = key.includes("Priority");
      return {
        ...obj,
        ...(keyHasPriority ? { [key]: candidate[key] } : {}),
      };
    },
    {}
  );
  return candidatePriorities;
}

export default getsCandidatesPriorities;
