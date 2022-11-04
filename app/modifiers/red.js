import { modifier } from 'ember-modifier';

export default modifier(
  (element) => {
    element.classList.add('red');
    console.log('construct');

    return () => {
      element.classList.remove('red');
      console.log('destruct');
    };
  },
  { eager: false }
);
