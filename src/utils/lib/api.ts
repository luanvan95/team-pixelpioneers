// lib/api.ts
const apiUrl = "https://www.123rf.com/apicore-texttoimage";

export const generateCaptions = async (data: any) => {
  const response = await fetch(`${apiUrl}/gen_captions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("Failed to fetch from endpoint1");
  }
  return response.json();
};

export const generateSlogan = async (data: any) => {
  const response = await fetch(`${apiUrl}/gen_slogans`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("Failed to fetch from endpoint2");
  }
  return response.json();
};

export const generateHashTag = async (data: any) => {
  const response = await fetch(`${apiUrl}/gen_hashtags`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("Failed to fetch from endpoint3");
  }
  return response.json();
};

export const generateImages = async (data: any) => {
  const response = await fetch(`${apiUrl}/gen_images`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error("Failed to fetch from endpoint3");
  }
  return response.json();
};
