function fibonacci(num) {
// your code here
	let num1=BigInt(0);
	let num2=BigInt(1);
	let sum;
	let i=0;
	for( i=0; i<num; i++)
		{
			sum=num1+num2;
			num1=num2;
			num2=sum;
		}
	return num1.toString();
};

module.exports = fibonacci;
