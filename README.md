# Happy Fake File Server

## Why I am unhappy?

When I write a crawler try to download files, I feel unhappy, because I do not have a server or service help me mock the file so that I can test my download logic.

Also, when I want to develop some logic for async calls (like implementing an async requests control tool), in the most cases, it is better to use this kind of service than mock async actions with `setTimeout`.

## How this makes me happy?

This project will create a Web Server, which provides a download API. When you sending requests to this API, it will create a Fake File let you download it.

Of course, you can set how large the file is and the download network speed so that you can control the time this request will cost.

```
npm install
npm run dev
open http://localhost:3000/download?size=10&speed=1
```

You will understand how this works.

## How this makes you happy?

You can deploy this service on your servers or start it on your local machine.

By Docker: `docker run -p 80:80 -e PORT=80 -d yujiangshui/happy-fake-file-server`.

Then, you can set the URL as the target for your download logic and start coding and testing.

![](./example/example.gif)

I use `node stream` to implement this tool, it is pretty easy, simple, and efficient, and you can read [the code](./src/index.ts) if you are interested.

## About Happy Codes

Simple and useful codes can make people feel happy.

This organization contains libraries which are the more simple way to implement the requirements, with less, easy-to-read, and understandable codes, focus on the core requirement.

Founded by [Harry Yu](https://github.com/yujiangshui), welcome to [Happy Codes](https://github.com/happy-codes).
