const randomStrings = [
  "YOU ARE NOW Deo's L\2OVE-PUPPY",
       "mrwitzbold was here!",
       "mrwitzbold was here!",
       "mrwitzbold was here!",
       "mrwitzbold was here!",
       "mrwitzbold was here!!",
       "mrwitzbold was here!",
       "Meow.",
       "mrwitzbold was here!",
       "1x1x1x1 Was Not Here",
       "mrwitzbold was here!",
       "mrwitzbold was here!",
       "Oh, let's blow some things up!",
       "mrwitzbold was here!",
       "Eat my shirt!",
       "No shirt, no shoes, no torso, no service.",
       "You got owned, bi-yatch.",
       "I heard you like hacks. Me too! Wow, we have so much in common! Want to go out some time?",
       "The Aperture Science Weighted Companion Cube will not stab you, and cannot speak.",
       "Please wait while I warm up the neurotoxins...",
       "Goodbye my only friend... / Wait, did you think I meant you? / That would be funny, / if it weren't so sad.",
       "Yousa gonna dia!",
       "THIS IS SPART- ERR I MEAN DEO!",
       "mrwitzbold flashes!",
       "mrwitzbold flashes!",
       "I'm wild for leo.",
       "HURR DURR.",
       "DURR.",
       "HURR.",
       "I'll kick your puppy!",
       "Oh lawdy...",
       "What have I done?!",
       ":3",
       "Who's the noob? You are, hurr.",
       "Deo l\2oves you with hate.",
       "Deo would like to take this moment to tell you how much he hates you.",
       "Deo is your new and old God.",
       "Deo is the cake.",
       "Telamon is mad you took his chicken.",
       "LEROOOOOOOOOOOOOOY JENKIIIIIIIIIIIIIIIIIIIIIIINS",
       "Clockwork was never de-admined D;",
       "We all have hearts of gold! Excuse me while I shatter said gold into pieces.",
       "I shot Santa. Christmas is canceled.",
       "I eat children.",
       "Don't be surprised if the world ends. That's just my way of saying hello.",
       "I'M GOING TO SM\2OKE A LOT OF CR\2ACK.",
       "Life is wonderful. Without it we'd all be dead.",
       "Daddy, why doesn't this magnet pick up this floppy disk?",
       "Give me ambiguity or give me something else.",
       "I.R.S.: We've got what it takes to take what you've got!",
       "We are born naked, wet and hungry. Then things get worse.",
       "Make it idiot proof and someone will make a better idiot.",
       "He who laughs last thinks slowest!",
       "Always remember you're unique, just like everyone else.",
       "\"More hay, Trigger?\" \"No thanks, Roy, I'm stuffed!\"",
       "A flashlight is a case for holding dead batteries.",
       "Lottery: A tax on people who are bad at math.",
       "Error, no keyboard - press F1 to continue.",
       "There's too much blood in my caffeine system.",
       "Artificial Intelligence usually beats real stupidity.",
       "Hard work has a future payoff. Laziness pays off now.",
       "\"Very funny, Scotty. Now beam down my clothes.\"",
       "Puritanism: The haunting fear that someone, somewhere may be happy.",
       "Consciousness: that annoying time between naps.",
       "Don't take life too seriously, you won't get out alive.",
       "I don't suffer from insanity. I enjoy every minute of it.",
       "Better to understand a little than to misunderstand a lot.",
       "The gene pool could use a little chlorine.",
       "When there's a will, I want to be in it.",
       "Okay, who put a \"stop payment\" on my reality check?",
       "We have enough youth, how about a fountain of SMART?",
       "Programming is an art form that fights back.",
       "\"Daddy, what does FORMATTING DRIVE C mean?\"",
       "All wiyht. Rho sritched mg kegtops awound?",
       "My mail reader can beat up your mail reader.",
       "Never forget: 2 + 2 = 5 for extremely large values of 2.",
       "Nobody has ever, ever, EVER learned all of WordPerfect.",
       "To define recursion, we must first define recursion.",
       "Good programming is 99% sweat and 1% coffee.",
       "Home is where you hang your @",
       "The E-mail of the species is more deadly than the mail.",
       "A journey of a thousand sites begins with a single click.",
       "You can't teach a new mouse old clicks.",
       "Great groups from little icons grow.",
       "Speak softly and carry a cellular phone.",
       "C:\\ is the root of all directories.",
       "Don't put all your hypes in one home page.",
       "Pentium wise; pen and paper foolish.",
       "The modem is the message.",
       "Too many clicks spoil the browse.",
       "The geek shall inherit the earth.",
       "A chat has nine lives.",
       "Don't byte off more than you can view.",
       "Fax is stranger than fiction.",
       "What boots up must come down.",
       "Windows will never cease.   (ed. oh sure...)",
       "In Gates we trust.    (ed.  yeah right....)",
       "Virtual reality is its own reward.",
       "Modulation in all things.",
       "A user and his leisure time are soon parted.",
       "There's no place like http://www.home.com",
       "Know what to expect before you connect.",
       "Oh, what a tangled website we weave when first we practice.",
       "Speed thrills.",
       "Give a man a fish and you feed him for a day; teach him to use the Net and he won't bother you for weeks."
];

function getRandomString() {
  const randomIndex = Math.floor(Math.random() * randomStrings.length);
  return randomStrings[randomIndex];
}

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function obtainrobux() {
    var robuxInput = document.getElementById('robuxInput').value;
    var jokesContainer = document.getElementById('jokesContainer');
    jokesContainer.innerHTML = ''; // Clear previous jokes
    var count = 0;
    var count_ten = 0;

    while (count != Number(robuxInput)) {
        count += 1;
        count_ten += 1;
        var joke = document.createElement('p');
        joke.style.color = getRandomColor();
        joke.textContent = 'Obtaining ' + count + ' robux';
        jokesContainer.appendChild(joke);

        await wait(Math.random() * 0.1 * 1000);

        if (count_ten == 10) {
            jokesContainer.innerHTML = '';
            count_ten = 0; // Reset count_ten after clearing
			var lolzElement = document.getElementById('lolz');
			if (lolzElement)
			{
				lolzElement.textContent = getRandomString();
			} 
			else
			{
				console.error('Element with id "lolz" not found.');
			}
        }
    }

    // Add a final message after completing the loop
    var finalMessage = document.createElement('p');
    finalMessage.style.color = getRandomColor();
    finalMessage.textContent = 'Obtained ' + robuxInput;
    jokesContainer.appendChild(finalMessage);
	
	var finalMessage = document.createElement('p');
    finalMessage.style.color = getRandomColor();
    finalMessage.textContent = ':)';
    jokesContainer.appendChild(finalMessage);
}

function getRandomColor() {
    var colors = ['green', 'red', 'purple'];
    var randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}