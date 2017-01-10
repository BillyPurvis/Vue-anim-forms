# Freshleaf PDS_To_Web_Test
---

Creating a 'pixel perfect', fully responsive page using no libraries, excluding font-awesome CDN. 

We're using jQuery for browser compatibilty, we're also using section, nav, header tags for semantic reasons. 
We're following a slightly verbose naming convention, but for ease of use when multiple developers are working on it, abrrivations are worth the future costs of confusion and project delays. 

We're using partials to keep things seperate and faster to edit without confusion where a selctor is on a 
long stylesheet.

We've used text-transform instead of hardcoding capitals as some screen readers will read out character by character, or at a louder volume - done for accessiblity reasons. 

Mobile first for faster development and less verbose CSS

'header-top-row' is removed for viewports under 1024 otherwise i'd be bunched up and icons too small to click. Contact information is repeated elsewhere, so it's not detrimental to UX to remove this and re-add at 1024px

# Getting Started
---
These instructions will get you up to speed with how to get the project up and running on your machine. 

### Prerequisites
---

* Chrome Browser for ES6
* Webserver if desired, not fully required
* Koala to compile Sass if altered


### Installation

Unzip, open index.html. Alternatively, use WAMP/MAMP, create a virtual host, unzip file and move into desired directory. Reload DNS.

### How it goes

A simple folder structure: 

```
├── CHANGELOG.md
├── README.md
├── assets
│   ├── images
│   ├── sass
│   │   ├── _footer.sass
│   │   ├── _header.sass
│   │   ├── _home.sass
│   │   ├── _ui.sass
│   │   └── _fonts.sass
│   └── scripts
│       └── main.js
├── index.html
├── main.css
├── main.css.map
└── main.sass
```



License
----

MIT
