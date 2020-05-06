<h1>Lesson 6: Strings</h1>

<h2>Table of Contents</h2>

- [Introduction](#introduction)
- [String Multiplication](#string-multiplication)
- [The `len` function](#the-len-function)
- [String Indexing](#string-indexing)
  - [Negative Indexing](#negative-indexing)
  - [String slices](#string-slices)
  - [Online Exercises](#online-exercises)
- [Usage in `for` loops](#usage-in-for-loops)
  - [Example 1](#example-1)
  - [Example 2](#example-2)
  - [Online Exercises](#online-exercises-1)
- [The `in` keyword with strings](#the-in-keyword-with-strings)
  - [Example](#example)
- [String Methods](#string-methods)
- [Online Exercises](#online-exercises-2)

## Introduction

From the previous lessons, you should already know the basic idea of a *string*, which is just a sequence of characters such as `'Hello, world'`, `"double-quoted"`, etc. In this lesson, we will learn more on what Python has to offer with strings.

## String Multiplication

A string can be **multiplied** by an integer to get that string repeated:

```python
>>> "hello" * 4
______
>>> 2 * "hello"
______
>>> "hello" * 1
______
>>> "bedmas" * 2 + 3 * "applies"
______
```

## The `len` function

Python's built-in function `len(s)` can take a string `s` and returns the number of characters in the string.

```python
>>> len('hello')
______
>>> len('hello ' + 'world')
______
>>> s = 'pizza pockets'
>>> len(s)
______
```

## String Indexing

In Python, a **character** `c` is basically a string with only one element. In other words, `len(c)` is equal to 1.

You can get a character at a specified *index* (or *position*) using the square bracket notation below, where `s` is a string, and `x` is an integer.

```python
s[x]
```

<b class="important-note"></b> For any string `s`, the first character has index 0, **not** 1. Likewise, the second character has index 1, and so on. The last character of a string has index `len(s)-1`, **not** `len(s)`.

```python
>>> s = "python"
>>> s[0]
_______
>>> s[1]
_______
>>> s[2]
_______
>>> s[len(s) - 1]
_______
>>> s[len(s)]
ERROR
>>> spelling_fail = s[2] + s[1] + s[0] + s[4]
>>> spelling_fail
_______
```

<b class="important-note"></b> Though you are allowed to **access** a character at a specified index of a string, you **cannot modify** that character using the square bracket notation above. In other words, this will cause an **error**:

```python
>>> s = "python"
>>> s[1] = "a"
ERROR
```

### Negative Indexing

Python has a nice feature of negative indexing: if the integer inside the square brackets is negative, then we get the character at the index **starting from the end of the string**.

```python
>>> s = 'abcdefg'
>>> s[-1]
_______
>>> s[-2]
_______
>>> s[-3]
_______
```


### String slices

To get a *portion* (or *slice*) of a string (also known as a *substring*), you can use the slicing notation. This takes two integers `a` and `b` inside the square brackets like in the syntax below:

```python
s[a:b]
```

This returns the characters in the string from index `a` **inclusive** to index `b` **exclusive**.

```python
>>> s = 'abcdefg'
>>> s[1:4]
______
>>> s[0:3]
______
>>> s[4:5]
______
>>> s[1:-1]
______
```

<b class="self-study"></b> Try the following interactions, and see if you can understand what is happening:

```python
>>> s = 'abcdefg'
>>> s[2:]
______
>>> s[:5]
______
>>> s[2:2]
______
>>> s[-2:]
______
>>> s[:]
______
>>> s[1:len(s)]
______
>>> s[1:10000000]
______
>>> s[5:3]
______
>>> s[1:6:2]
______
```

### Online Exercises

From CodingBat:

- [make_out_word](https://codingbat.com/prob/p129981)
- [without_end](https://codingbat.com/prob/p138533)

From DMOJ:

- [French Homework](https://dmoj.ca/problem/dmopc14ce1p1)


## Usage in `for` loops

### Example 1

Here is a way you can print each character in a string, one per line:

```python
s = "example string"

for i in range(len(s)):
    print(s[i])
```

An alternative way to do this is by using a `for` loop that iterates through each **character** in the string instead of each number in a range:

```python
s = "example string"

for c in s:
    # c is not a number; c is a character in the string s
    print(c)
```

<b class="important-note"></b> Just because you tink you are required to iterate through each character in a string, does not mean you should simply use the `for c in s` version of a `for` loop. Sometimes, what also matters is the **index** of the character, in which you should use the `for i in range(len(s))` version instead. It is up for you to determine when you should use which loop.

### Example 2

This program takes a string from input and returns the number of lowercase letter `e`'s found in the string:

```python
s = input() # Not int(input()), as we're reading the input as a string this time
count_e = 0
for c in s:
    if c == 'e':
        count_e += 1
print("There are", count_e, "occurrences of e")
```

**Sample Input**

```
hello everyone
```

**Sample Output**

```
There are 4 occurrences of e
```

### Online Exercises

From CodingBat:

- [double_char](https://codingbat.com/prob/p170842)
- [count_hi](https://codingbat.com/prob/p167246)
- [cat_dog](https://codingbat.com/prob/p164876)
- [string_splosion](https://codingbat.com/prob/p118366)
- [count_code](https://codingbat.com/prob/p186048)
- [string_match](https://codingbat.com/prob/p182414)

From DMOJ:

- [Vote Count](https://dmoj.ca/problem/ccc14j2)
- [English or French?](https://dmoj.ca/problem/ccc11s1)
- [Occupy Parking](https://dmoj.ca/problem/ccc18j2)
- [Ljesnjak](https://dmoj.ca/problem/coci08c5p1)

## The `in` keyword with strings

No, we're not talking about the `in` keyword you add when creating `for` loops. Here, you can also use the `in` keyword to see if a substring exists inside of a string. This also includes single characters.

```python
>>> 'h' in 'hello'
_______
>>> 'x' in 'hello'
_______
>>> 'exist' in 'a word exists'
_______
```

Notice that using the `in` keyword like this returns a boolean. Therefore, you are also allowed to use them as conditions for `while` loops and `if`/`elif` statements:

### Example

This simple program takes two strings from input and displays a corresponding message if the first string is a substring in the second string:

```python
s1 = input()
s2 = input()

if s1 in s2:
  print(s1, "is a substring of", s2)
else:
  print(s1, "is not a substring of", s2)
```

To negate the `in` keyword, you can either use:
```python
not s1 in s2
```
or

```python
s1 not in s2
```

## String Methods

A **method** is basically a function that is owned by a certain object. You will learn more about how to create methods for objects in a later lesson. For now, we will just learn about string methods.

Given a string `s`, to call a method, use the syntax below:

```python
s.method_name(...parameters)
```

Let's learn a few examples of string methods that are offered in Python. Note that the list of methods below are not all of the string methods. There are way more, but these are the ones you are most likely to use.

Given a string `s`:

- `s.endswith(suffix)` takes a string `suffix` and returns `True` if `s` ends with the suffix, and `False` otherwise.
  
  ```python
  >>> s = 'blueberry pie'
  >>> s.endswith('pie')
  ______
  >>> s.endswith('blue')
  ______
  >>> s.endswith('lie')
  ______
  ```

- `s.startswith(prefix)` takes a string `prefix` and returns `True` if `s` begins with the prefix, and `False` otherwise.
  
  ```python
  >>> s = 'apple pie'
  >>> s.startswith('apple')
  ______
  >>> s.startswith('a')
  ______
  >>> s.startswith('blueberry')
  ______
  >>> s.startswith('appo')
  ______
  ```

- `s.find(sub)` takes a string `sub` and returns a natural number: the lowest index in the string where `sub` is found. Note that the index returned indicates the index of the first character. If `sub` is not found, then this method returns -1.
  
  ```python
  >>> s = 'apple pie'
  >>> s.find('pie')
  ______
  >>> s.find('cake')
  ______
  >>> s.find('a')
  ______
  >>> s.find('p')
  ______
  ```
- `s.rfind(sub)` is like `s.find()`, but instead returns the **highest** index in the string where `sub` is found.
- `s.isalnum()` returns `True` if all the characters in the string are alphanumeric (either alphabetic or numerical) and the string has a length of at least 1, otherwise `False`.
  
  ```python
  >>> s = 'noobmaster69'
  >>> s.isalnum()
  ______
  >>> s = 'space is not alphanumeric'
  >>> s.isalnum()
  ______
  >>> s = '?/%$# funny characters'
  >>> s.isalnum()
  ______
  >>> s = 'e'
  >>> s.isalnum()
  ______
  ```

- `s.isalpha()` returns `True` if all the characters in the string are strictly alphabetic and the string has a length of at least 1, otherwise `False`.
- `s.isnumeric()` returns `True` if all the characters in the string are strictly numeric and the string has a length of at least 1, otherwise `False`. Note that the decimal point `.` is not a numeric character. Note that if this method returns `True`, then it is safe to get an integer representation of `s` using `int(s)`.
- `s.isupper()` returns `True` if the string has no lowercase letters and has at least one letter, otherwise `False`. Note that this does not mean it returns `True` if every single character is an uppercase letter.
  
  ```python
  >>> s = 'ALLUPPERCASE'
  >>> s.isupper()
  _______
  >>> s = 'UPPERCASE WITH SPACE??'
  >>> s.isupper()
  _______
  >>> s = 'mOcKiNg SpOnGeBoB'
  >>> s.isupper()
  _______
  >>> s = 'a'
  >>> s.isupper()
  _______
  >>> s = '...'
  >>> s.isupper()
  _______
  ```

- `s.islower()` returns `True` if the string has no uppercase letters and has at least one letter, otherwise `False`.
- `s.upper()` returns a new string where all the lowercase letters in `s` are changed to uppercase. Note that `s` can also include non-alphabetical characters.
- `s.lower()` returns a new string where all the uppercase letters in `s` are changed to lowercase. Note that `s` can also include non-alphabetical characters.

[**Click here for the complete list of string methods**](https://docs.python.org/3/library/stdtypes.html#string-methods)

## Online Exercises

- [Harambe](https://dmoj.ca/problem/bts16p1)
- [Mocking Spongebob](https://dmoj.ca/problem/mockingspongebob)
- [AmeriCanadian](https://dmoj.ca/problem/ccc02j2)
- [Password Strength (Warning: very difficult)](https://dmoj.ca/problem/ecoo12r2p2)