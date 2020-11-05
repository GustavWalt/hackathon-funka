# UA Support Ticket

This is a package that creates JSON data of the users
information. It includes:

- All web browsers
  - Browser versions
- All OS
  - OS versions
  - OS versions name
- Platform type (desktop / laptop)
- Specified message that the user can input
- Fontsize (includes zooming)
- URL that the user have issues with

## Why use this package?

### Accessibility

The main reason to use this package is to improve accessibility. It is hard for regular users to test their accessibility, this means that they might miss some important pieces. If you want your website to be accessibility friendly, you need a way for users to give you feedback. When a user sends their information, the organization owner can easily replicate the issue that the user is experiencing and fix it.

### Simplicity

This package is extremely simple, there is barely any setup for you to do. The functions return an object that you practically can do anything with. Email it to everyone on your team? Save it in a fix-log? It's up to you!

### Functionality

I love when stuff just works, no complicated stuff. This is exactly what you find here. The functionality of the support ticket is extremely simple. The user can include text in a box (if they want) or they can just send the information with no further explanation.

## How to install

```npm
npm install UA-Support-Ticket
```

## How to use

```js
const supportTicket = require("UA-Support-Ticket");

supportTicket().appendChild("body");
```

You are free to choose what element in your HTML that you want to include the onClick() function to.

## Summary

If you want a simple way to get feedback on your users experience with accessibility issues, this is the package for you!
