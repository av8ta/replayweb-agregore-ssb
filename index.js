import { Server, addBlob } from './ssb.js'
import { convertLegacySSB } from 'ssb-fetch'
import path from 'path'
const moduleURL = new URL(import.meta.url)
const __dirname = path.dirname(moduleURL.pathname)

const sbot = await Server())
const blobId = await addBlob(sbot, path.join(__dirname, 'wacz', 'lisp.wacz'))

console.log('wacz blob id is', blobId)
console.log('wacz ssb url is', convertLegacySSB(blobId))
