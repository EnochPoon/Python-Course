<h1>Conditional statements</h1>

<h2>Table of Contents</h2>

- [Introduction to Booleans](#introduction-to-booleans)
  - [Comparison Operators](#comparison-operators)
    - [Examples](#examples)
    - [Exercise](#exercise)
  - [Logical Operators](#logical-operators)
    - [Complex situations](#complex-situations)
    - [Exercise](#exercise-1)
- [Conditional Statements](#conditional-statements)
  - [The `if` statement](#the-if-statement)
    - [Example](#example)
  - [The `else` statement](#the-else-statement)
  - [The `elif` statement](#the-elif-statement)
  - [Exercises](#exercises)


## Introduction to Booleans

A **boolean** (or **bool** for short) is a value that can be either `True` or `False`. Very often, they are expressed in code through **boolean expressions**, which use other values that can be simplified into either `True` or `False`. We will learn about **comparison operators** and **logical operators** that are used in boolean expressions.

### Comparison Operators

**Comparison operators** are simply the operators that you use in mathematics when comparing numbers. The simplest examples are `<` for "less than", and `>` for "greater than". Using comparison operators will return a boolean.

Let's try using comparison operators in the shell:
```python
>>> 3 > 2
_____
>>> 100 < 50
_____
>>> 3.5 < 3.05
_____
>>> 3 < 5 < 7
_____
>>> 5 > 5
_____
>>> var1 = 300
>>> var2 = 500
>>> var1 < var2
_____
>>> var1 + var2 > var1 - var2
_____
>>> var1 < var2 > var1 - var2
_____
>>> var1 < var2 > var1 + var2
_____
```

There are also such thing as the `<=` and `>=` operators, which mean "less than or equal to" and "greater than or equal to" respectively.

```python
>>> 3 >= 2
______
>>> 3 >= 3
______
>>> 3 >= 5 - 1
______
>>> -1 <= 5
______
>>> -1 <= -1
______
>>> -1 <= -5 - 3
______
```

Lastly, there are also the `==` and `!=` operator which checks if two values are equal and if two values are not equal respectively.

```python
>>> 3 == 3
______
>>> 3 == -3
______
>>> "stringy" == "stringy"
______
>>> "stringy" == "str"
______
>>> True == True
______
>>> 3 != 0
______
>>> 3 != 3
______
>>> "stringy" != "str"
______
>>> "stringy" != "stringy"
______
>>> True != True
______
```

<b class="important-note">Important Note:</b> Do not confuse yourself between the `=` and `==` operators. The `=` operator is the **assignment operator** which sets a variable to a value; the `==` operator is the **equality operator** which returns `True` if the two values are equal, and `False` otherwise.

#### Examples

This program takes one integer from input and prints `True` if the integer is positive, and `False` otherwise.

```python
a = int(input())
is_positive = a > 0
print(is_positive)
```

This can also be simplified to
```python
a = int(input())
print(a > 0)
```

#### Exercise

Write a program that takes takes two integers and prints `True` if the first integer is **strictly less than** the second integer, and `False` otherwise.

**Sample Input 1**
```
3
4
```

**Sample Output 1**
```
True
```

**Sample Input 2**
```
100
4
```

**Sample Output 2**
```
False
```

### Logical Operators

**Logical Operators** create a boolean value based off of one or more other boolean values. The three logical operators are: `and`, `or`, and `not`. There meanings are pretty straight forward:

- `and`: checks if both values hold True
- `or`: checks if one of the values hold True
- `not`: negates the value

Try out these interactions on the shell:
```python
>>> True and True
______
>>> False and True
______
>>> False and True
______
>>> True and False
______
>>> 3 == 3 and 4 >= 0
______
>>> 9001 > 3000 and 6 < 0
______
>>> "str" == "str" and 5 > 4 and -100 < 0
______
>>> True or True
______
>>> True or False
______
>>> False or True
______
>>> False or False
______
>>> 4 > 3 or 5 > 1000
______
>>> a = 4
>>> a == 5 or a == 4
______
>>> a > 4 or a == 4 or a < 4
______
>>> a > 4 or a < 4
______
>>> not True
______
>>> not False
______
>>> not 3 < 4 < 5
______
>>> not (3 > 4 or 4 < 5)
______
>>> not 3 > 4 or 4 < 5 # "not" takes precedence over "and"/"or"
______
>>> 3 > 2 and not 4 < 99
______
```

<b class="important-note">Important Note:</b> Python's logical operators should not be treated the same way they are used in English. For example, If you want to check for "`a` and `b` are both positive", the Python expression is **not**
```python
a and b > 0
```
Instad, it must be:
```python
a > 0 and b > 0
```

Technically, `a and b > 0` is a valid expression, but it produces rather unexpected results that will not be covered in this lesson. Make sure that both sides of the `and`/`or` operators are boolean expressions.

#### Complex situations

What if you had the expression below?
```python
-7 > 0 and 6 == 6 or "equal" == "equal"
```
People are given two choices: the expression evaluates to one of:
1. `-7 > 0 and (6 == 6 or "equal" == "equal")`, which evaluates to `False`
2. `(-7 > 0 and 6 == 6) or "equal" == "equal"`, which evaluates to `True`

Answer: the first choice. Python's boolean expressions use the following rules:

For any boolean expression `X`,
- `False and X` will always evaluate to `False`, no matter if `X` evaluates to `True` or `False`.
- `True and X` will evaluate to `X`.
- `True or X` will always evaluate to `True`, no matter if `X` evaluates to `True` or `False`.
- `False or X` will evaluate to `X`.

These kinds of situations are rather more difficult to figure out, as many people get these kinds of mistakes and leave them unnoticed. If you want to ensure your intended logic is correct when using multiple logical operators, you are free to use brackets within the expression.

#### Exercise
Use the code snippet below:
```python
a = int(input())
sign = input()
```
Write a program that takes an integer followed by a string as input. We will assume the value of `sign` must be either the string `"P"` or `"N"`. If `sign` is equal to `"P"`, print `True` if the integer is positive, and `False` otherwise; if `sign` is equal to `"N"`, print `True` if the integer is negative, and `False` otherwise. Note that 0 is neither positive nor negative.

**Sample Input 1**
```
30
P
```

**Sample Output 1**
```
True
```

**Sample Input 2**
```
25
N
```

**Sample Output 2**
```
False
```

## Conditional Statements

In the past, you have always written code that simply executes each and every single line of code. However, that may not always be the case; you may want to execute certain lines only if a certain condition passes.

### The `if` statement

We will start learning the `if` statement which, in its simplest form, looks like this

```python
if <condition>:
    <statement(s)>
```

- `<condition>` is a boolean value. Don't forget that a colon (`:`) follows the condition
- `<statement(s)>` is a set of lines you want to execute **only if the above condition holds True**. If the condition holds False, then these statements will be skipped and the program continues on from below. **Note that the statements inside an `if` statement are indented ahead.**

#### Example
This program takes a single integer as input and prints some messages. Notice that an extra line will be printed depending on the integer.

```python
a = int(input())

if a > 1000:
    print("That is a big integer! Decreasing the number...")
    a -= 1000

print("Your number is:", a)
```
**Note:** the last `print` statement at the bottom is **not** indented like the statements just above it. Without this indentation, this means the statement is **outside of the `if` statement**, thus will run no matter if the `if` statement's condition is True or False.

Try running the program above by inputting a large number like `1055`. Then, try running the program again, but this time, input a smaller number like `5`. Compare the difference in output.


<b class="important-note">Important Note:</b> The statements inside an `if` statement must be indented **in a consistent manner**. You may use either spaces or tabs. Most people use one single tab. Either way, you must be consistent about it.

```python
a = int(input())

if a > 1000:
    print("That is a big integer! Decreasing the number...")
      a -= 1000 # This is wrong! The indentation is inconsistent with the line above

print("Your number is:", a)
```

### The `else` statement

The `else` statement allows a section of code to run **if the condition in the above `if` statement holds False**. The syntax looks just like that of an `if` statement, except `if <condition>:` just becomes `else:`.

Try running the code below by inputting a single integer. Compare the results when the input is just `1055` versus `5`.
```python
a = int(input())

if a > 1000:
    print("That is a big integer! Decreasing the number...")
    a -= 1000
else:
    print("That's a better number.")

print("Your number is:", a)
```

### The `elif` statement

`elif` stands for "else if". Such statement requires a condition and tells the program to execute the lines below **only if the condition from the `if`/`elif` statement directly above holds False.**

Try running this code below by inputting a single integer. Compare the results when the input is just `1055` versus `5` versus `-1055`, and understand why the results are given:

```python
a = int(input())

if a > 1000:
    print("That is a big integer! Decreasing the number...")
    a -= 1000
elif a < 1000:
    print("That is a low integer! Increasing the number...")
    a += 1000
else:
    print("That's a better number.")

print("Your number is:", a)
```

You can also have multiple `elif` statements at a time:

Try running this code below by inputting a single integer. Compare the results after inputting `2055` versus `1055` versus `5` versus `-1055` versus `-2055`, and understand why the results are given:

```python
a = int(input())

if a > 2000:
    print("That is a VERY big integer! Decreasing the number...")
    a -= 2000
elif a > 1000:
    print("That is a big integer! Decreasing the number...")
    a -= 1000
elif a < 2000:
    print("That is a VERY low integer! Increasing the number...")
    a += 2000
elif a < 1000:
    print("That is a low integer! Increasing the number...")
    a += 1000
else:
    print("That's a better number.")

print("Your number is:", a)
```

<br>

<b class="self-study">Self-study:</b> What would happen if you switch the order of the `if`/`elif`/`else` statements above and change your code to the code below?
```python
a = int(input())

if a > 1000:
    print("That is a big integer! Decreasing the number...")
    a -= 1000
elif a > 2000:
    print("That is a VERY big integer! Decreasing the number...")
    a -= 2000
elif a < 1000:
    print("That is a low integer! Increasing the number...")
    a += 1000
elif a < 2000:
    print("That is a VERY low integer! Increasing the number...")
    a += 2000
else:
    print("That's a better number.")

print("Your number is:", a)
```
You will notice that no matter what integer you input for the above program, none of the lines below will ever be printed.
  - ```
    That is a VERY big integer! Decreasing the number...
    ```
  - ```
    That is a VERY low integer! Increasing the number...
    ```
Why do you think that is? How does changing the order of conditions affect this program?

<br>

<b class="self-study">Self-study:</b> Consider the two Python programs below:
```python
a = int(input())
if a > 0:
    print("negating to a negative number...")
    a *= -1
elif a > 100:
    print("negating to a positive number...")
    a *= -1
# An else statement is not mandatory following an if or elif statement.

print("The number is:", a)
```

```python
a = int(input())
if a > 0:
    print("negating to a negative number...")
    a *= -1
if a > 100:
    print("negating to a positive number...")
    a *= -1
# An else statement is not mandatory following an if or elif statement.

print("The number is:", a)
```

Notice the very subtle difference between the two programs. Though the difference is subtle in the code, it makes a huge difference when running them. For each program, input a single integer, preferably not `0`, to see the difference. Understand why the results are different.

### Exercises

You may return to [the repl.it course](https://repl.it/student/classrooms/183950). Complete problems 3.1 to 3.O ("3.O" ends with the letter `O`, not the number `0`).


