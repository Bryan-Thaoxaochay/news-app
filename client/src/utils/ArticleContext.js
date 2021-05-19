import React from "react";

const ArticleContext = React.createContext({
    author: "",
    title: "",
    publishDate: "",
    imageURL: "",
    desciption: "",
    url: "",
})

export default ArticleContext;