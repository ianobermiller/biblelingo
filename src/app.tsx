import { useState } from "preact/hooks";
import "./app.css";
const bibleVerses = [
    {
        verse: "John 3:16",
        text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
    },
    {
        verse: "Romans 3:23",
        text: "for all have sinned and fall short of the glory of God.",
    },
    {
        verse: "Romans 6:23",
        text: "For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord.",
    },
    {
        verse: "Romans 5:8",
        text: "But God demonstrates his own love for us in this: While we were still sinners, Christ died for us.",
    },
    {
        verse: "Romans 10:9",
        text: 'If you declare with your mouth, "Jesus is Lord," and believe in your heart that God raised him from the dead, you will be saved.',
    },
    {
        verse: "Romans 10:13",
        text: 'for, "Everyone who calls on the name of the Lord will be saved."',
    },
    {
        verse: "Ephesians 2:8-9",
        text: "For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God— not by works, so that no one can boast.",
    },
    {
        verse: "John 14:6",
        text: 'Jesus answered, "I am the way and the truth and the life. No one comes to the Father except through me."',
    },
    {
        verse: "Acts 4:12",
        text: "Salvation is found in no one else, for there is no other name under heaven given to mankind by which we must be saved.",
    },
    {
        verse: "1 Timothy 2:5",
        text: "For there is one God and one mediator between God and mankind",
    },
];

export function App() {
    const [count, setCount] = useState(0);
    const currentVerse =
        bibleVerses[Math.floor(Math.random() * bibleVerses.length)]!;
    return (
        <>
            <h1>Biblelingo</h1>
            <div class="card">
                <p>{currentVerse.verse}</p>
                <button onClick={() => setCount((count) => count + 2)}>
                    Change verse
                </button>
                <p>{currentVerse.text}</p>
            </div>
        </>
    );
}
