My solution

Comments on tasks

1) Order form validation

This was not hard, considering that cakes.html had already the validation done.

2) Incorrect total sum

This was an error/bug in the backend. Originally, only the price of the cake was inserted. 
Now I multiplied that with the amount of cakes.

3) Deactivating cakes

This was fun. I got to work with both ends. Frond end was a bit more trickier since the rowTemplate had to be edited.
Backend was not hard.

Bonus 1) Refactor queries with ORM (Spring boot + JPA)

This is actually something really new for me since I have never used an ORM to do my queries for me.
I got it working with the Cake table and entity and it really helps to write less queries. Since I did this for the first time, I didn't figure out, what is the correct way to query all rows with JPA so I had to use some native queries too.

I was unable to refactor OrderDao queries since entity Order is divided over 3 tables. I did some research on Google, but for now I decided that I would like to submit my solution for now.

Bonus 2) Statistics page

This was fun since it included both ends again. The backend was actually rather easy and I had no problems with it.
The frontend was a bit trickier, but I got stuck for a while because of one problem. I forgot that the query is asynchronous and that's why my chart failed to render all the time. 
