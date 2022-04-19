package users

import (
	"net/http"

	"github.com/dan88934/sakuki/back-end/controller/domain/users"
	"github.com/dan88934/sakuki/back-end/errors"
	"github.com/dan88934/sakuki/back-end/services"
	"github.com/gin-gonic/gin"
)

func Register(c *gin.Context) {
	var user users.User

	if err := c.ShouldBindJSON(&user); err != nil { //If statement based on if an error has been returned
		err := errors.NewBadRequestError("invalid json body")
		c.JSON(err.Status, err)
		return
	}

	result, saveErr := services.CreateUser(user)
	if saveErr != nil {
		c.JSON(saveErr.Status, saveErr)
		return
	}

	c.JSON(http.StatusOK, result)
}
