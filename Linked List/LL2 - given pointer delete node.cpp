#include<stdio.h>
#include<assert.h>
#include<stdlib.h>

/* A simple solution is to traverse the linked list until you find the node you want to delete. But this solution requires pointer to the head node which contradicts the problem statement.

Fast solution is to copy the data from the next node to the node to be deleted and delete the next node. Something like following.

    struct node *temp  = node_ptr->next;
    node_ptr->data  = temp->data;
    node_ptr->next  = temp->next;
    free(temp);*/
/* Link list node */
struct node
{
    int data;
    struct node* next;
};
 
/* Given a reference (pointer to pointer) to the head
    of a list and an int, push a new node on the front
    of the list. */
void push(struct node** head_ref, int new_data)
{
   /* allocate node */
   struct node* new_node =
             (struct node*) malloc(sizeof(struct node));
 
   /* put in the data  */
   new_node->data  = new_data;
 
   /* link the old list off the new node */
   new_node->next = (*head_ref);
 
   /* move the head to point to the new node */
   (*head_ref)    = new_node;
}
 
void printList(struct node *head)
{
   struct node *temp = head;
   while(temp != NULL)
   {
      printf("%d  ", temp->data);
      temp = temp->next;
   }
}
 
void deleteNode(struct node *node_ptr)   
{
   struct node *temp = node_ptr->next;
   node_ptr->data    = temp->data;
   node_ptr->next    = temp->next;
   free(temp);
}
 
/* Drier program to test above function*/
int main()
{
    /* Start with the empty list */
    struct node* head = NULL;
 
    /* Use push() to construct below list
    1->12->1->4->1  */
    push(&head, 1);
    push(&head, 4);
    push(&head, 1);
    push(&head, 12);
    push(&head, 1);
 
    printf("\n Before deleting \n");
    printList(head);
 
    /* I m deleting the head itself.
        You can check for more cases */
    deleteNode(head);
 
    printf("\n After deleting \n");
    printList(head);
    getchar(); 
    return 0;
}
