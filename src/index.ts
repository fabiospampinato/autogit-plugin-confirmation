
/* IMPORT */

import chalk from 'chalk';
import * as input from 'listr-input';

/* CONFIRMATION */

const defaultOptions = {
  message: 'Are you sure you want to proceed: (Y/n)',
  defaultValue: 'Y' as string | boolean
};

function factory ( customOptions?: Partial<typeof defaultOptions> ) {

  const options = Object.assign ( {}, defaultOptions, customOptions );

  return async function confirmation ( config, repoPath, ctx, task ) {

    if ( !options.message ) throw new Error ( 'You need to provide a confirmation message' );

    function check ( value ) {

      if ( !value ) value = options.defaultValue;

      if ( !value || !/^y/i.test ( value ) ) {

        task.title = `confirmation ${chalk.gray ( 'no' )}`;

        throw new Error ();

      } else {

        task.title = `confirmation ${chalk.gray ( 'yes' )}`;

      }

    }

    return input ( options.message, { done: check } );

  };

}

/* EXPORT */

export default factory;
