import React from "react";
import "./Blockquote.scss";
import { Quote } from "lucide-react";

interface BlockquoteProps {
    children: React.ReactNode;
}

const Blockquote: React.FC<BlockquoteProps> = ({ children }) => {
    return (
        <blockquote className="blockquote">
            <Quote className="svg" />
            <p>{children}</p>
        </blockquote>
    );
};

export default Blockquote;