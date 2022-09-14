import { Dishes } from '../RestuarantsData';


export default async function FetchChefs() {
    const url: string = "http://localhost:3001/api/dishes/getDishes";                          
    let json:  Dishes[] = [];
     try {
        const response = await fetch(url);
        json = await response.json();
        } catch (error) {
        console.log("error", error);
      }
    
    return json;
  };