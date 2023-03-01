package main

type Body struct {
	Name string `json:"name"`
	Done bool   `json:"done"`
}

type Todo struct {
	ID string `json:"id"`
	Body
}
