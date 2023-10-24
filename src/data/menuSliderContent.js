//375
import tiresOne375 from '../assets/images/menu-slider/tires-one-375.webp'
import tiresTwo375 from '../assets/images/menu-slider/tires-two-375.webp'
import tiresThree375 from '../assets/images/menu-slider/tires-three-375.webp'
import SalmonPoke375 from '../assets/images/menu-slider/sushi-one-375.webp'
import VeggiePoke375 from '../assets/images/menu-slider/sushi-two-375.webp'
import MiniSalmon375 from '../assets/images/menu-slider/sushi-three-375.webp'
import ChickenAlfredo375 from '../assets/images/menu-slider/pasta-one-375.webp'
import AllaGricia375 from '../assets/images/menu-slider/pasta-two-375.webp'
import SheetPan375 from '../assets/images/menu-slider/pasta-three-375.webp'
//700
import tiresOne700 from '../assets/images/menu-slider/tires-one-700.webp'
import tiresTwo700 from '../assets/images/menu-slider/tires-two-700.webp'
import tiresThree700 from '../assets/images/menu-slider/tires-three-700.webp'
import SalmonPoke700 from '../assets/images/menu-slider/sushi-one-700.webp'
import VeggiePoke700 from '../assets/images/menu-slider/sushi-two-700.webp'
import MiniSalmon700 from '../assets/images/menu-slider/sushi-three-700.webp'
import ChickenAlfredo700 from '../assets/images/menu-slider/pasta-one-700.webp'
import AllaGricia700 from '../assets/images/menu-slider/pasta-two-700.webp'
import SheetPan700 from '../assets/images/menu-slider/pasta-three-700.webp'

const menuSliderCategories = [
    {
        name: 'Tires',
        id: 'tires',
    },
    {
        name: 'Oils',
        id: 'oils',
    },
    {
        name: 'Breaks',
        id: 'breaks',
    },
]
const menuSliderProducts = [
    {
        id: 'product 1',
        name: 'Product 1',
        describtion:
            'Pizza crust yeast, pepperoni, tomato paste, mozzarella cheese, sugar.',
        price: (0).toFixed(2),
        img375: tiresOne375,
        img700: tiresOne700,
        category: 'tires',
    },
    {
        id: 'product 2',
        name: 'Product 2',
        describtion:
            'Rotisserie chicken, pizza dough, bbq sauce, smoked cheddar cheese, mozzarella cheese.',
        price: (0).toFixed(2),
        img375: tiresTwo375,
        img700: tiresTwo700,
        category: 'tires',
    },
    {
        id: 'product 3',
        name: 'Product 3',
        describtion: 'Pizza dough, pizza sauce, provolone cheese, mozzarella.',
        price: (0).toFixed(2),
        img375: tiresThree375,
        img700: tiresThree700,
        category: 'tires',
    },
    {
        id: 'salmon-poke',
        img375: SalmonPoke375,
        img700: SalmonPoke700,
        name: 'Salmon Poke',
        describtion:
            'Salmon, Avocado, Rice, Cabbage, Carrots, Creen onions, Sesame.',
        price: (10).toFixed(2),
        category: 'oils',
    },

    {
        id: 'veggie-poke',
        img375: VeggiePoke375,
        img700: VeggiePoke700,
        name: 'Veggie Poke',
        describtion: 'Rice, Avocado, Cabage, Carrot, Ginger, Green Onion, Sesam.',
        price: (8).toFixed(2),
        category: 'oils',
    },
    {
        id: 'mini-salmon-set-22-pcs',
        img375: MiniSalmon375,
        img700: MiniSalmon700,
        name: 'Mini Salmon Set',
        describtion:
            'Double Salmon Roll,Californication, Salmon Nigiri - 2Pcs, Eel Nigiri - 2Pcs,Vulcan Gunkan - 2Pcs',
        price: (35).toFixed(2),
        category: 'oils',
    },
    {
        id: 'chicken-alfredo',
        img375: ChickenAlfredo375,
        img700: ChickenAlfredo700,
        name: 'Chicken Alfredo',
        describtion:
            'Skinless chicken breast, heavy cream, olive oil, parmigiano reggiano, black pepper.',
        price: (2).toFixed(2),
        category: 'breaks',
    },
    {
        id: 'pasta-alla-gricia',
        img375: AllaGricia375,
        img700: AllaGricia700,
        name: 'Pasta Alla Gricia',
        describtion:
            'Rigatoni pasta, pancetta, olive oil, pecorino romano, black pepper.',
        price: (9).toFixed(2),
        category: 'breaks',
    },
    {
        id: 'sheet-pan-burrata-caprese-gnocchi',
        img375: SheetPan375,
        img700: SheetPan700,
        name: 'Burrata Caprese Gnocchi',
        describtion:
            'Penne pasta, sour cream, rotisserie chicken, cherry tomatoes, curly kale.',
        price: (5).toFixed(2),
        category: 'breaks',
    },
]

export { menuSliderProducts, menuSliderCategories };