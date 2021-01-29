# Hugo Docsy + Rmarkdown support

This is the Hugo [Docsy theme](https://github.com/google/docsy) combining {[blogdown](https://github.com/rstudio/blogdown)} support for `Rmarkdown` files.
 
## Key features

1. R code highlighting
2. Math equations (Mathjax)
3. Top banner navigation dropdown menu
4. Show/hide sidebars toggle
5. Automatic deployment to Github pages or Netlify

## Quick start

* Click on the **Use this Template** button.
* Choose a Repository Name
* Click on the **Create repository from template** button.

![](https://raw.githubusercontent.com/dcassol/images/main/usetemplte.gif)

### Usage locally

* Go to your new repository that created from our template `https://github.com/<username>/<repository_name>`
* Click on the **Code** button.
* Copy the URL `https://github.com/<username>/<repository_name>.git`
* Open terminal 

```
git clone --recurse-submodules --depth 1 https://github.com/<username>/<repository_name>.git
cd <repository_name>
```

* Run the website locally

```
hugo server
```

* Run the website locally with `blogdown`

```r
blogdown::serve_site()
```

## Prerequisites and Installation

### Install {[blogdown](https://github.com/rstudio/blogdown)} and [Hugo](https://github.com/gohugoio/hugo/releases)

#### {[blogdown](https://github.com/rstudio/blogdown)}

```r
installed.packages("rstudio/blogdown")
# If anything wrong try develop version
remotes::install_github("rstudio/blogdown")
```
#### Hugo

You need a recent extended version (we recommend version 0.79.0 or later) of Hugo 
to do local builds and previews of sites that use Docsy.

It is recommended to install `Hugo` from R for working with {blogdown}

```r
blogdown::install_hugo(extended = TRUE)
```
or from commandline

```bash
wget https://github.com/gohugoio/hugo/releases/download/v0.79.0/hugo_extended_0.79.0_Linux-64bit.deb
sudo dpkg -i  hugo_extended_0.79.0_Linux-64bit.deb 
hugo version
```

For `Windows` and `macOS` please see instructions [here](https://www.docsy.dev/docs/getting-started/). 

#### Install PostCSS


To build or update your site's CSS resources, you also need `PostCSS` to create the final assets. If you need to install it, you must have a recent version of `NodeJS` installed on your machine so you can use `npm`, the Node package manager. By default `npm` installs tools under the directory where you run `npm` install:

```bash
sudo npm install -D autoprefixer
sudo npm install -D postcss-cli
# Starting in version 8 of postcss-cli, you must also separately install postcss:

sudo npm install -D postcss
```

### Run the website locally 

#### with {blogdown}

* Open R in console or Rstudio

This repo contains a `.Rprofile` file that will automatically serve the site
for you R starting directory is this newly cloned repository. Otherwise, 
change working directory to the repository and run:

```r
blogdown::serve_site()
```

You should see a website is opened in your local browser or Rstudio viewer.

#### Run the website locally on the terminal

```bash
cd YOUR_NEW_REPO_PATH
hugo server
```

## Create your website content

This Docsy Template Project uses the [Docsy](https://github.com/google/docsy) theme, and we have provided a skeleton documentation structure for you to use when you clone the repo. The full documentation can be found [here](https://www.docsy.dev/docs/deployment/).

One example Rmarkdown file, */content/en/docs/test.Rmarkdown* is also included in the skeleton. 

1. To modify website content, after running `blogdown::serve_site()`, change files in `/content/en` directory. 

2. > **_Important:_** To work with the RMarkdown files, change file extension from `.Rmd` to `.Rmarkdown` extension, e.g. `tutorial.Rmakdown`.
The `.Rmd` files may still work but one of the issues includes lack of R code highlighting. 

3. When you save your modified Rmarkdown files, {blogdown} will automatically render the file to `.markdown` extension. This
new `.markdown` will be used by Hugo to generate HTML. 

4. After the `.markdown` generation, changes will be reflected in the local browser in a second. 

## Build the website

If you are ready to publish the website, use
```r
blogdown::build_site()
```
All website content is in the `/public` folder. Only this folder is required to publish your website.

Read [deploy](#deploy) for some convenient ways we provide to publish the website. 

<details>
<summary><b>
ToDo
</b></summary

* Add documentation for the custom configuration.

</details>

## Deploy

### Deploy to GitHub Pages

Key feature: Fully automatic, **no need to build website locally**. Yes, you can skip `blogdown::build_site()` step locally.

#### 1. Add all R and system packages to `/deps.yaml` file that are required to render your `Rmarkdown` files

* Specify any CRAN, Bioconductor or Github packages you have used, in `yaml` array format. Github packages need to be `user_name/repo_name`.
* The site building is happening on Github by an Ubuntu system, so specify any system packages to install that are required by your R packages. Only a single line, use space to separate each system dependencies.

#### 2. change base URL in config

Change your `baseURL` in the `/config.toml`. 

* If this is your first github website, change the baseURL = "/" to your github base `url`, like "`https://USERNAME.github.io/`".
* If not, baseURL = "/" to your repo's url, like "`https://USERNAME.github.io/REPO_NAME/`".
* If you use custom domain, baseURL = "/" to your custom url, like "`https://MY_DOMAIN_NAME.com/`".

#### 2. Create a new branch named `gh-pages`

```
git checkout -b gh-pages
rm -rv !(.git|README.md)
git add . && git commit -m "gh-pages" && git push --set-upstream origin gh-pages
git checkout main
git add . && git commit -m "pg_build" && git push
git submodule update --init --recursive
```
Or go to Github website create a branch by [clicking](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-and-deleting-branches-within-your-repository).

You do *not* need to push any content to this `gh-pages` branch. This branch is automatically managed by Github Actions. 

#### 3. Github Setting 

* Click on **Setting**
* click on **GitHub Pages** 
* Select Branch *gh-pages* and folder */(root)* and click on **Save**
* Click on **Enforce HTTPS** 

#### 4. Trigger page build

* To trigger a build and deployment event, in the `git commit` message, include the word "**pg_build**", 
e.g. `git commit -m "blabla pg_build"`. This will run the full rendering process (rendering and deploy the website may still take a few minutes).
* If you have build the site locally and updated the `/public` locally, in your commit message, include the word "**no_render**" will skip the site rendering + build process. Github Actions will directly use `/public` to host the website.

#### Details

* The first deployment can take some time because Github Actions need to install these packages. 
After first successful deployment with Github Actions, all packages will be cached and 
no need to install again later. So later deployment will be much faster.

 
## Deploy to Netlify

Open your `README` and change the next two Netlify badges:

1. Change `repository=https://github.com/dcassol/docsy_original` to your username and repo name.
2. Change `https://app.netlify.com/sites/docsy-spr/deploys` to your Netlify website URL (You will get this url after clicking the first button to have a successful Netlify deployment).

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

## Common Problems
1. During site building: 
`Error: Error building site: POSTCSS: failed to transform "scss/main.css" (text/css):resource "scss/scss/main.scss_4853eb546e7a6c0898ed71feae7357c0" not found in file cache`.

```bash
cd YOUR_REPO
npm audit fix
```
