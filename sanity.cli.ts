/**
* This configuration file lets you run `$ sanity [command]` in this folder
* Go to https://www.sanity.io/docs/cli to learn more.
**/
import { defineCliConfig } from 'sanity/cli'
import {loadEnvConfig} from '@next/env'
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const dev = process.env.NODE_ENV !== 'production'
loadEnvConfig(__dirname, dev, {info: () => null, error: console.error})

export default defineCliConfig({ api: { projectId, dataset } })
