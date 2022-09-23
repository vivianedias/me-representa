export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

export const event = ({ action, category, label, description, fatal }) => {
  let opts = {};
  if (action === DEFAULT_EVENTS.error) {
    opts = {
      description,
      fatal,
    };
  } else {
    opts =
      category || label || description
        ? {
            event_category: category,
            event_label: label,
            description,
          }
        : {};
  }

  window.gtag("event", action, opts);
};

export const DEFAULT_CATEGORIES = {
  engagement: "engagement",
};

export const DEFAULT_EVENTS = {
  signup: "sign_up",
  answer: "answer_survey",
  error: "exception",
  filter: "search",
  select: "select_priorities",
};
