package main

import (
	"fmt"
	"net/http"
)

func handler(w http.ResponseWriter, r *http.Request) {
	// Defina a mensagem que você quer enviar para a página HTML
	message := "Olá, esta é uma mensagem do servidor em Go!"
	// Responda a requisição com a mensagem
	fmt.Fprintf(w, message)
}

func main() {
	// Define o endpoint "/mensagem" para a função handler
	http.HandleFunc("/mensagem", handler)

	// Inicia o servidor na porta 8080
	fmt.Println("Servidor Go rodando na porta 8080...")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		fmt.Println("Erro ao iniciar o servidor:", err)
	}
}
