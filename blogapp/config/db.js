if (process.env.NODE_ENV == "production"){
    module.exports = {mongoURI: "mongodb+srv://wferreira:wferreira@blogapp.tufsdpz.mongodb.net/?retryWrites=true&w=majority"}
}else{
    module.exports = {mongoURI: "mongodb://localhost/blogapp" }
}