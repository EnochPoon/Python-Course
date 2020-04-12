<h1>Lesson 4: Functions</h1>

<h2>Table of Contents</h2>

- [Introduction](#introduction)
- [Example 1: Single-Parameter Functions](#example-1-single-parameter-functions)
  - [Alternative Implementation](#alternative-implementation)
- [Example 2: Multiple parameters and Conditional Statements](#example-2-multiple-parameters-and-conditional-statements)
  - [Alternative Implementation 1](#alternative-implementation-1)
  - [Alternative Implementation 2](#alternative-implementation-2)
- [Online Exercises 1](#online-exercises-1)
  - [Easy](#easy)
  - [Medium](#medium)
- [Example 3: Helper Functions](#example-3-helper-functions)
  - [Alternative Implementation](#alternative-implementation-1)
- [Example 4: No Parameters](#example-4-no-parameters)
- [Example 5: None Returned](#example-5-none-returned)
- [Example 6: Introduction to Scopes](#example-6-introduction-to-scopes)
- [Example 7: Modifying Global Variables](#example-7-modifying-global-variables)
- [Online Exercises 2](#online-exercises-2)

## Introduction

In previous lessons, you have already learned to use some of Python's built-in **functions**. These include `print`, `input`, `max`, `min`, `abs`, `int`, etc. In fact, every time you call those functions, you're actually telling it to run a bunch of other lines of code hidden behind the scenes. In some cases, the hidden code is quite lengthy, so that's why we use functions so you can easy re-use them.

Here, you will learn how to create your own functions which, as discussed, are simply blocks of re-usable code that can be called elsewhere and potentially **return** a value.

## Example 1: Single-Parameter Functions

Copy and paste this code below into a new Python file in your editor:

```python
def add_10(n):
    num = n + 10
    return num
```

Here is a function named `add_10` that takes a number `n` and returns a new number, 10 more than `n`.

1. `def` is a Python keyword that stands for "define". This keyword is used at the start of each function that we create.
2. The *function name*, which in this case is `add_10`, immediately follows the `def` keyword
3. After the function name, surrounded by round brackets, we have *parameters*, which are names to variables that are assigned a value when we call this function. Note that parameters do not have a specific value; it is assigned a value depending on how we call this function. In this case, we have only one parameter: `n`. After the closing bracket, you **must** include a colon (`:`)
4. The *function body* are the next two lines. Note that justs like conditional statements, the body **must be indented in a consistent manner** for it to be part of the function.
   1. The first line is simply a line that I just added for this example. We create a new variable `num`, that is simply `n + 10` (Recall that `n` is a function parameter, so we don't know its value until we call the function).
   2. The return statement is usually found at the end of the function and it tells the function to return the specified value. It always begins with the `return` keyword followed by the value that is to be returned (In this case, we want to return the calculated value of `num`)

Run the above code. You should notice that nothing is printed in the console.

Now let's see what happens when we try calling this function in the Shell:

```python
>>> add_10(5)
______
>>> add_10(10)
______
>>> a = 32
>>> add_10(a)
______
>>> add_10(a + 10)
______
>>> b = add_10(a) + add_10(3)
>>> b
______
```

You notice that the value of the function parameter `n` is assigned when you call the function.

<b class="important-note"></b> Recall from Lesson 1, *returning* is **not** the same as *printing*.


### Alternative Implementation

A function's `return` statement does not have to simply be a variable. Therefore, an alternative way to write the `add_10` function such that it returns the same results could be like this:

```python
def add_10(n):
    return n + 10
```

## Example 2: Multiple parameters and Conditional Statements

Here is a possible implementation of the `max` function. In this simplified version, `max` will only take exactly two numbers `a` and `b`, and to not be confused with the true `max` function, we will name our function `my_max`:

```python
def my_max(a, b):
    out = a
    if b > a:
        out = b
    
    return out
```

In this implementation, we say that the value of `out` is whatever we are about to return as our "maximum number". At first, `out = a`, but if we realize that `b > a` is True, then we assign `out = b`. In the end, we return `out`. 

<b class="important-note"></b> Be careful of the indentation in the above function.

### Alternative Implementation 1
 
A function can also have multiple return statements:

```python
def my_max(a, b):
    if a > b:
        return a
    else:
        return b
```

### Alternative Implementation 2

Multiple return statements do not necessarily mean that the function can "return multiple values". A function can only return one value at a time. Once the program reaches a return statement, it returns the value and **immediately exits the function, even if there is more to the function underneath the return statement**.

```python
def my_max(a, b):
    if a > b:
        return a
    return b
```

In the above function, if `a > b` is True, then the function returns `a`, but **completely disregards any lines below** (i.e. `return b`).

## Online Exercises 1

This time, we will not use repl.it; for now, we will use [CodingBat](https://codingbat.com/python), which is another site for coding practice (again, not made by me). You may optionally create an account if you ever want to save your progress.

There are several problems out there, some of which involve content for later lessons. Below are links to some of the relevant exercise problems (Note that in the problem descriptions, an **int** simply means an integer, not the built-in `int` function):

### Easy

- [hello_name](https://codingbat.com/prob/p115413)
- [sum_double](https://codingbat.com/prob/p141905)
- [sleep_in](https://codingbat.com/prob/p173401)
- [monkey_trouble](https://codingbat.com/prob/p120546)
- [parrot_trouble](https://codingbat.com/prob/p166884)
- [pos_neg](https://codingbat.com/prob/p162058)
- [makes_10](https://codingbat.com/prob/p124984)

### Medium

- Any problem from [Logic-1](https://codingbat.com/python/Logic-1)


## Example 3: Helper Functions

A *helper function* is function that is called by another function, hence *helping* the other function.

In the example below, we have an implementation for the function `is_even3`, which takes a natural number `n` of up to 3 digits and returns True if all three of its digits are even, and False otherwise:

```python
def is_even3(n):
    if is_even_digit(n, 0) and is_even_digit(n, 1) and is_even_digit(2):
        return True
    else:
        return False

def is_even_digit(n, place)
    digit_at_place = n // (10 ** place) % 10
    if digit_at_place % 2 == 0:
        return True
    else:
        return False
```

Run the above code. Then, in the Shell, try to call `is_even3` by passing in any 3-digit natural number of your choice.

Notice that the function body for `is_even3` includes calling the helper function `is_even_digit`. This helper function takes two natural numbers, `n` and `place`, and returns True if the the digit in `n` at the given `place` is even, and False otherwise. In this example, `place` is a number representing the digit **from the right side**. For example, if `n` is 634, the digit at `place` 0 is 4, the digit at place 1 is 3, and the digit at place 2 is 6. Study the implementation of both functions carefully to understand how they work.

### Alternative Implementation

Note that the above two functions can be simplified to the following:

```python
def is_even3(n):
    return is_even_digit(n, 0) and is_even_digit(n, 1) and is_even_digit(n, 2)

def is_even_digit(n, place):
    return n // (10 ** place) % 10 % 2 == 0
```


## Example 4: No Parameters

A function can also have no parameters. It can also take user input:

```python
def add_10():
    n = int(input("Enter your number: "))
    return n + 10
```

Run this code, and imitate the interaction below in the Shell:

```python
>>> add_10()
Enter your number: 4
________
```

## Example 5: None Returned

A function does not always need to have a return statement. In the case where the program reaches the end of a function without reaching any return statement, the function returns the value `None` by default. Note that it will not be shown in the Shell. It is interesting to note that the built-in `print` function is an example that always returns `None`.

```python
def print_big_message():
    print("printing is not the same as returning!")
    print("printing is not the same as returning!")
    print("printing is not the same as returning!")
    print("This function returns None")
```

## Example 6: Introduction to Scopes

We will look back to the first function example,

```python
def add_10(n):
    out = n + 10
    return out

print("add_10(3) is equal to")
print(add_10(3))
print("out is equal to:")
print(out)
```

Run the above code and observe the results that are printed.

What happened? Why didn't `print(out)` work? Didn't we set `out = n + 10`? Yes we did, but `out` is a variable defined **inside the function**. Such variables are called *local variables*, and they are in the *local scope*. A local variable cannot be accessed at any time outside of the function. That means that once the function returns a value, all its local variables will be **completely forgotten**.

A variable that is defined **outside any function** is called a *global variable* found in the *global scope*. Global variables can be accessed at any time as long as it is defined. 

```python
ten = 10 # This is a global variable

def add_10(n):
    out = n + ten # out is a local variable. Notice that ten is called.
    return out
```


## Example 7: Modifying Global Variables

Suppose you want a global variable that keeps a boolean that holds True if a certain function, in this case `my_func`, is called at least once, and False otherwise. You may at first consider this:

```python
called = False

def my_func():
    called = True

print("calling my_func()...")
my_func()
print("called is now:")
print(called)
```

Run this code and see what happens.

Wait a minute. I thought the last line that printed should be `True`, not `False`! What's wrong? Didn't we set our global variable `called` to True inside `my_func`? **No, we did not**. In fact, inside `my_func`, we created a **new local variable** `called`, which has the same name is the global variable.

If you really want to refer to a global variable inside of a function, use the `global` keyword followed by your global variables:

```python
called = False

def my_func():
    global called
    called = True # called now refers to the global variable

print("calling my_func()...")
my_func()
print("called is now:")
print(called)
```

## Online Exercises 2

These CodingBat exercises are more difficult than the ones [above](#online-exercises-1). Complete any of the problems from [Logic-2](https://codingbat.com/python/Logic-2).