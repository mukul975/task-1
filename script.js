var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function(){
   var data = JSON.parse(this.response);
   for(i=0;i<data.length;i++){
   console.log(data[i].flag);}
   for(i=0;i<data.length;i++){
   if(data[i].region === 'Asia')

    console.log(data[i].name);

   } var sum = 0;
   for(let i=0;i<data.length;i++)
{
        sum= sum+data[i].population;    
}
console.log("Total Population"+" "+ sum);
}


