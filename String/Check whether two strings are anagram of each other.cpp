This method assumes that the set of possible characters in both strings is small. In the following implementation, it is assumed that the characters are stored using 8 bit and there can be 256 possible characters.
1) Create count arrays of size 256 for both strings. Initialize all values in count arrays as 0.
2) Iterate through every character of both strings and increment the count of character in the corresponding count arrays.
3) Compare count arrays. If both count arrays are same, then return true.

If the possible set of characters contains only English alphabets, then we can reduce the size of arrays to 52 and use str[i] – ‘A’ as an index for count arrays. This will further optimize this method.

Time Complexity: O(n)

# include <stdio.h>
# define NO_OF_CHARS 256
 
/* function to check whether two strings are anagram of each other */
bool areAnagram(char *str1, char *str2)
{
    // Create two count arrays and initialize all values as 0
    int count1[NO_OF_CHARS] = {0};
    int count2[NO_OF_CHARS] = {0};
    int i;
 
    // For each character in input strings, increment count in
    // the corresponding count array
    for (i = 0; str1[i] && str2[i];  i++)
    {
        count1[str1[i]]++;
        count2[str2[i]]++;
    }
 
    // If both strings are of different length. Removing this condition
    // will make the program fail for strings like "aaca" and "aca"
    if (str1[i] || str2[i])
      return false;
 
    // Compare count arrays
    for (i = 0; i < NO_OF_CHARS; i++)
        if (count1[i] != count2[i])
            return false;
 
    return true;
}
 
/* Driver program to test to pront printDups*/
int main()
{
    char str1[] = "geeksforgeeks";
    char str2[] = "forgeeksgeeks";
    if ( areAnagram(str1, str2) )
      printf("The two strings are anagram of each other");
    else
      printf("The two strings are not anagram of each other");
 
    return 0;
}
Output:

The two strings are anagram of each other
The above implementation can be further to use only one count array instead of two. We can increment the value in count array for characters in str1 and decrement for characters in str2. Finally, if all count values are 0, then the two strings are anagram of each other. Thanks to Ace for suggesting this optimization.

bool areAnagram(char *str1, char *str2)
{
    // Create two count arrays and initialize all values as 0
    int count[NO_OF_CHARS] = {0};
    int i;
 
    // For each character in input strings, increment count in
    // the corresponding count array
    for (i = 0; str1[i] && str2[i];  i++)
    {
        count[str1[i]]++;
        count[str2[i]]--;
    }
 
    // If both strings are of different length. Removing this condition
    // will make the program fail for strings like "aaca" and "aca"
    if (str1[i] || str2[i])
      return false;
 
    // See if there is any non-zero value in count array
    for (i = 0; i < NO_OF_CHARS; i++)
        if (count[i])
            return false;
     return true;
}
