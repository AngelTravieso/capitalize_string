

// Write a function that accepts a string. The function should capitalize the first letter of each word in the string then return the capitalized string.

// Examples:

// fn("slow down.") === "Slow Down."

// fn("move fast!") === "Move Fast!"


const capitalizeString = (string) => {

    return string
        .split(' ')
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(' ');
}


console.log(capitalizeString('Angel Travieso'));