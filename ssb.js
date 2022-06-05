import file from 'pull-file'
import pull from 'pull-stream'
import shipyard from '@metacentre/shipyard'
import ssbServerPlugins from '@metacentre/shipyard-ssb'
import os from 'os'
import fs from 'fs'
import { join } from 'path'
import mkdirp from 'mkdirp'

const appname = 'replayweb-agregore-ssb'
const configDir = join(os.homedir(), `.${appname}`)
const configPath = join(configDir, 'config')
await mkdirp(configDir)
const config = {
  appname,
  caps: {
    shs: 'InRNDNSnLJasGWEPLe7zPAj8kHAgOesoPgczeV3g4Y0=',
    sign: 'mH1wBje2HmVQgG6yXxkwrUTqseLOwgDEnq2IPJJYX0I='
  }
}
fs.writeFileSync(configPath, JSON.stringify(config))

/**
 *  these caps are a different empty network to use for testing
 *  agregore needs the env var ssb_appname=replayweb-agregore-ssb to connect to it
 *  you can delete the contents at ~/.replayweb-agregore-ssb afterwards
 */
const sbot = shipyard(config, { plugins: ssbServerPlugins })

export function Server() {
  return new Promise(resolve => resolve(sbot))
}

export function publish(sbot, content) {
  return new Promise((resolve, reject) => {
    sbot.publish(content, (error, msg) => {
      if (error) reject(error)
      else resolve(msg.key)
    })
  })
}

export function addBlob(sbot, filePath) {
  return new Promise((resolve, reject) => {
    pull(
      file(filePath),
      sbot.blobs.add((error, blobId) => {
        if (error) reject(error)
        else resolve(blobId)
      })
    )
  })
}
