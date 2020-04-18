<h1>Lesson 0: Introduction and Setup</h1>

<h2>Table of Contents</h2>

- [Introduction](#introduction)
- [About this course](#about-this-course)
- [IDE Setup: Wing 101](#ide-setup-wing-101)
  - [Optional Additional Setup](#optional-additional-setup)
  - [Small tour around Wing 101](#small-tour-around-wing-101)
- [DMOJ: Modern Online Judge](#dmoj-modern-online-judge)

## Introduction

We are currently in the era of extremely rapid technological advancement. Nowadays, you look everywhere, and it looks like everything is technology! Most of these technologies have been **programmed** by someone in order for them to perform their intended tasks.

Because it really seems like "technology is everywhere", some people have argued that everyone should learn programming if such tools are available. This is one of the reasons I have created this website. It offers a beginner's course for people like you to immerse yourself in the tech world by being introduced to programming. Specifically, this course will use **Python**, which is agreed by many programmers as one of the most beginner-friendly programming languages with a very high popularity in the workforce.

## About this course

Again, this course will introduce you to the basics of programming. Python is the programming language used throughout the course, but note that **this course is not focused on learning how to code in Python.** Instead, this will introduce you to the field of programming. Python has so many different major real-world applications such as data science, artificial intelligence, etc., but this course is not very focused on such topics. However, if you do well in this course, learning the real-world applications on your own should be a lot easier.

Do not worry if you have never touched programming before. This course was written with the assumption that you have **little to no prior knowledge of programming**. However, though not required, it is *highly recommended* that you would consider yourself at least decently confident in **mathematics**. If you have strong logical thinking and problem-solving skills, it is likelier that you may excel at becoming a better programmer. On the contrary, poor logical thinking and problem-solving skills may make this course more challenging. Do not expect that this course is simply about reading notes and memorizing them; this course will involve a lot of exercises to train you to become a better programmer.

<b class="important-note"></b> Programming is often challenging. There can be some cases where people take several hours or even days just to solve a simple problem. Therefore, it can get stressful at times to the point that it can damage your health. While learning and practicing, be sure to take frequent breaks.

## IDE Setup: Wing 101

In order to begin your programming journey, you will (of course) require some software installed on your computer. An **integrated development environment (IDE)** is a software used for coding along with many other features in order to aid a programmer. There are many IDE's out there, but if you have no idea which IDE to download, I suggest you use **Wing 101** (see setup links below from University of Waterloo's CS 116 course):

**Warning: the setup guides below will tell you to install Python 3.7.2. Do not do that; instead, install the most recent Python version (e.g. Python 3.8.2 or later). Also, if they mention Dr. Racket, you don't have to know what that is. Just keep reading along.**

- [Setup guide for Windows users](https://www.student.cs.uwaterloo.ca/~cs116/software_install/win_instr)
- [Setup guide for Mac users](https://www.student.cs.uwaterloo.ca/~cs116/software_install/mac_instr)

### Optional Additional Setup

You may or may have not heard of the stereotype that "programmers always use dark theme", meaning whenever programmers use an IDE, they tend to change the colour theme to something darker in order to not burn their eyes as badly. You can optionally do that by following these steps:

1. In Wing 101, Open the menu **Edit -> Preferences**. You should see two dropdown menus titled "Display Language" and "Color Palette", as well as a checkbox labelled "Use Color Palette throughout the UI".
   
   ![Preferences menu](images/00-preferences-setup.PNG)

2. Ensure that the "Use Color Palette throughout the UI" is checked, if it is not already.
3. Click the "Color Palette" dropdown to see a variety of colour themes you can use. Select whichever one you want, then click "Apply". I highly suggest you use a theme with darker colours such as "Dracula", "One Dark", "Positronic", "Solarized - Dark", etc. You can try them out on your own.
4. Click "OK" to close.

### Small tour around Wing 101

So let's start off by taking you through a small exploration of your IDE:

If you followed the setup, you may have ended up with Wing looking like this (Note that the screen below uses the **One Dark** color palette):

![Initial layout](images/00-init.PNG)

- The large area where you wrote `print("Hello, World")` is your **Editor** where you write all your code.
  - The thin vertical line in the middle is not "splitting" that area into two windows: it just serves as a guideline telling you that you are encouraged to not have code pass that line. For now you can ignore it.
- The area at the bottom right is called your **Python Shell** (or simply the *shell*), which is used to interactively evaluate single Python expressions one-by-one.

## DMOJ: Modern Online Judge

As mentioned before, to become a better programmer, you will need to practice. A lot. In these lessons, there will also be links to online exercise problems from an external site called [**DMOJ: Modern Online Judge**](https://dmoj.ca/accounts/register). Create your account on that to allow submissions (make sure you use a real email for verification purposes!).

Once you create an account, you will have access to a very large list of practice problems, ranging from very easy to extremely difficult. Don't worry: throughout the lessons, you will be provided links to the appropriate practice problems.

Let's have a simple example on how to use DMOJ:

1. One of the easiest problems found on DMOJ is called [Hello, World!](https://dmoj.ca/problem/helloworld). Go to that link.
2. Click **Submit solution** on the right side of the page. You should then see a large text area where you can input text.
3. Enter this one single line of code into the text area.
   ```python
   print("Hello, World!")
   ```
   
   <b class="important-note"></b> Make sure that the code you place in that text area is **exactly** as shown above. If it's just a bit off, it may be incorrect.
4. Ensure that the dropdown menu just underneath the text area has **Python 3** in bold, followed by the version (e.g. python3 3.8.2). If it's not, click the dropdown, then select **Python 3**
5. Click **Submit!**
6. If you see a small green checkmark and the test case's status says **AC**, then you did everything correctly. If you see a red X, click the **Resubmit** button, and ensure you completed steps 3 and 4 correctly. If the test case's status says **WA**, it probably means the text `"Hello, World!"` was not exact. If the status is something else like **IR**, it means something else in your code is wrong.