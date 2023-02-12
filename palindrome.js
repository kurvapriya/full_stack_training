function checkPalindrome(number)
{
    var remainder, temp, reversedNumber = 0;
    temp = number;
    // reverse logic for numbers
    while(number > 0)
    {
        remainder= number % 10;
        reversedNumber = reversedNumber*10 + remainder;
        number =parseInt (number / 10);
        
        
    }
     //check whether the number is palindrome
    if(reversedNumber == temp)
    {
        document.write("the number is palindrome ");
    }
    else
    {
        document.write("number is not a palindrome ");
    }
}
checkPalindrome(111);
