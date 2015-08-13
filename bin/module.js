#!/usr/bin/env node

var argv = require("yargs").argv;
var fs = require("fs");
var path = require("path");

var mmm = require("mmmagic");
var Magic = mmm.Magic;

var filePath = path.resolve(process.cwd(), argv["-file"] || argv["f"]);

var magic = new Magic(mmm.MAGIC_MIME);
magic.detectFile(filePath, function(err, result) {
    var mediaType = result.split("; ").join(";");

    fs.readFile(filePath, function(err, data) {
        var str64 = data.toString("base64");

        var uri = "data:" + mediaType + ";base64," + str64;

        console.log(uri);
    });
});
