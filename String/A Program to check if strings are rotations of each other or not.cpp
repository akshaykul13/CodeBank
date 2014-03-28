/*Time Complexity: Time complexity of this problem depends on the implementation of strstr function.
If implementation of strstr is done using KMP matcher then complexity of the above program is (-)(n1 + n2) 
where n1 and n2 are lengths of strings. KMP matcher takes (-)(n) time to find a substrng in a string of length n where 
length of substring is assumed to be smaller than the string.
*/
# include <stdio.h>
# include <string.h>
# include <stdlib.h>
 
/* Function checks if passed strings (str1 and str2)
   are rotations of each other */
int areRotations(char *str1, char *str2)
{
  int size1   = strlen(str1);
  int size2   = strlen(str2);
  char *temp;
  void *ptr;
 
  /* Check if sizes of two strings are same */
  if(size1 != size2)
     return 0;
 
  /* Create a temp string with value str1.str1 */
  temp   = (char *)malloc(sizeof(char)*size1*2 + 1);
  temp[0] = '\0';
  strcat(temp, str1);
  strcat(temp, str1);
 
  /* Now check if str2 is a substring of temp */
  ptr = strstr(temp, str2);
 
  /* strstr returns NULL if the second string is NOT a
    substring of first string */
  if(ptr != NULL)
    return 1;
  else
    return 0;
}
 
/* Driver program to test areRotations */
int main()
{
    char *str1 = "ABCD";
    char *str2 = "ABCDA";
 
    if(areRotations(str1, str2))
       printf("Strings are rotations of each other");
    else
       printf("Strings are not rotations of each other");
 
    getchar();
    return 0;
}

/*Library Functions Used:
strstr:
strstr finds a sub-string within a string.
Prototype: char * strstr(const char *s1, const char *s2);

strcat:
strncat concatenate two strings
Prototype: char *strcat(char *dest, const char *src);*/
