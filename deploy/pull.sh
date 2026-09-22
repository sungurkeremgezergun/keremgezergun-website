#!/usr/bin/env bash
# Pull-based deploy, run on the VPS by the systemd timer (deploy/*.timer).
#
# GitHub Actions cannot reach this box on port 22 (every SSH deploy since
# 2 Sep 2026 timed out), so nothing pushes in any more: CI fast-forwards the
# `production` branch when main is green, and this script polls it. Nothing
# happens unless the remote sha changed, so running it every few minutes is
# free. A failed build leaves the running process untouched.
set -euo pipefail

APP_DIR="${APP_DIR:-/var/www/keremgezergun-website}"
BRANCH="${DEPLOY_BRANCH:-production}"
PM2_NAME="${PM2_NAME:-keremgezergun-website}"
LOCK="/tmp/keremgezergun-deploy.lock"

# A build can take longer than the timer interval; never run two at once.
exec 9>"$LOCK"
flock -n 9 || { echo "deploy already running, skipping"; exit 0; }

cd "$APP_DIR"
git fetch --quiet origin "$BRANCH"

local_sha="$(git rev-parse HEAD)"
remote_sha="$(git rev-parse "origin/$BRANCH")"
if [ "$local_sha" = "$remote_sha" ]; then
  exit 0
fi

echo "$(date -Is) deploying $remote_sha (was $local_sha)"
git reset --hard --quiet "origin/$BRANCH"
npm ci --no-audit --no-fund
npm run build
pm2 reload "$PM2_NAME" --update-env
pm2 save
echo "$(date -Is) deployed $remote_sha"
