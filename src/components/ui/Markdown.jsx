import React from "react";
import ReactDom from "react-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const MarkdownComponent = () => {
  const titulo = "Politicas Internacionales: www.google.com";
  return ReactDom.render(
    <ReactMarkdown remarkPlugins={[remarkGfm]}>{titulo}</ReactMarkdown>,
    document.body
  );
};

export default MarkdownComponent;
