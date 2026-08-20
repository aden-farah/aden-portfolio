# Aden Farah Portfolio

This is my personal portfolio website where I showcase the projects I’m working on, the technologies I’m learning, and some of my experience.

I built the site with HTML, CSS and JavaScript and deployed it using Azure Static Web Apps.

## Live Website

https://www.adenfarah.no

## Tech Used

- HTML
- CSS
- JavaScript
- Git & GitHub
- GitHub Actions
- Azure Static Web Apps
- Formspree
- DNS / Custom Domain

## How It Works

The website is stored in a GitHub repository.

Whenever I push changes to the `main` branch, GitHub Actions automatically deploys the latest version to Azure Static Web Apps.

```text
Local development
      ↓
GitHub repository
      ↓
GitHub Actions
      ↓
Azure Static Web Apps
      ↓
www.adenfarah.no
```

## CI/CD

I use GitHub Actions for the deployment workflow.

Instead of manually uploading new files every time I make a change, I can update the project locally and push it to GitHub. GitHub Actions then deploys the new version to Azure automatically.

## Contact Form

The contact form uses Formspree, an external service that handles form submissions and sends the messages to my email.

This allows the website to have a working contact form without needing a backend server.

## Custom Domain

The website uses my custom domain:

`www.adenfarah.no`

The domain is managed through Domeneshop and connected to Azure using DNS records.

## Project Structure

```text
aden-portfolio/
│
├── .github/
│   └── workflows/
│       └── azure-static-web-apps.yml
│
├── index.html
├── style.css
├── favicon.png
├── photo.jpg
├── cv.pdf
└── README.md
```

## What I Learned

While building this project, I got hands-on experience with:

- Deploying a static website to Azure
- Setting up GitHub Actions for CI/CD
- Connecting and configuring a custom domain
- Working with DNS records
- Using Formspree to handle contact form submissions
- Troubleshooting deployment and domain issues
- Managing an Azure subscription
- Setting up an Azure budget and cost alerts.
