async function apiClient(endpoint, { body, ...customConfig } = {}) {
  const config = {
    ...customConfig,
    method: customConfig.method || "GET",
    headers: getHeaders(customConfig.headers),
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  const dev = process.env.NODE_ENV !== "production";
  const url = dev
    ? "https://" + process.env.NEXT_PUBLIC_APP_URL
    : "https://" + process.env.NEXT_PUBLIC_VERCEL_URL;

  const res = await fetch(url + endpoint, config);

  if (!res.ok) {
    const error = new Error("An error occurred while making the request.");
    error.status = res.status;
    throw error;
  }

  return res.json();
}

export function getHeaders(customHeaders = {}) {
  const headers = {
    "Content-Type": "application/json",
  };

  return { ...headers, ...customHeaders };
}

export default apiClient;
