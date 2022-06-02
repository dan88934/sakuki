package main
 
import (
    "testing"
)
 
// func TestGetBasicTranslation(t *testing.T) {
//     actualString := getBasicTranslation("Hello")
//     expectedString := "geeks"
//     if actualString != expectedString{
//         t.Errorf("Expected String(%s) is not same as"+
//          " actual string (%s)", expectedString,actualString)
//     }
// }
func TestRemoveOi(t *testing.T) {
    actualString := removeOi("おい。1Passwordにお問い合わせいただきありがとうございます")
    expectedString := "こんにちは。1Passwordにお問い合わせいただきありがとうございます"
    if actualString != expectedString{
        t.Errorf("Expected String(%s) is not same as"+
         " actual string (%s)", expectedString,actualString)
    }
}

func TestRemoveYa(t *testing.T) {
    actualString := removeYa("やあ！1Passwordにお問い合わせいただきありがとうございます")
    expectedString := "こんにちは！1Passwordにお問い合わせいただきありがとうございます"
    if actualString != expectedString{
        t.Errorf("Expected String(%s) is not same as"+
         " actual string (%s)", expectedString,actualString)
    }
}

func TestRemoveYou(t *testing.T) {
    actualString := removeYou("私はあなたができるだけ早く立ち上がって再び走るのを手伝うためにここにいます。")
    expectedString := "私はお客様ができるだけ早く立ち上がって再び走るのを手伝うためにここにいます。"
    if actualString != expectedString{
        t.Errorf("Expected String(%s) is not same as"+
         " actual string (%s)", expectedString,actualString)
    }
}