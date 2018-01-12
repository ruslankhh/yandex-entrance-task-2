#!/bin/bash
mkdir app/blocks/$1
touch app/blocks/$1/$1.post.css
touch app/blocks/$1/$1.post.html
touch app/blocks/$1/$1.js

echo -e "@define-mixin $1 {\n\t\n}\n\n@mixin $1;" >> app/blocks/$1/$1.post.css
echo -e "<mixin name=\"$1\" mod content>\n\t<div block=\"$1\" mods=\"{{ mod }}\">\n\t\t{{ content }}\n\t</div>\n</mixin>" >> app/blocks/$1/$1.post.html
echo -e "@import '../blocks/$1/*';" >> app/styles/main.post.css

echo "Block $1 created."
