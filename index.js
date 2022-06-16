import { Server, addBlob } from './ssb.js'
import { convertLegacySSB } from 'ssb-fetch'
import path from 'path'
const moduleURL = new URL(import.meta.url)
const __dirname = path.dirname(moduleURL.pathname)
const archives = path.join(__dirname, 'archives')

const sbot = await Server()
const waczId = await addBlob(sbot, path.join(archives, 'lisp.wacz'))
const warcgzId = await addBlob(sbot, path.join(archives, 'example_com_0.warc.gz'))

console.log('wacz blob id is', waczId)
console.log('wacz ssb url is', convertLegacySSB(waczId))

console.log('warc.gz blob id is', warcgzId)
console.log('warc.gz ssb url is', convertLegacySSB(warcgzId))
