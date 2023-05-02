import contentful from "contentful";

const spaceID = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

const client = contentful.createClient({
  space: "a",
  accessToken: "a",
});

export async function fetchEntries() {
  const entries = await client.getEntries();
  if (entries.items) return entries.items;
}

export default {
  fetchEntries,
};
