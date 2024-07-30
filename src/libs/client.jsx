import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "Sasayu",
  apiKey: process.env.API_KEY,
});
