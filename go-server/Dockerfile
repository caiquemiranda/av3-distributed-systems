FROM golang:1.22.1

# Remover pacotes de localizações desnecessários
RUN apt-get update && apt-get remove --purge -y locales

WORKDIR /app

COPY . .

RUN go mod tidy
RUN go build -o go-server .

CMD ["./go-server"]
