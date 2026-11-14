import { dayKey } from './daily.js';

// Day 1 is 14 November 2026 in Europe/Zurich. Repeat after all 60 notes.
export const START_DATE = '2026-11-14';

export const fortunes = [
  {
    title: 'My beloved dear princess...',
    text: "The world is a softer, sweeter place with you in it. I hope today brings you as much happiness as you unknowingly bring into my life."
  },
  {
    title: 'My beloved sunshine...',
    text: "If I could bottle up all the warmth you bring into my days, I would have enough sunlight to last a thousand winters. You have a beautiful way of making everything feel a little brighter."
  },
  {
    title: 'My beloved little star...',
    text: "Even on the darkest nights, the stars never stop shining. I hope you always remember that your light is just as beautiful, even on the days when you cannot see it yourself."
  },
  {
    title: 'My beloved moonlight...',
    text: "There is something magical about the quiet beauty of the moon, and it always makes me think of you. You don't have to do anything extraordinary to be extraordinary to me."
  },
  {
    title: 'My beloved angel...',
    text: "I wish you could borrow my eyes for just a moment. Perhaps then you would understand why even the smallest things about you make me smile."
  },
  {
    title: 'My beloved wildflower...',
    text: "Never change the beautiful, unpredictable way you bloom. The world doesn't need another perfect flower; it needs the wonderful, one-of-a-kind person you already are."
  },
  {
    title: 'My beloved dream girl...',
    text: "Sometimes I catch myself smiling at my phone before I've even finished reading your message. It's funny how someone can make your day better without even being in the same room."
  },
  {
    title: 'My beloved rose...',
    text: "If I could plant a flower for every beautiful thought I've had about you, the world would be covered in gardens. And somehow, none of them would be quite as lovely as you."
  },
  {
    title: 'My beloved little miracle...',
    text: "Of all the unlikely things that could have happened in this enormous world, I'm especially grateful that our paths crossed. Some coincidences become far too beautiful to ever forget."
  },
  {
    title: 'My beloved sweetheart...',
    text: "I hope something wonderfully unexpected makes you smile today. And if nothing does, I hope knowing that someone is thinking of you with a smile will be enough."
  },
  {
    title: 'My beloved northern star...',
    text: "You have this beautiful way of reminding me that the simplest things in life are often the most meaningful. A little laughter, a kind word, and a moment with you can mean more than a thousand grand adventures."
  },
  {
    title: 'My beloved butterfly...',
    text: "I hope you always feel free to chase whatever makes your heart happy. And wherever your wings take you, I hope the world treats you as gently as you deserve."
  },
  {
    title: 'My beloved treasure...',
    text: "The most precious things in life aren't made of gold or diamonds. Sometimes, they're hidden in the laughter of someone special and the little moments you wish would never end."
  },
  {
    title: 'My beloved beautiful soul...',
    text: "There is so much more to your beauty than what the eyes can see. The kindness in your heart and the warmth in your words make you someone truly unforgettable."
  },
  {
    title: 'My beloved morning light...',
    text: "May your morning begin with peace, your afternoon bring a little adventure, and your evening end with a smile. And somewhere between all of that, I hope you think of me for a moment."
  },
  {
    title: 'My beloved little troublemaker...',
    text: "I don't know how you managed to become such a pleasant distraction in my life. But I must admit, having you on my mind is one of my favorite problems."
  },
  {
    title: 'My beloved daydream...',
    text: "Sometimes I imagine us wandering through a beautiful little town, getting lost in its streets and laughing about absolutely nothing. And somehow, those simple imaginary moments already make me happy."
  },
  {
    title: 'My beloved golden hour...',
    text: "Some people are like sunsets: impossible to look at without appreciating how beautiful life can be. You just happen to be my favorite kind of magic."
  },
  {
    title: 'My beloved queen...',
    text: "I hope you never forget how much strength, beauty, and kindness you carry within yourself. You deserve a world that appreciates all three."
  },
  {
    title: 'My beloved little happiness...',
    text: "If happiness were measured in tiny moments, you would be responsible for quite a few of mine. Especially the ones when I catch myself smiling for no obvious reason."
  },
  {
    title: 'My beloved ocean...',
    text: "The more I get to know you, the more beautiful things I discover beneath the surface. And the loveliest part is knowing there is still so much of your wonderful world left to explore."
  },
  {
    title: 'My beloved heart...',
    text: "I don't need every day to be perfect. I just love knowing that somewhere in this world, there is someone like you who makes ordinary days feel special."
  },
  {
    title: 'My beloved little sunshine...',
    text: "I hope today is filled with warm coffee, unexpected laughter, and tiny moments that make your heart happy. You deserve all the little joys this world has to offer."
  },
  {
    title: 'My beloved shooting star...',
    text: "If I had one wish to make tonight, it wouldn't be for something extraordinary. It would simply be for life to give you as much happiness as your presence gives me."
  },
  {
    title: 'My beloved sweet angel...',
    text: "You have no idea how lovely you are in the moments when you're not even trying. Those little, unplanned pieces of you are often my favorites."
  },
  {
    title: 'My beloved adventure...',
    text: "There are a thousand places I would love to explore, but I think the best part would be having you beside me. Even getting completely lost sounds rather wonderful with you."
  },
  {
    title: 'My beloved little flower...',
    text: "I hope you keep growing toward the things that make you happiest. And on days when the world feels cloudy, remember that even flowers need a little rain to bloom."
  },
  {
    title: 'My beloved starlight...',
    text: "Somewhere in this enormous universe, we somehow ended up finding each other. I think that's a rather beautiful thing to be grateful for."
  },
  {
    title: 'My beloved sweet dream...',
    text: "If I could send you anything tonight, it would be the softest blanket of peaceful thoughts and the sweetest dreams imaginable. And perhaps a tiny kiss hidden somewhere between the stars."
  },
  {
    title: 'My beloved favorite person...',
    text: "You could tell me the most ordinary story about your day, and I would still love listening. I think that's what happens when the person speaking is more interesting to you than the story itself."
  },
  {
    title: 'My beloved little spark...',
    text: "You have a wonderful talent for turning the most ordinary moments into something memorable. I wonder if you realize how often you make me smile without even trying."
  },
  {
    title: 'My beloved autumn leaf...',
    text: "There is beauty in every season, but some things make you wish time would slow down. The moments I share with you are certainly among them."
  },
  {
    title: 'My beloved sweet pea...',
    text: "I hope someone makes you laugh so hard today that you forget what you were worrying about. And if that someone happens to be me, I'll consider it a very successful day."
  },
  {
    title: 'My beloved universe...',
    text: "There are countless beautiful things in this world, yet somehow you keep finding your way into my favorite thoughts. Perhaps that's simply what happens when someone becomes special to your heart."
  },
  {
    title: 'My beloved lovely lady...',
    text: "I hope you walk through today knowing that you are appreciated, admired, and wonderfully unique. Not for anything you have to achieve, but simply for the beautiful person you are."
  },
  {
    title: 'My beloved little moon...',
    text: "If the night feels a little too quiet, remember that somewhere beneath the same sky, someone is thinking fondly of you. And wishing he could steal just one more moment in your company."
  },
  {
    title: 'My beloved pretty little chaos...',
    text: "You've somehow managed to make my thoughts a little less organized and my days a lot more interesting. I suppose that's a fair trade for having someone as wonderful as you in my life."
  },
  {
    title: 'My beloved melody...',
    text: "Some songs stay in your head long after the music stops. You have a similar way of staying in my thoughts long after our conversations end."
  },
  {
    title: 'My beloved precious one...',
    text: "I hope life surprises you with beautiful things you never knew to wish for. And I hope you never lose that lovely curiosity that makes you so wonderfully yourself."
  },
  {
    title: 'My beloved little wonder...',
    text: "One of my favorite things about you is the way your eyes light up when you talk about something you love. I could listen to that excitement for hours and never get tired of it."
  },
  {
    title: 'My beloved sweetest distraction...',
    text: "I was planning on being productive today, but then you crossed my mind. Now I'm sitting here smiling like a fool, and I think you owe me a little explanation."
  },
  {
    title: 'My beloved spring blossom...',
    text: "May your days be filled with the kind of happiness that arrives quietly and stays a little longer than expected. Just like the beautiful feeling you bring into my life."
  },
  {
    title: 'My beloved princess of my heart...',
    text: "If I could give you one gift, it would be the ability to see yourself the way I see you. I think you'd discover a thousand little reasons to fall in love with the person you already are."
  },
  {
    title: 'My beloved little dove...',
    text: "I hope you always find peace in the middle of life's busy days. And whenever things feel overwhelming, I hope you remember that you don't have to carry everything alone."
  },
  {
    title: 'My beloved brightest star...',
    text: "You don't need to shine for everyone, every single day. Even when you're tired or quiet, you are still every bit as wonderful to me."
  },
  {
    title: 'My beloved honeybee...',
    text: "I hope your day is filled with sweet little discoveries and adventures that make you smile. And please remember to take a moment to enjoy the flowers along the way."
  },
  {
    title: 'My beloved beautiful mystery...',
    text: "Every time I learn something new about you, I find another reason to admire you. I hope we never run out of stories to tell, questions to ask, and little surprises to discover."
  },
  {
    title: 'My beloved little piece of heaven...',
    text: "If paradise is a place where your heart feels peaceful and your smile comes naturally, then perhaps I've already found a little piece of it whenever I'm with you."
  },
  {
    title: 'My beloved sweet rosebud...',
    text: "I hope you never rush to become anything other than who you are today. Every chapter of your life deserves to be appreciated, even the unfinished ones."
  },
  {
    title: 'My beloved reason to smile...',
    text: "It's remarkable how a few words from you can change the mood of an entire day. You may think you're just sending a message, but sometimes you're sending a little piece of happiness."
  },
  {
    title: 'My beloved little comet...',
    text: "You appeared in my life rather unexpectedly, and somehow made everything a little more exciting. I hope you know that meeting you is a memory I will always be grateful for."
  },
  {
    title: 'My beloved cinnamon heart...',
    text: "I wish I could send you a warm cup of something delicious, a cozy blanket, and a thousand reasons to smile. Since that isn't always possible, I'll send you all my affection wrapped in these few words."
  },
  {
    title: 'My beloved lovely dreamer...',
    text: "Never let the world convince you that your dreams are too big or your imagination too wild. Some of the most beautiful things in life begin with someone daring to imagine them."
  },
  {
    title: 'My beloved evening star...',
    text: "As the day comes to an end, I hope you can leave behind everything that made it difficult. You deserve a peaceful night, beautiful dreams, and the comforting thought that you are deeply cherished."
  },
  {
    title: 'My beloved little enchantress...',
    text: "I'm beginning to suspect you've cast some sort of spell on me. How else could you explain the fact that even the smallest thought of you makes me smile?"
  },
  {
    title: 'My beloved secret wish...',
    text: "If you knew how often I find myself hoping that something wonderful happens to you, you might laugh at me. But making wishes for your happiness has become one of my favorite little habits."
  },
  {
    title: 'My beloved gentle soul...',
    text: "Please don't forget to offer yourself the same kindness you so easily give to others. Your heart deserves to be cared for just as beautifully as it cares for the world."
  },
  {
    title: 'My beloved little piece of magic...',
    text: "Not all magic comes from fairy tales or impossible things. Sometimes, it simply looks like meeting a person who makes life feel a little more wonderful."
  },
  {
    title: 'My beloved future adventure...',
    text: "I hope there are countless sunsets, spontaneous trips, late-night conversations, and ridiculous little memories waiting for us. The thought of discovering them with you makes tomorrow feel especially exciting."
  },
  {
    title: 'My beloved one and only...',
    text: "Of all the wonderful things life has brought my way, getting to know you is something I treasure deeply. And if tomorrow gives me another chance to make you smile, I will consider myself a very lucky man."
  }
];

export function dailyFortune(date = new Date()) {
  const day = Date.parse(`${dayKey(date)}T00:00:00Z`);
  const start = Date.parse(`${START_DATE}T00:00:00Z`);
  const elapsedDays = Math.max(0, Math.floor((day - start) / 86400000));
  return fortunes[elapsedDays % fortunes.length];
}
