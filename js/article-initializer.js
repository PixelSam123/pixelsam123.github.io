"use strict";
const body = document.body;

fetch("../resources/article-content-list.json")
  .then((response) => response.json())
  .then((fetchedArticleContentList) => {
    document.getElementById("article-title").textContent = fetchedArticleContentList.title;
    document.getElementById("article-title-description").textContent =
      fetchedArticleContentList.title_description;
  });
