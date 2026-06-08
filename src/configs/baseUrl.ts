export const BaseApiUrl = `http://localhost:3001/`;

export const BASE_API_URL = (endpoint: string | number) =>
  `${BaseApiUrl}${endpoint}`;
