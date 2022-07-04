package main

import (
	// "net/http"
	"fmt"
	"net/http"
	"regexp"
	gt "github.com/bas24/googletranslatefree"
	"github.com/gin-contrib/static"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

type translation struct {
	EnglishText string `json:"englishText"`
}

func getBasicTranslation(c *gin.Context) string {
	//1. Get basic translation from Google API
	var newTranslation translation
	if err := c.BindJSON(&newTranslation); err != nil {
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
	// fmt.Println("removeOi - basic translation text", basicTranslation)
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
	ya_text := "やあ"
	res1, err := regexp.MatchString(ya_text, translation)
	fmt.Println("Result and Error is:", res1, err)
	if res1 { //If 'Ya!' in text
		var ya = regexp.MustCompile(`やあ`)
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
	you_kanji_text := "貴方"
	res1, err := regexp.MatchString(you_text, translation)
	res2, err := regexp.MatchString(you_kanji_text, translation)
	fmt.Println("Result and Error is:", res1, err)
	if res1 { //If 'You' in text
		var you = regexp.MustCompile(`あなた`)
		translation = you.ReplaceAllString(translation, "お客様")
		return translation
	} else if res2 { //If 'You' kanji in text
		var you_kanji = regexp.MustCompile(`貴方`)
		translation = you_kanji.ReplaceAllString(translation, "お客様")
		return translation
	} else {
		fmt.Println("You is not in text")
	}
	return translation
}

func translate(c *gin.Context) {
	basicTranslation := getBasicTranslation(c)
	fmt.Println("translate - Basic translation text", basicTranslation)
	translation := removeOi(basicTranslation)
	fmt.Println("translate - Oi removed ", translation)
	translation = removeYa(translation)
	fmt.Println("translate - Ya Removed", translation)
	translation = removeYou(translation)
	fmt.Println("translate - You removed", translation)
	c.JSON(200, translation)
}

func main() { //Our router - send a specific route to a function
	gin.SetMode(gin.ReleaseMode) //Production mode
	router := gin.Default()

	corsConfig := cors.DefaultConfig()
	// corsConfig.AllowOrigins = []string{"http://localhost:3000"} //Allowing React dev server to send data to API
	// corsConfig.AllowOrigins = []string{"http://localhost:8080"} //Allowing production Go server to send data to the API
	corsConfig.AllowOrigins = []string{"http://178.62.24.63:8080"} //Allowing this production NGINX server to send data to the API
	corsConfig.AllowCredentials = true
	corsConfig.AddAllowMethods("OPTIONS")
	router.Use(cors.New(corsConfig))

	// Development 
	// router.Use(static.Serve("/", static.LocalFile("../front-end/sakuki/dist/", true)))
	// router.LoadHTMLGlob("../front-end/sakuki/dist/index.html")

	// Production (Docker) Go files are moved into the root project directory
	router.Use(static.Serve("/", static.LocalFile("./front-end/sakuki/dist/", true)))
	router.LoadHTMLGlob("./front-end/sakuki/dist/index.html")

	router.GET("/", func(c *gin.Context) {
		// Call the HTML method of the Context to render a template
		c.HTML(
			// Set the HTTP status to 200 (OK)
			http.StatusOK,
			// Use the index.html template (SPA)
			"index.html",
			// Pass the data that the page uses (in this case, 'title')
			gin.H{
				"title": "Home Page",
			},
		)
	})

	router.GET("/app", func(c *gin.Context) {
		// Call the HTML method of the Context to render a template
		c.HTML(
			// Set the HTTP status to 200 (OK)
			http.StatusOK,
			// Use the index.html template (SPA)
			"index.html",
			// Pass the data that the page uses (in this case, 'title')
			gin.H{
				"title": "Sakuki",
			},
		)
	})

	router.GET("/signin", func(c *gin.Context) {
		// Call the HTML method of the Context to render a template
		c.HTML(
			// Set the HTTP status to 200 (OK)
			http.StatusOK,
			// Use the index.html template (SPA)
			"index.html",
			// Pass the data that the page uses (in this case, 'title')
			gin.H{
				"title": "Sign In",
			},
		)
	})

	router.GET("/signup", func(c *gin.Context) {
		// Call the HTML method of the Context to render a template
		c.HTML(
			// Set the HTTP status to 200 (OK)
			http.StatusOK,
			// Use the index.html template (SPA)
			"index.html",
			// Pass the data that the page uses (in this case, 'title')
			gin.H{
				"title": "Sign Up",
			},
		)
	})

	router.POST("/translate", translate)
	// router.Run("localhost:8000") // Development server
	router.Run()
}
