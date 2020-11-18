import { createRouter, createWebHashHistory } from 'vue-router'

const Category=()=>import('@/views/category/Category')
const Home=()=>import('@/views/home/Home')
const Profile=()=>import('@/views/profile/Profile')
const ShopCart=()=>import('@/views/shopCart/ShopCart')

const Fashion=()=>import('@/views/home/Fashion')
const NewStyle=()=>import('@/views/home/NewStyle')
const HandPick=()=>import('@/views/home/HandPick')

const IsPopular=()=>import('@/components/content/IsPopular')
const Coat=()=>import('@/components/content/Coat')
const Skirt=()=>import('@/components/content/Skirt')
const Underwear=()=>import('@/components/content/Underwear')
const Shoes=()=>import('@/components/content/Shoes')
const Boyfriend=()=>import('@/components/content/Boyfriend')
const Trousers=()=>import('@/components/content/Trousers')
const Bag=()=>import('@/components/content/Bag')
const Exercise=()=>import('@/components/content/Exercise')
const Accessories=()=>import('@/components/content/Accessories')
const BeautyMakeup=()=>import('@/components/content/BeautyMakeup')
const PersonalCare=()=>import('@/components/content/PersonalCare')
const Household=()=>import('@/components/content/Household')
const Department=()=>import('@/components/content/Department')
const MomInfant=()=>import('@/components/content/MomInfant')



const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home,
    children:[{
      path:'fashion',
      component:Fashion
    },{
      path: 'newStyle',
      component: NewStyle
    },{
      path: 'handpick',
      component: HandPick
    }]
  },
  {
    path:'/category',
    component:Category,
    children: [{
      path: 'isPopular',
      component:IsPopular
    },{
      path: 'coat',
      component:Coat
    },{
      path: 'trousers',
      component:Trousers
    },{
      path:'skirt',
      component:Skirt
    },{
      path: 'underwear',
      component:Underwear
    },{
      path: 'Shoes',
      component:Shoes
    },{
      path:'boyfriend',
      component:Boyfriend
    },{
      path: 'bag',
      component:Bag
     },
      {
      path: 'exercise',
      component:Exercise
    },{
      path: 'accessories',
      component:Accessories
    },{
      path: 'beautyMakeup',
      component:BeautyMakeup
    },{
      path: 'personalCare',
      component:PersonalCare
    },{
      path: 'household',
      component:Household
    },{
      path: 'department',
      component:Department
    },{
      path: 'momInfant',
      component:MomInfant
    }
      ]
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/shopCart',
    component:ShopCart
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
