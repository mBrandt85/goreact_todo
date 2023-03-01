package main

import (
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	r.Use(func(c *gin.Context) {
		c.Header("Access-Control-Allow-Origin", "*")
		c.Header("Access-Control-Allow-Headers", "*")
		c.Header("Access-Control-Allow-Methods", "*")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	})

	r.GET("/todos", getTodos)
	r.GET("/todos/:id", getTodo)
	r.POST("/todos", createTodo)
	r.PATCH("/todos/:id", updateTodo)
	r.DELETE("/todos/:id", deleteTodo)

	r.Run(":4000")
}
