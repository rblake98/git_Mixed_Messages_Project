// Project that will output 3 random messages when it runs.

const inspirationalMessages = [];

const greetingMessage = ['Hello!', 'Good to see you Again!', 'Hey There!'];

const generateRandMessage = (arr1) => {
        return Math.floor(Math.random() * arr1.length);
    }


console.log(generateRandMessage(greetingMessage));
console.log(greetingMessage);




