package users

import (
	"github.com/dan88934/sakuki/back-end/datasource/mysql/users_db"
	"github.com/dan88934/sakuki/back-end/errors"
)

var (
	queryInsertUser = "INSERT INTO users (first_name, last_name, email, password) VALUES (?,?,?,?);"
	queryGetUserByEmail = "SELECT id, first_name, last_name, email, password FROM users WHERE email=?;"
	queryGetUserByID = "SELECT id, first_name, last_name, email FROM users WHERE id=?;"
)

func (user *User) Save() *errors.RestErr {
	stmt, err := users_db.Client.Prepare(queryInsertUser)
	if err != nil {
		return errors.NewInternalServerError("Database Error")
	}
	defer stmt.Close()

	insertResult, saveErr := stmt.Exec(user.FirstName, user.LastName, user.Email, user.Password) 
	//Insert above line into statement (and then query) - fills 4 question marks above
	if saveErr != nil {
		return errors.NewInternalServerError("Database Error ")
	}
	 //Call ID which was auto-generated from result, extract it and store it in user ID
	userID, err := insertResult.LastInsertId()
	if err != nil {
		return errors.NewInternalServerError("Database Error")
	}
	user.ID = userID
	return nil
}

func (user *User) GetByEmail() *errors.RestErr {
	stmt, err := users_db.Client.Prepare(queryGetUserByEmail)
	if err != nil {
		return errors.NewInternalServerError("invalid email")
	}
	defer stmt.Close()

	result := stmt.QueryRow(user.Email)
	if getErr := result.Scan(&user.ID, &user.FirstName, &user.LastName, &user.Email, &user.Password); getErr != nil {
		return errors.NewInternalServerError("Database Error")
	}
	return nil 
}

func (user *User) GetByID() *errors.RestErr {
	stmt, err := users_db.Client.Prepare(queryGetUserByID)
	if err != nil {
		return errors.NewInternalServerError("Database Error")
	}
	defer stmt.Close()

	result := stmt.QueryRow(user.ID)
	if getErr := result.Scan(&user.ID, &user.FirstName, &user.LastName, &user.Email); getErr != nil {
		return errors.NewInternalServerError("Database Error")
	}
	return nil
}