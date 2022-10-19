let a=7;
let count=0
for(i=1;i<=a;i++){
	if(i%2==0){
		count++;
	}
}
if(count==3){
	console.log("Its a prime number")
}
else{
    console.log("It is not a prime number")
}