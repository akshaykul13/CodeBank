/*Traverse linked list using two pointers. Move one pointer by one and other pointer by two.
When the fast pointer reaches end slow pointer will reach middle of the linked list.*/

#include<stdio.h>
#include<stdlib.h>
 
/* Link list node */
struct node
{
    int data;
    struct node* next;
};
 
/* Function to get the middle of the linked list*/
void printMiddle(struct node *head)
{
  struct node *slow_ptr = head;
  struct node *fast_ptr = head;
 
  if(head!=NULL)
  {
       while((fast_ptr->next)!=NULL &&
               (fast_ptr->next->next)!=NULL)
       {
          fast_ptr = fast_ptr->next->next;
          slow_ptr = slow_ptr->next;
       }
       printf("The middle element is [%d]",slow_ptr->data);
  }
}
 
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
 
/* Drier program to test above function*/
int main()
{
    /* Start with the empty list */
    struct node* head = NULL;
 
     push(&head, 20);
     push(&head, 4);
     push(&head, 15); 
 
     printMiddle(head);
     return 0;
}
