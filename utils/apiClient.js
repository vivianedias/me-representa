const env = process.env.NEXT_PUBLIC_VERCEL_ENV || process.env.NODE_ENV;
const urlByEnv = {
  preview: process.env.NEXT_PUBLIC_VERCEL_URL,
  development: process.env.NEXT_PUBLIC_APP_URL,
  production: process.env.NEXT_PUBLIC_APP_URL,
};
export const url = "https://" + urlByEnv[env];

async function apiClient(endpoint, { body, ...customConfig } = {}) {
  const config = {
    ...customConfig,
    method: customConfig.method || "GET",
    headers: getHeaders(customConfig.headers),
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  const res = await fetch(url + endpoint, config);

  if (!res.ok) {
    const error = new Error(
      `An error occurred while making the request: ${res.statusText}`
    );
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
