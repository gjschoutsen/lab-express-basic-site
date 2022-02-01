const { request, response } = require('express');
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (request,response, next) => response.sendFile(__firname = `/views/home-page.html`));
app.get('/about', (request,response, next) => response.sendFile(__firname = `/views/about-page.html`));
app.get('/works', (request,response, next) => response.sendFile(__firname = '/views/works-page.html'));
app.get('/photogallery', (request,response, next) => response.sendFile(__firname = '/views/photo-gallery-page.html'));

app.listen(3001);