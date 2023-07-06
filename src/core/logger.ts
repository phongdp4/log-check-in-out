import * as winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";

export default winston.createLogger({
  // format log
  format: winston.format.combine(
    winston.format.splat(),
    // time format in log
    winston.format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss:SSS",
    }),
    // log with color ( but cause font error in text editor)
    winston.format.colorize(),
    // log formater
    winston.format.printf((log) => {
      // if error -> show stack else show message
      if (log.stack) return `[${log.timestamp}] [${log.level}] ${log.stack}`;
      return `[${log.timestamp}] [${log.level}] ${log.message}`;
    })
  ),
  transports: [
    // print log to console
    new winston.transports.Console(),
    // write log to daily file
    new DailyRotateFile({
      dirname: "logs",
      filename: "tracking-%DATE%.log",
      datePattern: "YYYY-MM",
      maxFiles: 120, // 1 year
    }),
  ],
});
