package main

import "imoment-booth/internal/server"

func main() {
	server := server.NewServer()

	err := server.Init()
	if err != nil {
		panic(err)
	}

	if err := server.Run(); err != nil {
		panic(err)
	}
}
