#!/bin/bash
mkdir app/blocks/$1

touch app/blocks/$1/$1.post.css
cat >> app/blocks/$1/$1.post.css << EOM
.$1 {

}
EOM
echo -e "[\033[34mbash\033[0m] Create \033[35mapp/blocks/$1/$1.post.css\033[0m"

touch app/blocks/$1/$1.post.html
cat >> app/blocks/$1/$1.post.html << EOM
<mixin name="$1" mods=" " mix=" " class=" " content=" ">
  <div block="$1" mods="{{ mods }}" mix="{{ mix }}" class="{{ class }}">
    {{ content }}
  </div>
</mixin>
EOM
echo -e "[\033[34mbash\033[0m] Create \033[35mapp/blocks/$1/$1.post.html\033[0m"

touch app/blocks/$1/$1.js
echo -e "[\033[34mbash\033[0m] Create \033[35mapp/blocks/$1/$1.js\033[0m"

cat >> app/styles/main.post.css << EOM
@import '../blocks/$1/$1.post.css';
EOM
echo -e "[\033[34mbash\033[0m] Update \033[35mapp/styles/main.post.css\033[0m"

ed -s app/templates/main.post.html << EOM
/<\/head>/i
  <include src="blocks/$1/$1.post.html"></include>
.
wq
EOM
echo -e "[\033[34mbash\033[0m] Update \033[35mapp/templates/main.post.html\033[0m"

echo -e "[\033[34mbash\033[0m] Block '\033[36m$1\033[0m' created."
