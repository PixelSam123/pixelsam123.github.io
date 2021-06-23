"use strict";

fetch("../resources/article-content-list.json")
  .then((response) => response.json())
  .then((fetchedArticleContentList) => {
    const articleHeader = document.getElementById("article-header");
    articleHeader.getElementsByTagName("h1")[0].innerText = fetchedArticleContentList.header_title;
    articleHeader.getElementsByTagName("p")[0].innerText =
      fetchedArticleContentList.header_description;
    articleHeader.getElementsByTagName("img")[0].src = fetchedArticleContentList.header_image_url;

    const articleSections = body.getElementsByClassName("article-section");
    const subheaderLinks = body.getElementsByClassName("subheader-link");
    const fetchedArticleSections = fetchedArticleContentList.sections;
    duplicateElement(articleSections[0], fetchedArticleSections.length - 1);
    duplicateElement(subheaderLinks[0], fetchedArticleSections.length - 1);

    for (let sectionIndex = 0; sectionIndex < fetchedArticleSections.length; sectionIndex++) {
      subheaderLinks[sectionIndex].innerText = fetchedArticleSections[sectionIndex].subheader;
      subheaderLinks[sectionIndex].href = `#subheader-${sectionIndex}`;
      articleSections[sectionIndex].id = `subheader-${sectionIndex}`;
      articleSections[sectionIndex].getElementsByTagName("h2")[0].innerText =
        fetchedArticleSections[sectionIndex].subheader;
      duplicateElement(
        articleSections[sectionIndex].getElementsByTagName("p")[0],
        fetchedArticleSections[sectionIndex].paragraphs.length - 1
      );
      for (
        let paragraphIndex = 0;
        paragraphIndex < fetchedArticleSections[sectionIndex].paragraphs.length;
        paragraphIndex++
      ) {
        articleSections[sectionIndex].getElementsByTagName("p")[paragraphIndex].innerText =
          fetchedArticleSections[sectionIndex].paragraphs[paragraphIndex];
      }
    }
  });
