npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
npx sequelize-cli seed:generate --name demo-user
npx sequelize-cli migration:generate --name migration-skeleton


///hasan


// model
npx sequelize-cli model:generate --name User --attributes username:string,password:string,role:string
npx sequelize-cli model:generate --name Tag --attributes name:string
npx sequelize-cli model:generate --name Profile --attributes name:string,UserId:integer
npx sequelize-cli model:generate --name Photo --attributes name:string,UserId:integer,price:integer
npx sequelize-cli model:generate --name PhotoTag --attributes PhotoId:integer,TagId:integer

//seed
npx sequelize-cli seed:generate --name demo-User
npx sequelize-cli seed:generate --name demo-Tag
npx sequelize-cli seed:generate --name demo-Profile
npx sequelize-cli seed:generate --name demo-Photo
npx sequelize-cli seed:generate --name demo-PhotoTag

// skeleton
npx sequelize-cli migration:generate --name add-date-to-Photo





