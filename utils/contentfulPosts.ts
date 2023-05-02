import * as contentful from "contentful";
import { ContentfulPost } from "../types/contentfulContent";

const spaceID = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENT_DELIVERY_API_KEY;

if (!spaceID || !accessToken) {
  throw new Error("Environment variables not set");
}

const client = contentful.createClient({
  space: spaceID,
  accessToken: accessToken,
});

const fetchEntries = async () => {
  const entries = await client.getEntries();
  let contents: ContentfulPost[] | [] = [];
  if (entries.items) contents = [...entries.items];
  return contents;
};

export default fetchEntries;
