package users_db

import (
	"database/sql"
	"fmt"
	"log"

	_ "github.com/go-sql-driver/mysql" //_ keeps import in this file
)

var (
	Client   *sql.DB //Pointer to sql.DB
	username = "root"
	password = "V8.cY.dyGVGZKyKnLhZi"
	host     = "127.0.0.1:3306"
	schema   = "users_db_02"
)

func init() {
	// username:password@tcp(host)/user_schema - this is format of dataSourceName
	dataSourceName := fmt.Sprintf("%s:%s@tcp(%s)/%s?charset=utf8", username, password, host, schema)

	var err error
	Client, err = sql.Open("mysql", dataSourceName)
	if err != nil {
		panic(err)
	}

	if err := Client.Ping(); err != nil { //verify connection is made
		panic(err)
	}

	log.Println("database successfully configured")
}