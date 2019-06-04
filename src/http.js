var xhr = new XMLHttpRequest();

var body = JSON.stringify(
    {
        'country': 'ua',
        'period': 'hour',
        'type': 'news',
        'host': '',
        'q': '',
        'loadedArticles': [
            45084046,
            45062860,
            45084297,
            45084046
        ],
        'limit': 50
    }
);

xhr.open('POST', 'https://top.st/api/v1/top', true);
xhr.setRequestHeader('Content-Type', 'application/json');


xhr.send(body);