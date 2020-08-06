const tools = require('../tools');

module.exports = {
       name: 'kill',
    aliases: ['murder'],
    description: 'kill a user',
    usage: '-kill @user',
    args: true,
    cooldown: 2,
    minArgs: 0,
    maxArgs: 2,
    async execute(message, args) {
        try {
            //use the given text as the target, or your mention if nothing was given
          let target;
            if (args.length) {target = args.join(' ')}
            else {target = message.author;};

            //select a random message from the list...
            const messages = [
          '${author} slips bleach into ${target}\'s lemonade.',
        '${target} dies of natural causes.',
        '${target} dies from bad succ.',
        '${target} dies from dabbing too hard.',
        '${target} dies from posting normie memes.',
        '${target} dies from disrespecting wahmen.',
        '${target} dies from watching the emoji movie and enjoying it.',
        '${author} hired me to kill you, but I don\'t want to! ${target}',
        '${target} slips on a banana peel and falls down the stairs.',
        '${author} murders ${target} with an axe.',
        '${author} pressed delete. It deleted ${target}',
        '${target} dies because they used a bobby pin to lift their eyelashes',
        '${target} dies because they were just too angry.',
        '${target} decided it was a good idea to fight a tiger while smelling like meat. It did not end well.',
        '${target} disappeared from the universe.',
        '${target} drank some toxic soda before it was recalled.',
        '${target} was killed by ${author} with baby wipes.',
        '${target} dies in a horrible accident, and it was engineered by ${author}.',
        '${target} dies of starvation.',
        '${author} decapitates ${target} with a sword.',
        '${author} challenges ${target} to a fist fight to the death. ${target} wins.',
        'Sorry, ${author}, I don\'t like killing people.',
        '${target} dies after swallowing a toothpick.',
        '${target} was murdered by ${author} and everyone knows it, but there is no proof.',
        '${author} kills ${target} after hours of torture.',
        '${target} dies on death row via lethal injection after murdering ${author} and their family.',
        '${target} vocally opposed the Clintons and then suddenly disappeared.',
        '${author} shoots ${target} in the head.',
        '${author}, are you sure you want to kill ${target}? They seem nice to me.',
        '${target} lives, despite ${author}\'s murder attempt.',
        '${target} gets hit by a car.',
        '${target} gets struck by lightning.',
        '${target} reads memes till they die.',
        '${target} dies at the hands of ${author}.',
        '${target} has some bad chinese food, and pays the ultimate price.',
        '${target} chokes on cheerios and dies. What an idiot...',
        '${target} is killed by their own stupidity.',
        '${target} is killed in a robbery gone wrong.',
        '${target} is dead at the hands of ${author}.',
        '${target} can\'t be killed, as they are a ghost.',
        '${target} gets stabbed by ${author}',
        'In a sudden turn of events, I **don\'t** kill ${target}.',
        '${target} kills themselves after realizing how dumb ${author} is.',
        '${target} bleeds out after trying to get on \'Dumbest hillbilly moments\'.',
        '${target} is not able to be killed. Oh, wait, no, ${author} kills them anyway.',
        '${author} strangles ${target}.',
        'After getting pushed into the ocean by ${author}, ${target} is eaten by a shark.',
        '${target} dies.', 'After a struggle, ${target} kills ${author}',
        '${target} is abducted by aliens, and the government kills them to cover it up.',
        '${target} got stepped on by an elephant.', '${target} died from eating too much ass.',
        '${target} died from shitting for 36 hours straight.',
        '${target} is so dumb that they choked on oxygen.',
        '${target} died from not eating enough ass.',
        '${target} died from doing the ice bucket challenge.',
        '${target} died from eating too much ass.',
        'The bullet missed Harambe and hit ${target} instead. Yay for Harambe!',
        'Aids, ${target} died from aids.',
        '${target} died because RemindMeBot forgot to remind them to breathe',
        '${target} died due to eating WAY too many hotdogs in preparation for their date Friday night.',
        '${target} got into a knife fight with the pope. One of them is in hell now.',
        '${target} died from swallowing rocks too fast',
        '${target} accidentally clicked on a popup ad that reads \'Doctors hate us, see the one best trick for dying today!\'',
        '${target} died from ebola.',
        '${target} fell into a pit of angry feminists.',
        '${target} died from drinking too much water Huh, I guess it IS possible!.',
        '${target} died while playing hopscotch on *seemingly* deactivated land mines.',
        '${target} ripped their own heart out to show their love for ${author}.',
        '${target} died from too many sunburns.',
        '${target} died from a swift kick to the brain.',
        '${target} was eaten alive by ants',
        '${target} died after gaming for 90 hours straight without moving or eating.',
        '${target} tried to outrun a train, the train won.',
        '${target} killed themselves after seeing the normie memes that ${author} posts.',
        'After raid of roblox kids entered the server, ${target} died of cancer.',
        '${target} talked back to mods and got destroyed by the ban hammer.',
        '${target} cums in eye, goes blind, runs for help but ran straight onto train tracks and gets plowed by a train.',
        '${target} bought a fidget spinner and drowned in pussy.',
        '${target} died after trying to out-meme Dank Memer.',
        '${target} died from eating too much bread :/',
        '${target} died an honorable death. Death by snoo snoo.',
        '${target} tried to get famous on YouTube by live-streaming something dumb. Skydiving while chained to a fridge.',
        '${target} was walking normally when out of the corner of their eye they saw someone do a bottle flip and dab causing ${target} to have a stroke.',
        '${target} died from eating cactus needles.',
        '${target} died after playing with an edgy razor blade fidget spinner.',
        '${target} died because they started playing with a fidget spinner but they realise its 2016 so you start fapping to the old witch in snow white and obama starts mowing their lawn and they jump out of the window and get ripped to pieces by Obama\'s lawn mower',
        '${target} ate too many laxatives and drowned in their own shit. Ew.',
        '${target} drowned in their own tears.',
        '${target} died eating expired and infected raw fish with the filthiest rice in the world as sushi while being constantly stabbed in the scrotum with a 9inch nail sharp enough to stab through kevlar. The soy sauce was cat piss.',
        '${target} died of oversucc',
        '${target} accidentally tripped and died while getting up to write their suicide note.',
        '${target} died from whacking it too much. (There\'s a healthy balance, boys)',
        '${target} died from not whacking it enough. (There\'s a healthy balance, boys)',
        '${author} kills ${target} with their own foot.',
        '${target} dies due to lack of friends.',
        '${target} chokes on a chicken bone.',
        '${target} went on a ride with a lead balloon.',
        '${target} did not make a meme dank enough and was stoned.',
        'Our lord and savior Gaben strikes ${target} with a lighting bolt.',
        '${author} tries to shoot the broad side of a barn, misses and hits ${target} instead.',
        '${target} slipped in the bathroom and choked on the shower curtain.',
        'While performing colonoscopy on an elephant, ${target} gets their head stuck in the elephants rectum and chokes.',
        '${author} attempted to play a flute, exploding the head of ${target}.',
        '${author} straps ${target} to an ICBM and sends them to North Korea along with it.',
        '${author} drowns ${target} in a beer barrel.',
        '${target} was thrown in the crusher of a trash truck by ${author}.',
        '${target} dropped a Nokia phone on their face and split their skull.',
        '${author} cleaves the head of ${target} with a keyboard.',
        '${author} crushes ${target} with a fridge.',
        '${target} chokes in a trash can.',
        '${author} fires a supersonic frozen turkey at ${target}, killing them instantly.',
        '${target} watched the Emoji Movie and died of sheer cringe.',
        '${author} shoots in ${target} mouth with rainbow laser, causing ${target} head to explode with rainbows and ${target} is reborn as unicorn. :unicorn:',
        '${target} ate a piece of exotic butter. It was so amazing that it killed them.',
        '${target} is stuffed into a suit by Freddy on their night guard duty. Oh, not those animatronics again!',
        '${author} grabs ${target} and shoves them into an auto-freeze machine with some juice and sets the temperature to 100 Kelvin, creating human ice pops.',
        '${author} drowns ${target} in a tub of hot chocolate. *How was your last drink?*',
        '${target} screams in terror as they accidentally spawn in the cthulhu while uttering random latin words. Cthulhu grabs ${target} by the right leg and takes them to his dimension yelling, \'Honey, Dinner\'s ready!\'',
        '${author} feeds toothpaste-filled oreos to ${target}, who were apparently allergic to fluorine. GGWP.',
        '${author} forgot to zombie-proof ${target} lawn... Looks like zombies had a feast last night.',
        '${target} cranks up the music system only to realize the volume was at max and the song playing was Baby by Justin Beiber...',
        '${target} presses a random button and is teleported to the height of 100m, allowing them to fall to their inevitable death. Moral of the story: Don\'t go around pressing random buttons.',
        '${target} is injected with chocolate syrup, which mutates them into a person made out of chocolate. While doing a part-time job at the Daycare, they are devoured by the hungry babies. :chocolate_bar:',
        '${target} is sucked into Minecraft. ${target}, being a noob at the so called Real-Life Minecraft faces the Game Over screen.',
        '${author} turns on Goosebumps(2015 film) on the TV. ${target} being a scaredy-cat, dies of an heart attack.',
        '${author} after a long day, plops down on the couch with ${target} and turns on The Big Bang Theory. After a Sheldon Cooper joke, ${target} laughs uncontrollably as they die.',
        '${target} was given a chance to synthesize element 119 (Ununennium) and have it named after them, but they messed up. R.I.P.',
        '${author} gets ${target} to watch anime with them. ${target} couldn\'t handle it.',
        '${target} tried to get crafty, but they accidentally cut themselves with the scissors.:scissors:',
        '${target} goes genocide and Sans totally dunks ${target}!',
        '${author} was so swag that ${target} died due to it. #Swag',
        '${target} has been found guilty, time for their execution!',
        '${target} fell down a cliff while playing Pokemon Go. Good job on keeping your nose in that puny phone. :iphone:',
        '${author} strikes ${target} with the killing curse... *Avada Kedavra!*',
        '${target} ate an apple and turned out it was made out of wax. Someone died from wax poisoning later that day.',
        '${target} was teleported to the timeline where Jurassic World was real and they were eaten alive by the Indominus Rex.',
        '${target} was charging their Samsung Galaxy Note 7...',
        '${author} shot ${target} using the Starkiller Base!',
        '${target} was a resident of Alderaan before Darth Vader destroyed the planet...',
        '${target} was scooped by ${author} and their innards are now Ennard.',
        '${author} Alt+F4\'d ${target}.exe!',
        '${target} was accused of stealing Neptune\'s crown...',
        '${author} eviscerates ${target} with a rusty butter knife. Ouch!',
        '${author} pushes ${target} into the cold vacuum of space.',
        '${author} runs ${target} over with a PT Cruiser.',
        '${target} trips over his own shoe laces and dies.',
        '${target} tried to pick out the holy grail. He chose... poorly.',
        '${author} hulk smashes ${target} into a pulp.',
        '${target} steps on a george foreman and dies of waffle foot.',
        '${target} dies from just being a bad, un-likeable dude.',
        'Calling upon the divine powers, ${author} smites ${target} and their heathen ways',
        '${target} has a stroke after a sad miserable existence. They are then devoured by their ample cats.',
        '${target} takes an arrow to the knee. And everywhere else.',
        '${target} dies of dysentery.',
        '${target} dies of AIDS.',
        '${author} killed ${target} by ripping the skin off of their face and making a mask out of it.',
        '${target} spins a fidget spinner and when it stops he dies...',
        '${target} ripped his heart out..',
        '${author} fell in love with ${target} then broke his heart literally.',
        '${author} blew his ear drums out listening to music too hard.',
        '${author} hugs ${target} too hard..',
        '${author} tears off ${target}s lips after a kiss.',
        '${author} drags ${target}s ears too hard and rips them off.',
        '${target} tried to play in the street...',
        '${target} is killed by a rabbit with a vicious streak a mile wide',
        '${author} forgot to leave the car door window open and ${target} dies from overheating',
        '${target} dies, but don\'t let this distract you from the fact that in 1998, The Undertaker threw Mankind off Hell In A Cell, and plummeted 16 ft through an announcer’s table',
        '${target} tips his fedora too far and falls onto the tracks of an oncoming subway.',
        '${target} eats too much copypasta and explodes',
        '${author} kills ${target} with kindness',
        'no u',
        '${author} kills ${target} with a candlestick in the study',
        '${target} dies north of the wall and transforms into a white walker',
        '${author} thicc and collapses ${target}\'s rib cage',
        '${target} loses the will to live',
        '${target} dies from dabbing too hard',
        '${target} died from a tragic amount of bad succ',
        '${target} dies by swearing on a Christian Minecraft server',
        '${target} died. OOF',
        '${target} died while listening to \'It\'s every day bro',
        '${target} died while trying to find the city of England',
        '${target} died from a high salt intake',
        '${target} died due to ${author} being so stupid',
        '${target} died from reposting in the wrong neighborhood',
        '${target} died when testing a hydrogen bomb. There is nothing left to bury.',
        '${target} died from meme underdose :/',
        '${target} died after realizing how shitty their grammar was',
        '${target} died after fapping 50 times in a row with no break.',
        '${target} dies from severe dislike of sand. It\'s coarse and rough and irritating it gets everywhere'
        
                //add your own messages here or suggest them: https://discord.gg/bRTPbpg
            ]
            const killMsg = messages[Math.floor(Math.random() * messages.length)];

            //create an embed for the kill message
            const embed = tools.makeEmbed('', '')
            .setDescription(killMsg);
            tools.sendEmbed(message.channel, embed);
        } catch (err) {
            return tools.errorMessage(message, err);
        }
    },
};
