export interface IGames {
    id: number;
    name: string;
    platform: string;
    genre: string;
    releaseDate: string;
    rating: string;
    developer: string;
    ratingScore: number;
    image: string;
}

const games: IGames[] = [
    {
      id: 1,
      name: "The Witcher 3: Wild Hunt",
      platform: "PlayStation 4",
      genre: "Action RPG",
      releaseDate: "2015-05-19",
      rating: "Mature",
      developer: "CD Projekt Red",
      ratingScore: 4,
      image:
        "https://cdn1.epicgames.com/offer/14ee004dadc142faaaece5a6270fb628/EGS_TheWitcher3WildHuntCompleteEdition_CDPROJEKTRED_S1_2560x1440-82eb5cf8f725e329d3194920c0c0b64f",
    },
    {
      id: 2,
      name: "Red Dead Redemption 2",
      platform: "Xbox One",
      genre: "Action Adventure",
      releaseDate: "2018-10-26",
      rating: "Mature",
      developer: "Rockstar Games",
      ratingScore: 5,
      image:
        "https://store-images.s-microsoft.com/image/apps.58752.68182501197884443.ac728a87-7bc1-4a0d-8bc6-0712072da93c.0cf58754-9802-46f8-8557-8d3ff32a627a?q=90&w=480&h=270",
    },
    {
      id: 3,
      name: "The Legend of Zelda: Breath of the Wild",
      platform: "Nintendo Switch",
      genre: "Action Adventure",
      releaseDate: "2017-03-03",
      rating: "Everyone",
      developer: "Nintendo",
      ratingScore: 2,
      image:
        "https://assets.nuuvem.com/image/upload/v1/products/5e49d770d597ec0f96e130bd/sharing_images/tmffdu3gugeb5al41qil.jpg",
    },
    {
      id: 4,
      name: "Fortnite",
      platform: "PC",
      genre: "Battle Royale",
      releaseDate: "2017-07-25",
      rating: "Teen",
      developer: "Epic Games",
      ratingScore: 4,
      image:
        "https://cdn2.unrealengine.com/25br-s25-egs-launcher-pdp-2560x1440-alt-logo-2560x1440-130a7d39cc26.jpg",
    },
    {
      id: 5,
      name: "Cyberpunk 2077",
      platform: "PlayStation 5",
      genre: "Action RPG",
      releaseDate: "2020-12-10",
      rating: "Mature",
      developer: "CD Projekt Red",
      ratingScore: 1,
      image:
        "https://cyberpunk-static.qtlglb.com/build/images/social-thumbnail-en-ddcf4d23.jpg",
    },
  ];
  
  export default games;