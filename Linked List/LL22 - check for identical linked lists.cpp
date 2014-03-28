bool areIdentical(struct node *a, struct node *b)
{ 
  if (a == NULL && b == NULL)     
  {  return 1;  }
  if (a == NULL && b != NULL)  
  {  return 0;  }
  if (a != NULL && b == NULL)  
  {  return 0;  }
  if (a->data != b->data)
  {  return 0;  }
 
  /* If we reach here, then a and b are not NULL and their 
       data is same, so move to next nodes in both lists */
  return areIdentical(a->next, b->next);    
}     

//Time Complexity: O(n) for both iterative and recursive versions. n is the length of the smaller list among a and b.
