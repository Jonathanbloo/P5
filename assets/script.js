
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
console.log(slides);

const ArrowRight = document.querySelector("#banner .arrow_right");
const ArrowLeft = document.querySelector("#banner .arrow_left");
const tagLineSlide = document.querySelector("#banner p");
const CarouselSlideImg = document.querySelector(".banner-img");
const dots = document.querySelector('.dots');


let numberItem = 0;

/* Les fonctions */
/** Affichage image suivante */
function nextSlide() {
	numberItem++;  /**  Augmente la valeur de numberItem de 1 pour passer à l'image suivante. */
	if (numberItem >= slides.length) { /** atteint ou dépasse le nombre total de slides, cela signifie qu'on est allé au-delà de la dernière image. */
		numberItem = 0;  /** Si on dépasse la dernière image, numberItem est réinitialisé à 0 pour revenir à la première image. */
	}
	imageSlide()
	updateDots()
}
/** Affichage de l'image precedente */
function previousSlide() {
	numberItem = numberItem - 1; /** Cela réduit (soustrait 1 de) la valeur de numberItem. Si numberItem était 3, il devient 2. */
	if (numberItem < 0) {        /** Cette ligne vérifie si numberItem est inférieur à 0. */
		numberItem = slides.length -1; /** réinitialise à l'index de la dernière image. slides.length */
	}
	imageSlide()          /** Appel de la fonction imageSlide */
	updateDots()		  /** Appel de la fonction updateDots */
}
/** Ajout des images du slide */
function imageSlide() {
	const slide = slides[numberItem] /** Récupère l'objet du slide actuel basé sur numberItem. */
	CarouselSlideImg.src = "./assets/images/slideshow/" + slide.image;  /** Modifie la source de l'image du carrousel pour afficher l'image correspondante du slide actuel. */
	tagLineSlide.innerHTML = slide.tagLine;  /** Change le texte affiché dans le carrousel pour correspondre à celui du slide actuel. */
}
/** Appelle des fonctions */

imageSlide()

/** Les directions et fleches */

ArrowRight.addEventListener('click', nextSlide);  /** créé un event click vers la droite  */
ArrowLeft.addEventListener('click', previousSlide);

/** Les dots **/

/** Permet de creer et d'afficher les dots sur le DOM */
function addDots() {                                /* Affichage des dots */
	for (let i = 0; i < slides.length; i++) {        /* let est utilisé pour déclarer une variable locale.
														i est le nom de cette variable, souvent utilisée comme compteur dans les boucles.
														= assigne une valeur à la variable.
														0 est la valeur initiale de i. La boucle commence donc avec i égal à 0. */
		const dotDiv = document.createElement('div');  /** Crée un nouvel élément HTML div. */
		dotDiv.classList.add('dot');                   /** Ajoute la classe css dot à ce div, ce qui lui donne probablement un style particulier défini dans le CSS. */
		dots.append(dotDiv);							/** Ajoute ce div (qui a maintenant la classe dot) à un autre élément HTML, référencé par dots. */
	
}
}
addDots();                                             /** addDots(); : Appelle la fonction addDots.
														   La fonction addDots : Effectue une tâche définie (par exemple, ajouter des éléments "dot" à un conteneur). */
	
	
	function updateDots() {
		const allDots = document.querySelectorAll(".dot"); /** const allDots : Crée une constante (une variable dont la valeur ne changera pas) nommée allDots. */
    allDots.forEach(dot => {						   /** Parcourt tous les "dots" et supprime la classe dot_selected de chacun. */
        dot.classList.remove("dot_selected");          /** Supression de la class dot_selected */
    });
	allDots[numberItem].classList.add("dot_selected"); /** ajout de la class dot_selected */
	}
updateDots()






