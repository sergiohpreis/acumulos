#!/bin/zsh

cd /Users/sergiohpreis/Documents/quartz

# Remove a pasta e recria para evitar o prompt de confirmação do "rm *"
rm -rf content
mkdir content

# Copia os arquivos
cp -R /Users/sergiohpreis/Documents/brain/outbox/* content

# Roda o Quartz
npx quartz sync
