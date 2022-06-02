package services

import (
	"github.com/dan88934/sakuki/back-end/controller/domain/users"
	"github.com/dan88934/sakuki/back-end/errors"
	"golang.org/x/crypto/bcrypt"
)

func CreateUser(user users.User) (*users.User, *errors.RestErr) {
	if err := user.Validate(); err != nil {
		return nil, err
	}

	//encrypt password before saving into DB
	pwSlice, err := bcrypt.GenerateFromPassword([]byte(user.Password), 14)
	if err != nil {
		return nil, errors.NewBadRequestError(("failed to encrypt the password"))
	}

	user.Password = string(pwSlice[:])

	if err := user.Save(); err != nil {
		return nil, err
	}

	return &user, nil
}

func GetUser(user users.User) (*users.User, *errors.RestErr) {
	result := &users.User{Email: user.Email}

	if err := result.GetByEmail(); err != nil {
		return nil, err
	}

	if err := bcrypt.CompareHashAndPassword([]byte(result.Password), []byte(user.Password)); err != nil {
		return nil, errors.NewBadRequestError("Failed to decrypt the password")
	}

	resultWp := &users.User{ID: result.ID, FirstName: result.FirstName, LastName: result.LastName, Email: result.Email}
	return resultWp, nil
}

func GetUserByID(userID int64) (*users.User, *errors.RestErr) {
	result := &users.User{ID: userID}

	if err := result.GetByID(); err != nil {
		return nil, err
	}
	return result, nil
}
