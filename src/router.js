import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from './pages/HomeComponent'
import CartComponent from './pages/CartComponent'
import CheckoutComponent from './pages/CheckoutComponent'
import ShopGridComponent from './pages/ShopGridComponent'
import ContactComponent from './pages/ContactComponent'
import UserRegistryComponent from './pages/UserRegistryComponent'
import LoginComponent from './pages/LoginComponent'
import PerfilComponent from './pages/PerfilComponent'
import CreditCardComponent from './pages/CreditCardComponent'
import CreditCardRegistryComponent from './pages/CreditCardRegistryComponent'
import AdminProductsComponent from './pages/AdminProductsComponent'
import AdminAddProductComponent from './pages/AdminAddProductComponent'
import OrdersComponent from './pages/OrdersComponent'


Vue.use(Router)

export default new Router({
    routes: [
        { path: '/home', component: HomeComponent },
        { path: '/', redirect: '/home' },
        { path: '/cart', component: CartComponent },
        { path: '/checkout', component: CheckoutComponent },
        { path: '/shopgrid/:category', component: ShopGridComponent },
        { path: '/contact', component: ContactComponent },
        { path: '/userregistry', component: UserRegistryComponent },
        { path: '/login', component: LoginComponent },
        { path: '/perfil', component: PerfilComponent },
        { path: '/creditcards', component: CreditCardComponent },
        { path: '/creditcardregistry', component: CreditCardRegistryComponent },
        { path: '/adminproducts', component: AdminProductsComponent },
        { path: '/adminaddproduct', component: AdminAddProductComponent },
        { path: '/orders', component: OrdersComponent },
    ]
})