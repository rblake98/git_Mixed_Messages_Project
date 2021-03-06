// Project that will output random messages when it runs.
const mixedMessages = () => {
// Insirational quotations that will be randomized.
let inspirationalMessages = ['"The Best Way To Get Started Is To Quit Talking And Begin Doing." – Walt Disney', '“Don’t Let Yesterday Take Up Too Much Of Today.” – Will Rogers', 
'“You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.”', '“It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.” – Inspirational Quote By Vince Lombardi', '“If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.” – Steve Jobs',
'“People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.” – Rob Siltanen', '“Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.” – Og Mandino'];
// greeting messages.
let greetingMessage = ['Hello!', 'Good to see you Again!', 'Hey There!', 'Its so good to see you again!'];
// random message function.
const generateRandMessage = arr1 => {
        return Math.floor(Math.random() * arr1.length);
}
    
const randomGreeting = greetingMessage[generateRandMessage(greetingMessage)];
console.log(randomGreeting);

const randomInspiration = inspirationalMessages[generateRandMessage(inspirationalMessages)];
console.log(randomInspiration);

};
// function call.
mixedMessages();


