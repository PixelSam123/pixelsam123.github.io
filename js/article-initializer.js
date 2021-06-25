"use strict";

fetch("../resources/article-content-list.json")
  .then((response) => response.json())
  .then((fetchedArticleContentList) => {
    const articleHeader = body.querySelector("#article-header");
    articleHeader.querySelector("h1").innerText = fetchedArticleContentList[0].header_title;
    articleHeader.querySelector("p").innerText = fetchedArticleContentList[0].header_description;
    articleHeader.querySelector("img").src = fetchedArticleContentList[0].header_image_url;

    const articleSections = body.getElementsByClassName("article-section");
    const subheaderLinks = body.getElementsByClassName("subheader-link");
    const fetchedArticleSections = fetchedArticleContentList[0].sections;
    duplicateElement(articleSections[0], fetchedArticleSections.length - 1);
    duplicateElement(subheaderLinks[0], fetchedArticleSections.length - 1);

    fetchedArticleSections.forEach((section, sectionIndex) => {
      subheaderLinks[sectionIndex].innerText = section.subheader;
      subheaderLinks[sectionIndex].href = `#subheader-${sectionIndex}`;
      articleSections[sectionIndex].id = `subheader-${sectionIndex}`;
      articleSections[sectionIndex].querySelector("h2").innerText = section.subheader;
      duplicateElement(
        articleSections[sectionIndex].querySelector("p"),
        section.paragraphs.length - 1
      );
      section.paragraphs.forEach((paragraph, paragraphIndex) => {
        articleSections[sectionIndex].getElementsByTagName("p")[paragraphIndex].innerText =
          paragraph;
      });
    });

    let executionIsAllowed = true;
    subheaderLinks[0].classList.add("font-bold");
    document.addEventListener("scroll", function () {
      if (executionIsAllowed) {
        let currentHeaderIndexInView = 0;
        for (let sectionIndex = 0; sectionIndex < articleSections.length; sectionIndex++) {
          subheaderLinks[sectionIndex].classList.remove("font-bold");
          if (Math.ceil(window.scrollY) >= articleSections[sectionIndex].offsetTop) {
            currentHeaderIndexInView = sectionIndex;
          }
        }
        subheaderLinks[currentHeaderIndexInView].classList.add("font-bold");
        executionIsAllowed = false;
      }
    });
    setInterval(() => (executionIsAllowed = true), 10);
  });
