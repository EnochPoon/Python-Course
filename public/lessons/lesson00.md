<h1>Lesson 0: Introduction and Setup</h1>

<h2>Table of Contents</h2>

- [Introduction](#introduction)
- [About this course](#about-this-course)
- [Setup](#setup)
  - [Optional Additional Setup](#optional-additional-setup)
- [Small tour around Wing 101](#small-tour-around-wing-101)

## Introduction

We are currently in the era of extremely rapid technological advancement. Nowadays, you look everywhere, and it looks like everything is technology! Most of these technologies have been **programmed** by someone in order for them to perform their intended tasks.

Because it really seems like "technology is everywhere", some people have argued that everyone should learn programming if such tools are available. This is one of the reasons I have created this website. It offers a beginner's course for people like you to immerse yourself in the tech world by being introduced to programming. Specifically, this course will use **Python**, which is agreed by many programmers as one of the most beginner-friendly programming languages with a very high popularity in the workforce.

## About this course

Again, this course will introduce you to the basics of programming. Python is the programming language used throughout the course, but note that **this course is not focused on learning how to code in Python.** Instead, this will introduce you to the field of programming. Python has so many different major real-world applications such as data science, artificial intelligence, etc., but this course is not very focused on such topics. However, if you do well in this course, learning the real-world applications on your own should be a lot easier.

Do not worry if you have never touched programming before. This course was written with the assumption that you have **little to no prior knowledge of programming**. However, though not required, it is *highly recommended* that you would consider yourself confident in **mathematics**. It is likely that if you have strong logical thinking and problem-solving skills, you may excel at becoming a better programmer. On the contrary, poor logical thinking and problem-solving skills may make this course more challenging. Do not expect that this course is simply about reading notes and memorizing them; this course will involve a lot of exercises to train you to become a better programmer.

<b class="important-note"></b> Programming is often challenging. There can be some cases where people take several hours or even days just to solve a simple problem. Therefore, it can get stressful at times to the point that it can damage your health. While learning and practicing, be sure to take frequent breaks.

## Setup

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

## Small tour around Wing 101

So let's start off by taking you through a small exploration of your IDE:

If you followed the setup, you may have ended up with Wing looking like this (Note that the screen below uses the **One Dark** color palette):

![Initial layout](images/00-init.PNG)

- The large area where you wrote `print("Hello, World")` is your **Editor** where you write all your code.
  - The thin vertical line in the middle is not "splitting" that area into two windows: it just serves as a guideline telling you that you are encouraged to not have code pass that line. For now you can ignore it.
- The area at the bottom right is called your **Python Shell** (or simply the *shell*), which is used to interactively evaluate single Python expressions one-by-one.

