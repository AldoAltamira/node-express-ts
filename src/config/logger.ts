const { createLogger, format, transports } = require("winston");
const { combine, timestamp, label, prettyPrint } = format;

module.exports =  createLogger({
  format: combine(label({ label: "right meow!" }), timestamp(), prettyPrint()),
  transports: [new transports.Console()],
});
