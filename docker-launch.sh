#!/bin/bash
set -e

echo '## Install bot'
if [ -d bot ]
then
  rm -rf bot
fi

git --version
set -v
git clone https://github.com/rpsychologist/meehlbot-discord.git bot
cd bot
npm install
echo TOKEN=$TOKEN > .env
echo '## Run bot'
node index.js