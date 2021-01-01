# CV website for Neema Kisanga

This is a CV website. It is meant to showcase her skills, achievments, experience and who she is as a worker. It contains a home page, about page, former workplaces, testimonials, a page with her CV embedded and available for download and a contact page. It also provides different ways to contact her.

## UXD

### Strategy plane

The reason for this website is to show Neemas skills and experiences to potential employers. The target audience are recruiters and hiring managers. The needs of the persons in those roles would be to see her skills, experiences and achievements. They would also be interested in knowing about Neema as a person, if she works better as an individual or in a team, if she is social and her values (for instance that she finds sustainability very important). Neemas needs are to showcase her skills, what she is capable of, who she is and her experience.

### Scope plane

The features that Neema wanted on her page are:
1. An about section with a short summary about values, interests, top skills and what kind of worker she is.
1. A page with the CV on it.
1. A contact page with a contact form.
1. A testimonials page.
1. A map displaying where she lives.
1. Links to her LinkedIn page, phone and email.
1. A page with info on former and current workplaces.
1. A frontpage with an image.

### Structure plane

I went for a hierachical structure because it takes away complexity. We wanted the visitors to get the impression that she is very organized (that is one of her greatest skills), so we wanted her website to be very easy to navigate. I wanted to add states chenges to give the user feedback that something is going to happen or that something has happened as a result of their actions. I also wanted clear feedback so they know if there is an error or if they succeeded.

### Skeleton plane

I wanted to add a clear and easy navigation and i wanted it to be on top. I also wanted a button to get back to top quick and easy, even though there is not so much info on the pages, so it would not take so much time to scroll. The hamburger icon is a well known symbol for a hidden menu and it´s very convenient to use on mobile if there are more then a few menu items, so i decided to use it on mobile. When it comes to the order of the menu items, it felt natural to have the about page after the home page and to end with the contact page.

### Surface plane

Neema wanted the font Gill Sans because she wanted to give the impression of being professional and friendly. We agreed on using a deep, dark green because it´s very calming. I decided on using red for the hovering effect over the menu items because it gives a good contrast and the colors go well together. It´s also important from a accessibility point of view with high contrast. An example is for people with impaired eyesight. Clear contrast makes it easier for them to read. But also for people with perfect sight, it feels better to read when there is a clear separation between background and foreground.

### Wireframes

[Link](https://xd.adobe.com/view/211322f8-09ce-4302-b059-6e7e3c32ae37-7440/)

## Technologies used

* HTML
   * The structure of the website is created using HTML5.
* CSS
  * The styling is added with CSS3.
* Javascript
  * Javascript is used to create interactivity on the website.
*  [JQuery](https://jquery.com/)
   * Is used to simplify DOM manipulation.
* [SweetAlert2](https://sweetalert2.github.io/).
  * For the popups that comes when succeeding or failing to send a message using the contactform.
* [Font Awsome](https://fontawesome.com/icons?d=gallery)
  * I got the icons from them.
* [Google Fonts](https://fonts.google.com/)
  * The font on the mobile header is called Yellowtail and i got it from Google Fonts.
* [Google Maps API](https://cloud.google.com/maps-platform/)
  * I used this Google service for the map on the contact page.
* [POWR](https://www.powr.io/)
  * I used their embed PDF app to embed the PDF on the CV page.
* [EmailJS](https://www.emailjs.com/)
  * I used their email service for my contact form.
 
## Credits

### Content

The button that takes the user back to top, a member of the tutor team helped me with that one.

My mentor helped me with the popups that shows up when submitting the contact form. He both introduced me to SweetAlert and helped med implement it.

I also recieved a lot of help from a member of the tutor team with making the EmailJS service work. 

### Media

Those images are my own work, but Neema was kind to let me use them for this project.

## Deployment

In the GitHub repo, go to settings, scroll down to GitHub pages, change to master branch and press save. 

When i am looking at the website on desktop it looks as expected. However when i am looking at it on mobile in Chrome and Safari, there is some changes that i didn´t want. I wanted my buttons and input fields to 0 border-radius, but it seems the browsers adds some things by them self. 


## Bugs

When clicking menu items on mobile, a little blue books comes up, that i didn´t add. I haven´t managed to take it away. 

## Testing

### CSS validation with W3C css validation service

#### To use [css validation service](https://jigsaw.w3.org/css-validator/)

There are different options, but the one i used was "by direct input". You just copy your code and past it in.

##### Result

No errors but one warning ("Imported style sheets are not checked in direct input and file upload modes").

### HTML validation with W3C Logo Markup Validation Service

#### To use [W3C Logo Markup Validation Service](https://validator.w3.org/)

I used the "validation by direct input". You just copy your code and paste it in.

#### Homepage

##### Error

No error. 

##### Warning

No warning.

#### About

##### Error

No error.

##### Warning

No warning.

#### Workplaces

##### Error

No error.

##### Warning

6: Article lacks heading. Consider using h2-h6 elements to add identifying headings to all articles.

1: The type attribute is unnecessary for JavaScript resources.

#### Testimonials

##### Error

No error.

##### Warning

4: Article lacks heading. Consider using h2-h6 elements to add identifying headings to all articles.

1: The type attribute is unnecessary for JavaScript resources.

#### CV

##### Error 

1: Stray start tag script. 

##### Warning

1: Section lacks heading. Consider using h2-h6 elements to add identifying headings to all sections.

1: The type attribute is unnecessary for JavaScript resources.

#### Contacts

##### Error

No error.

##### Warning

5: The type attribute is unnecessary for JavaScript resources.

### Javascript validation with JSHint

#### Warning

3: 'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).

2: 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).

1: 'object short notation' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).

1: Do not use 'new' for side effects.

4: missing semicolon. *I fixed those.*

It also gives me that there are 10 unused variables, but that is because i use jQuery in the function.

### Lighthouse

#### Home

##### Mobile

* Performance: 88
* Accessibility: 95
* Best practices: 100
* SEO: 92

##### Desktop

* Performance: 99
* Accessibility: 95
* Best practices: 100
* SEO: 90

#### About

##### Mobile

* Performance: 73
* Accessibility: 91
* Best practices: 100
* SEO: 92

##### Desktop

* Performance: 95
* Accessibility: 91
* Best practices: 100
* SEO: 90

#### Workplaces

##### Mobile

* Performance: 92
* Accessibility: 93
* Best practices: 100
* SEO: 91

##### Desktop

* Performance: 99
* Accessibility: 93
* Best practices: 100
* SEO: 89

#### Testimonials

##### Mobile
* Performance: 95
* Accessibility: 89
* Best practices: 100
* SEO: 91

##### Desktop

* Performance: 99
* Accessibility: 89
* Best practices: 100
* SEO: 89

#### CV

##### Mobile

* Performance: 83
* Accessibility: 81
* Best practices: 86
* SEO: 91

##### Desktop

* Performance: 96
* Accessibility: 81
* Best practices: 93
* SEO: 89

#### Contact

##### Mobile

* Performance: 55
* Accessibility: 98
* Best practices: 93
* SEO: 90

##### Desktop

* Performance: 99
* Accessibility: 98
* Best practices: 100
* SEO: 90


### Manual testing on mobile

*  Go to home page 
    * Click the hamburger icon, then on every menu item
    * Scroll down to the footer and make sure all the icons work and that everything opens in a new window
    
Result: everything works as intended.

* Go to about page
    * Click the hamburger icon, then on every menu item
    * Scroll down to the footer and make sure all the icons work and that everything opens in a new window
    
Result: everything works as intended.
    
* Go to workplaces
    * Click the hamburger icon, then on every menu item
    * Click the button on all the cards, more text should be revealed, the text on the button should change to "Show Less"
    * Press the button again and see the text hide and the text on the button should change back to "Read More"
    * When pressing the buttons, make sure also that only one card opens
    * Scroll down to the footer and make sure all the icons work and that everything opens in a new window
    
Result: everything works as intended.
    
* Go to testimonials
    * Click the hamburger icon, then on every menu item
    * Click the button on all the cards, more text should be revealed, the text on the button should change to "Show Less"
    * Press the button again and see the text hide and the text on the button should change back to "Read More"
    * When pressing the buttons, make sure also that only one card opens
    * Scroll down to the footer and make sure all the icons work and that everything opens in a new window
    
Result: error code 404 and file not found when clicking the menu item "Testimonials". I had forgotten to change the link. I fixed it and now everything works as intended.
    













