import { Restuarants } from '../RestuarantsData';



export default async function FetchRestaurants() {
    const url: string = "http://localhost:3001/api/restaurants/getRestaurants";
    let json:  Restuarants[] = [];
     try {
        const response = await fetch(url);
        json = await response.json();
        } catch (error) {
        console.log("error", error);
      }
   
    
    return json;
  };