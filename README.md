# 🚀 Exove Frontend Trainee 2023
![GitHub](https://img.shields.io/github/license/Alzuu/exove2023?style=for-the-badge)
![Made](https://img.shields.io/badge/this-Made%20with%20%F0%9F%92%99%20by%20Allan%20Li-yellow?style=for-the-badge)

Hello reader! 👋 If you're wondering what this repo is about, it's the developer test for the Exove Frontend Trainee 2023 program. I chose the following three exercises to implement:
  - Section 1: Loading animation using CSS
  - Section 2: Image carousel using React/Typescript
  - Section 3: Continuation of the image carousel, including
    - Separation of elements into components
    - Dark theme toggling using state

## Installation
Make sure you have [Node.js](https://nodejs.org/en/) and installed, any newer version should work fine.

1. Clone this repository:

```bash
git clone https://github.com/Alzuu/exove2023.git
```

2. Go to repository and install dependencies:

```bash
cd exove2023
npm --prefix ./section2/react-carousel install
npm --prefix ./section3/react-carousel install
```

3. Build React projects (exercise 2 and 3) for production:

```bash
npm --prefix ./section2/react-carousel run build
npm --prefix ./section3/react-carousel run build
```

Everything should now be installed and built properly. Next is to run them!

## Running Each Project
For the first exercise, simply open the index.html file found in its respective folder. For the second and third exercises, the terminal commands are the following:
- Preview production build of exercise 2:
```bash
npm --prefix ./section2/react-carousel run preview
```
- Preview production build of exercise 3:
```bash
npm --prefix ./section3/react-carousel run preview
```
