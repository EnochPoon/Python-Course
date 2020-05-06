<h1>Lesson 5: Loops</h1>

<h2>Table of Contents</h2>

- [Introduction](#introduction)
- [The `while` loop](#the-while-loop)
  - [Example 1](#example-1)
  - [Example 2](#example-2)
  - [Example 3](#example-3)
  - [Example 4](#example-4)
  - [Example 5](#example-5)
- [Online Exercises 1](#online-exercises-1)
- [The `for` loop](#the-for-loop)
  - [Example 1](#example-1-1)
  - [Example 2](#example-2-1)
  - [Example 3](#example-3-1)
  - [Example 4](#example-4-1)
  - [Example 5](#example-5-1)
- [Comparison Between the Two Loops](#comparison-between-the-two-loops)
- [The `break` Keyword](#the-break-keyword)
  - [Example](#example)
- [The `continue` Keyword](#the-continue-keyword)
  - [Example](#example-1)
- [Online Exercises 2](#online-exercises-2)

## Introduction

Here's an example problem as a motivation: Write a Python program that takes a single positive integer `n` and prints each number from 1 to `n` inclusive, each number on its own line.

Your first instinct might be to write code like this:

```python
n = int(input())

if n == 1:
    print(1)
elif n == 2:
    print(1)
    print(2)
elif n == 3:
    print(1)
    print(2)
    print(3)
...
```

But what if the inputted number were as large as 100000? You definitely do not want to write that many `if`/`elif`/`else` statements! Even then, the inputted number can be even larger than that! We need to figure out how to write a much shorter program.

In this lesson, we will learn how to use **loops**, which are features that allow lines of code to be run **multiple times**. Once we learn to use loops, we will be able to write a solution to the above problem in less than 7 lines.

Python has two types of loops: the `while` loop and the `for` loop.


## The `while` loop

The `while` loop is very similar to an `if` statement: if the given statement holds True, then the program runs the lines of code inside the loop; otherwise it skips everything inside the loop and continues on below. However, unlike `if` statements, when the program completes each statement inside of the loop, it **goes back to the top of the loop and repeats the steps, including checking the condition**. Therefore, it allows lines of code to be run over and over again **as long as a condition holds True**.

The syntax is similar to that of an `if` statement, the only difference being the use of the `while` keyword instead of the `if` keyword:

```python
while <condition>:
    <statement(s)>
```

### Example 1

We will use a simple example by providing a solution to the problem shown in the [introduction](#introduction) (Just for this example below, we will add an extra feature that simply prints the word `Done` at the end of the output):

```python
n = int(input())
x = 1
while x <= n:
    print(x)
    x += 1
print("Done")
```

If you run this code, you may get something like this:

**Sample Input**

```
4
```

**Sample Output**

```
1
2
3
4
Done
```


A way to describe this code in plain English would be like this:

1. Let `n` be a positive integer from input.
2. Let `x` be a new variable, initially set to 1.
3. This is the beginning of the loop. If `x <= n`, then continue to the next step. Otherwise, skip all the way to step 7.
4. Print the current value of `x`.
5. Increase the value of `x` by 1. (Note that increasing `x` does **not** change what has already been printed to the console)
6. **Go back to step 3**.
7. Print the word `Done`.

If you're struggling to understand these seven steps, try writing it down on paper: Let `n` be the number 4. Write down what is printed when you follow the steps accordingly.

<b class="important-note"></b> It is imperative that your program must eventually find its way out of the loop. In the above example, notice that we had to ensure we had `x += 1` inside a loop with the condition `x <= n`. This means that eventually, there must be a time when the condition holds **False**, allowing the program to escape the loop and continue on below. It is a common mistake for beginner programmers to forget to ensure an escape is possible (for example, either they forget to add `x += 1` in the above example, or they accidentally set the condition to `n <= x`). If you end up with those bad mistakes, you may end up with what is called an **infinite loop**, where the program runs nonstop and simply never ends. These problems are often very hard to detect when you are a beginner programmer, since as you can see, one single line can change the entire program in a terrible way. You have now been warned.

Below are examples of programs with infinite loops (Do **not** try to run these):

```python
n = int(input())
x = 1
while x <= n:
    print(x)
print("Done")
```

```python
n = int(input())
x = 1
while n <= x:
    print(x)
    x += 1
print("Done")
```

If you suspect that you accidentally ended up with an infinite loop while running your program on Wing 101, simply click the **Options** menu on the top-right of the Shell, and click **Restart Shell** to force the program to end.

### Example 2

This program allows the user to print **read a variable number of lines**. First, it reads the number `n`: a positive integer. Then, `n` lines follow, each line having a single integer. The output will be the sum of the `n` numbers that were inputted (i.e. all the inputted numbers excluding `n` itself, which was read in the beginning):

```python
n = int(input())
sum_of_numbers = 0
while n > 0:
    num = int(input())
    sum_of_numbers += num
    n -= 1 # Do you see why this line is necessary?

print(sum_of_numbers)
```

**Sample Input**

```
4
2
3
5
-1
```

**Sample Output**

```
9
```

### Example 3

This program takes a positive integer `n` from input. `n` lines of input follow: each line having a single integer. The program outputs how many of those `n` numbers were **even**.

```python
n = int(input())
evens_count = 0
while n > 0:
    num = int(input())
    if num % 2 == 0: # You can put if/elif/else statements inside of a loop
        evens_count += 1
    num -= 1 # Do you see why the indentation is like this and not one more tab ahead?
```

Likewise, you can even place a loop inside of an `if`/`elif`/`else` statement, or even place a loop inside of a loop!

### Example 4

The function `sum_of_digits` takes a natural number `n` and returns the sum of its digits.

```python
def sum_of_digits(n):
    num = n
    digit_sum = 0
    while num != 0:
        rightmost_digit = num % 10
        digit_sum += rightmost_digit
        num //= 10
    return digit_sum
```

### Example 5

The function `has_even_digit` takes a natural number `n` and returns True if at least one of its digits is even, and False otherwise:

```python
def has_even_digit(n):
    num = n
    while n != 0:
        rightmost_digit = num % 10
        if num % 2 == 0:
            return True 
            # Again, a return statement will always return the value and 
            # exit the function IMMEDIATELY, even if there appears to
            # be more to the function.
        num //= 10
    return False
```

## Online Exercises 1

1. [Tournament Selection](https://dmoj.ca/problem/ccc16j1)
2. [Hailstone Numbers](https://dmoj.ca/problem/hailstone)
3. [Grumpy Dwarf](https://dmoj.ca/problem/dmopc15c2p1)
4. [Sumac Sequences](https://dmoj.ca/problem/ccc11j3)
5. [Lucky Number](https://dmoj.ca/problem/hkccc08j2)


## The `for` loop

The `for` loop allows you to **iterate over** (meaning "look through, one by one") a sequence of elements. The syntax looks like this:

```python
for <variable_name> in <sequence>:
    <statement(s)>
```

To better understand how to use a `for` loop, we will consider the `while` loop template below:

```python
n = _____ # natural number
x = 0
while x < n:
    <statement(s)>
    x += 1
```

We see that the value of `x` will have the value of each natural number from 0 **inclusive** to `n` **exclusive** (i.e. 0 to `n-1` inclusive). We can say that that the `x` **iterates** over those natural numbers.

Python's built-in function `range(n)` takes a natural number `n` and creates an **iterable** object from 0, inclusive, to `n`, exclusive. In other words, it allows you to look through the numbers 0, 1, 2, ..., `n-1`.

To iterate over a range, we will use a `for` loop:

```python
n = _____ # natural number
for x in range(n):
    <statement(s)>
```

This code template above can be considered as equivalent to the `while` loop template shown above.

- Notice that the `x` is not actually mentioned outside the loop: it is first mentioned at the start of the loop. When we say `for x in range(n)`, we mean: `x` will be a variable in `range(n)` (which allows iterating over 0 to `n-1` inclusive). Every time we reach the end of the loop, we start again, but this time, `x` is the next number in the range.
- This also means that you do **not** need to include the statement `x += 1` at the end of the loop; the `for` loop already does that step for you as it moves on to the next element in the range.

### Example 1

Here is a very simple example. This code reads one natural number `n` as input and prints all the natural numbers from 0 to `n-1` inclusive.

```python
n = int(input())
for x in range(n):
    print(x)
```

**Sample Input**

```
4
```

**Sample Output**

```
0
1
2
3
```

### Example 2

There is also such thing as `range(start, end)`, that takes two integers `start` and `end` such that `start <= end`, and allows iteration through the integers from `start` to `end-1` inclusive.

```python
n = int(input())
for x in range(1, n + 1):
    print(x)
```

**Sample Input**

```
4
```

**Sample Output**

```
1
2
3
4
```

### Example 3

Lastly, a less commonly used feature is `range(start, end, step)` which takes two integers `start` and `end`, where `start <= end`, and a positive integer `step`. This allows iteration over "every `step` numbers" up to `end-1`, **including `start`**.

```python
n = int(input())
for x in range(0, n, 2):
    print(x)
```

**Sample Input**

```
8
```

**Sample Output**

```
0
2
4
6
```

### Example 4

The function `string_times(s, n)` takes a string `s` and a natural number `n` and returns a larger string that is `n` copies of `s`:

```python
def string_times(s, n):
    my_string = ""
    for i in range(n):
        my_string += s
    return my_string
```

Notice that in this example, I used the variable `i` in the `for` loop, but I didn't care much about it; I just needed a loop that runs `n` times, so I used `range(n)`.

```python
>>> string_times('Hi', 2)
_____
>>> string_times('Hi', 3)
_____
>>> string_times('Hi', 1)
_____
```

### Example 5

This program takes a natural number `n` from input, followed by `n` integers, each on their own line. Then, it outputs the number of even integers and the number of odd integers out of those `n` integers.

```python
n = int(input())
evens_count = 0
odds_count = 0
for i in range(n):
    num = int(input())
    if num % 2 == 0:
        evens_count += 1
    else:
        odds_count += 1

print(evens_count, 'even integers')
print(odds_count, 'odd integers')
```

In future lessons, we will learn more different ways we can use a `for` loop. For now, we are only looking at using `range`.

## Comparison Between the Two Loops

`while` loops | `for` loops
-- | --
Requires the programmer to ensure there is no infinite loop through extra steps | Guaranteed to never be the cause of infinite loops
Much more flexible: can be used when you're not immediately sure how many times you are going through the loop | Not very flexible: number of times you go through the loop is known from the beginning
Not everything written using a `while` loop can be written equivalently with a `for` loop | Anything written using a `for` loop has a `while` loop equivalent



## The `break` Keyword

The `break` keyword can be used in both `while` loops and `for` loops. It simply means "get out of the loop immediately and continue below, even if the condition still holds True, or if there is more to the range to iterate over".

### Example

This code simply keeps reading numbers from input until it reaches the number 0. Go ahead and try it out with your own input!

```python
while True: # This causes an infinite loop if there were no break keyword inside
    text = input() # input can be anything, even non-numerical
    if text == '0':
        break
    print("You entered:", text)

print("Exiting...")
```

## The `continue` Keyword

The `continue` keyword can be used inside any loop. In a `while` loop, it simply means "immediately go back to the top of the loop and check the condition again". In a `for` loop, it means "immediately go back to the top of the loop, and move on to the next item in the sequence.

### Example

This program takes in a natural number `n` and prints all natural numbers from 0 to `n-1`, except for the number 3:

```python
n = int(input())
for i in range(n):
    if i == 3:
        continue
    print(i)
```

## Online Exercises 2

Use `for` loops for each of these

1. [Vanilla Primes](https://dmoj.ca/problem/dwite07c1p1)
2. [Mr. White's Carnival](https://dmoj.ca/problem/ppwindsor18p1)
3. [Shifty Sum](https://dmoj.ca/problem/ccc17j2)
4. [RSA Numbers](https://dmoj.ca/problem/ccc05j2)
5. [Deficient, Perfect, and Abundant](https://dmoj.ca/problem/ccc96s1)
