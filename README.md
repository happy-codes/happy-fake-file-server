# Happy Fake File Server

## Why I am unhappy?

When I write a crawler try to download files, I feel unhappy, because I do not have a server or service help me mock the file so that I can test my download logic.

Actually, when I want to code some logic for manipulating async calls (like implementing an async schedule tool), some cases it is better using this kind of service rather than use `setTimeout` to mock async actions.

## How this makes me happy?

This project will create a Web Server, which provides a download API. When you sending requests to this API, it will create a Fake File let you download it.

Of course, you can set how large the file is and the download network speed so that you can control the time this request needs.

```
npm install
npm run dev
open http://localhost:3000/download?size=10&speed=1
```

You will understand how this works.

## Usage

You can deploy this server on your own servers or just start in your local machine. Or, you can use my server directly, but sometime this server may offline.

