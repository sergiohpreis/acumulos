#!/bin/zsh

# Remove a pasta e recria para evitar o prompt de confirmação do "rm *"
rm -rf content
mkdir content

# Copia os arquivos
cp -R ../brain/outbox/* content

# Roda o Quartz
npx quartz build --serve
