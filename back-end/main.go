package main

import (
	// "net/http"
	"github.com/gin-gonic/gin"
	gt "github.com/bas24/googletranslatefree"
	"fmt"
	"regexp"
	// "encoding/json"
	// "io/ioutil"
	// "errors"
)

type translation struct {
	EnglishText string `json:"englishText"`
}


//Translate function - get basic translation from API
func getBasicTranslation(c *gin.Context) string {	
	var newTranslation translation

	if err := c.BindJSON(&newTranslation); err != nil  {
		return err.Error() //if there is an error - this will return the status (error) as response
	}
	fmt.Println("English text is:", newTranslation.EnglishText)
	
	basicTranslation, err := gt.Translate(newTranslation.EnglishText, "en", "ja")
    if err == nil {
        fmt.Println("No error")

    } else {
        fmt.Println(err.Error(), "Error")
		fmt.Println("Error")
    }

	fmt.Println("Basic translation text is:", basicTranslation)
	return basicTranslation
}

//Filter function 
func filterTranslation(basicTranslation string) {

	//1. If string contains 'Oi', remove it and replace with いつもお世話になっております
	fmt.Println("FilterTranslation basic translation", basicTranslation)
	oi := "おい"
	res1, err := regexp.MatchString(oi, basicTranslation)
	fmt.Println("Result and Error is:", res1, err)

	//if res1 = true

	//2. If string contains 'Yaaa!' remove it and replace with いつもお世話になっております
	ya := "やあ！"
	res2, err := regexp.MatchString(ya, basicTranslation)
	fmt.Println("Result and Error is:", res2, err)

	//3. If string contains 'あなた’ (You) remove it and replace with お客様
	you := "あなた"
	res3, err := regexp.MatchString(you, basicTranslation)
	fmt.Println("Result and Error is:", res3, err)
}
func translate(c *gin.Context) {
	// var basicTranslation string 
	// text := "Hello"
	basicTranslation := getBasicTranslation(c)
	// getBasicTranslation(c)
	// fmt.Println("Translate basic translation:", basicTranslation)
	filterTranslation(basicTranslation)
  }



func main() { //Our router - send a specific route to a function
	router := gin.Default()
	router.POST("/translate", translate)
	router.Run("localhost:8080")

}