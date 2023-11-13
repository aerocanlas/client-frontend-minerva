import CocaCola from '../assets/images/drinks-images/coca-cola-classic.png'
import MountainDew from '../assets/images/drinks-images/Mountain Dew Citrus.png'
import PepsiCola from '../assets/images/drinks-images/Pepsi Cola.png'
import Milo from '../assets/images/drinks-images/milos.png'
import SpriteCaffeine from '../assets/images/drinks-images/Sprite Caffeine-Free Lemon Lime Soda Pop.png'
import SToK from '../assets/images/drinks-images/elf.png'
import Lipton from '../assets/images/drinks-images/Lipton Green Tea.png'
import CanadaDry from '../assets/images/drinks-images/Canada Dry Ginger.png'
import DrPepperZero from '../assets/images/drinks-images/Dr Pepper Zero Sugar.png'
import DietDrPepper from '../assets/images/drinks-images/Diet Dr Pepper Soda.png'
import AquafinaPurified from '../assets/images/drinks-images/Aquafina Purified.png'
import PureLife from '../assets/images/drinks-images/Pure Life Purified.png'
import SamsCola from '../assets/images/drinks-images/Sams Cola Soda.png'
import Anw from '../assets/images/drinks-images/A&W Caffeine-Free.png'
import GreatValue from '../assets/images/drinks-images/Great Value.png'

//Pasta
import ChickenAlfredo from '../assets/images/pasta-images/Chicken Alfredo.png'
import AllaGricia from '../assets/images/pasta-images/Pasta Alla Gricia.png'
import SheetPan from '../assets/images/pasta-images/Sheet-Pan Burrata Caprese Gnocchi.png'
import AllaVodka from '../assets/images/pasta-images/Penne Alla Vodka.png'
import BakedSpaghetti from '../assets/images/pasta-images/Baked Spaghetti.png'
import PotatoGnocchi from '../assets/images/pasta-images/pasta-6.png'
import BakedZiti from '../assets/images/pasta-images/Ultimate Baked Ziti.png'
import CacioPepe from '../assets/images/pasta-images/Cacio e Pepe.png'
import PastaPuttanesca from '../assets/images/pasta-images/Pasta Puttanesca.png'
import ItalianPastaSalad from '../assets/images/pasta-images/Italian Pasta Salad.png'
import Lasagna from '../assets/images/pasta-images/Lasagna Roll Ups.png'
import ToastedRavioli from '../assets/images/pasta-images/Toasted Ravioli.png'
import OrecchietteBroccoli from '../assets/images/pasta-images/Orecchiette with Broccoli Rabe.png'
import LambRagu from '../assets/images/pasta-images/Lamb Ragù.png'
import LasagnaBolognese from '../assets/images/pasta-images/Lasagna Bolognese.png'

//Pizza
import CheesePizza from '../assets/images/cheese-pizza-375.png'
import ExtraCheesePizza from '../assets/images/cheese-pizza-376.png'
import VeggiePizza from '../assets/images/veggie-pizza.png'
import PepperoniPizza from '../assets/images/pepperoni-pizza.png'
import MeatPizza from '../assets/images/meat-pizza.png'
import MargheritaPizza from '../assets/images/margherita-pizza.png'
import BBQPizza from '../assets/images/BBQ-chicken-pizza.png'
import AllaPalla from '../assets/images/pizza-alla-pala.png'
import Prosciutto from '../assets/images/Prosciutto-e-Funghi-Pizza.png'
import DetroitStyle from '../assets/images/Detroit-Style-pizza.png'
import GarlicFingers from '../assets/images/Garlic-Fingers-pizza.png'
import StLous from '../assets/images/St-Louis-Style-Pizza.png'
import Rustica from '../assets/images/Pizza-Rustica.png'
import Genovese from '../assets/images/Genovese.png'
import Efichi from '../assets/images/Pizza-e-fichi.png'
import Parts from '../assets/images/parts.jpg'

//Sushi
import VeggiePoke from '../assets/images/sushi-images/sushi-26.png'
import MiniSalmon from '../assets/images/sushi-images/sushi-12.png'
import OmbosSeth from '../assets/images/sushi-images/sushi-23.png'
import VeggieSet from '../assets/images/sushi-images/sushi-27.png'
import FriendlySet from '../assets/images/sushi-images/sushi-8.png'
import SunnyPhiladelphia from '../assets/images/sushi-images/sushi-22.png'
import HiddenDragon from '../assets/images/sushi-images/sushi-9.png'
import HottestTaisho from '../assets/images/sushi-images/sushi-24.png'
import BurningTaisho from '../assets/images/sushi-images/sushi-3.png'
import BlissfulEel from '../assets/images/sushi-images/sushi-2.png'
import Sebastian from '../assets/images/sushi-images/sushi-20.png'
import DoubleSalmon from '../assets/images/sushi-images/sushi-6.png'
import ClockworkOrange from '../assets/images/sushi-images/sushi-4.png'
import KiwiRoll from '../assets/images/sushi-images/sushi-11.png'

export const allProductsData = [
  {
    //Tires
    id: 'dunlop-175/65R14-82H',
    ItemImg: CheesePizza,
    ItemName: 'Dunlop 175/65R14 82H',
    ItemDetailedName: 'Dunlop 175/65R14 82H',
    ItemIngredients: 'Pizza dough, pizza sauce, provolone cheese, mozzarella.',
      ItemDetailed:
        'Pizza dough, pizza sauce, provolone cheese, mozzarella.',
    ItemPrice: (2).toFixed(2),
    Category: 'Tires',
    attributes: [
      {
        id: 'size',
        name: 'size',
        attributeOptions: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },

  {
    id: 'Yokohama-195/60R15-88H',
    ItemImg: VeggiePizza,
    ItemName: 'Yokohama	195/60R15 88H',
    ItemDetailedName: 'Yokohama	195/60R15 88H',
    ItemIngredients:
      'Pizza sauce, Onion, Capsicum, Pineapple, Ginger, Hotshot sauce, Coriander, Garlic sauce, Butter sauce, Cheese.',
      ItemDetailed:
        'Pizza dough, pizza sauce, provolone cheese, mozzarella.',
    ItemPrice: (9).toFixed(2),
    Category: 'Tires',
    attributes: [
      {
        id: 'size',
        name: 'size',
        attributeOptions: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'Dunlop-195/65R15-91H',
    ItemImg: PepperoniPizza,
    ItemName: 'Dunlop 195/65R15 91H',
    ItemDetailedName: 'Dunlop 195/65R15 91H',
    ItemIngredients:
      'Pizza crust yeast, pepperoni, tomato paste, mozzarella cheese, sugar.',
      ItemDetailed:
        'Pizza dough, pizza sauce, provolone cheese, mozzarella.',
    ItemPrice: (5).toFixed(2),
    Category: 'Tires',
    attributes: [
      {
        id: 'size',
        name: 'size',
        attributeOptions: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'Kumho-185/65R15-88H',
    ItemImg: MeatPizza,
    ItemName: 'Kumho 185/65R15 88H',
    ItemDetailedName: 'Kumho 185/65R15 88H',
    ItemIngredients:
      'Sausage, pizza dough, bacon, pizza sauce, red pepper flakes.',
      ItemDetailed:
        'Pizza dough, pizza sauce, provolone cheese, mozzarella.',
    ItemPrice: (10).toFixed(2),
    Category: 'Tires',
    attributes: [
      {
        id: 'size',
        name: 'size',
        attributeOptions: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'Dunlop-185/70R14-88H',
    ItemImg: MargheritaPizza,
    ItemName: 'Dunlop 185/70R14 88H',
    ItemDetailedName: 'Dunlop 185/70R14 88H',
    ItemIngredients:
      'Pizza dough, tomato sauce, fresh mozzarella, olive oil, basil leaves.',
      ItemDetailed:
      'Pizza dough, pizza sauce, provolone cheese, mozzarella.',
    ItemPrice: (8).toFixed(2),
    Category: 'Tires',
    attributes: [
      {
        id: 'size',
        name: 'size',
        attributeOptions: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'Yokohama-185/60R15-84H',
    ItemImg: BBQPizza,
    ItemName: 'Yokohama	185/60R15 84H',
    ItemDetailedName: 'Yokohama	185/60R15 84H',
    ItemIngredients:
      'Rotisserie chicken, pizza dough, bbq sauce, smoked cheddar cheese, mozzarella cheese.',
      ItemDetailed:
      'Pizza dough, pizza sauce, provolone cheese, mozzarella.',
    ItemPrice: (10).toFixed(2),
    Category: 'Tires',
    attributes: [
      {
        id: 'size',
        name: 'size',
        attributeOptions: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'Yokohama-185/65R15-88H',
    ItemImg: AllaPalla,
    ItemName: 'Yokohama 185/65R15 88H',
    ItemDetailedName: 'Yokohama 185/65R15 88H',
    ItemIngredients: 'Cheese, cherry tomatoes, arugula, olive oil, yeast.',
    ItemDetailed:
      'Pizza dough, pizza sauce, provolone cheese, mozzarella.',
    ItemPrice: (12).toFixed(2),
    Category: 'Tires',
    attributes: [
      {
        id: 'size',
        name: 'size',
        attributeOptions: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'Dunlop-185/65R15-88H',
    ItemImg: Prosciutto,
    ItemName: 'Dunlop	185/65R15 88H',
    ItemDetailedName: 'Dunlop	185/65R15 88H',
    ItemIngredients:
      'Italian sausage meat, truffle oil, pizza dough, san marzano tomatoes, bocconcini cheese.',
      ItemDetailed:
      'Pizza dough, pizza sauce, provolone cheese, mozzarella.',
    ItemPrice: (8).toFixed(2),
    Category: 'Tires',
    attributes: [
      {
        id: 'size',
        name: 'size',
        attributeOptions: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  
  {
    id: 'Michelin-205/65R16-95V',
    ItemImg: GarlicFingers,
    ItemName: 'Michelin 205/65R16 95V',
    ItemDetailedName: 'Michelin 205/65R16 95V',
    ItemIngredients:
      'Bread flour, mozzarella cheese, butter, olive oil, instant yeast.',
      ItemDetailed:
      'Pizza dough, pizza sauce, provolone cheese, mozzarella.',
    ItemPrice: (7).toFixed(2),
    Category: 'Tires',
    attributes: [
      {
        id: 'size',
        name: 'size',
        attributeOptions: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'Toyo-Tires-195/R15-106S',
    ItemImg: StLous,
    ItemName: 'Toyo Tires	195/R15 106S',
    ItemDetailedName: 'Toyo Tires	195/R15 106S',
    ItemIngredients:
      'Liquid smoke, swiss cheese, white cheddar cheese, light corn syrup, pizza sauce.',
      ItemDetailed:
      'Pizza dough, pizza sauce, provolone cheese, mozzarella.',
    ItemPrice: (13).toFixed(2),
    Category: 'Tires',
    attributes: [
      {
        id: 'size',
        name: 'size',
        attributeOptions: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'Kumho-102/100R-KC53',
    ItemImg: Rustica,
    ItemName: 'Kumho 102/100R KC53',
    ItemDetailedName: 'Kumho 102/100R KC53',
    ItemIngredients: 'Prosciutto, pepperoni, mozzarella, crust, eggs.',
    ItemDetailed:
    'Pizza dough, pizza sauce, provolone cheese, mozzarella.',
    ItemPrice: (13).toFixed(2),
    Category: 'Tires',
    attributes: [
      {
        id: 'size',
        name: 'size',
        attributeOptions: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  {
    id: 'Michelin-195/80R15C-108/106S',
    ItemImg: Genovese,
    ItemName: 'Michelin	195/80R15C 108/106S',
    ItemDetailedName: 'Michelin	195/80R15C 108/106S',
    ItemIngredients:
      'Pine nuts, baby potatoes, snow pea shoots, lemon, buffalo mozzarella.',
      ItemDetailed:
      'Pizza dough, pizza sauce, provolone cheese, mozzarella.',
    ItemPrice: (13).toFixed(2),
    Category: 'Tires',
    attributes: [
      {
        id: 'size',
        name: 'size',
        attributeOptions: [
          { id: 'small', value: 'small', slices: '6' },
          { id: 'medium', value: 'medium', slices: '8' },
          { id: 'large', value: 'large', slices: '10' },
          { id: 'x-large', value: 'x-large', slices: '12' },
        ],
      },
    ],
  },
  
//Mags

  {
    id: 'DVB-Works-1826-6H/114.3-20X9-SATIN-BLK-34000',
    ItemImg: AllaGricia,
    ItemName: 'DVB Works 1826 6H/114.3 20X9 SATIN BLK',
    ItemDetailedName: 'DVB-Works-1826-6H/114.3-20X9-SATIN-BLK-34000',
    ItemIngredients:
      'Rigatoni pasta, pancetta, olive oil, pecorino romano, black pepper.',
      ItemDetailed:
      'Fully synthetic motor oil. Relentless cleansing and protection.',
    ItemPrice: (9).toFixed(2),
    Category: 'Mags',
    attributes: [],
  },
  {
    id: 'Wilcroxx-206102-20x9.5-6x139.7-BRONZE-34000',
    ItemImg: SheetPan,
    ItemName: 'Wilcroxx 206102 20x9.5 6x139.7 BRONZE 34000',
    ItemDetailedName: 'Wilcroxx 206102 20x9.5 6x139.7 BRONZE 34000',
    ItemIngredients:
      'Penne pasta, sour cream, rotisserie chicken, cherry tomatoes, curly kale.',
      ItemDetailed:
      'Fully synthetic motor oil. Relentless cleansing and protection.',
    ItemPrice: (5).toFixed(2),
    Category: 'Mags',
    attributes: [],
  },
  {
    id: 'Wilcroxx-20559-20x9.5-6x139-MATTE-GUN-METAL-34000',
    ItemImg: AllaVodka,
    ItemName: 'Wilcroxx 20559 20x9.5 6x139 MATTE GUN METAL 34000',
    ItemDetailedName: 'Wilcroxx 20559 20x9.5 6x139 MATTE GUN METAL 34000',
    ItemIngredients:
      'Tomato sauce, penne, heavy cream, red pepper flakes, butter.',
      ItemDetailed:
      'Fully synthetic motor oil. Relentless cleansing and protection.',
    ItemPrice: (10).toFixed(2),
    Category: 'Mags',
    attributes: [],
  },
  {
    id: 'Wilcroxx-208112-20x9.5-6x139.7-MATTE-BLACK-+-BRONZE-COATING-34000',
    ItemImg: BakedSpaghetti,
    ItemName: 'Wilcroxx 208112 20x9.5 6x139.7 MATTE BLACK + BRONZE COATING 34000',
    ItemDetailedName: 'Wilcroxx 208112 20x9.5 6x139.7 MATTE BLACK + BRONZE COATING 34000',
    ItemIngredients:
      'Ground beef, spaghetti, olive oil, crushed tomatoes, basil.',
      ItemDetailed:
      'Fully synthetic motor oil. Relentless cleansing and protection.',
    ItemPrice: (8).toFixed(2),
    Category: 'Mags',
    attributes: [],
  },
  {
    id: 'Wilcroxx-161018-16x7-6x139-BRONZE-21000',
    ItemImg: PotatoGnocchi,
    ItemName: 'Wilcroxx 161018 16x7 6x139 BRONZE 21000',
    ItemDetailedName: 'Wilcroxx 161018 16x7 6x139 BRONZE 21000',
    ItemIngredients:
      'Green beans, potato gnocchi, green peas, pecorino romano cheese, black pepper.',
      ItemDetailed:
      'Fully synthetic motor oil. Relentless cleansing and protection.',
    ItemPrice: (10).toFixed(2),
    Category: 'Mags',
    attributes: [],
  },
  {
    id: 'Nishoshi-168085-16x7-10x100.1143-MBMF-19000',
    ItemImg: BakedZiti,
    ItemName: 'Nishoshi 168085 16x7 10x100.1143 MBMF 19000',
    ItemDetailedName: 'Nishoshi 168085 16x7 10x100.1143 MBMF 19000',
    ItemIngredients:
      'Bulk italian sausage, ricotta cheese, tomato sauce, red pepper flakes, mozzarella cheese.',
      ItemDetailed:
      'Fully synthetic motor oil. Relentless cleansing and protection.',
    ItemPrice: (12).toFixed(2),
    Category: 'Mags',
    attributes: [],
  },
  {
    id: 'RayoneRacing-1006-16x7-5x100-114-ET-35-(22723)-WHITE-MACHINE-LINE-19000',
    ItemImg: PastaPuttanesca,
    ItemName: 'RayoneRacing 1006 16x7 5x100-114 ET 35 (22723) WHITE MACHINE LINE 19000',
    ItemDetailedName: 'RayoneRacing 1006 16x7 5x100-114 ET 35 (22723) WHITE MACHINE LINE 19000',
    ItemIngredients:
      'Spaghetti, kalamata olives, red pepper flakes, capers, diced tomatoes.',
      ItemDetailed:
      'Fully synthetic motor oil. Relentless cleansing and protection.',
    ItemPrice: (11).toFixed(2),
    Category: 'Mags',
    attributes: [],
  },
  {
    id: 'RayoneRacing-OM126-5168H-16x7.0-8x100/114.3-BRONZE-20000',
    ItemImg: ItalianPastaSalad,
    ItemName: 'RayoneRacing OM126 5168H 16x7.0 8x100/114.3 BRONZE	20000',
    ItemDetailedName: 'RayoneRacing OM126 5168H 16x7.0 8x100/114.3 BRONZE	20000',
    ItemIngredients:
      'Bell peppers, fresh mozzarella pearls, honey, dijon mustard, rotini.',
      ItemDetailed:
      'Fully synthetic motor oil. Relentless cleansing and protection.',
    ItemPrice: (7).toFixed(2),
    Category: 'Mags',
    attributes: [],
  },
  {
    id: 'OZRacing-606516-HB-5H4-16x7.0-5x100/114.3-(HB)-19000',
    ItemImg: Lasagna,
    ItemName: 'OZRacing 606516 HB 5H4 16x7.0 5x100/114.3 (HB) 19000',
    ItemDetailedName: 'OZRacing 606516 HB 5H4 16x7.0 5x100/114.3 (HB) 19000',
    ItemIngredients:
      'Ricotta cheese, lasagna noodles, homemade marinara sauce, frozen spinach, parmesan cheese.',
      ItemDetailed:
      'Fully synthetic motor oil. Relentless cleansing and protection.',
    ItemPrice: (13).toFixed(2),
    Category: 'Mags',
    attributes: [],
  },
  {
    id: 'RayoneRacing-DXDN-17X7.5-4x100-H-BLK-22000',
    ItemImg: ToastedRavioli,
    ItemName: 'RayoneRacing DXDN 17X7.5 4x100 H-BLK	22000',
    ItemDetailedName: 'RayoneRacing DXDN 17X7.5 4x100 H-BLK	22000',
    ItemIngredients:
      'Frozen cheese ravioli, jar spaghetti sauce, bread crumbs, parmesan cheese, egg.',
      ItemDetailed:
      'Fully synthetic motor oil. Relentless cleansing and protection.',
    ItemPrice: (13).toFixed(2),
    Category: 'Mags',
    attributes: [],
  },
  {
    id: 'Wilcroxx-178/23-17x8.5-6x137-MB-26000',
    ItemImg: OrecchietteBroccoli,
    ItemName: 'Wilcroxx 178/23 17x8.5 6x137 MB 26000',
    ItemDetailedName: 'Wilcroxx 178/23 17x8.5 6x137 MB 26000',
    ItemIngredients:
      'Broccoli rabe, andouille sausage links, orecchiette, lemon, red pepper flakes.',
      ItemDetailed:
      'Fully synthetic motor oil. Relentless cleansing and protection.',
    ItemPrice: (13).toFixed(2),
    Category: 'Mags',
    attributes: [],
  },


  
  {
    id: 'RayoneRacing-647-17-SML-4H-17x7.5-8x100/114.3-SILVER-MACHINE-LIP-22000',
    ItemImg: LasagnaBolognese,
    ItemName: 'RayoneRacing 647 17 SML 4H 17x7.5 8x100/114.3 SILVER MACHINE LIP	22000',
    ItemIngredients:
      'Ground italian sausage, ground beef, ground pork, bolognese sauce, lasagna noodles.',
    ItemPrice: (11).toFixed(2),
    Category: 'Mags',
    attributes: [],
  },

  //Oils
  {
    id: 'Shell-Helix-Power-Carbon-Neutral-0w-40-4L',
    ItemImg: LambRagu,
    ItemName: 'Shell Helix Power Carbon Neutral 0w-40 (4 Liters)',
    ItemDetailedName: 'Shell Helix Power Carbon Neutral 0w-40 (4 Liters)',
    ItemIngredients:
      'Engine oil volume: 1 Liter. Viscosity grade: 0W-40. Compatible with gasoline and diesel car engine oil.',
      ItemDetailed:
      'Fully synthetic motor oil. Relentless cleansing and protection.',
    ItemPrice: (12).toFixed(2),
    Category: 'Oils',
    attributes: [],
  },
  {
    id: 'Eurol-Fluence-DXS-5W-30-1L',
    ItemImg: ChickenAlfredo,
    ItemName: 'Eurol Fluence DXS 5W 30-1L',
    ItemDetailedName: 'Eurol Fluence DXS 5W-30 1L',
    ItemIngredients:
      'Salmon, cream cheese, avocado, tobiko, rice, sesame, cucumber, nori.',
      ItemDetailed:
      'Salmon, cream cheese, avocado, tobiko, rice, sesame, cucumber, nori.',
    ItemPrice: (13).toFixed(2),
    Category: 'Oils',
    attributes: [],
  },
  {
    id: 'Eurol-Coolant-GLX-1L',
    ItemImg: CacioPepe,
    ItemName: 'Eurol Coolant GLX 1L',
    ItemDetailedName: 'Eurol Coolant GLX 1L',
    ItemIngredients:
      'Engine oil volume: 4 Liters. Viscosity grade: 0W-40. Compatible with gasoline and diesel car engine oil.',
      ItemDetailed:
      'Engine oil volume: 4 Liters. Viscosity grade: 0W-40. Compatible with gasoline and diesel car engine oil.',
    ItemPrice: (13).toFixed(2),
    Category: 'Oils',
    attributes: [],
  },
  {
    id: 'Shell-Helix-HX8-Fully-Synthetic-5W-40-1L',
    ItemImg: Lasagna,
    ItemName: 'Shell Helix HX8',
    ItemDetailedName: 'Shell Helix HX8 Fully Synthetic 5W-40 1L',
    ItemIngredients:
      'Fully synthetic motor oil. Relentless cleansing and protection.',
      ItemDetailed:
      'Fully synthetic motor oil. Relentless cleansing and protection.',
    ItemPriceBefore: (8).toFixed(2),
    ItemPrice: (7).toFixed(2),
    Category: 'Oils',
    sale: true,
    attributes: [],
  },
  {
    id: 'SK-ZIC-X7-10W-30-Fully-Synthetic-1L',
    ItemImg: LasagnaBolognese,
    ItemName: 'SK-ZIC-X7-10W-30-Fully-Synthetic-1L',
    ItemDetailedName: 'SK-ZIC-X7-10W-30-Fully-Synthetic-1L',
    ItemIngredients:
      'Loosens seized and rusted parts With PTFE and 360° valve',
      ItemDetailed:
      'Loosens seized and rusted parts With PTFE and 360° valve',
    ItemPriceBefore: (13).toFixed(2),
    ItemPrice: (11).toFixed(2),
    Category: 'Oils',
    sale: true,
    attributes: [],
  },
  {
    id: 'Eurol-Super-Lite-5W-40-1L',
    ItemImg: OrecchietteBroccoli,
    ItemName: 'Eurol Super Lite 5W-40 1L',
    ItemDetailedName: 'Eurol Super Lite 5W-40 1L',
    ItemIngredients: 'Semi-synthetic engine oil for petrol and diesel engines',
      ItemDetailed:
      'Semi-synthetic engine oil for petrol and diesel engines',
    ItemPriceBefore: (350).toFixed(2),
    ItemPrice: (300).toFixed(2),
    Category: 'Oils',
    sale: true,
    attributes: [],
  },
  {
    id: 'Fleetmax-FAS-8525-Air-Filter',
    ItemImg: FriendlySet,
    ItemName: 'Fleetmax FAS 8525 Air Filter',
    ItemDetailedName: 'Fleetmax FAS 8525 Air Filter',
    ItemIngredients:
      'Californication, Spicy Salmon Roll, Blissful Eel Roll, Sebastian the Crab Roll, Cucumber Maki Raki.',
      ItemDetailed:
      'Californication, Spicy Salmon Roll, Blissful Eel Roll, Sebastian the Crab Roll, Cucumber Maki Raki.',
    ItemPrice: (30).toFixed(2),
    Category: 'Filters',
    attributes: [],
  },
  {
    id: 'Vic-C-809-Oil-Filter',
    ItemImg: SunnyPhiladelphia,
    ItemName: 'Vic C 809 Oil Filter',
    ItemDetailedName: 'Vic C 809 Oil Filter',
    ItemIngredients: 'Salmon, cream cheese, avocado, rice, sesame, nori.',
      ItemDetailed:
      'Salmon, cream cheese, avocado, tobiko, rice, sesame, cucumber, nori.',
    ItemPrice: (12).toFixed(2),
    Category: 'Filters',
    attributes: [],
  },
  {
    id: 'pepperoni-pizza-sale',
    ItemImg: PepperoniPizza,
    ItemName: 'Pepperoni Pizza Medium',
    ItemIngredients:
      'Pizza crust yeast, pepperoni, tomato paste, mozzarella cheese, sugar.',
    ItemPriceBefore: (5).toFixed(2),
    ItemPrice: (3).toFixed(2),
    Category: 'Breaks',
    sale: true,
    attributes: [],
  },
  {
    id: 'meat-pizza-sale',
    ItemImg: MeatPizza,
    ItemName: 'Meat Pizza Medium',
    ItemIngredients:
      'Sausage, pizza dough, bacon, pizza sauce, red pepper flakes.',
    ItemPriceBefore: (10).toFixed(2),
    ItemPrice: (8).toFixed(2),
    Category: 'Breaks',
    sale: true,
    attributes: [],
  },
  {
    id: 'margherita-pizza-sale',
    ItemImg: MargheritaPizza,
    ItemName: 'Margherita Pizza Small',
    ItemIngredients:
      'Pizza dough, tomato sauce, fresh mozzarella, olive oil, basil leaves.',
    ItemPriceBefore: (8).toFixed(2),
    ItemPrice: (7).toFixed(2),
    Category: 'Breaks',
    sale: true,
    attributes: [],
  },
  {
    id: 'veggie-pizza-sale',
    ItemImg: VeggiePizza,
    ItemName: 'Veggie Pizza Large',
    ItemIngredients:
      'Pizza sauce, Onion, Capsicum, Pineapple, Ginger, Hotshot sauce, Coriander, Garlic sauce, Butter sauce, Cheese.',
    ItemPriceBefore: (9).toFixed(2),
    ItemPrice: (7).toFixed(2),
    Category: 'Breaks',
    sale: true,
    attributes: [],
  },
  {
    id: 'sebastian-the-crab-roll-8-pcs-sale',
    ItemImg: Sebastian,
    ItemName: 'Sebastian the Crab Roll 8Pcs',
    ItemIngredients:
      'Crab with Unique Sauce, Cream Cheese, Avocado, Dried Tuna Flakes, Sesame, Cucumber Rice, Nori.',
    ItemPriceBefore: (13).toFixed(2),
    ItemPrice: (10).toFixed(2),
    Category: 'Breaks',
    sale: true,
    attributes: [],
  },
  {
    id: 'lamb-ragu-sale',
    ItemImg: LambRagu,
    ItemName: 'Lamb Ragù',
    ItemIngredients:
      'Lamb shoulder, gnocchi, red wine, heavy cream, tomato paste.',
    ItemPriceBefore: (12).toFixed(2),
    ItemPrice: (10).toFixed(2),
    Category: 'Breaks',
    sale: true,
    attributes: [],
  },
  {
    id: 'cheese-pizza-sale',
    ItemImg: CheesePizza,
    ItemName: 'Cheese Pizza Large',
    ItemIngredients: 'Pizza dough, pizza sauce, provolone cheese, mozzarella.',
    ItemPriceBefore: (2).toFixed(2),
    ItemPrice: (1).toFixed(2),
    Category: 'Breaks',
    sale: true,
    attributes: [],
  },
  {
    id: 'cacio-e-pepe-potato-gnocchi-sale',
    ItemImg: PotatoGnocchi,
    ItemName: 'Cacio e Pepe Potato Gnocchi',
    ItemIngredients:
      'Green beans, potato gnocchi, green peas, pecorino romano cheese, black pepper.',
    ItemPriceBefore: (10).toFixed(2),
    ItemPrice: (9).toFixed(2),
    Category: 'Breaks',
    sale: true,
    attributes: [],
  },

  {
    id: 'pepperoni-pizza-sale-second',
    ItemImg: PepperoniPizza,
    ItemName: 'Pepperoni Pizza Medium',
    ItemIngredients:
      'Pizza crust yeast, pepperoni, tomato paste, mozzarella cheese, sugar.',
    ItemPriceBefore: (5).toFixed(2),
    ItemPrice: (3).toFixed(2),
    Category: 'Breaks',
    sale: true,
    attributes: [],
  },
  {
    id: 'meat-pizza-sale-second',
    ItemImg: MeatPizza,
    ItemName: 'Meat Pizza Large',
    ItemIngredients:
      'Sausage, pizza dough, bacon, pizza sauce, red pepper flakes.',
    ItemPriceBefore: (10).toFixed(2),
    ItemPrice: (8).toFixed(2),
    Category: 'Breaks',
    sale: true,
    attributes: [],
  },
  {
    id: 'cacio-e-pepe-potato-gnocchi-sale-second',
    ItemImg: PotatoGnocchi,
    ItemName: 'Cacio e Pepe Potato Gnocchi',
    ItemIngredients:
      'Green beans, potato gnocchi, green peas, pecorino romano cheese, black pepper.',
    ItemPriceBefore: (10).toFixed(2),
    ItemPrice: (8).toFixed(2),
    Category: 'Breaks',
    sale: true,
    attributes: [],
  },
  
  {
    id: 'Shell-Spirax-S1-ATF-TASA-Transmission-Fluid-1L',
    ItemImg: VeggiePizza,
    ItemName: 'Shell Spirax Transmission',
    ItemDetailedName: 'Shell Spirax S1 ATF TASA Transmission Fluid 1L',
    ItemIngredients:
      'Quality Type A Suffix A Automatic Transmission and Hydraulic Fluid',
      ItemDetailed:
      'A high quality automotive transmission, power steering and hydraulic oil mainly used for heavy duty vehicles working in an off-road environment',
    ItemPriceBefore: (9).toFixed(2),
    ItemPrice: (400).toFixed(2),
    Category: 'Breaks',
    sale: true,
    attributes: [],
  },
  
]
