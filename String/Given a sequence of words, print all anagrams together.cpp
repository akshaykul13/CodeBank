Let us understand the steps with following input Sequence of Words:

"cat", "dog", "tac", "god", "act"
1) Create two auxiliary arrays index[] and words[]. Copy all given words to words[] and store the original indexes in index[]

index[]:  0   1   2   3   4
words[]: cat dog tac god act
2) Sort individual words in words[]. Index array doesn�t change.

index[]:   0    1    2    3    4
words[]:  act  dgo  act  dgo  act
3) Sort the words array. Compare individual words using strcmp() to sort

index:     0    2    4    1    3
words[]:  act  act  act  dgo  dgo
4) All anagrams come together. But words are changed in words array. To print the original words, take index from the index array and use it in the original array. We get

"cat tac act dog god"
Following is C implementation of the above algorithm. In the following program, an array of structure �Word� is used to store both index and word arrays. DupArray is another structure that stores array of structure �Word�.

// A program to print all anagarms together
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
 
// structure for each word of duplicate array
struct Word
{
    char* str;  // to store word itself
    int index; // index of the word in the original array
};
 
// structure to represent duplicate array.
struct DupArray
{
    struct Word* array;  // Array of words
    int size;   // Size of array
};
 
// Create a DupArray object that contains an array of Words
struct DupArray* createDupArray(char* str[], int size)
{
    // Allocate memory for dupArray and all members of it
    struct DupArray* dupArray =
              (struct DupArray*) malloc( sizeof(struct DupArray) );
    dupArray->size = size;
    dupArray->array =
              (struct Word*) malloc( dupArray->size * sizeof(struct Word) );
 
    // One by one copy words from the given wordArray to dupArray
    int i;
    for (i = 0; i < size; ++i)
    {
        dupArray->array[i].index = i;
        dupArray->array[i].str = (char*) malloc( strlen(str[i]) + 1 );
        strcpy(dupArray->array[i].str, str[i] );
    }
 
    return dupArray;
}
 
// Compare two characters. Used in qsort() for sorting an array of characters (Word)
int compChar(const void* a, const void* b)
{
    return *(char*)a - *(char*)b;
}
 
// Compare two words. Used in qsort() for sorting an array of words
int compStr(const void* a, const void* b)
{
    struct Word* a1 = (struct Word *)a;
    struct Word* b1 = (struct Word *)b;
    return strcmp(a1->str, b1->str);
}
 
// Given a list of words in wordArr[],
void printAnagramsTogether(char* wordArr[], int size)
{
    // Step 1: Create a copy of all words present in given wordArr.
    // The copy will also have orignal indexes of words
    struct DupArray* dupArray = createDupArray(wordArr, size);
 
    // Step 2: Iterate through all words in dupArray and sort individual words.
    int i;
    for (i = 0; i < size; ++i)
       qsort(dupArray->array[i].str,
             strlen(dupArray->array[i].str), sizeof(char), compChar);
 
    // Step 3: Now sort the array of words in dupArray
    qsort(dupArray->array, size, sizeof(dupArray->array[0]), compStr);
 
    // Step 4: Now all words in dupArray are together, but these words are
    // changed. Use the index member of word struct to get the corresponding 
    // original word
    for (i = 0; i < size; ++i)
        printf("%s ", wordArr[dupArray->array[i].index]);
}
 
// Driver program to test above functions
int main()
{
    char* wordArr[] = {"cat", "dog", "tac", "god", "act"};
    int size = sizeof(wordArr) / sizeof(wordArr[0]);
    printAnagramsTogether(wordArr, size);
    return 0;
}
Output:

act tac cat god dog
Time Complexity: Let there be N words and each word has maximum M characters. The upper bound is O(NMLogM + MNLogN).
Step 2 takes O(NMLogM) time. Sorting a word takes maximum O(MLogM) time. So sorting N words takes O(NMLogM) time. 
step 3 takes O(MNLogN) Sorting array of words takes NLogN comparisons. 
A comparison may take maximum O(M) time. So time to sort array of words will be O(MNLogN).
