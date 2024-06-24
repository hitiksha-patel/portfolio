---
# [Built Portfolio With GitHub ](https://github.com/hitiksha-patel/portfolio)
---

# Developer Portfolio

### Are you looking to create a professional portfolio website that stands out? Look no further! With the Developer Portfolio template, you can effortlessly craft a personalized portfolio that showcases your skills and projects. Our website is designed with user-friendliness and easy customization in mind, making it ideal for both developers and freelancers. Start building your unique online presence today!

---

## Table of Contents :scroll:

- [Sections](#sections-bookmark)
- [Installation](#installation-arrow_down)
- [Getting Started](#getting-started-dart)
- [Usage](#usage-joystick)
- [Packages Used](#packages-used-package)

---

# Sections :bookmark:

- HERO SECTION
- ABOUT ME
- EXPERIENCE
- SKILLS
- PROJECTS
- EDUCATION
- CONTACTS

---

# Installation :arrow_down:

### You will need to download Git and Node to run this project

- [Git](https://git-scm.com/downloads)
- [Node](https://nodejs.org/en/download/)

#### Make sure you have the latest version of both Git and Node on your computer.

```
node --version
git --version
```

## <br />

# Getting Started :dart:

### Fork and Clone the repo

To Fork the repo click on the fork button at the top right of the page. Once the repo is forked open your terminal and perform the following commands

```
git clone https://github.com/<YOUR GITHUB USERNAME>/developer-portfolio.git

cd developer-portfolio
```

### Install packages from the root directory

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

# Usage :joystick:

Goto [emailjs.com](https://www.emailjs.com/) and create a new account for the mail sending. In free trial you will get 200 mail per month. After setup `emailjs` account, Please create a new `.env` file from `.env.example` file.

Eg:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID =
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID =
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY =
NEXT_PUBLIC_GTM = # For site analytics
NEXT_PUBLIC_APP_URL = "http://127.0.0.1:3000"
NEXT_PUBLIC_RECAPTCHA_SECRET_KEY = # For captcha verification on contact form
NEXT_PUBLIC_RECAPTCHA_SITE_KEY =
RESUME = "Google drive link"
```

### Then, Customize data in the `utils/data` [folder](https://github.com/hitiksha-patel/portfolio/tree/main/utils/data).

Eg:

```javascript
export const personalData = {
  name: "ABU SAID",
  profile: "/profile.png",
  designation: "Full-Stack Software Developer",
  description: "My name is ABC....",
  email: "example@gmail.com",
  phone: "+00000000000",
  address: "City, Province",
  github: "https://github.com/hitiksha-patel/",
  facebook: "https://www.facebook.com/",
  linkedIn: "https://www.linkedin.com/in/hitiksha-patel/",
  twitter: "https://twitter.com/",
  stackOverflow: "https://stackoverflow.com/users/",
  leetcode: "https://leetcode.com/",
  devUsername: "XYZ123",
  resume: "...",
};
```

---

# Packages Used :package:

| Used Package List  |
| :----------------: |
|        next        |
|  @emailjs/browser  |
|    lottie-react    |
| react-fast-marquee |
|    react-icons     |
|   react-toastify   |
|        sass        |
|    tailwindcss     |

---
