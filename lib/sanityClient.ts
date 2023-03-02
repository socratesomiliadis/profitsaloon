import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { getFileAsset } from '@sanity/asset-utils';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-02-24';
const token = process.env.SANITY_TOKEN;

const config = {
  projectId,
  dataset,
  apiVersion,
  token
};

export const sanityClient = createClient({
  projectId,
  dataset,
  token, // or leave blank to be anonymous user
  apiVersion, // https://www.sanity.io/docs/api-versioning
  useCdn: typeof document !== 'undefined' // server-side is statically generated, the CDN is only necessary beneficial if queries are called on-demand
});

const builder = imageUrlBuilder(sanityClient);
export function urlFor(source: any) {
  return builder.image(source);
}
export const assetUrlFor = (source: any) => getFileAsset(source, config);
