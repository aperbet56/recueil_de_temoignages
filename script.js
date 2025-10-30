// Récupération des différents éléments
const testimonialContainer = document.querySelector(".testimonial__container");
const testimonial = document.querySelector(".testimonial");
const userImg = document.querySelector(".user__img");
const username = document.querySelector(".username");
const role = document.querySelector(".role");

// Création de la constante testimonials contenant les différents témoignages
const testimonials = [
  {
    name: "Myriam Mileson",
    position: "Marketing",
    photo: "https://randomuser.me/api/portraits/women/46.jpg",
    text: "J'ai travaillé avec des centaines de développeurs HTML/CSS et je peux vous dire que la première place revient à cette femme. Elle est une incroyable développeuse. Elle met l'accent sur un code bon et propre et tient compte des détails. J'aime les développeurs qui respectent chaque aspect d'un une conception soigneusement réfléchie et font de leur mieux pour la traduire en code. Elle va au-delà et transforme l'ART en PIXELS - sans un bug, à chaque fois.",
  },
  {
    name: "Jennifer Chapon",
    position: "Ingénieure logiciel",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Cette femme est une développeuse frontend incroyable qui a accompli la tâche exactement comme nous en avions besoin, rendez-vous service et engagez-la, vous ne serez pas déçu par le travail fourni. Elle fera un effort supplémentaire pour s'assurer que vous êtes satisfait de votre projet. Je retravaillerai sûrement avec elle !",
  },
  {
    name: "Lydia Ninet",
    position: "Saisie des données",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Cette femme est un travailleuse acharnée. La communication était également très bonne avec elle et elle était tout le temps très réactive, ce qui n'est pas facile à trouver chez de nombreux freelances. Nous allons certainement retravailler avec elle.",
  },
  {
    name: "Romane Sims",
    position: "Réceptionniste",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "Cette femme fait tout ce qu'elle peut pour que le travail soit fait et bien fait. C'est la deuxième fois que je l'embauche et je la réembaucherai à l'avenir.",
  },
  {
    name: "Jonathan Araujo",
    position: "Designer graphique",
    photo: "https://randomuser.me/api/portraits/men/43.jpg",
    text: "J'avais peur qu'en raison d'un délai serré, ce projet ne puisse pas être réalisé. Mais cette femme m'a prouvé le contraire : non seulement elle a livré un travail exceptionnel, mais elle a réussi à le faire 1 jour avant la date limite. Et quand j'ai demandé quelques révisions, elle les a faites en quelques MINUTES. J'ai hâte de travailler à nouveau avec elle et je la recommande totalement. Merci encore !",
  },
  {
    name: "Alexandra Honorat",
    position: "Comptable",
    photo:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
    text: "Cette femme est une conceptrice et une développeuse front-end de premier ordre. Elle communique bien, travaille vite et produit un travail de qualité. Nous avons eu la chance de travailler avec elle !",
  },
  {
    name: "Vivien Sepri",
    position: "Chef d'entreprise",
    photo: "https://randomuser.me/api/portraits/men/97.jpg",
    text: "Cette femme est une jeune et talentueuse développeuse, proactive et responsable, dotée d'une solide éthique de travail. Elle est très forte en conversions PSD2HTML et en technologie HTML/CSS. Elle apprend vite, désireuse d'apprendre de nouvelles technologies. Elle est concentrée et possède la bonne dynamique nécessaire pour atteindre les délais et obtenir des résultats exceptionnels.",
  },
];

// Création de la variable index
let index = 1;

// Déclaration de la fonction updateTestimonials qui va permettre l'affichage des différents témoignages
const updateTestimonial = () => {
  const { name, position, photo, text } = testimonials[index];
  testimonial.textContent = text;
  userImg.src = photo;
  username.textContent = name;
  role.textContent = position;

  // Incrémentation de l'index
  index++;

  if (index > testimonials.length - 1) {
    index = 0;
  }
};

// La méthode setInterval() appelle à plusieurs reprises la fonction updateTestimonial avec un délai fixe ici (1000ms) entre chaque appel de cette fonction.
setInterval(updateTestimonial, 10000);
