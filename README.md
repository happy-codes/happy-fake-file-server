# Happy Fake File Server

## Why I am unhappy?

When I write a crawler try to download files, I feel unhappy, because I do not have a server or service help me mock the file so that I can test my download logic.

Actually, when I want to code some logic for manipulating async calls (like implementing an async schedule tool), some cases it is better using this kind of service rather than use `setTimeout` to mock async actions.

## How this makes me happy?

This project will create a Web Server, which provides a download API. When you sending requests to this API, it will create a Fake File let you download it.

Of course, you can set how large the file is and the download network speed so that you can control the time this request will cost.

```
npm install
npm run dev
open http://localhost:6644/download?size=10&speed=1
```

You will understand how this works.

## Usage

You can deploy this service on your servers or start in your local machine.

By Docker: `docker run -p 6644:6644 -d yujiangshui/happy-fake-file-server`.

Or, you can use my service directly, but sometimes this service may offline.

```
http://fake-file-server.harryyu.me/download?size=10&speed=1
or
https://fake-file-server.harryyu.me/download?size=10&speed=1
```

Then, you can set the URL as the target for your download logic and start coding and testing.

![](./example/example.gif)

I use `node stream` to implement this tool, it is pretty easy, simple, and efficient, and you can read [the code](./src/index.ts) if you are interested.

## About Happy Codes

Simple and useful codes can make people feel happy. But now, so many libraries or tools have a lot of codes or documents which make it complex and complicated.

This organization contains libraries which are the more simple way to implement some requirements, with less, easy, and understandable codes, focus on the core requirement.

Founded by [Harry Yu](https://github.com/yujiangshui), welcome to [Happy Codes](https://github.com/happy-codes).