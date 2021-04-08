---
title: "Add new content"
linkTitle: "New content"
weight: 3
type: docs
---

## Create your website content

This Docsy Template Project uses the [Docsy](https://github.com/google/docsy) theme, and we have provided a skeleton documentation structure for you to use when you clone the repo. The full documentation can be found [here](https://www.docsy.dev/docs/deployment/).

### Work with R markdown

One example Rmarkdown file, **_/content/en/rmarkdown/examples/example_rmd.Rmd_** is also included in the skeleton. 

1. To modify website content, after running `blogdown::serve_site()`, change files in `/content/en` directory. 

2. Change **_/content/en/_index.html_** for the homepage. 
    - Read about the [homepage background image](/rmarkdown/commonproblems/#5-home-page-background-image).
3. Add your `md` or `Rmd` files inside the `/content/en` folder. 

4. When you are writing the Rmarkdown files, a good practice is to only use one 
level 1 heading ("#"). This theme has already created a H1 for you which is the 
main title, so try to aviod the H1 heading in other part of the document. By
default, this template assumes you are not using other H1 headings and the table 
of content (TOC) starts with H2, and other additional H1 heading will be displayed
in main text but will **not show up on the TOC**. If you wish to start with H1 on your TOC, change `[markup.tableOfContents]` in `/config.toml`.


6. When you save your modified Rmarkdown files, {`blogdown`} will automatically 
render the file from `filename.Rmd` to `filename.md` extension. This new `.md` will be used by 
Hugo to generate HTML. Usually you do not manually edit this `.md` file.

7. After the `.md` generation, changes will be reflected in the local browser in a second. 

8. Before building the website, check out docs for [new features](/rmarkdown/new_features/). 

### View `.Rmd` source
By default, the `View source code` button will be display both on the right toc panel
and the main content panel. Usually this button will create links point to the 
raw source code `.md` file stored on Github. However, if you are writing a `.Rmd`
file, this theme will detect if you have a file that has the same name as the 
`.md` file but with `.Rmd` extension stored under the same folder. If so, the 
`View source code` button becomes `View Rmd source` and it will create a link 
point to the `.Rmd` file on Github instead of the `.md` file. 

See the difference of the button under the main title on 
[Basic R Markdown](../examples/example_rmd) page and this page.


## Pages Types

Because most technical documentation sites have different sections for different types of content, the Docsy theme comes with the following templates for top-level site sections that you might need:

* `docs` is for pages in your site's Documentation section.
* `blog` is for pages in your site's Blog.
* `community` is for your site's Community page.

For the new Rmarkdown, it is necessary to specify the content page type:

```
---
title: "New Rmarkdown"
author: "<Author>"
date: "02/07/2021"
output: html_document
type: docs
weight: 5
---
```


### Other Content

* [Content sections and templates](https://www.docsy.dev/docs/adding-content/content/#content-section)

* [Navigation and Search](https://www.docsy.dev/docs/adding-content/navigation/#top-level-menu)

* [Adding a version drop-down](https://www.docsy.dev/docs/adding-content/versioning/)


## Change website tab logo
You could change the website logo following the [docsy documents](https://www.docsy.dev/docs/adding-content/iconsimages/).
Here we are talking about the logo appears on the browser tab, not the one on the top left corner. 

1. Prepare a not too large png image (ideally only a square image, transparent background). 
The size does not need to be too big 500x500 pixel will be good enough, but do not 
be very small, at least 200x200.
2. Go to website like <https://www.favicon-generator.org/>, <https://realfavicongenerator.net/>
or others to generate you favicons. Then download the bundle. 
3. Remove files inside `/static/favicons`, do not remove the folder.
4. Unzip all content into the `/static/favicons`. You should see many images files, 
like android, apple, etc. Then you should see the tab icon updated. 


## Build the website

If you are ready to publish the website, use
```r
blogdown::build_site(build_rmd = "md5sum")
```
All website content is in the `/public` folder. Only this folder is required to publish your website.

Read [deploy](/rmarkdown/deploy) for some convenient ways we provide to publish the website. 

