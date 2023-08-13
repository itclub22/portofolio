import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import nightOwl from 'react-syntax-highlighter/dist/cjs/styles/hljs/night-owl';

interface Props {
    Language: string
}

export default function AboutWe() {
    const codeString = `
    package itclub

    type SayHello struct {
        Name        string
        Hobbies     []string
        Description string
    }

    func main() {
        haii := SayHello{
            Name: "IT Club",
            Hobbies: []string{
                "create some web design",
                "pixel art enthusiast",
                "and sometimes like watching anime :u",
            },
            Description: "Haii, we are it club enjoyy to join ",
        }

        println(haii)
    }

    `;
    return (
        <SyntaxHighlighter language="go" style={nightOwl} customStyle={{
            backgroundColor: "transparent",
            opacity: 1,

        }} >
          {codeString}
        </SyntaxHighlighter>
    );
}