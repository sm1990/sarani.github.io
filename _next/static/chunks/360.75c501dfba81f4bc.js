(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[360],{35360:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return h}});var a=r(85893),t=r(67294),i=r(31555),l=r(21608),s=r(85509),c=r(73192),o=r(71058),u=r(25640),d=r(5466),m=r.n(d);function g(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,a=new Array(e);r<e;r++)a[r]=n[r];return a}function b(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var r=null==n?null:"undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=r){var a,t,i=[],l=!0,s=!1;try{for(r=r.call(n);!(l=(a=r.next()).done)&&(i.push(a.value),!e||i.length!==e);l=!0);}catch(c){s=!0,t=c}finally{try{l||null==r.return||r.return()}finally{if(s)throw t}}return i}}(n,e)||function(n,e){if(!n)return;if("string"===typeof n)return g(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return g(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(){var n=b(t.useState("consuming-services"),2),e=n[0],d=n[1],g=r.g.location.hash;t.useEffect((function(){""!==g&&(g=g.replace("#",""),d(g))}),[g]);return(0,a.jsxs)(i.Z,{sm:12,children:[(0,a.jsx)(l.Z,{children:(0,a.jsx)(i.Z,{sm:12,children:(0,a.jsx)("h2",{id:"ballerina-in-action",children:"Ballerina in action"})})}),(0,a.jsx)(l.Z,{children:(0,a.jsx)(i.Z,{sm:12,children:(0,a.jsxs)(s.Z,{id:"controlled-tab-example",activeKey:e,onSelect:function(n){return d(n)},className:m().balActionTabs,children:[(0,a.jsx)(c.Z,{eventKey:"consuming-services",title:"Consuming services",children:(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(i.Z,{lg:7,md:12,sm:12,className:m().col1,id:"column1",children:(0,a.jsx)("div",{className:m().focusPane,children:(0,a.jsx)("div",{className:"highlight",children:(0,a.jsx)("pre",{className:"language-ballerina basic ballerina",children:(0,a.jsx)("code",{className:"language-ballerina ballerina",children:'import ballerina/http;\nimport ballerinax/googleapis.sheets;\n  \nconfigurable string githubPAT = ?;\nconfigurable string repository = "ballerina-platform/ballerina-lang";\nconfigurable string sheetsAccessToken = ?;\nconfigurable string spreadSheetId = ?;\nconfigurable string sheetName = "Sheet1";\n\ntype PR record {\n    string url;\n    string title;\n    string state;\n    string created_at;\n    string updated_at;\n};\n\npublic function main() returns error? {\n    http:Client github = check new ("https://api.github.com/repos");\n    map&lt;string&gt; headers = {\n        "Accept": "application/vnd.github.v3+json",\n        "Authorization": "token " + githubPAT\n    };\n    PR[] prs = check github->get(string `/${repository}/pulls`, headers);\n\n    sheets:Client gsheets = check new ({auth: {token: sheetsAccessToken}});\n    check gsheets->appendRowToSheet(spreadSheetId, sheetName,\n            ["Issue", "Title", "State", "Created At", "Updated At"]);\n\n    foreach var {url, title, state, created_at, updated_at} in prs {\n        check gsheets->appendRowToSheet(spreadSheetId, sheetName,\n                [url, title, state, created_at, updated_at]);\n    }\n}'})})})})}),(0,a.jsx)(i.Z,{lg:5,md:12,sm:12,className:m().col2,id:"column2",children:(0,a.jsx)("div",{className:m().focusPane,children:(0,a.jsx)(o.Z,{src:"".concat(u.O,"images/consuming-services-diagram.svg"),width:433,height:655,alt:"consuming-services-diagram"})})})]})}),(0,a.jsx)(c.Z,{eventKey:"working-with-data",title:"Working with data",children:(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(i.Z,{lg:7,md:12,sm:12,className:m().col1,children:(0,a.jsx)("div",{className:m().focusPane,children:(0,a.jsx)("div",{className:"highlight",children:(0,a.jsx)("pre",{className:"language-ballerina basic ballerina",children:(0,a.jsx)("code",{className:"language-ballerina ballerina",children:'import ballerina/http;\nimport ballerina/io;\n\ntype Country record {\n    string country;\n    int population;\n    string continent;\n    int cases;\n    int deaths;\n};\n\n// Prints the top 10 countries having the highest case-fatality ratio.\npublic function main() returns error? {\n    http:Client diseaseEp = check new ("https://disease.sh/v3");\n    Country[] countries = check diseaseEp->get("/covid-19/countries");\n\n    json summary =\n        from var {country, continent, population, cases, deaths} in countries\n            where population >= 100000 && deaths >= 100\n            let decimal caseFatalityRatio = &lt;decimal&gt;deaths / &lt;decimal&gt;cases * 100\n            order by caseFatalityRatio descending\n            limit 10\n            select {country, continent, population, caseFatalityRatio};\n    io:println(summary);\n}'})})})})}),(0,a.jsx)(i.Z,{lg:5,md:12,sm:12,className:m().col2,children:(0,a.jsxs)("div",{className:m().focusPane,children:[(0,a.jsx)(o.Z,{src:"".concat(u.O,"/images/working-with-data-diagram.svg"),width:433,height:456,alt:"working-with-data-diagram"}),(0,a.jsx)("a",{target:"_blank",href:"https://play.ballerina.io/?gist=30a51792b6b4d46c2cbdfdd424fb3b45&file=play.bal",rel:"noreferrer",children:(0,a.jsx)("button",{className:m().playgroundButton,id:"simple11",children:" Try in Playground"})})]})})]})}),(0,a.jsx)(c.Z,{eventKey:"restful-api",title:"RESTful API",children:(0,a.jsx)(l.Z,{children:(0,a.jsx)(i.Z,{sm:12,children:(0,a.jsx)("div",{className:m().focusPane,children:(0,a.jsx)("div",{className:"highlight",children:(0,a.jsx)("pre",{className:"language-ballerina basic ballerina",children:(0,a.jsx)("code",{className:"language-ballerina ballerina",children:'import ballerina/http;\n\nconfigurable int port = 8080;\n\ntype Album readonly & record {|\n    string id;\n    string title;\n    string artist;\n    decimal price;\n|};\n\ntable&lt;Album&gt; key(id) albums = table [\n        {id: "1", title: "Blue Train", artist: "John Coltrane", price: 56.99},\n        {id: "2", title: "Jeru", artist: "Gerry Mulligan", price: 17.99},\n        {id: "3", title: "Sarah Vaughan and Clifford Brown", artist: "Sarah Vaughan", price: 39.99}\n    ];\n\nservice / on new http:Listener(port) {\n    resource function get albums() returns Album[] {\n        return albums.toArray();\n    }\n\n    resource function get albums/[string id]() returns Album|http:NotFound {\n        Album? album = albums[id];\n        if album is () {\n            return &lt;http:NotFound&gt;{};\n        } else {\n            return album;\n        }\n    }\n\n    resource function post albums(@http:Payload Album album) returns Album {\n        albums.add(album);\n        return album;\n    }\n}'})})})})})})}),(0,a.jsx)(c.Z,{eventKey:"grpc-api",title:"gRPC API",children:(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(i.Z,{lg:7,md:12,sm:7,className:m().col1,children:(0,a.jsx)("div",{className:m().focusPane,children:(0,a.jsx)("div",{className:"highlight",children:(0,a.jsx)("pre",{className:"language-ballerina basic ballerina",children:(0,a.jsx)("code",{className:"language-ballerina ballerina",children:'import ballerina/grpc;\n\nconfigurable int port = 9090;\n\nAlbum[] albums = [\n    {id: "1", title: "Blue Train", artist: "John Coltrane", price: 56.99},\n    {id: "2", title: "Jeru", artist: "Gerry Mulligan", price: 17.99},\n    {id: "3", title: "Sarah Vaughan and Clifford Brown", artist: "Sarah Vaughan", price: 39.99}\n];\n\n@grpc:ServiceDescriptor {\n    descriptor: ROOT_DESCRIPTOR_RECORD_STORE,\n    descMap: getDescriptorMapRecordStore()\n}\nservice "Albums" on new grpc:Listener(port) {\n    remote function getAlbum(string id) returns Album|error {\n        Album[] filteredAlbums = albums.filter(album =&gt; album.id == id);\n        if filteredAlbums.length() &gt; 0 {\n            return filteredAlbums.pop();\n        }\n\n        return error grpc:NotFoundError(string `Cannot find the album for ID ${id}`);\n    }\n\n    remote function addAlbum(Album album) returns Album|error {\n        albums.push(album);\n        return album;\n    }\n\n    remote function listAlbums() returns stream&lt;Album, error?&gt;|error {\n        return albums.toStream();\n    }\n}'})})})})}),(0,a.jsx)(i.Z,{lg:5,md:12,sm:12,id:"grpc-api-proto",className:m().col2,children:(0,a.jsx)("div",{className:m().focusPane,children:(0,a.jsx)("div",{className:"highlight",children:(0,a.jsx)("pre",{className:"language-ballerina basic ballerina",children:(0,a.jsx)("code",{className:"language-ballerina ballerina",children:'syntax = "proto3";\n\nimport "google/protobuf/wrappers.proto";\nimport "google/protobuf/empty.proto";\n\nservice Albums {\n    rpc getAlbum(google.protobuf.StringValue)\n            returns (Album);\n    rpc addAlbum(Album) returns (Album);\n    rpc listAlbums(google.protobuf.Empty)\n            returns (stream Album);\n}\n\nmessage Album {\n    string id = 1;\n    string title = 2;\n    string artist = 3;\n    float price = 4;\n};'})})})})})]})}),(0,a.jsx)(c.Z,{eventKey:"graphql-api",title:"GraphQL API",children:(0,a.jsx)(l.Z,{children:(0,a.jsx)(i.Z,{sm:12,children:(0,a.jsx)("div",{className:m().focusPane,children:(0,a.jsx)("div",{className:"highlight",children:(0,a.jsx)("pre",{className:"language-ballerina basic ballerina",children:(0,a.jsx)("code",{className:"language-ballerina ballerina",children:"import ballerina/graphql;\nimport ballerina/http;\nimport ballerinax/mysql;\nimport ballerinax/mysql.driver as _;\n\nconfigurable string user = ?;\nconfigurable string password = ?;\nconfigurable string host = ?;\nconfigurable int port = ?;\nconfigurable string database = ?;\nconfigurable string apiEndpoint = ?;\n\npublic type Album record {\n    string id;\n    string title;\n    string artist;\n    decimal price;\n    Currency currency = USD;\n};\n\npublic enum Currency {\n    USD,\n    LKR,\n    EUR,\n    GBP\n}\n\nservice / on new graphql:Listener(9000) {\n    private final mysql:Client db;\n    private final http:Client forex;\n    private final Currency baseCurrency = USD;\n\n    function init() returns error? {\n        self.db = check new (host, user, password, database, port);\n        self.forex = check new (apiEndpoint);\n    }\n\n    resource function get album(string id, Currency currency = USD) returns Album|error {\n        Album album = check self.db->queryRow(`SELECT * FROM Albums WHERE id=${id}`);\n        if currency != self.baseCurrency {\n            string query = string `from=${self.baseCurrency}&to=${currency}`;\n            record {decimal rate;} exchange = check self.forex->get(string `/curerncyConversion?${query}`);\n            album.price = album.price * exchange.rate;\n            album.currency = currency;\n        }\n        return album;\n    }\n}"})})})})})})}),(0,a.jsx)(c.Z,{eventKey:"kafka-consumer",title:"Kafka consumer/producer",children:(0,a.jsx)(l.Z,{children:(0,a.jsx)(i.Z,{sm:12,children:(0,a.jsx)("div",{className:m().focusPane,children:(0,a.jsx)("div",{className:"highlight",children:(0,a.jsx)("pre",{className:"language-ballerina basic ballerina",children:(0,a.jsx)("code",{className:"language-ballerina ballerina",children:'import ballerina/lang.value;\nimport ballerinax/kafka;\n\nconfigurable string groupId = "order-consumers";\nconfigurable string orders = "orders";\nconfigurable string paymentSuccessOrders = "payment-success-orders";\nconfigurable decimal pollingInterval = 1;\nconfigurable string kafkaEndpoint = kafka:DEFAULT_URL;\n\ntype Order readonly & record {|\n    int id;\n    string desc;\n    PaymentStatus paymentStatus;\n|};\n\nenum PaymentStatus {\n    SUCCESS,\n    FAIL\n}\n\nfinal kafka:ConsumerConfiguration consumerConfigs = {\n    groupId: groupId,\n    topics: [orders],\n    offsetReset: kafka:OFFSET_RESET_EARLIEST,\n    pollingInterval: pollingInterval\n};\n\nservice on new kafka:Listener(kafkaEndpoint, consumerConfigs) {\n    private final kafka:Producer orderProducer;\n\n    function init() returns error? {\n        self.orderProducer = check new (kafkaEndpoint);\n    }\n\n    remote function onConsumerRecord(kafka:ConsumerRecord[] records) returns error? {\n        check from kafka:ConsumerRecord {value} in records\n            let string orderString = check string:fromBytes(value)\n            let Order \'order = check value:fromJsonStringWithType(orderString)\n            where \'order.paymentStatus == SUCCESS\n            do {\n                check self.orderProducer->send({\n                    topic: paymentSuccessOrders,\n                    value: \'order.toString().toBytes()\n                });\n            };\n    }\n}'})})})})})})}),(0,a.jsx)(c.Z,{eventKey:"working-with-databases",title:"Working with databases",children:(0,a.jsx)(l.Z,{children:(0,a.jsx)(i.Z,{sm:12,children:(0,a.jsx)("div",{className:m().focusPane,children:(0,a.jsx)("div",{className:"highlight",children:(0,a.jsx)("pre",{className:"language-ballerina basic ballerina",children:(0,a.jsx)("code",{className:"language-ballerina ballerina",children:"import ballerina/http;\nimport ballerina/sql;\nimport ballerinax/mysql;\nimport ballerinax/mysql.driver as _;\n\nconfigurable string host = ?;\nconfigurable int port = ?;\nconfigurable string user = ?;\nconfigurable string password = ?;\nconfigurable string database = ?;\n\ntype Album record {|\n    string id;\n    string title;\n    string artist;\n    decimal price;\n|};\n\nservice / on new http:Listener(8080) {\n    private final mysql:Client db;\n\n    function init() returns error? {\n        self.db = check new (host, user, password, database, port);\n    }\n\n    resource function get albums() returns Album[]|error? {\n        stream&lt;Album, sql:Error?&gt; albumStream = self.db->query(`SELECT * FROM Albums`);\n        Album[]? albums = check from Album album in albumStream select album;\n        check albumStream.close();\n        return albums;\n    }\n\n    resource function get albums/[string id]() returns Album|http:NotFound|error {\n        Album|sql:Error result = self.db->queryRow(`SELECT * FROM Albums WHERE id = ${id}`);\n        if result is sql:NoRowsError {\n            return &lt;http:NotFound&gt;{};\n        } else {\n            return result;\n        }\n    }\n\n    resource function post album(@http:Payload Album album) returns Album|error {\n        _ = check self.db->execute(`\n            INSERT INTO Albums (id, title, artist, price)\n            VALUES (${album.id}, ${album.title}, ${album.artist}, ${album.price});`);\n        return album;\n    }\n}"})})})})})})})]})})})]})}},5466:function(n){n.exports={balActionTabs:"BalAction_balActionTabs__4I7yt",col1:"BalAction_col1__SmWC0",col2:"BalAction_col2__f13ek",focusPane:"BalAction_focusPane__SBxpB","line-numbers":"BalAction_line-numbers__95is7","line-numbers-rows":"BalAction_line-numbers-rows__97MFE",code:"BalAction_code__JbxPc",pre:"BalAction_pre__zqD_d",playgroundButton:"BalAction_playgroundButton__adr32"}}}]);