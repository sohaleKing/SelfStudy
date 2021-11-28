export const mappings = {
    hostUrl: "https://api.notion.com",
    urlVersion: "v1",
    versionHeaderValue: "2021-08-16",
    controllers: [
        {
            name: "databases",
            routes: [
                {
                    name: "Query a database",
                    method: "POST",
                    param: "database_id",
                    paramPath: "query",
                },
                {
                    name: "Create a database",
                    method: "POST",
                },
                {
                    name: "Update database",
                    method: "PATCH",
                    param: "database_id",
                },
                {
                    name: "Retrieve a database",
                    method: "GET",
                    param: "database_id",
                },
            ],
        },
        {
            name: "pages",
            routes: [
                {
                    name: "Retrieve a page",
                    method: "GET",
                    param: "page_id",
                },
                {
                    name: "Create a page",
                    method: "POST",
                },
                {
                    name: "Update page",
                    method: "PATCH",
                    param: "page_id",
                },
                {
                    name: "Retrieve a page property item",
                    method: "GET",
                    param: "page_id",
                    paramPath: "properties",
                    subParam: "property_id",
                },
            ],
        },
        {
            name: "blocks",
            routes: [
                {
                    name: "Retrieve a block",
                    method: "GET",
                    param: "block_id",
                },
                {
                    name: "Update a block",
                    method: "PATCH",
                    param: "block_id",
                },
                {
                    name: "Retrieve block children",
                    method: "GET",
                    param: "block_id",
                    paramPath: "children",
                },
                {
                    name: "Append block children",
                    method: "PATCH",
                    param: "block_id",
                    paramPath: "children",
                },
                {
                    name: "Delete a block",
                    method: "DELETE",
                    param: "block_id",
                },
            ],
        },
        {
            name: "users",
            routes: [
                {
                    name: "Retrieve a user",
                    method: "GET",
                    param: "user_id",
                },
                {
                    name: "List all users",
                    method: "GET",
                },
                {
                    name: "Retrieve your token's both user",
                    method: "GET",
                    paramPath: "me",
                },
            ],
        },
        {
            name: "search",
            routes: [
                {
                    name: "Search",
                    method: "POST",
                },
            ],
        },
    ],
}
