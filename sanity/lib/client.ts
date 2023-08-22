import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url';
import { apiVersion, dataset, projectId, useCdn } from '../env'
import ImageUrlBuilder from "@sanity/image-url";
export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,

})

const builder = ImageUrlBuilder(client);

export const urlFor = (source: string) => builder.image(source);
