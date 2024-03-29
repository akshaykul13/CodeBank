//Time Complexity: O(n) where n is the number of nodes in the given Binary Tree.

#include<stdio.h>
 
/* A tree node structure */
struct node
{
  int data;
  struct node *left;
  struct node *right;
};
 
/*
   Helper function for getLevel().  It returns level of the data if data is
   present in tree, otherwise returns 0.
*/
int getLevelUtil(struct node *node, int data, int level)
{
  if ( node == NULL )
    return 0;
 
  if ( node->data == data )
    return level;
 
  return getLevelUtil ( node->left, data, level+1) |
         getLevelUtil ( node->right, data, level+1);
}
 
/* Returns level of given data value */
int getLevel(struct node *node, int data)
{
  return getLevelUtil(node,data,1);
}
 
/* Utility function to create a new Binary Tree node */
struct node* newNode(int data)
{
  struct node *temp = new struct node;
  temp->data = data;
  temp->left = NULL;
  temp->right = NULL;
 
  return temp;
}
 
/* Driver function to test above functions */
int main()
{
  struct node *root = new struct node;
  int x;
 
  /* Constructing tree given in the above figure */
  root = newNode(3);
  root->left = newNode(2);
  root->right = newNode(5);
  root->left->left = newNode(1);
  root->left->right = newNode(4);
 
  x = 3;
  printf(" Level of %d is %d", x, getLevel(root, x));
 
  x = 6;
  printf("\n Level of %d is %d", x, getLevel(root, x));
 
  getchar();
  return 0;
}

