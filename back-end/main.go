package main

import (
	// "net/http"
	"github.com/gin-gonic/gin"
	tr "github.com/snakesel/libretranslate"
	"fmt"
	// "errors"
)




//Translate function - get basic translation from API
func getBasicTranslation(c *gin.Context) {
	englishText := c.Param("englishText") 
	translate := tr.New(tr.Config{
        Url:   "https://libretranslate.com",
        Key:   "XXX",
    })

	trtext, err := translate.Translate(englishText, "en", "ja")
    if err == nil {
        fmt.Println(trtext)
    } else {
        fmt.Println(err.Error())
    }
	return trtext 
}

//Filter function - replace rude gretings with appropriate words and remove 'you'
func filterTranslation(translation string) {
	//1. If string contains 'Oi', remove it and replace with いつもお世話になっております

	//2. If string contains 'Yaaa!' remove it and replace with いつもお世話になっております

	//3. If string contains 'あなた’ (You) remove it and replace with お客様
}

func translate(c *gin.Context) {
	getBasicTranslation(c *gin.Context)
	filterTranslation(translation)
}


func main() { //Our router - send a specific route to a function
	router := gin.Default()
	router.POST("/translate", translate)
	router.Run("localhost:8080")
}