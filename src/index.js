import app from './app'

const main = () => {
    app.listen(process.env.PORT, () => {
        console.log(`Server running on \x1b[33mhttp://${process.env.HOST}:${process.env.PORT}\x1b[0m`);
        console.log(new Date());
    })
}

main()