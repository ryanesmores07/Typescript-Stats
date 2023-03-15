"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const CsvFileReader_1 = require("./CsvFileReader");
const utils_1 = require("./utils");
class MatchReader extends CsvFileReader_1.CsvFileReader {
    mapRow(row) {
        const newDateFormat = (0, utils_1.dateStringToDate)(row[0]);
        return [
            newDateFormat,
            row[1],
            row[2],
            Number(row[3]),
            Number(row[4]),
            row[5],
            row[6],
        ];
    }
}
exports.MatchReader = MatchReader;
