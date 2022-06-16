# replayweb-agregore-ssb

# [quickstart tldr](#tldr)

## cloning repos

clone this [meta](https://www.npmjs.com/package/meta) repo and all child repos

```bash
npx meta git clone git@github.com:av8ta/replayweb-agregore-ssb.git
cd replayweb-agregore-ssb
```

## bootstrapping

the following commands are all run from this root meta repo:

bootstrap meta repo (installs dependencies with yarn and links them)

```bash
yarn bootstrap
```

## running

### start webpack dev servers for replayweb.page and wabac.js

```bash
yarn start:dev
```

### start ssb

you will need an ssb server, if you're not already on the network, you can run one here:

in another terminal:

```bash
yarn ssb
```

it uploads the wacz archive in `./wacz/` and prints the id and ssb url to the terminal

### start agregore

start agregore in another terminal. if you make changes to ssb-fetch, or restart ssb, agregore must be restarted. reconnect will be implemented soon.

```bash
yarn start
```

then browse to <http://localhost:9990> to view replayweb in agregore

paste in the ssb url from earlier

## example archive urls to try

```
// ssb blobs are content addressed by sha256 hashes, so this is the blob added by running `yarn ssb`
wacz:    ssb://blob/sha256/d8CiqahzsXOJP2xb-Mri8uDAo8351ZnfAd4PmvaWu4Q=

warc.gz: ssb://blob/sha256/i2sw5ZksQTFyEJHiaQsaYXY1JrqlLXmqxSel3VPACMQ=

https://metacentre.sgp1.digitaloceanspaces.com/webrecorder/lisp.wacz
```

## cleanup

```bash
yarn clean
```

this will delete all dependencies in all repos and delete the ssb directory stored in home at `~/.replayweb-agregore-ssb`

## meta

meta is a pretty sweet tool. it basically loops over each repo defined in `.meta` and runs the following command. try this to get a feel for it:

```bash
npx meta git status
```

so you can run commands over all repos or `cd` into individual ones. no new commands to learn. it's both separate repos and like a monorepo.

# tldr

terminal 1

```bash
npx meta git clone git@github.com:av8ta/replayweb-agregore-ssb.git
cd replayweb-agregore-ssb
yarn bootstrap
yarn start:dev
```

terminal 2

```bash
yarn ssb
```

terminal 3

```bash
yarn start
```

in agregore browse to <http://localhost:9990>
and paste in ssb://blob/sha256/d8CiqahzsXOJP2xb-Mri8uDAo8351ZnfAd4PmvaWu4Q=#.wacz
