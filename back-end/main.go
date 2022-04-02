package main

import (
	// "net/http"
	"github.com/gin-gonic/gin"
	tr "github.com/snakesel/libretranslate"
	"fmt"
	// "encoding/json"
	// "io/ioutil"
	// "errors"
)

type translation struct {
	EnglishText string `json:"englishText"`
}


//Translate function - get basic translation from API
func getBasicTranslation(c *gin.Context) {	
	var newTranslation translation

	if err := c.BindJSON(&newTranslation); err != nil {
		return //if there is an error - this will return the status (error) as response
	}
	fmt.Println("English text is:", newTranslation.EnglishText)
	
	translate := tr.New(tr.Config{
        Url:   "https://translate.argosopentech.com/", //Add error handler for if one of the APIs is down
        Key:   "XXX",
    })

	basicTranslation, err := translate.Translate("I am Dan ", "en", "ja")
    if err == nil {
        fmt.Println(basicTranslation)
        fmt.Println("No error ")

    } else {
        fmt.Println(err.Error(), "Error")
		fmt.Println("Error")
    }

	fmt.Println("Basic translation text is:", basicTranslation)
	// return 
}

//Filter function 
func filterTranslation(text string) {
	//1. If string contains 'Oi', remove it and replace with いつもお世話になっております
	fmt.Println("Basic translation text is:", text)
	//2. If string contains 'Yaaa!' remove it and replace with いつもお世話になっております

	//3. If string contains 'あなた’ (You) remove it and replace with お客様
}
func translate(c *gin.Context) {
	text := "Hello"
	getBasicTranslation(c)
	filterTranslation(text)
  }



func main() { //Our router - send a specific route to a function
	router := gin.Default()
	router.POST("/translate", translate)
	router.Run("localhost:8080")

}