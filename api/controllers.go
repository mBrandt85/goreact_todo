package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)

var todos = []Todo{}

func getTodos(c *gin.Context) {
	c.JSON(http.StatusOK, todos)
}

func getTodo(c *gin.Context) {
	for _, t := range todos {
		if t.ID == c.Param("id") {
			c.JSON(http.StatusOK, t)
			return
		}
	}

	c.JSON(http.StatusNotFound, gin.H{"error": "todo not found"})
}

func createTodo(c *gin.Context) {
	body := &Body{}

	if err := c.BindJSON(body); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "something went wrong",
		})
		return
	}

	t := &Todo{}
	t.ID = uuid.New().String()
	t.Name = body.Name
	t.Done = false
	todos = append(todos, *t)

	c.JSON(http.StatusCreated, *t)
}

func updateTodo(c *gin.Context) {
	body := &Body{}

	if err := c.BindJSON(body); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": "something went wrong",
		})
		return
	}

	for i := range todos {
		if todos[i].ID == c.Param("id") {
			todos[i].Name = body.Name
			todos[i].Done = body.Done

			c.JSON(http.StatusOK, todos[i])
			return
		}
	}

	c.JSON(http.StatusNotFound, gin.H{"error": "todo not found"})
}

func deleteTodo(c *gin.Context) {
	id := c.Param("id")

	for i := range todos {
		if todos[i].ID == id {
			todos = append(todos[:i], todos[i+1:]...)
			c.JSON(http.StatusOK, gin.H{"id": id})
			return
		}
	}

	c.JSON(http.StatusNotFound, gin.H{"error": "todo not found"})
}
