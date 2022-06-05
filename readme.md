# replayweb-agregore-ssb

## cloning repos

clone this [meta](https://www.npmjs.com/package/meta) repo and all child repos

```bash
npx meta git clone git@github.com:av8ta/replayweb-agregore-ssb.git
cd replayweb-agregore-ssb
```

## bootstrapping and running

the following commands are all run from this root meta repo:

bootstrap meta repo (installs dependencies with yarn and links them)

```bash
yarn bootstrap
```

start webpack dev servers for replayweb.page and wabac.js

```bash
yarn start-dev
```

start agregore. if you make changes to ssb-fetch, agregore must be restarted. reconnect will be implemented soon.

```bash
yarn start
```

## example archive urls to try

```
https://metacentre.sgp1.digitaloceanspaces.com/webrecorder/lisp.wacz
```

## meta

meta is a pretty sweet tool. it basically loops over each repo defined in `.meta` and runs the following command. try this to get a feel for it:

```bash
npx meta git status
```

so you can run commands over all repos or `cd` into individual ones. no new commands to learn. it's both separate repos and like a monorepo.
