FROM golang:1.18-bullseye

ENV GO111MODULE=on

WORKDIR /app

COPY back-end/go.mod ./
COPY back-end/go.sum ./

RUN go mod download

COPY back-end ./
COPY front-end ./front-end

RUN go build -o app

EXPOSE 8080

CMD [ "./app" ]
