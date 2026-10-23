"use client";

import { useState } from "react";

const BHAGAVAD_GITA_QUOTES = [
  {
    quote:
      "You have a right to perform your prescribed duty, but you are not entitled to the fruits of action.",
    chapter: "CHAPTER 2, VERSE 47",
  },
  {
    quote: "Man is made by his belief. As he believes, so he is.",
    chapter: "CHAPTER 17, VERSE 3",
  },
  {
    quote:
      "The mind is restless, turbulent, obstinate and very strong. But it can be mastered through persistent practice and detachment.",
    chapter: "CHAPTER 6, VERSE 35",
  },
  {
    quote:
      "A person can rise through the efforts of their own mind, or draw themselves down. For each person is their own friend or their own enemy.",
    chapter: "CHAPTER 6, VERSE 5",
  },
  {
    quote:
      "When meditation is mastered, the mind is unwavering like the flame of a lamp in a windless place.",
    chapter: "CHAPTER 6, VERSE 19",
  },
  {
    quote:
      "Perform your duty with an equanimous mind, abandoning all attachment to success or failure. Such equanimity is called Yoga.",
    chapter: "CHAPTER 2, VERSE 48",
  },
  {
    quote:
      "Set your heart upon your work, but never on its reward. Work not for a reward, but never cease to do your work.",
    chapter: "CHAPTER 2, VERSE 47",
  },
  {
    quote:
      "Better is one's own duty, though imperfectly performed, than the duty of another discharged with perfection.",
    chapter: "CHAPTER 3, VERSE 35",
  },
  {
    quote:
      "The soul is neither born, nor does it ever die; nor having once existed, does it ever cease to be. The soul is eternal, ever-existing, and primeval.",
    chapter: "CHAPTER 2, VERSE 20",
  },
  {
    quote:
      "No one who does good work will ever come to an evil end, either here or in the world to come.",
    chapter: "CHAPTER 6, VERSE 40",
  },
  {
    quote:
      "Whatever action is performed by a great person, common people follow. Whatever standards they set, all the world pursues.",
    chapter: "CHAPTER 3, VERSE 21",
  },
  {
    quote:
      "Calmness, gentleness, silence, self-restraint, and purity of heart: these are the disciplines of the mind.",
    chapter: "CHAPTER 17, VERSE 16",
  },
  {
    quote:
      "One who has conquered the mind is calm in heat and cold, in pleasure and pain, in honor and dishonor.",
    chapter: "CHAPTER 6, VERSE 7",
  },
  {
    quote:
      "There is nothing in this world so purifying as divine knowledge. One who attains purity through yoga finds this within oneself in due course.",
    chapter: "CHAPTER 4, VERSE 38",
  },
  {
    quote:
      "Delusion arises from anger. From delusion comes confusion of memory. From confusion of memory comes loss of intellect, and from loss of intellect a person is ruined.",
    chapter: "CHAPTER 2, VERSE 63",
  },
  {
    quote:
      "Reshape yourself through the power of your will; never let yourself be degraded by self-will.",
    chapter: "CHAPTER 6, VERSE 5",
  },
];

export function GitaQuoteCard() {
  const [index, setIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const cycleQuote = () => {
    if (isFading) return;
    setIsFading(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % BHAGAVAD_GITA_QUOTES.length);
      setIsFading(false);
    }, 180);
  };

  const current = BHAGAVAD_GITA_QUOTES[index];

  return (
    <div
      onClick={cycleQuote}
      title="Click for another verse"
      className="group max-w-[500px] w-full mx-auto px-6 py-5 rounded-[8px] border border-black/10 dark:border-white/10 bg-zinc-50/60 dark:bg-zinc-900/40 hover:border-black/20 dark:hover:border-white/20 transition-all duration-300 cursor-pointer select-none text-center"
    >
      <p
        className={`text-[13.5px] sm:text-[14px] font-medium leading-relaxed text-zinc-600 dark:text-zinc-300 italic transition-opacity duration-200 ${
          isFading ? "opacity-0" : "opacity-100"
        }`}
      >
        &ldquo;{current.quote}&rdquo;
      </p>

      <div
        className={`mt-3 flex items-center justify-center gap-2.5 text-[10px] font-semibold tracking-[0.2em] text-zinc-400 dark:text-zinc-500 uppercase transition-opacity duration-200 ${
          isFading ? "opacity-0" : "opacity-100"
        }`}
      >
        <span className="w-3.5 h-[1px] bg-zinc-300 dark:bg-zinc-700" />
        <span>BHAGAVAD GITA, {current.chapter}</span>
        <span className="w-3.5 h-[1px] bg-zinc-300 dark:bg-zinc-700" />
      </div>
    </div>
  );
}
