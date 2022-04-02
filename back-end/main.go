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

	//1. 


	// englishText := c.Param("englishText") 
	// translate := tr.New(tr.Config{
    //     Url:   "https://libretranslate.com",
    //     Key:   "XXX",
    // })

	// trtext, err := translate.Translate(englishText, "en", "ja")
    // if err == nil {
    //     fmt.Println(trtext)
    // } else {
    //     fmt.Println(err.Error())
    // }

	fmt.Println("test")
	// englishText := c.Param("englishText") 
	var newTranslation translation
	// englishText := ioutil.ReadAll(c.Request.Body)
	// englishText := "replace rude gretings with appropriate words"
	// err := json.Unmarshal(c, newTranslation)
	if err := c.BindJSON(&newTranslation); err != nil {
		return //if there is an error - this will return the status (error) as response
	}
	fmt.Println("English text is:", newTranslation.EnglishText)
	// if err != nil {
  
    //     // if error is not nil
    //     // print error
    //     fmt.Println(err)
    // }
	// text := "Hello"
	// fmt.Println(englishText)
	translate := tr.New(tr.Config{
        Url:   "https://translate.argosopentech.com/", //Add error handler for if one of the APIs is down
        Key:   "XXX",
    })

	trtext, err := translate.Translate("I am Dan ", "en", "ja")
    if err == nil {
        fmt.Println(trtext)
        fmt.Println("No error ")

    } else {
        fmt.Println(err.Error(), "Error")
		fmt.Println("Error")
    }

	fmt.Println("Basic translation text is:", trtext)
}

//Filter function - replace rude gretings with appropriate words and remove 'you'
// func filterTranslation(translation string) {
	//1. If string contains 'Oi', remove it and replace with いつもお世話になっております

	//2. If string contains 'Yaaa!' remove it and replace with いつもお世話になっております

	//3. If string contains 'あなた’ (You) remove it and replace with お客様
// }

func translate(c *gin.Context) {
	getBasicTranslation(c)
// 	filterTranslation(translation)
  }


func main() { //Our router - send a specific route to a function
	router := gin.Default()
	router.POST("/translate", translate)
	router.Run("localhost:8080")

	// englishText := "I lived in Kyoto for 1 year. Kyoto is a beautiful city. "
	// translate := tr.New(tr.Config{
    //     Url:   "https://trans.zillyhuhn.com/",
    //     Key:   "XXX",
    // })

	// trtext, err := translate.Translate(englishText, "en", "ja")
    // if err == nil {
    //     fmt.Println(trtext)
    // } else {
    //     fmt.Println(err.Error())
    // }
}