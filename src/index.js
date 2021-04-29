import app from './app'
// import "regenerator-runtime/runtime";

const main = () => {
    app.listen(process.env.PORT, () => {
        console.log(`Server running on \x1b[33mhttp://${process.env.HOST}:${process.env.PORT}\x1b[0m`);
        console.log(new Date());
    })
}

main()