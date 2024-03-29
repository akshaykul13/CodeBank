/*This method mainly involves two functions. 
One is to count nodes at a given level (getWidth), and other is to get the maximum width of the tree(getMaxWidth). 
getMaxWidth() makes use of getWidth() to get the width of all levels starting from root.

//Time Complexity: O(n^2) in the worst case.

/*Function to print level order traversal of tree*/
/*getMaxWidth(tree)
maxWdth = 0
for i = 1 to height(tree)
  width =   getWidth(tree, i);
  if(width > maxWdth) 
      maxWdth  = width
return width
/*Function to get width of a given level */
/*getWidth(tree, level)
if tree is NULL then return 0;
if level is 1, then return 1;  
else if level greater than 1, then
    return getWidth(tree->left, level-1) + 
    getWidth(tree->right, level-1);*/
    
#include <stdio.h>
#include <stdlib.h>
 
/* A binary tree node has data, pointer to left child
   and a pointer to right child */
struct node
{
    int data;
    struct node* left;
    struct node* right;
};
 
/*Function protoypes*/
int getWidth(struct node* root, int level);
int height(struct node* node);
struct node* newNode(int data);
 
/* Function to get the maximum width of a binary tree*/
int getMaxWidth(struct node* root)
{
  int maxWidth = 0;   
  int width;
  int h = height(root);
  int i;
   
  /* Get width of each level and compare 
     the width with maximum width so far */
  for(i=1; i<=h; i++)
  {
    width = getWidth(root, i);
    if(width > maxWidth)
      maxWidth = width;
  }     
   
  return maxWidth;
}
 
/* Get width of a given level */
int getWidth(struct node* root, int level)
{
     
  if(root == NULL)
    return 0;
   
  if(level == 1)
    return 1;
             
  else if (level > 1)
    return getWidth(root->left, level-1) + 
             getWidth(root->right, level-1);
}
 
 
/* UTILITY FUNCTIONS */
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
     int lHeight = height(node->left);
     int rHeight = height(node->right);
     /* use the larger one */
    
     return (lHeight > rHeight)? (lHeight+1): (rHeight+1);
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
  root->left->left  = newNode(4);
  root->left->right = newNode(5);
  root->right->right = newNode(8);    
  root->right->right->left  = newNode(6);    
  root->right->right->right  = newNode(7);      
 
  /*
   Constructed bunary tree is:
          1
        /  \
       2    3
     /  \     \
    4   5     8 
              /  \
             6   7
  */ 
  printf("Maximum width is %d \n", getMaxWidth(root));  
  getchar();
  return 0;
}
