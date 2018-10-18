# Autogit Plugin - Confirmation

A plugin for asking for confirmation before proceeding.

It's useful when you want to have a final saying before executing important commands.

## Install

```sh
npm install --save autogit-plugin-confirmation
```

## Usage

#### Options

This plugin uses the following options object:

```js
{
  message: 'Are you sure you want to proceed: (Y/n)', // The confirmation message
  defaultValue: 'Y' // Default confirmation value if none is provided
}
```

If the provided confirmation value starts with a `Y` or `y` we well proceed, otherwise an exception will be thrown and the following plugins won't be executed.

#### Configuration

Add this plugin to a command:

```js
const confirmation = require ( 'autogit-plugin-confirmation' );

module.exports = {
  commands: {
    'my-command': [
      confirmation ({
        message: 'Press enter to confirm:'
      })
    ]
  }
}
```

## License

MIT © Fabio Spampinato
