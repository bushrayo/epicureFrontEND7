

export const IsOpenNow = ( start :string, end :  string) =>   {
        let isOpen : boolean =false; 
         let today = new Date();
         let time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        // console.log(time);
       
         let startHour : number = parseInt(start.charAt(0)+start.charAt(1));
         let startMinutes : number = parseInt(start.charAt(3)+start.charAt(4));
         let endHour :  number = parseInt(end.charAt(0)+end.charAt(1));
         let endMinutes :  number = parseInt(end.charAt(3)+end.charAt(4));
         

         if (today.getHours()>=startHour && today.getHours()<endHour)
          isOpen=true;
          else 
          isOpen=false;
         

  return isOpen;
}
