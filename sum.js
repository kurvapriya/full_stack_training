function sum(n)
{
    let rem,sum=0;
    while(n>0)
    {
        rem=n%10;
        sum=sum+rem;
        n=n/10;
        console.log(n);
    }
    console.log("the sum of digits is",sum)
}
sum(123);