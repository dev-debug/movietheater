
export function tobase64(file:File){
return new Promise((resolve,reject)=>{
    const reader=new FileReader();
    reader.readAsDataURL(file);
    reader.onload=()=>resolve(reader.result);
    reader.onerror=(error)=>reject(error);
})
}


export function parseWebAPIErrors(response:any): string[] {
const result: string[]=[];
if (response.status === 500){
  result.push('An error has occurred on the server. Please try again later');
  return result;
}

if(response.error){
  if(typeof response.error==="string")
  {
    result.push(response.error);

  }
  else if(Array.isArray(response.isArray)){
response.error.array.forEach(value => {
  result.push(value.description);
});

  }
  else{

    if(response.error.length>1)
    {
      response.error.forEach(element => {
        result.push(element.description);
      });
    }else{

      const mapErrors =response.error.errors;
      const entries =Object.entries(mapErrors);
      entries.forEach((arr:any[])=>{
        const field =arr[0];
        arr[1].forEach((errorMMessage: any) => {
          result.push(`${field}:${errorMMessage}`);
        });
      })
    }

  }


}
return result;

}

export function formatDateFormData(date:Date){
date=new Date();
const format=new Intl.DateTimeFormat('en',{
  year:'numeric',
  month:'2-digit',
  day:'2-digit'
});
const [
  {value:month},,
  {value:day},,
  {value:year}
]=format.formatToParts(date);

//YYYY-MM-DAY
return `${year}-${month}-${day}`;
}
