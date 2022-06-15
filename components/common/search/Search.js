// import algoliasearch and InstantSearch
import algoliasearch from "algoliasearch/lite";
import { InstantSearch } from "react-instantsearch-dom";

import SearchBox from "./search-box/SearchBox";
import Hits from "./search-hits/SearchHits";

export default function Search() {

// Initialize the Algolia client
const searchClient = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
    process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY,
)

return (
        <>
            <InstantSearch
                searchClient={searchClient} // this is the Algolia client
                indexName="ballerina" // this is your index name
            >
                <SearchBox />

                <Hits />
            </InstantSearch>
        </>
    )
}

