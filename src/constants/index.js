export const LESSON_TITLES = [
    "Introduction and Setup",
    "Variables and Output",
    "Input",
    "Conditional Statements",
    "Functions"
];

export const FUTURE_LESSONS = [
    "Loops",
    "Strings",
    "Lists",
    "Sets and Dictionaries",
    "Classes and Objects"
]


export function doubleDigit(num) {
    num = String(num);
    while(num.length < 2) num = "0" + num;
    return num;
}