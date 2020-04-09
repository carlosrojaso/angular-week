#!/usr/bin/env bash

echo "Generando build"
ng build --prod
echo "Enviando a Firebase"
firebase deploy --only hosting

ng build --prod --output-path docs --base-href /javascript-week/
