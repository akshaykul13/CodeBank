//Time Complexity: O(n)

#include <stdio.h>
#include <stdlib.h>
 
struct node
{
    int data;
    struct node *left;
    struct node *right;
    struct node *next;
};
 
/* Set next of p and all descendents of p by traversing them in reverse Inorder */
void populateNext(struct node* p)
{
    // The first visited node will be the rightmost node
    // next of the rightmost node will be NULL
    static struct node *next = NULL;
 
    if (p)
    {
        // First set the next pointer in right subtree
        populateNext(p->right);
 
        // Set the next as previously visited node in reverse Inorder
        p->next = next;
 
        // Change the prev for subsequent node
        next = p;
 
        // Finally, set the next pointer in right subtree
        populateNext(p->left);
    }
}
 
/* UTILITY FUNCTIONS */
/* Helper function that allocates a new node with the
   given data and NULL left and right pointers. */
struct node* newnode(int data)
{
    struct node* node = (struct node*)
                        malloc(sizeof(struct node));
    node->data = data;
    node->left = NULL;
    node->right = NULL;
    node->next = NULL;
 
    return(node);
}
 
/* Driver program to test above functions*/
int main()
{
 
    /* Constructed binary tree is
              10
            /   \
          8      12
        /
      3
    */
    struct node *root = newnode(10);
    root->left        = newnode(8);
    root->right       = newnode(12);
    root->left->left  = newnode(3);
 
    // Populates nextRight pointer in all nodes
    populateNext(root);
 
    // Let us see the populated values
    struct node *ptr = root->left->left;
    while(ptr)
    {
        // -1 is printed if there is no successor
        printf("Next of %d is %d \n", ptr->data, ptr->next? ptr->next->data: -1);
        ptr = ptr->next;
    }
 
    return 0;
}
We can avoid the use of static variable by passing reference to next as paramater.

// An implementation that doesn't use static variable
 
// A wrapper over populateNextRecur
void populateNext(struct node *root)
{
    // The first visited node will be the rightmost node
    // next of the rightmost node will be NULL
    struct node *next = NULL;
 
    populateNextRecur(root, &next);
}
 
/* Set next of all descendents of p by traversing them in reverse Inorder */
void populateNextRecur(struct node* p, struct node **next_ref)
{
    if (p)
    {
        // First set the next pointer in right subtree
        populateNextRecur(p->right, next_ref);
 
        // Set the next as previously visited node in reverse Inorder
        p->next = *next_ref;
 
        // Change the prev for subsequent node
        *next_ref = p;
 
        // Finally, set the next pointer in right subtree
        populateNextRecur(p->left, next_ref);
    }
}
