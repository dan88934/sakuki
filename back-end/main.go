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
	// fmt.Println("English text is:", newTranslation.EnglishText)
	
	basicTranslation, err := gt.Translate(newTranslation.EnglishText, "en", "ja")
    if err == nil {
        fmt.Println("No error")

    } else {
        fmt.Println(err.Error(), "Error")
		fmt.Println("Error")
    }
	return basicTranslation
}

func removeOi(basicTranslation string) string {
	//2. If 'Oi' is in the text, replace it with 'Hello'. Oi appears when 'Hey' is typed in English
	fmt.Println("removeOi - basic translation text", basicTranslation)
	oi_text := "おい"
	res1, err := regexp.MatchString(oi_text, basicTranslation)
	fmt.Println("Result and Error is:", res1, err)
	if res1 { //If 'Oi' in text
		var oi = regexp.MustCompile(`おい`)
		basicTranslation = oi.ReplaceAllString(basicTranslation, "こんにちは")
		return basicTranslation
	} else {
		fmt.Println("Oi is not in text")
	}
	return basicTranslation
}

func removeYa(translation string) string {
	//3. If 'Ya!' is in the text, remove 'Ya!' and replace it with 'Hello'. 'Ya!' appears when 'Hi' is typed in English
	ya_text := "やあ！"
	res1, err := regexp.MatchString(ya_text, translation)
	fmt.Println("Result and Error is:", res1, err)
	if res1 { //If 'Ya!' in text
		var ya = regexp.MustCompile(`やあ！`)
		translation = ya.ReplaceAllString(translation, "こんにちは")
		return translation
	} else {
		fmt.Println("Ya is not in text")
	}
	return translation
}

func removeYou(translation string) string {
	//4. If 'You' (あなた) is in the text, remove it from the text and replace it with 'The customer' (お客様). This is the appropriate word to use in Japanese
	you_text := "あなた"
	res1, err := regexp.MatchString(you_text, translation)
	fmt.Println("Result and Error is:", res1, err)
	if res1 { //If 'You' in text
		var you = regexp.MustCompile(`あなた`)
		translation = you.ReplaceAllString(translation, "お客様")
		return translation
	} else {
		fmt.Println("You is not in text")
	}
	return translation
}

func translate(c *gin.Context) {
	// var basicTranslation string 
	// text := "Hello"
	basicTranslation := getBasicTranslation(c)
	fmt.Println("translate - Basic translation text", basicTranslation)
	// getBasicTranslation(c)
	// fmt.Println("Translate basic translation:", basicTranslation)
	// filterTranslation(basicTranslation)
	translation := removeOi(basicTranslation)
	fmt.Println("translate - Oi removed ",translation)
	translation = removeYa(translation)
	fmt.Println("translate - Ya Removed", translation)
	translation = removeYou(translation)
	fmt.Println("transltion - You removed", translation)
  }



func main() { //Our router - send a specific route to a function
	router := gin.Default()
	router.POST("/translate", translate)
	router.Run("localhost:8080")

}