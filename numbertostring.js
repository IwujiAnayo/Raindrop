const rainDrop = (numb)=>{

  //checking for empty argr.
  if (numb !== undefined && typeof numb === Number ){
  const [three,five,seven]=["Pling","Plang","Plong"];
  console.log(three,five,seven);
  const factors =[];
  const check=[3,5,7];
  for(let a=0; a<=check.length; a++){

    //checking if 3 is one of the factors of the numb
    if (numb % check[a]=== 0 && check[a]===3){
      factors.push(three);
    }

    //checking if 5 is one of the factors of the numb
     if (numb % check[a]=== 0 && check[a]===5){
      factors.push(five);
    }

    //checking if 7 is one of the factors of the numb
     if (numb % check[a]=== 0 && check[a]===7){
      factors.push(seven);
    }

  }
 //checking if factor is empty
if (factors.length<1){ return (numb)}

let output=factors.join("");

  return output;

}else {return ("invalid input")}

}
export default rainDrop
