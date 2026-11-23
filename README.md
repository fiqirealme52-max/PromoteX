# Promote make.fun's make-your-own-bounty post on X

Entry for the make.fun bounty "Promote make.fun's make-your-own-bounty post on X": one post of my own on X that quotes make.fun's post (https://x.com/makefunai/status/2124915864336236646) or links to it, with a photo of its own attached and make.fun / `@makefunai` plus my play code in its text. Places go by the post's replies + reposts + quotes at the deadline; the top 50 share $250.

[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/fiqirealme52-max/PromoteX/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/fiqirealme52-max/PromoteX/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

## The post

The post goes live from a public X account (`@Urashikien99`), quoting or linking make.fun's make-your-own-bounty post, with a photo of its own attached and the line `Make your own bounty on @makefunai: https://make.fun/sponsor/new` plus my play code in its text.

`POST.json` currently holds a placeholder address — it will be replaced with the real post URL once the post is live. The placeholder is intentional: the entry is only submitted after the real URL is in place.

## The program

`main.ts` (Node 22, standard library only) copies `POST.json` from the repository root to `/output/POST.json`, where the gate reads it. That is all it does — the house reads the post's counts from X itself.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.
