# datauri-generator

A command line program for converting from file to `data:` URI.

## Usage

### Print to console

```bash
datauri -f=file.png

# returns something like
# data:image/png?charset=binary;base64,<base64 string>
```

### Write to file
```bash
datauri -f=file.png >> file.png.txt

# makes a file "file.png.txt" containing the data URI
```

## Install

Simply run `npm install -g`. You can now use the `datauri` command globally.

### Dependencies

+ [`yargs`](https://github.com/bcoe/yargs)
+ [`mmmagic`](https://github.com/mscdex/mmmagic)
