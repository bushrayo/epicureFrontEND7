
export const IsNew = ( foundedYear : number) => 
  {      let isNew : Boolean =false; 
         let currentYear= new Date().getFullYear();
       
         if (  currentYear>=foundedYear &&  currentYear<= foundedYear+2 )
         isNew=true;
          else 
          isNew=false;

  return isNew;
}
