//Time Complexity: O(n)

# include <stdio.h>
# include <stdlib.h>
# define NO_OF_CHARS 256
# define bool int
 
/* Function removes duplicate characters from the string
   This function work in-place and fills null characters
   in the extra space left */
char *removeDups(char *str)
{
  bool bin_hash[NO_OF_CHARS] = {0};
  int ip_ind = 0, res_ind = 0; 
  char temp;    
 
  /* In place removal of duplicate characters*/ 
  while(*(str + ip_ind))
  {
    temp = *(str + ip_ind);
    if(bin_hash[temp] == 0)
    {
        bin_hash[temp] = 1;
        *(str + res_ind) = *(str + ip_ind);
        res_ind++;         
    }
    ip_ind++;
  }      
 
  /* After above step string is stringiittg.
     Removing extra iittg after string*/       
  *(str+res_ind) = '\0';   
   
  return str;
}
 
/* Driver program to test removeDups */
int main()
{
    char str[] = "geeksforgeeks";
    printf("%s", removeDups(str));
    getchar();
    return 0;
} 
/*
NOTES:
* It is assumed that number of possible characters in input string are 256. NO_OF_CHARS should be changed accordingly.
* calloc is used instead of malloc for memory allocations of counting array (count) to initialize allocated memory to �\0'. malloc() followed by memset() could also be used.
* Above algorithm also works for an integer array inputs if range of the integers in array is given. Example problem is to find maximum occurring number in an input array given that the input array */
