# Lesson 2: Input

## Table of Contents
  - [The `input` function](#the-input-function)
  - [Online Exercises](#online-exercises)


## The `input` function
So far, we have written simple programs that produces **output** to the console using the `print` function. What if we wanted the user to **input** some text to the console, and then let the program do something about it?

If you have done the exercises in the [previous lesson](../01_intro/README.md), you provided "input" by setting different values for the initial variables. For example, in Exercise 1, your form of "input" was to modify the value of `radius` directly inside the code for the program to print something different.

In this lesson, we will learn how to use the `input` function which, when called, will **stop the program from running** until a user enters some text on a single line. You may also additionally pass in a string argument as a prompt for input, such as: `"Enter your name: "`.

Example: place this code in a new Python file and run it:
```python
name = input("Enter your name: ")
print("Hello, " + name)
```

When you run the file, you will notice that the prompt `Enter your name: ` appears, but then the program **stops**. That is because it is waiting for you to enter some input in the console. Type in your name next to that prompt, and then press `Enter` (or `return` for Mac users). The result is that the name you entered is stored as a string in the variable `name`, and then it is printed alongside the other string `"Hello, "`.

<b class="important-note" />The `input` function will always return the entered input as a **string**. If we want to read a string like an integer (also known as *parsing* a string to an integer), we use the built-in `int` function:

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

[repl.it](https://repl.it/) is a website created for the purpose of coding online and sharing code. It also includes many different courses created by the online community that include practice problems. I found a course that offers many different practice problems as good exercises for you, but it requires you to create an account first.

Once you create an account, go to [this course](https://repl.it/classroom/invite/oJYvLOo) and click "Take and Learn". Then, complete as many assignment problems in that course as you can **from 1.1 to 1.7 as well as 2.1 to 2.D**. Note that I did not make these exercises myself.