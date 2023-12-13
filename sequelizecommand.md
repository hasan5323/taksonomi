npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
npx sequelize-cli seed:generate --name demo-user
npx sequelize-cli migration:generate --name migration-skeleton


///template


// model
npx sequelize-cli model:generate --name Species --attributes name:string,description:string,imageUrl:string;KingdomId:string
npx sequelize-cli model:generate --name Kingdom --attributes name:string


//seed
npx sequelize-cli seed:generate --name demo-Species
npx sequelize-cli seed:generate --name demo-Kingdom
npx sequelize-cli seed:generate --name demo-Profile
npx sequelize-cli seed:generate --name demo-Photo
npx sequelize-cli seed:generate --name demo-PhotoTag

// skeleton
npx sequelize-cli migration:generate --name add-date-to-Photo





