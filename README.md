<!-- PROJECT LOGO -->
<br />
<div align="center">
  <img src="./public/favicon.svg" alt="Logo" width="80" height="80">

  <h3 align="center">Citrine - Blockchain Application</h3>

  <p align="center">
    An Ethereum exchange web application
    <br />
    <a href="https://diopside-blog.vercel.app/">View Demo</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

![Hero Screen Shot][hero-screenshot]

A fully responsive blog app built with Next.js and Typescript, leveraging the GraphQL APIs through the GraphCMS content management system.

Page included in this web application are:

- **Home** - Here you can see featured posts and recent posts
- **Categories** - Here you can see the categories of publications
- **Posts by category** - Here you will find all posts that belong to a category
- **Post** - This is the page where you can see the post and find other ones like it

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [GraphCMS](https://graphcms.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

#### Install the lastest version of `NPM`

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Create a free account in [https://graphcms.com/](https://graphcms.com/)
2. Clone the repo
   ```sh
   git clone https://github.com/eliasjz36/diopside.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your GraphCMS content **endpoint** and your GraphCMS **token** in a `.env` file
   ```js
   NEXT_PUBLIC_GRAPHCMS_ENDPOINT = 'ENTER YOUR ENDPOINT'
   GRAPHCMS_TOKEN = 'ENTER YOUR TOKEN'
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Elias Jimenez - [elias-jimenez](https://www.linkedin.com/in/elias-jimenez/) - bseliasjimenez14@gmail.com

Project Link: [https://github.com/eliasjz36/diopside](https://github.com/eliasjz36/diopside)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [SWR](https://github.com/vercel/swr)
- [React Icons](https://react-icons.github.io/react-icons/search)
- [Next-Themes](https://github.com/pacocoursey/next-theme)
- [Moment](https://momentjs.com/)
- [HTML-React-Parser](https://github.com/remarkablemark/html-react-parser#readme)
- [GraphQL-Request](https://github.com/prisma-labs/graphql-request)
- [GraphQL](https://www.graphql.com/)
  [daisyUI](https://daisyui.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

[hero-screenshot]: ./public/images/hero.svg
