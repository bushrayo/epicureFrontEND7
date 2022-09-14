import { configureStore } from '@reduxjs/toolkit';
import restaurantsReducer from './services/Slicer/restaurantsSlicer';
import chefsReducer from './services/Slicer/chefsSlicer';
import dishesReducer from './services/Slicer/dishesSlicer';
import clickedRestaurantReducer from './services/Slicer/clickedRestaurantSlicer';
import clickedDishReducer from './services/Slicer/clickedDishSlicer';
import orderBagReducer from './services/Slicer/orderBagSlicer';
import showSalModalReducer from './services/Slicer/showSalModalSlicer';
import showSearchModalReducer from './services/Slicer/showSearchModalSlicer';


export default configureStore({
  reducer: {
      restaurants: restaurantsReducer,
      chefs: chefsReducer,
      dishes: dishesReducer,
      clickedRestaurant: clickedRestaurantReducer,
      clickedDish: clickedDishReducer,
      orderBag: orderBagReducer,
      showSalModal: showSalModalReducer, 
      showSearchModal: showSearchModalReducer, 
  },
  //check if user is login
  // middleware: getDefaultMiddleware =>
  // getDefaultMiddleware()
})

