<h1>Lesson 2: Input</h1>

<h2>Table of Contents</h2>

- [The `input` function](#the-input-function)
  - [Example](#example)
- [Online Exercises](#online-exercises)


## The `input` function
So far, we have written simple programs that produces **output** to the console using the `print` function. What if we wanted the user to **input** some text to the console, and then let the program do something about it?

If you have done the exercises in the previous lesson, you provided "input" by setting different values for the initial variables. For example, in Exercise 1, your form of "input" was to modify the value of `radius` directly inside the code for the program to print something different.

In this lesson, we will learn how to use the `input` function which, when called, will **stop the program from running** until a user enters some text on a single line. You may also additionally pass in a string argument as a prompt for input, such as: `"Enter your name: "`.

### Example

Place this code in a new Python file and run it:
```python
name = input("Enter your name: ")
print("Hello, " + name)
```

When you run the file, you will notice that the prompt `Enter your name: ` appears, but then the program **stops**. That is because it is waiting for you to enter some input in the console. Type in your name next to that prompt, and then press `Enter` (or `return` for Mac users). The result is that the name you entered is stored as a string in the variable `name`, and then it is printed alongside the other string `"Hello, "`.

<b class="important-note"></b> The `input` function will always return the entered input as a **string**. If we want to read a string like an integer (also known as *parsing* a string to an integer), we use the built-in `int` function:

Here is an example of a program that takes in two integers from input and returns their sum:
```python
a = int(input("Enter your first integer: ")) 
# The line above takes input and then immediately parses it into an integer
b = int(input("Enter your second integer: "))
print("The sum is", a + b)
```

**Cool feature:** The input function **does not need to take in any arguments as prompts** (So you can literally just call it like `input()`, and it will simply take input **without prompts**:

```python
a = int(input()) # Takes input, but prompts are given
b = int(input()) # Note that a and b may not have the same value.
print("The sum is", a + b)
```
Note that if you run the above code, you must enter **two integers**, and **each integer must be on a separate line, two lines total**. Therefore, you must enter the input like this:
```
3
2
```
and **not**:
```
3 2
```
nor
```
3

2
```

## Online Exercises

Hopefully you created an account on [DMOJ](https://dmoj.ca). If you haven't, read up on how to set it up in Lesson 0 first. If you did, try these problems
- Make sure you test out your code on Wing first before submitting!
- **Do not prompt for input** (i.e. do not do something like `N = int(input("Enter your number: "))`. Just say `N = int(input())`)

1. [Next in Line](https://dmoj.ca/problem/ccc13j1)
2. [Core Drill](https://dmoj.ca/problem/dmopc14c5p1) (Hint: use 3.14159 as pi. Do not use 3.14)
3. [Flare](https://dmoj.ca/problem/dmopc14c7p1) (Requires knowledge of mathematics on quadratic functions)