/*printLevelorder(tree)
  bool ltr = 0;
  for d = 1 to height(tree)
     printGivenLevel(tree, d, ltr);
     ltr ~= ltr /*flip ltr*/


/*printGivenLevel(tree, level, ltr)
if tree is NULL then return;
if level is 1, then
    print(tree->data);
else if level greater than 1, then
    if(rtl)
        printGivenLevel(tree->right, level-1, ltr);
        printGivenLevel(tree->left, level-1, ltr);
    else
        printGivenLevel(tree->left, level-1, ltr);
        printGivenLevel(tree->right, level-1, ltr);*/


#include <stdio.h>
#include <stdlib.h>
#define bool int
 
/* A binary tree node has data, pointer to left child
   and a pointer to right child */
struct node
{
  int data;
  struct node* left;
  struct node* right;
};
 
/*Function protoypes*/
void printGivenLevel(struct node* root, int level, int ltr);
int height(struct node* node);
struct node* newNode(int data);
 
/* Function to print spiral traversal of a tree*/
void printLevelOrder(struct node* root)
{
  int h = height(root);
  int i;
 
  /*ltr -> Left to Right. If this variable is set,
    then the given level is traverseed from left to right. */
  bool ltr = 0; 
  for(i=1; i<=h; i++)
  {
    printGivenLevel(root, i, ltr);
 
    /*Revert ltr to traverse next level in oppposite order*/  
    ltr = ~ltr; 
  } 
}    
 
/* Print nodes at a given level */
void printGivenLevel(struct node* root, int level, int ltr)
{
  if(root == NULL)
    return;
  if(level == 1)
    printf("%d ", root->data);
  else if (level > 1)
  {
    if(ltr)   
    { 
      printGivenLevel(root->left, level-1, ltr);
      printGivenLevel(root->right, level-1, ltr);                   
    } 
    else
    {            
      printGivenLevel(root->right, level-1, ltr);        
      printGivenLevel(root->left, level-1, ltr);           
    }    
  }
}
 
/* Compute the "height" of a tree -- the number of
    nodes along the longest path from the root node
    down to the farthest leaf node.*/
int height(struct node* node)
{
   if (node==NULL)
       return 0;
   else
   {
     /* compute the height of each subtree */
     int lheight = height(node->left);
     int rheight = height(node->right);
 
     /* use the larger one */
     if (lheight > rheight)
         return(lheight+1);
     else return(rheight+1);
   }
}
 
/* Helper function that allocates a new node with the
   given data and NULL left and right pointers. */
struct node* newNode(int data)
{
  struct node* node = (struct node*)
                       malloc(sizeof(struct node));
  node->data = data;
  node->left = NULL;
  node->right = NULL;
 
  return(node);
}
 
/* Driver program to test above functions*/
int main()
{
  struct node *root = newNode(1);
  root->left        = newNode(2);
  root->right       = newNode(3);
  root->left->left  = newNode(7);
  root->left->right = newNode(6);
  root->right->left  = newNode(5);
  root->right->right = newNode(4);
  printf("Level Order traversal of binary tree is \n");
  printLevelOrder(root);
 
  getchar();
  return 0;
}
