# Docsy + Custom configurations

## Usage

* Click on the **Use this Template** button.
* Choose a Repository Name
* Click on the **Create repository from template** button.

![](https://raw.githubusercontent.com/dcassol/images/main/usetemplte.gif)

### Usage locally

* Go to our repository `https://github.com/<username>/<repository_name>`
* Click on the **Code** button.
* Copy the URL `https://github.com/<username>/<repository_name>.git`
* Open terminal 

```
git clone --recurse-submodules --depth 1 https://github.com/<username>/<repository_name>.git
```

#### Run the website locally

```
hugo server
```

#### Run the website locally with `blogdown`

* Open R

```r
blogdown::serve_site()
```

## Prerequisites and Installation

### Install [Hugo](https://github.com/gohugoio/hugo/releases)

You need a recent extended version (we recommend version 0.79.0 or later) of Hugo 
to do local builds and previews of sites that use Docsy.

```
wget https://github.com/gohugoio/hugo/releases/download/v0.79.0/hugo_extended_0.79.0_Linux-64bit.deb
sudo dpkg -i  hugo_extended_0.79.0_Linux-64bit.deb 
hugo version
```

For `Windows` and `macOS` please see instructions [here](https://www.docsy.dev/docs/getting-started/). 

### Install PostCSS

To build or update your site’s CSS resources, you also need PostCSS to create the final assets. If you need to install it, you must have a recent version of NodeJS installed on your machine so you can use npm, the Node package manager. By default npm installs tools under the directory where you run npm install:

sudo npm install -D autoprefixer
sudo npm install -D postcss-cli
Starting in version 8 of postcss-cli, you must also separately install postcss:

sudo npm install -D postcss

# Documentation

This Docsy Template Project uses the [Docsy](https://github.com/google/docsy) theme, as well as providing a skeleton documentation structure for you to use. The full documentation can be found [here](https://www.docsy.dev/docs/deployment/).

## Create new content

> **_Important:_** All the RMarkdown files should have `.Rmarkdown` extension, e.g. `tutorial.Rmakdown`


<details>
<summary><b>
ToDo
</b></summary

* Add documentation for the custom configuration.

</details>

# Deploy

## Deploy to GitHub Pages

### Create a new branch named `gh-pages`

```
git checkout -b gh-pages
rm -rv !(.git|README.md)
git add . && git commit -m "gh-pages" && git push
git checkout main
git add . && git commit -m "pg_build" && git push
```
* To trigger a build and deployment event, in the `git commit` message, include the word "**pg_build**", e.g. `git commit -m "pg_build"`. This will run the full rendering process (rendering and deploy the website may still take a few minutes).

### Setting 

* Click on **Setting**
* click on **GitHub Pages** 
* Select Branch *gh-pages* and folder */(root)* and click on **Save**
* Click on **Enforce HTTPS** 

### Details

* The first deployment can take some time
* If you have build the site locally and updated the `/public` locally, in the `commit` message, 
include the word "**no_render**". This will skip the site rendering process and
jump to page deployment directly which takes less than 30s to update website.
 
## Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/dcassol/docsy_original)

[![Netlify Status](https://api.netlify.com/api/v1/badges/e31739dd-9d43-4391-8f4a-9884495f8706/deploy-status)](https://app.netlify.com/sites/docsy-spr/deploys)

<details>
<summary><b>
Deploy to Netlify with GitHub
</b></summary

Click on the button above and follow these instructions:

* Go online to [Netlify.com](https://www.netlify.com/).
* Click on the **Sign Up** button.
* It is recommended to sign up using your existing GitHub account, so select **GitHub**, and click to **Authorize Netlify**.
* Click on the **New site from Git** button.
* Click on the **GitHub** button.
* Select the repository you just created it.
* Click on **Show advanced** and then **New Variable**:
  * Specify `HUGO_VERSION` as the **Key** for the new variable, and `0.79.0` for the **Value**.
* Click on **Deploy site**.

</details>

<details>
<summary><b>
Deploy to Netlify button
</b></summary

> **_NOTE:_** At the moment, the button application is not cloning the content of the repository.

Click on the button above and follow these instructions:

* Click **Connect to GitHub**
* Enter **Login** and **Password**
* Choose Repository Name and **Save & Deploy**

</details>