#!/bin/bash
# usage: regcheck.sh cat/slug ...   (isolated build of HEAD + given pages + working-tree configs)
cd /home/user/futurecareer-school-2
rm -rf /tmp/claude-0/wt/src/pages/blog /tmp/claude-0/wt/dist
git archive HEAD src/pages/blog | tar -x -C /tmp/claude-0/wt
for p in "$@"; do mkdir -p /tmp/claude-0/wt/src/pages/blog/$(dirname $p); cp -r src/pages/blog/$p /tmp/claude-0/wt/src/pages/blog/$p; done
for f in $(git diff --name-only -- src/pages/blog); do cp $f /tmp/claude-0/wt/$f; done
cp src/config/blog.ts src/config/scalability.mjs /tmp/claude-0/wt/src/config/
cd /tmp/claude-0/wt && node node_modules/astro/astro.js build >/tmp/claude-0/wtbuild.log 2>&1; echo BUILD $?
for c in check-public-copy check-blog-links check-internal-urls check-inbound-links check-scalability-coverage; do node scripts/$c.mjs 2>&1 | tail -1 | cut -c1-140; done
