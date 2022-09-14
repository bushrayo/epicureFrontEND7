import { useSelector } from "react-redux";
import { Chefs } from "../services/RestuarantsData";

export const IsMostViewed = () => 
  {      
    let ChefsDataArray = useSelector(
      (state) => state.chefs.value
    );   
    let numbersOfMostViewed =[]; 
    let ThreeMostViewed=[];
    let ThreeMostViewedObjects=[];
   
    if(ChefsDataArray.length>1){
    
        ChefsDataArray.map((el)=>{
          numbersOfMostViewed.push(el.NumberOfView);
        }  );
        numbersOfMostViewed.sort(function(a, b){return a - b});
        numbersOfMostViewed.reverse();
        ThreeMostViewed= numbersOfMostViewed.slice(0,3);        
        ChefsDataArray.map((el) => {
          if(ThreeMostViewed.includes(el.NumberOfView))
          ThreeMostViewedObjects.push(el);
        });
       
    //ChefsDataArray.sort(function(a,b){return a.NumberOfView - b.NumberOfView});
      
   }
   return ThreeMostViewedObjects;          
  
  ;
}
