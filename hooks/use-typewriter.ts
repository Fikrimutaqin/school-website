import { useState, useEffect } from "react";

export interface UseTypewriterOptions {
    words: string[] | null;
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseDuration?: number;
    emptyPauseDuration?: number;
}

export function useTypewriter({
    words,
    typingSpeed = 120,
    deletingSpeed = 60,
    pauseDuration = 2200,
    emptyPauseDuration = 400,
}: UseTypewriterOptions) {
    const [wordIndex, setWordIndex] = useState(0);
    const [typedText, setTypedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    const currentWord = words && words[wordIndex] || "";

    useEffect(() => {
        if (!words) return;

        let timer: NodeJS.Timeout;

        const handleTyping = () => {
            const fullText = currentWord;

            if (!isDeleting) {
                // Typing text
                if (typedText === fullText) {
                    // Pause when full word is typed, then trigger delete
                    timer = setTimeout(() => setIsDeleting(true), pauseDuration);
                } else {
                    // Add next character
                    timer = setTimeout(() => {
                        setTypedText(fullText.slice(0, typedText.length + 1));
                    }, typingSpeed);
                }
            } else {
                // Deleting text
                if (typedText === "") {
                    // Pause on empty state, cycle to next word, then switch to typing
                    timer = setTimeout(() => {
                        setIsDeleting(false);
                        setWordIndex(prevIndex => (prevIndex + 1) % words.length);
                    }, emptyPauseDuration);
                } else {
                    // Remove last character
                    timer = setTimeout(() => {
                        setTypedText(fullText.slice(0, typedText.length - 1));
                    }, deletingSpeed);
                }
            }
        };

        handleTyping();
        return () => clearTimeout(timer);
    }, [typedText, isDeleting, currentWord, words?.length, typingSpeed, deletingSpeed, pauseDuration, emptyPauseDuration]);

    return typedText;
}
