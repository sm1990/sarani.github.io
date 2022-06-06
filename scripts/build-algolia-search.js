const dotenv = require("../.env");
const algoliasearch = require("algoliasearch/lite");
// import env from "../.env";
// import algoliasearch from "algoliasearch";
import 'dotenv/config';

try {
    dotenv.config();

    if (!process.env.NEXT_PUBLIC_ALGOLIA_APP_ID) {
        throw new Error("NEXT_PUBLIC_ALGOLIA_APP_ID is not defined");
    }

    // if (!process.env.ALGOLIA_SEARCH_ADMIN_KEY) {
    //     throw new Error("ALGOLIA_SEARCH_ADMIN_KEY is not defined");
    // }
} catch (error) {
    console.error(error);
    process.exit(1);
}

console.log("It works!")