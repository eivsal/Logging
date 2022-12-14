export default function logger(logLevel, message){
    switch (logLevel){
        case "info":
            // this could be sent to
            console.log(message)
            return "logger wrote info to console \n"
        case "error":
            // this could be sent to
            //console.log(message)
            return "logger wrote info to server \n"

    }

}