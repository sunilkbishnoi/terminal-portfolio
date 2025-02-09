## Lighthouse Score

<p align="center">
<img width="710" alt="Sunil Bishnoi Terminal Lighthouse Score" src="public/lighthouse-result.svg">
</p>

@font-face {
  font-family: "bw";
  src: url("https://robindelaporte.fr/codepen/play/BwModelicaSS01-ExtraBold.woff") format("woff");
}

html {
  font-size: 62.5%;
}

.home {
  position: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  top: 0%;
  left: 0%;
  background-color: #e9f5ff;

  canvas {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 4;
    pointer-events: none;
  }

  span {
    position: relative;
    z-index: 6;
    font-family: "bw";
    text-decoration: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    font-size: 3rem;
    color: #fff;
    pointer-events: none;
  }

  a {
    font-family: "bw";
    text-decoration: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    font-size: 3rem;
    color: #fff;
    background-color: #acc7ed;
    border-radius: 10rem;
    padding: 1.5rem 4rem 2rem;

    transform-style: preserve-3d;
    transition: all 0.6s ease;

    span {
      position: relative;
      opacity: 0;
    }

    &:after {
      content: "";
      background: linear-gradient(56deg, #61dafb 0%, #d6cbf6 46%, #f2056f 100%);
      width: 80%;
      height: 20%;
      position: absolute;
      bottom: -4px;
      left: 10%;
      opacity: 0;
      filter: blur(15px);
      border-radius: 10rem;
      transform: translateZ(-1px);
      transition: opacity 0.6s ease;
    }

    &:before {
      content: "";
      background: linear-gradient(56deg, #61dafb 0%, #d6cbf6 46%, #f2056f 100%);
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      border-radius: 10rem;
      transition: opacity 0.4s ease;
    }

    &:hover {
      transition: all 0.6s ease;
      transform: translate(-50%, -50%) scale(1.35);
      transform-origin: center;

      &:after {
        opacity: 1;
        transition: opacity 0.6s ease;
      }

      &:before {
        opacity: 1;
        transition: opacity 0.6s linear;
      }
    }
  }
}

## Running Locally

Clone the project

```bash
git clone https://github.com/
```

Go to the project directory

```bash
cd terminal-portfolio
```

Remove remote origin

```bash
git remote remove origin
```

Install dependencies

```bash
npm install
```

Start the server

```bash
npm run dev
```

## Inspiration and Credits

Here are some inspiration for this kind of terminal website. 

- [@satnaing](https://satnaing.dev)
