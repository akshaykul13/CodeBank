//Time Complexity: O(n)

# include <stdio.h>
 
/* Function to print reverse of the passed string */
void reverse(char *str)
{
   if(*str)
   {
       reverse(str+1);
       printf("%c", *str);
   }
}
 
/* Driver program to test above function */
int main()
{
   char a[] = "Geeks for Geeks";
   reverse(a);
   getchar();
   return 0;
}

/*Explanation: Recursive function (reverse) takes string pointer (str) as input and calls itself with next location to passed pointer (str+1). 
Recursion continues this way, when pointer reaches ‘\0', all functions accumulated in stack print char at passed location (str) and return 
one by one.*/

