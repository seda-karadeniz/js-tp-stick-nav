# Sticky nav
> JS exercise given at HEPL

* * *

**js-tp-stick-nav** is an educational project, which will be used for `JS` courses.

**Note:** the school where the course is given, the [HEPL](http://www.provincedeliege.be/hauteecole) from Liège, Belgium, is a french-speaking school. From this point, the instruction will be in french. Sorry.

* * *

> Lors de vos cours de *web*, vous allez découvrir le langage *JavaScript* et le mettre en pratique pour apprendre à rendre vos pages web interactives.  

* * *
Dans le cadre de cet exercice, nous vous demandons d'appliquer une position `fixed` à une navigation, quand celle-ci arrive au bord supérieur de la fenêtre. Donc juste avant qu'elle ne disparaisse. ⚠️ Il n'est pas recommandé de résoudre à l'aide de JavaScript des problèmes spécifiques au style tout particulièrement s’ils peuvent être résolus nativement à l'aide de CSS. Cf. [Types de positionnements](https://developer.mozilla.org/fr/docs/Web/CSS/position)

![Résultat souhaité](./readme.gif)

## Énoncé

1. Détectez la position top de l'élément `nav` au chargement de la page et comparez cette valeur avec le scroll vertical de la page.
2. Ajoutez une classe `fixed-nav` au `body` quand le nombre de pixels scrollé est plus grand ou égal à la position `top` de la navigation par rapport à la fenêtre.
3. Afin d'éviter un glissement dû au positionnement `static` de la navigation, ajoutez un `padding` à l'élément `body` pour compenser ce glissement.

