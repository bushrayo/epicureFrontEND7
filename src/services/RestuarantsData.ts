import {MeirAdoni,ShahafShabtay,EyalShani, AvivMoshe, AsafGranit, OmerMiller,claroRestaurant,Lumina,Kabkem,Messa,nithanThai,tigerlily,Yapan} from './imagesURL';

export interface Data{
  RestuarantsDataArray: Restuarants[];
  DishesDataArray: Dishes[];
  ChefsArray: Chefs[];
} 

export interface Restuarants{
  Id: number;
  Name : string;
  ImageURL: string;
  ChefName: string;
  OpeningHours: string;
  CloseingHour: string;
  IsFavorite: boolean;
  FoundedYear: number;
  //IsOpenNow: boolean;
  //BreakFastDishes: Dishes[];
  //LanchDishes: Dishes[];
  //DinnerDishes:Dishes[]; 
  location : string;
}

export interface Dishes{
  Name: string;
  DisheID: number;
  DisheUrlImage: string;
  Price: number;
  type: string;
  DishDescription: string;
  IsSignatureDish: boolean;
  //ChefName: string;
  TimeToEat: String [];
  typeIcon: String;
  
}


export interface Chefs{
  IsFavorite: boolean;
  Id: number;
  ImageURL: string;
  ChefName: string;
  IsChefOfTheWeek: boolean;
  TheShefDescription : string;
  //IsMostView: boolean;
  IsNew : boolean;
  NumberOfView: number;
}

export const ChefsArray = [
  { Id:1, 
    ImageURL: AsafGranit,
    ChefName: 'Asaf Granit',
    IsChefOfTheWeek: true,
    TheShefDescription : "Asaf Granit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrit's creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish.",
    IsMostView: true,
    IsNew : false,
    NumberOfView: 270,
  },
  { Id:2, 
    ImageURL: AvivMoshe,
    ChefName: 'Aviv Moshe',
    IsChefOfTheWeek: false,
    TheShefDescription : "Aviv Moshe has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrit's creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish.",
    IsMostView: false,
    IsNew : true,
    NumberOfView: 100,
  },
  { Id:3, 
    ImageURL: EyalShani,
    ChefName: 'Eyal Shani',
    IsChefOfTheWeek: false,
    TheShefDescription : "Eyal Shani has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrit's creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish.",
    IsMostView: true,
    IsNew : false,
    NumberOfView: 300,
  },
  { Id:4, 
    ImageURL: MeirAdoni ,
    ChefName: 'Meir Adoni',
    IsChefOfTheWeek: false,
    TheShefDescription : "Meir Adoni has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrit's creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish.",
    IsMostView: false,
    IsNew : true,
    NumberOfView: 200,
  },
  { Id:5, 
    ImageURL: OmerMiller,
    ChefName: 'Omer Miller',
    IsChefOfTheWeek: false,
    TheShefDescription : "Omer Miller has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrit's creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish.",
    IsMostView: true,
    IsNew : true,
    NumberOfView: 320,
  },
  { Id:6, 
    ImageURL: ShahafShabtay,
    ChefName: 'Shahaf Shabtay',
    IsChefOfTheWeek: false,
    TheShefDescription : "Shahaf Shabtay has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrit's creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish.",
    IsMostView: false,
    IsNew : true,
    NumberOfView: 100,
  },
];

export const DishesDataArray = [
  { Name: 'Pad Ki Mao',
    DisheID: 1,
    DisheUrlImage: claroRestaurant,
    //ChefName:'Asaf Granit' ,
    Price: 53,
    type: 'Vegitarian',
    IsSignatureDish: true, 
    TimeToEat: ['Breakfast', 'Lanch','Dinner' ],                   
    typeIcon: './Assets/images/spicyIconBG.svg',
    DishDescription: 'Shrimps, Glass Noodles, Kemiri Nuts, Shallots,Lemon Grass, MagicChili Brown Coconut',
  },
  {Name: 'Garbanzo Frito',
  DisheID: 2,
  DisheUrlImage: Yapan,
  Price: 64,
  type: 'Spicy', 
  TimeToEat: ['Breakfast', 'Lanch','Dinner' ],
  //ChefName:'Yariv Malili',
  typeIcon: './Assets/images/spicyIconBG.svg',
  IsSignatureDish: true,
  DishDescription: 'Polenta fingers, veal cheek,magic chili cured lemon cream, yellow laksa'},
  
  {Name: 'Smoked Pizza',
  DisheID: 3,
  DisheUrlImage: Messa,
  Price: 48,
  TimeToEat: ['Breakfast', 'Lanch','Dinner' ],
  //ChefName:'Asaf Granit' ,
  type: 'Vegitarian', 
  typeIcon: './Assets/images/spicyIconBG.svg',
  IsSignatureDish: true,
  DishDescription: 'Basil dough, cashew "butter", demi-glace, bison & radish',}

]


export const RestuarantsDataArray = [
  {
    Id: 1 ,
    Name: 'Claro' ,
    ImageURL:claroRestaurant ,
    ChefName:'Ran Shmueli' ,
    OpeningHours: '8:00',
    CloseingHour: '22:00',
    IsFavorite: true,
    IsNew: false,
    IsOpenNow: true ,
    BreakFastDishes: [] ,
    LanchDishes: [],
    DinnerDishes:[] , 
    location : 'noLocationYet' 
  },
  {
    Id: 2 ,
    Name: 'Lumia' ,
    ImageURL: Lumina,
    ChefName:'Meir Adoni' ,
    OpeningHours: '8:00',
    CloseingHour: '22:00',
    IsFavorite: true,
    IsNew: false,
    IsOpenNow: false ,
    BreakFastDishes: [] ,
    LanchDishes: [],
    DinnerDishes:[] , 
    location : 'noLocationYet' 
  },
  {
    Id: 3 ,
    Name: 'Kab Kem' ,
    ImageURL: Kabkem ,
    ChefName:'Yariv Malili' ,
    OpeningHours: '9:00',
    CloseingHour: '22:00',
    IsFavorite: true,
    IsNew: true,
    IsOpenNow: false ,
    BreakFastDishes: [] ,
    LanchDishes: [],
    DinnerDishes:[] , 
    location : 'noLocationYet' 
  },

  {
    Id: 4 ,
    Name: 'Messa' ,
    ImageURL:Messa,
    ChefName:'Aviv Moshe' ,
    OpeningHours: '9:00',
    CloseingHour: '22:00',
    IsFavorite: true,
    IsNew: false,
    IsOpenNow: false ,
    BreakFastDishes: [] ,
    LanchDishes: [],
    DinnerDishes:[] , 
    location : 'noLocationYet' 
  },
  {
    Id: 5 ,
    Name: 'Nitan Thai' ,
    ImageURL:nithanThai,
    ChefName:'Shahaf Shabtay' ,
    OpeningHours: '9:00',
    CloseingHour: '22:00',
    IsFavorite: true,
    IsNew: true,
    IsOpenNow: false ,
    BreakFastDishes: [] ,
    LanchDishes: [],
    DinnerDishes:[] , 
    location : 'noLocationYet' 
  },
  {
    Id: 6 ,
    Name: 'Tiger Lilly' ,
    ImageURL:tigerlily,
    ChefName:'Yanir Green' ,
    OpeningHours: '9:00',
    CloseingHour: '22:00',
    IsFavorite: true,
    IsNew: false,
    IsOpenNow: false ,
    BreakFastDishes: [] ,
    LanchDishes: [],
    DinnerDishes:[] , 
    location : 'noLocationYet' 
  },
  {
    Id: 7 ,
    Name: 'Ya Pan' ,
    ImageURL:Yapan,
    ChefName:'Yuval Ben Moshe' ,
    OpeningHours: '9:00',
    CloseingHour: '22:00',
    IsFavorite: false,
    IsNew: true,
    IsOpenNow: true ,
    BreakFastDishes: [] ,
    LanchDishes: [],
    DinnerDishes:[] , 
    location : 'noLocationYet' 
  }
]; 