# Insertion Sort
* Insertion sort is a sorting algorithm for arrays which is based off of comparing an array value to the one before. 
* Insertion sort takes in an array of integers, and step by step sorts them into ascending order.

* This function uses a for loop, with a while loop inside. 
* The for loop starts at i=1, up to i < arr.length. Inside of the for loop, j=i-1, and a temp variable is set to the arr[i]. Then, while j is a positive integer and the temp < arr[j] reassign the value in the array to the value befor, arr[j+1] becomes arr[j], and j=j-1. The loop will run until the temp value is no longer less than the value of arr[j] or until j is less than 0.

# Steps
* The sample array is [8,4,23,42,16,15].

* Step 1: On the first iteration, i=1, j=0, and temp=array[1]=4. Goes into the while loop, and the conditional evaluates to true, so array[1] becomes 8 (4 and 8 swap places), j=-1 and breaks out of the loop. The array is [4,8,23,42,16,15].

* Step 2: On the second iteration, i=2, j=1, and temp=array[2]=23. Goes into the while loop, and the conditional evaluates to false, so nothing changes. The array is [4,8,23,42,16,15].

* Step 3: On the third iteration, i=3, j=2, and temp=array[3]=42. Goes into the while loop, and the conditional evaluates to false, so nothing changes. The array is [4,8,23,42,16,15].

* Step 4: On the fourth iteration, i=4, j=3, and temp=array[4]=16. Goes into the while loop, and the conditional evalues to true, so array[4] becomes 42 (42 and 16 swap places), j=2 and the loop repeats (the array is [4,8,23,16,42,15]) The conditional evaluates to true, so array[3] becomes 23 (23 and 16 swap places), j=1 and the loop repeats (the array is [4,8,16,23,42,15]). The conditional evaluates to false and it breaks out of the loop. The array is [4,8,16,23,42,15].

* Step 5: On the fifth iteration, i=5, j=4, and temp=array[5]=15. Goes into the while loop, and the conditional evaluates to true, so array[5] becomes 42 (42 and 15 swap places), j=3 and the loop repeats (the array is [4,8,16,23,15,42]). The conditional evaluates to true so array[4] becomes 23 (23 and 15 swap places), j=2 and the loop repeats (the array is [4,8,16,15,23,42]). The conditional evaluates to true, so array [3] becomes 16 (16 and 15 swap places), j=1 and the loop repeats (the array is [4,8,15,16,23,42]). The conditional evaluates to false and it breaks out of the loop. The array is [4,8,15,16,23,42].