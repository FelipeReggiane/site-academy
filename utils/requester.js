import axios from "axios";

export default async function Request({
  method,
  url,
  data,
  headers,
  timeout = 15000,
}) {
  try {
    const response = await axios({
      method,
      url,
      data,
      headers,
      timeout,
    });

    return response;
  } catch (error) {
    throw error;
  }
}
