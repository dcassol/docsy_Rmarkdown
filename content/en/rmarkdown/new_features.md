---
title: "New Features"
author: "xx"
date: "2/3/2021"
output: html_document
type: docs
weight: 5
---

New features we have added along with the R markdown support. These new features
do not exist in original doscy theme.

## R code highlighting

R code highlighting is done by [prism.js](https://prismjs.com/index.html). Simply 
add a code chunk in markdown or rmarkdown files with r specified will work:

In R markdown:


````

```r
seq(1, 10)
```

```
##  [1]  1  2  3  4  5  6  7  8  9 10
```
````

will give you 

```r
1 + 1
```

```
## [1] 2
```

In markdown:

    ```r
    1 + 1
    ```

which is the same, but code will not be evaluated in simple markdowns
```r
1 + 1
```
    
## Math equations (Mathjax)  

R markdown math is support in this theme but not in the original docsy theme.

e.g.:

`$$\sum(1 +x)$$`

## Top banner navigation dropdown menu

When your mouse hovers on the top banner navigation items, dropdown menus will show 
up. 

To config your own dropdown is very simple, in `/config.toml` file, go to very bottom.

1. Specify a `[[menu.main]]` entry.
  - `name` is required
  - `weight` decides the order om the main menu
2. Attach a child to the main item by adding another `[[menu.main]]` entry.
  - This time `parent` is required and the value should be the `name` value for 
  which the entry you want to attach to.
  - `weight` decides the order within the dropdown list
  
This website's documentation menu is created by this example:

```tmol
[[menu.main]]
  name = "Documentation"
  weight = 1
  url = "/docs/"
  [[menu.main]]
    name = "overview"
    url = "/docs/overview/"
    parent = "Documentation"
    weight = 1
```

### Dropdown indentation
If you wish to have some indentation in the dropdown menu, in `config.toml`, write 
the `menu` part as following:

```toml
[[menu.main]]
  name = "Documentation"
  weight = 1
  url = "/docs/"
  [[menu.main]]
    name = "First level"
    url = "https://www.docsy.dev/docs/"
    parent = "Documentation"
    weight = 1
  [[menu.main]]
    name = "Second level"
    url = "https://www.docsy.dev/docs/"
    parent = "Documentation"
    weight = 2
    [menu.main.params]
      level = 2
```

In addition to specify the `parent` param, also attach the `level` under `[menu.main.params]`.
The `level` means indentation level. When not specified, it is the default 1. The value 
can be any float value between 0 and infinity. The indentation space is `level * 1rem`. 
So you can do something like `level = 1.5`. However, we encourage you to use integers than 
float numbers. 


##  Show/hide sidebars toggle

This feature is only available in document pages. 2 toggle buttons are on the 
top-right corner of the page. You can switch them off to hide left/right sidebars 
to create more space on small screens. 

## Automatic deployment to Github pages or Netlify

We added automatic deployment with Github Actions and instructions to Netlify, 
read [deploy](/rmarkdown/deploy) for details.

## Hide document before the specified date

Sometimes for class teaching or other requirements, some pages need to be hidden 
before a specific date. We have added this support: 

1. In your markdown/ R markdown header, add `visibleDate` date entry and specify 
a date in **_ISO 8601_** format: `YYYY-MM-DD HH:MM:SS`, for example 

    ```
    ---
    title: "Overview"
    linkTitle: "Overview"
    weight: 1
    visibleDate: "2021-02-01"
    ---
    ```

    The document will **not be visible before February 1st, year 2021**. Hour, minute, second
    are optional. 

    Note: hours are in 24 hour format. Hour, minute, second must be provided all together, 
    providing a single, or two of them will not work.
    
    - `YYYY-MM-DD HH` not work
    - `YYYY-MM-DD HH:SS` not work
    - `YYYY-MM-DD SS` not work
    - `YYYY-MM-DD HH:MM:SS` work!

2. Go to `/config.toml` change `serverTimeLocation` your server time zone location
Change it to the time zone location of where your website rendering server (**where do you run `blogdown::build_site()`**).
If you are running locally, this time location will be the same as your local time, 
if you are using github actions, this time is the github server time location.

    If not provided, UTC time is used.

3. In `/config.toml` specify `visHideMethod`, one of "soft" or "hard"
How to hide the content before the visible date.

    - **soft**: default if not provided, use javascript to remove content.
    
      **The whole content is still sent to readers**, we use client-end javascript to remove the
      content in post-processing. If some browsers block javascript, some content may 
      leak to reader. However, you do not need to rebuild the site after the visible date.
      Content will **automatically become visible** for readers.
      
    - **hard**: Content is removed during markdown/Rmarkdown to HTML generation. 
      
      **Whole content will not be sent to readers**. However, you need to rebuild  + redeploy the site 
      after the visible date. Content will **NOT automatically become visible** for readers.

We recommend to use "soft" for non-top secrets, like normal documents for a tool. 
For site with sensitive content like exam solutions, "hard" may be better. 


## Table of content highlighting and scrolling

Right side table of content (TOC) bar will be automatically highlighted for readers current
visible sections titles. This is a good indicator to show where the users are.

If the TOC is too long, when readers scroll the page, TOC bar will automatically scroll
as well. 


## Links with `target="_blank"`

If you want users to open a new tab when click a Rmarkdown link, add `{t_blank}`
in the end of the link text. 

**normal link:**

```md
[a link to google](https://www.google.com)
```
[a link to google](https://www.google.com)

**link with `target="_blank"`:**

```md
[a link to google{t_blank}](https://www.google.com)
```
[a link to google{t_blank}](https://www.google.com)

