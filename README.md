# Vue.js-Form

Forma za registracija na pacient
Za biranje na lekar 
sostojbata na pacientot go odluciva nivoto na formata 
Kriticna sostojba : kratka forma;

Opsta sovet: podolga forma;

*--*
2 way data binding => v-model na input so soodvetvo ime vo default metodot  ;


## Basics
Vo public/Index.htm ima basic html struktura za Browser reading 
Vo main.js se inportira Vue.js i se mountira <div id="app"> koj ne generira nikakov css
na nego mu se dodavaat komponentite od Vue.js;

Sekoja komponenta ima svoj JS, CSS komuniciraat sami megu sebe i moze da spodelua JS i CSS preku main fileot - App.vue
Preku import[filepath] vo Main fileot App.js se priklucuvaat site komponenti so niven HTML CSS

Vo App.vue
components{
  "se priklucuvaat komponentite koj sakame da se prikazat"
} 
-Za da voidme vnimanie koj checkbox e izbran na site checkboxes treba da immat value i site koj se TRUE se dodavaat vo niza 

## Materials used
-https://www.youtube.com/watch?v=qZXt1Aom3Cs&t=1705sab_channel=TraversyMedia : Opsto Vue.js - podelba na poveke komponenti 
-https://www.youtube.com/watch?v=ixOcve5PX-Q&t=70s&ab_channel=TheNetNinja
: Vue.js Forms intro
-Handelbars: 
https://futurestud.io/tutorials/hapi-use-vue-js-mustache-tags-in-handlebars-templates#:~:text=associate%20with%20it.-,To%20combine%20handlebars%20and%20Vue.,js%20should%20pick%20up.&text=All%20syntax%20templates%20prefixed%20with,and%20left%20within%20the%20template.



-https://medium.com/swlh/build-a-checkbox-component-with-vue3-font-awesome-tailwind-css-99d176094b3d
 Za checkbox komponentata 