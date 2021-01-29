# Docsy + Custom configurations

## Usage

* Click on the **Use this Template** button.
* Choose a Repository Name
* Click on the **Create repository from template** button.

### Usage locally

* Go to our repository https://github.com/<username>/<repository_name>
* Click on the **Code** button.
* Copy the URL https://github.com/<username>/<repository_name>.git
* Open terminal 

```
git clone --recurse-submodules --depth 1 https://github.com/<username>/<repository_name>.git
```

#### Run the website locally

```
hugo server
```

# Documentation

This Docsy Template Project uses the [Docsy](https://github.com/google/docsy) theme, as well as providing a skeleton documentation structure for you to use. The full documentation can be found [here](https://www.docsy.dev/docs/deployment/).

<details>
<summary><b>
ToDo
</b></summary

* Add documentation for the custom configuration.

</details>

# Deploy

## Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/dcassol/docsy_original)

[![Netlify Status](https://api.netlify.com/api/v1/badges/e31739dd-9d43-4391-8f4a-9884495f8706/deploy-status)](https://app.netlify.com/sites/docsy-spr/deploys)

<details>
<summary><b>
Deploy to Netlify with Git
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

Click on the button above and follow these instructions:

* Click **Connect to GitHub**
* Enter **Login** and **Password**
* Choose Repository Name and **Save & Deploy**

</details>