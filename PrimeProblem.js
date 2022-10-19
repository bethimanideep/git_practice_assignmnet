let a=7;
let count=0
for(i=1;i<=a;i++){
	if(a%i==0){
                    count++;
	}
}
if(count==2){
	console.log("It is a prime number")
}
else{
    console.log("It is not a prime number")
}