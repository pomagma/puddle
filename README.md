# Puddle [![Build Status](https://travis-ci.org/fritzo/puddle.svg?branch=master)](http://travis-ci.org/fritzo/puddle)

Puddle is a reactive editor backed by the
[Pomagma](https://github.com/fritzo/pomagma)
inference engine.

## Installing

    git clone https://github.com/fritzo/puddle
    cd puddle
    npm update
    npm test

## Running a Pomagma+Puddle system locally

1. Install [Pomagma](https://github.com/fritzo/pomagma) and Puddle

2. Start a Pomagma server

    python -m pomagma analyze   # Ctrl-C to stop

3. In another terminal start a Puddle server

    nodejs main.js              # Ctrl-C to stop

4. In a browser, navigate to http://localhost:34934

## License

Copyright 2005-2014 Fritz Obermeyer.<br/>
All code is licensed under the [MIT license](/LICENSE) unless otherwise noted.
